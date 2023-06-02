const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({path: 'src/py/sizzle/eval_sets/image.png'});

  await browser.close();
})();
