import puppeteer from 'puppeteer';
import path from 'path';

const OUT = '/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized', '--no-sandbox'],
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const captures = [
    { path: '/websites',  file: 'phase10_websites_urlbar.png'  },
    { path: '/ai-agents', file: 'phase10_aiagents_urlbar.png'  },
    { path: '/systems',   file: 'phase10_systems_urlbar.png'   },
  ];

  for (const { path: urlPath, file } of captures) {
    await page.goto(`http://localhost:3002${urlPath}`, { waitUntil: 'networkidle2' });

    // Scroll FunnelDiagnostic into view
    await page.evaluate(() => {
      const el = document.getElementById('funnel-diagnostic');
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
    });

    // Wait for Framer Motion bar animations
    await new Promise(r => setTimeout(r, 2000));

    // Capture only what's inside the viewport (real browser chrome included via OS screenshot alternative)
    await page.screenshot({
      path: `${OUT}/${file}`,
      captureBeyondViewport: false
    });

    console.log(`Captured: ${file}`);
  }

  await browser.close();
})();
