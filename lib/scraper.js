const fetch = require('node-fetch')
const cheerio = require('cheerio')

const url = 'https://www.snapple.com/real-facts'

fetch(url)
.then(res => res.text())
.then(html => {
  const $ = cheerio.load(html)
  const factList = $('#fact-list')

  const rawListText = factList.text().split('\n')

  const listText = rawListText.filter(text => {
    if (text.trim()) return text
  })

  const cleanText = listText.map(fact => fact.trim()) // trim in filter misses some spaces

  console.log(`var data = ${JSON.stringify(cleanText, 0, 2)}`)
})
