import TECH from '../Tech/tech.js'

const CONTENT = {
    title:'Code',
    quote:`"Stay primitive. Trust the soup. Swing for the seats. Be ready for resistance."`,
    quotesource: 'Steven Pressfield',
    techdict: TECH,
    projects:{
        stockmarket:{
            title:'The Stock Market',
            images: require('./images/stocks3.svg').default,
            words:['This is a website I built to live charts that put the recent market downturn in perspective.','The primary data set plotted in this site is the S&P 500 index.', 'It utilized data analytic packages available in Python, specifically pandas, numpy and matplotlib'],
            techlist:['python','flask','bulma','aws'],
            link:'http://stocksaws-env.eba-ryff9kni.us-east-1.elasticbeanstalk.com/today',
            github:'https://github.com/hansonjw/stocksaws'
        },
        nfl:{
            title:'NFL Playoffs Pickem',
            images: require('./images/football.svg').default,
            words:['This web-app was built for my family NFL postseason pickem league.', 'This was a fun excercise with React and Bootstrap.'],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://main.d3ifrmw0t9szzm.amplifyapp.com/scoreboard',
            github:'https://github.com/hansonjw/nfl_hanson_frontend'
        },
        calculator:{
            title:'Valuation Calculator',
            images: require('./images/calculator.svg').default,
            words:['Under Construction', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com'
        },
        fractal:{
            title:'Mandlebrot set',
            images: require('./images/fractal.svg').default,
            words:['Under Construction', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com'
        },
        financeblog:{
            title:'Finance Blog - Otium',
            images: require('./images/blog.svg').default,
            words:['Under Construction', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com'
        },
        fidreports:{
            title:'Python Tool, Finance',
            images: require('./images/reports.svg').default,
            words:['Under Construction', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com'
        },
    },
}

export default CONTENT
