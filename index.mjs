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
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });

        console.log(`Content from ${targetUrl}:`);
        console.log(response.body);
    } catch (error) {
        console.error(`Error scraping ${targetUrl}:`, error.message);
    }
}

scrapeWebsite(url);
