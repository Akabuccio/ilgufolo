import puppeteer from 'puppeteer';
import sirv from 'sirv';
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

// The routes we want to pre-render
const routes = [
    '/',
    '/appartamenti',
    '/esperienze-ferrara',
    '/contatti',
    '/privacy-policy',
    '/cookie-policy'
];

const distDir = path.resolve('dist');

async function run() {
    console.log('Starting pre-rendering process...');

    // 1. Start a local static server to serve the built 'dist' folder
    // We MUST serve `index.html` for ALL requests that don't match a static file,
    // otherwise Puppeteer going to `/appartamenti` gets a 404 (because that folder doesn't exist yet).
    const serveAssets = sirv(distDir, { dev: true });

    const server = http.createServer((req, res) => {
        serveAssets(req, res, () => {
            // If sirv didn't find the file (e.g. it's a route like /appartamenti),
            // we manually send index.html
            fs.readFile(path.join(distDir, 'index.html')).then(content => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }).catch(err => {
                res.writeHead(500);
                res.end(err.message);
            });
        });
    });

    await new Promise(resolve => server.listen(0, resolve));
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Local server started at ${baseUrl}`);

    // 2. Launch Puppeteer
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Disable CSS/Images/Fonts for faster rendering if we only care about HTML text structure
    // But often it's safer to keep them on to ensure JS layout calculates correctly if needed.
    // We'll keep it simple and let it load.

    for (const route of routes) {
        const url = `${baseUrl}${route}`;
        console.log(`Pre-rendering: ${route}`);

        // Go to the page and wait for the network to be idle
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Explicitly wait for the app to be mounted and have content
        await page.waitForSelector('#app > main', { timeout: 10000 }).catch(() => console.log('Timeout waiting for main'));

        // Additional small delay to ensure any immediate re-renders (like router setting active class) are done
        await new Promise(r => setTimeout(r, 500));

        // Extract the fully rendered HTML
        const html = await page.content();

        // Determine the file path
        // '/' -> 'dist/index.html'
        // '/appartamenti' -> 'dist/appartamenti/index.html'
        let filePath;
        if (route === '/') {
            filePath = path.join(distDir, 'index.html');
        } else {
            const dirPath = path.join(distDir, route);
            await fs.mkdir(dirPath, { recursive: true });
            filePath = path.join(dirPath, 'index.html');
        }

        // Save the HTML
        await fs.writeFile(filePath, html);
        console.log(`Saved: ${filePath}`);
    }

    // 3. Cleanup
    await browser.close();
    server.close();
    console.log('Pre-rendering complete!');
}

run().catch(err => {
    console.error('Error during pre-rendering:', err);
    process.exit(1);
});
