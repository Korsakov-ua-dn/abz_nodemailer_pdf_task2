const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    const html = fs.readFileSync("./pdf.html", "utf8" );

    await page.setContent(html, {
        waitUntil: 'networkidle0'
    });

    await page.pdf({
        path: 'page.pdf',
        format: 'a4',
        scale: 1.15,
        margin:
            {
                top: '1.7cm',
                right : '1.3cm',
                bottom:'1.3cm',
                left : '2cm'
            }

        // printBackground: true,
        // width: '595px',
    });

    await browser.close();
})();