import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const capture = async (url, filename) => {
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.evaluate(() => {
      const el = document.getElementById('funnel-diagnostic');
      if (el) el.scrollIntoView();
    });
    // Wait for animation
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: filename });
  };

  await capture('http://localhost:3004/websites', '/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a/websites_diagnostic_fresh.png');
  await capture('http://localhost:3004/ai-agents', '/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a/ai_agents_diagnostic_fresh.png');
  await capture('http://localhost:3004/systems', '/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a/systems_diagnostic_fresh.png');

  await browser.close();
})();
