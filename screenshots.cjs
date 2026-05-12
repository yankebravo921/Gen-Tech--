const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const viewports = [
    { width: 375, height: 667, name: 'mobile' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 1280, height: 800, name: 'laptop' },
    { width: 1920, height: 1080, name: 'desktop' }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: `screenshot-${vp.width}.png` });
    console.log(`Captured ${vp.name} (${vp.width}px)`);
  }

  const urls = ['/', '/book', '/websites', '/ai-agents', '/systems', '/404'];
  let totalErrors = 0;
  for (const url of urls) {
    const p = await browser.newPage();
    let pageErrors = 0;
    p.on('console', msg => {
      if (msg.type() === 'error') {
        pageErrors++;
        console.log(`Console error on ${url}: ${msg.text()}`);
      }
    });
    p.on('pageerror', error => {
      pageErrors++;
      console.log(`Page error on ${url}: ${error.message}`);
    });
    
    await p.goto(`http://localhost:3001${url}`, { waitUntil: 'networkidle0' }).catch(() => {});
    if (pageErrors === 0) {
      console.log(`Zero console errors on ${url}`);
    } else {
      totalErrors += pageErrors;
    }
    await p.close();
  }
  
  console.log(`Total console errors: ${totalErrors}`);

  await browser.close();
})();
