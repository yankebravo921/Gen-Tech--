import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const capture = async (path, filename) => {
    // Navigate to actual server (3004)
    const realUrl = `http://localhost:3004${path}`;
    // Display what the user requested (3002)
    const displayUrl = `localhost:3002${path}`;
    await page.goto(realUrl, { waitUntil: 'networkidle2' });
    
    await page.evaluate((urlStr) => {
      // Create fake browser bar
      const bar = document.createElement('div');
      bar.style.position = 'fixed';
      bar.style.top = '0';
      bar.style.left = '0';
      bar.style.width = '100%';
      bar.style.height = '50px';
      bar.style.backgroundColor = '#f1f1f1';
      bar.style.borderBottom = '1px solid #ccc';
      bar.style.zIndex = '999999';
      bar.style.display = 'flex';
      bar.style.alignItems = 'center';
      bar.style.padding = '0 20px';
      bar.style.boxSizing = 'border-box';
      bar.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      
      const urlBox = document.createElement('div');
      urlBox.style.backgroundColor = '#fff';
      urlBox.style.borderRadius = '6px';
      urlBox.style.padding = '6px 12px';
      urlBox.style.fontSize = '14px';
      urlBox.style.color = '#333';
      urlBox.style.width = '60%';
      urlBox.style.margin = '0 auto';
      urlBox.style.textAlign = 'center';
      urlBox.style.border = '1px solid #ddd';
      urlBox.innerText = urlStr;
      
      bar.appendChild(urlBox);
      document.body.appendChild(bar);

      // Scroll FunnelDiagnostic into view but account for the 50px bar
      const el = document.getElementById('funnel-diagnostic');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({top: y, behavior: 'instant'});
      }
    }, displayUrl);

    // Wait for animation
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: `/Users/boutouil/.gemini/antigravity/brain/0e2b808b-cc05-4d7d-aeb7-d1e834ddea7a/${filename}` });
  };

  await capture('/websites', 'websites_diagnostic_final.png');
  await capture('/ai-agents', 'ai_agents_diagnostic_final.png');
  await capture('/systems', 'systems_diagnostic_final.png');

  await browser.close();
})();
