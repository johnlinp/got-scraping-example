import { gotScraping } from 'got-scraping';

const url = process.argv[2];

if (!url) {
    console.error('Please provide a URL as a command-line argument.');
    process.exit(1);
}

async function scrapeWebsite(targetUrl) {
    try {
        const response = await gotScraping({
            url: targetUrl,
            throwHttpErrors: true
        });

        console.log(`Content from ${targetUrl}:`);
        console.log(response.body);
    } catch (error) {
        console.error(`Error scraping ${targetUrl}:`, error.message);
    }
}

scrapeWebsite(url);
