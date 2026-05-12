import puppeteer from 'puppeteer';
import { execSync } from 'child_process';

const OUT = '/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a';

const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--window-size=1280,900',
      '--window-position=0,0',
      '--no-sandbox',
      '--disable-infobars'
    ],
    defaultViewport: { width: 1280, height: 800 }
  });

  const page = await browser.newPage();

  const captures = [
    { urlPath: '/websites',  file: 'phase10_websites_urlbar.png'  },
    { urlPath: '/ai-agents', file: 'phase10_aiagents_urlbar.png'  },
    { urlPath: '/systems',   file: 'phase10_systems_urlbar.png'   },
  ];

  for (const { urlPath, file } of captures) {
    await page.goto(`http://localhost:3002${urlPath}`, { waitUntil: 'networkidle2' });

    // Scroll FunnelDiagnostic section into view
    await page.evaluate(() => {
      const el = document.getElementById('funnel-diagnostic');
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
    });

    // Wait for Framer Motion bar animations to complete
    await sleep(2500);

    // Use macOS screencapture to grab the entire screen and crop
    // -R x,y,w,h crops to window region (Chrome window is at 0,0 with 1280x900)
    execSync(`screencapture -x -R 0,0,1280,900 "${OUT}/${file}"`);
    console.log(`Captured OS screenshot: ${file}`);
  }

  await browser.close();
})();
