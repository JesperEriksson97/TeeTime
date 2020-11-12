const fetch = require('node-fetch')
const cheerio = require('cheerio')
const axios = require('axios')
const scraper = {}

scraper.scrape = (data) => {
    console.log('Hello?')
    console.log(process.env.USER_AGENT)
    axios({
        method: 'post',
        url: data.url,
        headers: {
            'Host': 'mingolf.golf.se',
            'Origin': 'https://mingolf.golf.se',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': process.env.USER_AGENT
        },
        data: {
            'golfID': '970513-038',
            'password': data.password,
            'remember': false
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