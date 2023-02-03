import TECH from '../Tech/tech.js'

const CONTENT = {
    title:'Code',
    quote:`"Stay primitive. Trust the soup. Swing for the seats. Be ready for resistance."`,
    quotesource: 'Steven Pressfield',
    techdict: TECH,
    projects:[
        {
            title:'The Stock Market',
            images: require('./images/stocks3.svg').default,
            words:['This is a website I built to live charts that put the recent market downturn in perspective.','The primary data set plotted in this site is the S&P 500 index.', 'It utilized data analytic packages available in Python, specifically pandas, numpy and matplotlib'],
            techlist:['python','flask','bulma','aws'],
            link:'http://stocksaws-env.eba-ryff9kni.us-east-1.elasticbeanstalk.com/today',
            github:'https://github.com/hansonjw/stocksaws',
            status: 'done'
        },
        {
            title:'NFL Playoffs Pickem',
            images: require('./images/football.svg').default,
            words:['This is a simple web-app for my family NFL postseason pickem league.', "This was a fun excercise with React and Bootstrap, as well as leveraging Bootstrap's grid system."],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://main.d3ifrmw0t9szzm.amplifyapp.com/scoreboard',
            github:'https://github.com/hansonjw/nfl_hanson_frontend',
            status: 'done'
        },
        {
            title:'Mandlebrot set',
            images: require('./images/fractal.svg').default,
            words:['Explorations of the Mandelbrot set', 'This was a fun exercise in understanding algorithmic complexity.','Understanding how best to create a color palette, determine number of iterations, and finding interesting spaces on the set were just some of the challenges in developing interesting plots.','This was also a good exercise in seeing how others approach a unique problem and implement thier own coding style with classes, objects, functions, etc.'],
            techlist:['javascript','react','bootstrap', 'aws', 'python'],
            link: 'https://main.ddjftz69e8x4k.amplifyapp.com',
            github:'https://github.com/hansonjw/mandelbrot_web',
            status: 'done'
        },
        {
            title:'Valuation Calculator',
            images: require('./images/calculator.svg').default,
            words:['Coming soon!', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com',
            status: 'Coming soon!'
        },
        {
            title:'Finance Blog - Otium',
            images: require('./images/blog.svg').default,
            words:['Coming soon!', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com',
            status: 'Coming soon!'
        },
        {
            title:'Finance Reports',
            images: require('./images/reports.svg').default,
            words:['Coming soon!', ''],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://www.justin-codes.com',
            github:'https://www.justin-codes.com',
            status: 'Coming soon!'
        },
    ],
}

export default CONTENT
