import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const playwrightPath = process.env.KFOOD_PLAYWRIGHT_PATH;
if (!playwrightPath) throw new Error('KFOOD_PLAYWRIGHT_PATH is required');
const { chromium } = await import(pathToFileURL(join(playwrightPath, 'index.mjs')).href);

const output = join(process.cwd(), 'play-store', 'assets');
const screenshots = join(output, 'screenshots');
mkdirSync(screenshots, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
});
const context = await browser.newContext({
  viewport: { width: 360, height: 640 },
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
});
await context.addCookies([{ name: 'kfood-locale', value: 'ko', domain: 'localhost', path: '/' }]);
const page = await context.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.locator('nextjs-portal').evaluateAll((nodes) => nodes.forEach((node) => node.remove()));
await page.screenshot({ path: join(screenshots, '01-home-hero-1080x1920.png') });

await page.locator('#popular').evaluate((element) => window.scrollTo(0, element.offsetTop - 72));
await page.waitForTimeout(300);
await page.screenshot({ path: join(screenshots, '02-popular-food-1080x1920.png') });

await page.getByText(/전체 500개 중|500 recipes/).waitFor({ timeout: 15000 });
await page.getByRole('searchbox').fill('매생이순두부탕');
await page.getByText(/전체 500개 중 1개 검색됨|1 of 500 recipes/).waitFor({ timeout: 5000 });
await page.locator('#recipe-search').evaluate((element) => window.scrollTo(0, element.offsetTop - 112));
await page.waitForTimeout(300);
await page.screenshot({ path: join(screenshots, '03-recipe-search-1080x1920.png') });

await page.goto('http://localhost:3000/kimchi', { waitUntil: 'networkidle' });
await page.locator('nextjs-portal').evaluateAll((nodes) => nodes.forEach((node) => node.remove()));
await page.screenshot({ path: join(screenshots, '04-kimchi-guide-1080x1920.png') });

const graphic = await browser.newPage({ viewport: { width: 1024, height: 500 }, deviceScaleFactor: 1 });
await graphic.setContent(`<!doctype html><html><head><style>
  *{box-sizing:border-box} body{margin:0;width:1024px;height:500px;overflow:hidden;background:#f8f3eb;font-family:Arial,'Noto Sans KR',sans-serif;color:#141414}
  .wrap{position:relative;width:100%;height:100%;display:flex;align-items:center;padding:54px 56px;isolation:isolate}
  .wrap:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 86% 10%,#ffb2a7 0,transparent 34%),linear-gradient(130deg,#fffaf3 0 55%,#f00016 55%);z-index:-2}
  .copy{width:55%;}.tag{font-size:20px;font-weight:800;color:#d60016;letter-spacing:3px}.title{font-size:70px;line-height:.92;margin:19px 0 22px;font-weight:950;letter-spacing:-4px}.sub{font-size:24px;line-height:1.4;color:#4b4b4b;font-weight:600}.pill{display:inline-block;margin-top:24px;background:#171717;color:#fff;padding:12px 20px;border-radius:100px;font-size:18px;font-weight:800}
  .photos{position:absolute;right:27px;top:32px;width:440px;height:436px}.photo{position:absolute;width:235px;height:235px;object-fit:cover;border-radius:50%;border:9px solid #fff;box-shadow:0 14px 30px #4b000033}.p1{right:3px;top:0}.p2{left:0;bottom:0}.seal{position:absolute;right:7px;bottom:14px;width:140px;height:140px;border-radius:50%;background:#171717;color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:900;font-size:19px;line-height:1.25;border:7px solid #fff;transform:rotate(6deg)}
</style></head><body><main class="wrap"><section class="copy"><div class="tag">K-FOOD TABLE</div><h1 class="title">Taste Korea.<br>Cook Korea.</h1><div class="sub">500 Korean recipes<br>한국의 맛을 한곳에서</div><div class="pill">한국어 · ENGLISH</div></section><section class="photos"><img class="photo p1" src="http://localhost:3000/images/bibimbap-fresh.jpg"><img class="photo p2" src="http://localhost:3000/images/tteokbokki-selected.png"><div class="seal">EASY<br>RECIPES</div></section></main></body></html>`, { waitUntil: 'networkidle' });
await graphic.screenshot({ path: join(output, 'feature-graphic-1024x500.png') });
await browser.close();
console.log(`Generated Play Store assets in ${output}`);
