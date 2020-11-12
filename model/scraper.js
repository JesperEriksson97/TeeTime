const fetch = require('node-fetch')
const cheerio = require('cheerio')
const axios = require('axios')
const scraper = {}

scraper.scrape = (data) => {
    console.log('Hello?')
    axios({
        method: 'post',
        url: data.url,
        headers: {
            'User-Agent': process.env.USER_AGENT
        },
        data: {
            golfID: '97015-038',
            password: data.password,
            remember: false
        }
    })
        .then(response => {
            console.log(response)
            console.log(response.headers);
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports = scraper