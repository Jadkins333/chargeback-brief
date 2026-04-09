const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2,  // 2x for crisp rendering
  });

  const templatePath = path.resolve(__dirname, 'og-template.html');
  await page.goto(`file://${templatePath}`, {
    waitUntil: 'networkidle0',
    timeout: 15000,
  });

  // Wait a moment for fonts to load
  await new Promise(r => setTimeout(r, 1500));

  const outputPath = path.resolve(__dirname, '..', 'public', 'og.png');

  await page.screenshot({
    path: outputPath,
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      width: 1200,
      height: 630,
    },
  });

  console.log(`OG image saved to: ${outputPath}`);

  await browser.close();
})();
