import WORDS from './words.js'
const CONTENT = {
    title: 'Experience',
    quote: `"You can't connect the dots looking forward; you can only connect them looking backward..."`,
    quotesource: "Steve Jobs",
    emImage: require('./images/em.png'),
    emWords: WORDS.em,
    emLink: "https://www.eia.gov/energyexplained/oil-and-petroleum-products/where-our-oil-comes-from.php",
    images: {
        // exxonmobil: {image: require('./images/em.png'), title: '', words:WORDS.exxonmobil, link:'https://www.exxonmobil.com'},
        beaumont: {image: require('./images/beaumont.png'), title:'US Oil Refinery - Beaumont, TX', words: WORDS.beaumont, link:'https://goo.gl/maps/PkgHXbCokCBmUVUi6'},
        midland:{image: require('./images/midland.png'), title: 'US Oil Fields - Midland, TX', words: WORDS.midland, link:'https://goo.gl/maps/wcgVFR3pqAtZnWR69'},
        permian: {image: require('./images/permian.png'), title:'Oil Field Infrastructure - Permian Basin', words: WORDS.permian, link:'https://corporate.exxonmobil.com/news/newsroom/news-releases/2017/0117_exxonmobil-to-acquire-companies-doubling-permian-basin-resource-to-6-billion-barrels'},
        champion: {image: require('./images/champion.jpg'), title:'Drill Ship - Deepwater Champion', words: WORDS.champion, link:'https://www.deepwater.com//documents/RigSpecs/Deepwater%20Champion.pdf'},
        acquarius: {image: require('./images/aquarius.jpg'), title:'Drill Ship - West Aquarius', words: WORDS.acquarius, link:'https://www.seadrill.com/application/files/5915/7288/7940/west-aquarius.pdf'},
        // means: {image: require('./images/means.jpg'), title:'Means', words: WORDS.em, link:'https://www.exxonmobil.com'},
    }
}

export default CONTENT