import WORDS from './words.js'
const CONTENT = {
    title: 'Experience',
    quote: `"You can't connect the dots looking forward; you can only connect them looking backward..."`,
    quotesource: "Steve Jobs",
    emImage: require('./images/em.png'),
    emWords: WORDS.em,
    emLink: "https://www.eia.gov/energyexplained/oil-and-petroleum-products/where-our-oil-comes-from.php",
    images: {
        beaumont: {image: require('./images/beaumont.png'), title:'US Oil Refinery - Beaumont, TX', words: WORDS.beaumont, link:'https://goo.gl/maps/PkgHXbCokCBmUVUi6'},
        midland:{image: require('./images/midland.png'), title: 'US Oil Fields - Midland, TX', words: WORDS.midland, link:'https://goo.gl/maps/wcgVFR3pqAtZnWR69'},
        rigs:{image: require('./images/rigs.png'), title: 'xxx', words: WORDS.rigs, link:'https://www.eia.gov/outlooks/aeo/narrative/production/sub-topic-01.php'},
        frac:{image: require('./images/frac.png'), title: 'xxx', words: WORDS.frac, link:'https://youtu.be/kN2p2J1iTiQ'},
        pond:{image: require('./images/pond.png'), title: 'xxx', words: WORDS.pond, link:'https://youtu.be/kN2p2J1iTiQ'},
        pond2:{image: require('./images/pond2.png'), title: 'xxx', words: WORDS.pond2, link:'https://youtu.be/kN2p2J1iTiQ'},
        powerlines:{image: require('./images/powerlines.png'), title: 'xxx', words: WORDS.powerlines, link:'https://www.eia.gov/outlooks/aeo/narrative/electricity/sub-topic-01.php'},
        permian: {image: require('./images/permian.png'), title:'Oil Field Infrastructure - Permian Basin', words: WORDS.permian, link:'https://corporate.exxonmobil.com/news/newsroom/news-releases/2017/0117_exxonmobil-to-acquire-companies-doubling-permian-basin-resource-to-6-billion-barrels'},
        midland2:{image: require('./images/midland2.png'), title: 'xxx', words: WORDS.midland2, link:'https://goo.gl/maps/wcgVFR3pqAtZnWR69'},
        champion: {image: require('./images/champion.jpg'), title:'Drill Ship - Deepwater Champion', words: WORDS.champion, link:'https://www.deepwater.com//documents/RigSpecs/Deepwater%20Champion.pdf'},
        acquarius: {image: require('./images/aquarius.jpg'), title:'Drill Ship - West Aquarius', words: WORDS.acquarius, link:'https://www.seadrill.com/application/files/5915/7288/7940/west-aquarius.pdf'},
        sakhalin:{image: require('./images/sakhalin.png'), title: 'xxx', words: WORDS.sakhalin, link:'https://corporate.exxonmobil.com/news/newsroom/news-releases/2022/0301_exxonmobil-to-discontinue-operations-at-sakhalin-1_make-no-new-investments-in-russia'}
    }
}

export default CONTENT