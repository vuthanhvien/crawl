const request = require('request-promise')
const cheerio = require('cheerio')
const URL = 'https://sachvui.com/'


const getPageContent = (uri) => {
    const options = {
        uri,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        transform: (body) => {
            return cheerio.load(body)
        }
    }

    return request(options)
}
 

async function  getContent (){
    var $ = await getPageContent(URL);
    console.log($)
}


getContent();

