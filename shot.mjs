// Renders page.html (the Tideholm passport spread) to entry.png with puppeteer.
// Usage: node shot.mjs  (writes ./entry.png, 1024x680)
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire('/home/hatch/workspace/makefun/shot-tools/package.json');
const puppeteer = require('puppeteer');

const root = dirname(fileURLToPath(import.meta.url));
const pagePath = join(root, 'page.html');
const outPath = join(root, 'entry.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-device-scale-factor=1'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 680, deviceScaleFactor: 1 });
  await page.goto('file://' + pagePath, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: outPath, type: 'png' });
  console.log('wrote ' + outPath);
} finally {
  await browser.close();
}
