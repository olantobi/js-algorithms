async function takeScreenshot(url) {
    const browser = await puppeteer.launch({
        headless: true,
        timeout: 90000,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1680, height: 1050 });
    const imageBuffer =  await page.screenshot();
    await browser.close();

    return imageBuffer;
}

async function saveToBucket(imageBuffer, url) {
    const bucketName = process.env.SCREENSHOT_BUCKET_NAME;
    const timestamp = Date.now();
    const filename = `${timestamp}.png`;
    const filepath = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    const bucket = storage.bucket(bucketName);
    const file = bucket.file(`screenshots/${filepath}/${filename}`);
    await file.save(imageBuffer);
    logger.info(`URL: ${url} - screenshot saved`);
}