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
            words:['A web app for live charts plotting the recent market downturn for perspective.','The primary data set utilized in the app is the S&P 500 index.', 'It leverages data analytic packages available in Python, specifically Pandas, Numpy and Matplotlib'],
            techlist:['python','flask','bulma','aws'],
            link:'http://stocksaws-env.eba-ryff9kni.us-east-1.elasticbeanstalk.com/today',
            github:'https://github.com/hansonjw/stocksaws',
            status: 'done'
        },
        {
            title:'NFL Playoffs Pickem',
            images: require('./images/football.svg').default,
            words:['A simple web-app for my family NFL postseason pickem league.', "It was a fun excercise with React and Bootstrap and really solidified my grasp of Bootstrap's grid system."],
            techlist:['javascript','react','bootstrap', 'aws'],
            link: 'https://main.d3ifrmw0t9szzm.amplifyapp.com/scoreboard',
            github:'https://github.com/hansonjw/nfl_hanson_frontend',
            status: 'done'
        },
        {
            title:'Mandlebrot set',
            images: require('./images/fractal.svg').default,
            words:['Explorations of the Mandelbrot set', 'A fun exercise in wrestling with algorithmic complexity while producing useful code.','Understanding how best to create a color palette, determine number of iterations, and finding interesting spaces on the set were just some of the challenges in developing interesting plots.','This was also a good exercise in seeing how others approach object oriented design'],
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
