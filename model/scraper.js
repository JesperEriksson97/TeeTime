const fetch = require('node-fetch')
const cheerio = require('cheerio')
const scraper = {}

scraper.scrape = (url) => {
    console.log('Hello?')
    fetch(url)
        .then(res => res.text())
        .then(html => function () {
            console.log(html)
            let $ = cheerio.load(html)
            let list = $('ul.dropdown-manu.inner.li')
            console.log(list)
        });
}

module.exports = scraper