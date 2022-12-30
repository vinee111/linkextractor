const axios = require('axios');
const cheerio = require('cheerio');
async function getLinksFromInput(url) {

    try {
          const { data } = await axios.get(url, { 
          headers: { "Accept-Encoding": "gzip,deflate,compress" } 
});
        const $ = cheerio.load(data);
        const anchor = $('a'); 
        const links = [];
        anchor.each((index, item) => {
            links.push({href: $(item).attr('href')});
        });
        console.log(links);
    } catch (e) { console.log(e) }
}

module.exports = getLinksFromInput