import puppeteer from 'puppeteer';
import { execSync, spawnSync } from 'child_process';

const OUT = '/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a';
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--window-size=1280,900',
      '--window-position=20,40',
      '--no-sandbox',
      '--disable-infobars',
    ],
    defaultViewport: { width: 1280, height: 800 }
  });

  const page = await browser.newPage();

  // Give the browser window time to fully appear on screen
  await sleep(1500);

  // Get Chrome's window ID via AppleScript
  const getWinId = () => {
    try {
      const res = execSync(`osascript -e 'tell application "Google Chrome" to id of front window'`).toString().trim();
      return res;
    } catch(_) { return null; }
  };

  const captures = [
    { urlPath: '/websites',  file: 'phase10_websites_urlbar.png'  },
    { urlPath: '/ai-agents', file: 'phase10_aiagents_urlbar.png'  },
    { urlPath: '/systems',   file: 'phase10_systems_urlbar.png'   },
  ];

  for (const { urlPath, file } of captures) {
    await page.goto(`http://localhost:3002${urlPath}`, { waitUntil: 'networkidle2' });

    // Scroll FunnelDiagnostic into view
    await page.evaluate(() => {
      const el = document.getElementById('funnel-diagnostic');
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
    });

    // Wait for animations
    await sleep(2500);

    // Bring Chrome to front, then screencapture the frontmost window
    execSync(`osascript -e 'tell application "Google Chrome" to activate'`);
    await sleep(300);

    // -l with window ID doesn't need rect permission; screencapture -o captures front window
    const winId = execSync(
      `osascript -e 'tell application "Google Chrome" to id of front window'`
    ).toString().trim();

    execSync(`screencapture -o -l ${winId} "${OUT}/${file}"`);
    console.log(`✓ ${file}`);
  }

  await browser.close();
})();
