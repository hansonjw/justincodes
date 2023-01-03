import TECH from '../Tech/tech.js'

const CONTENT = {
    title:'Coding',
    quote:`"Stay primitive. Trust the soup. Swing for the seats. Be ready for resistance."`,
    quotesource: 'Steven Pressfield',
    techdict: TECH,
    projects:{
        stockmarket:{
            title:'The Stock Market',
            images: require('./images/stocks3.svg').default,
            words:['This is a website I built to track and contextualize broad stock market.','The primary data set plotted in this site is the S&P 500 index.', 'This site makes use of some data analytic packages available in Python, specifically pandas, numpy and matplotlib'],
            techlist:['python','flask','bootstrap', 'postgresql','aws'],
            link:'http://stocksaws-env.eba-ryff9kni.us-east-1.elasticbeanstalk.com/today',
            github:'https://github.com/hansonjw/stocksaws'
        },
        nfl:{
            title:'NFL Playoff Pickem league',
            images: require('./images/nfl.svg').default,
            words:['This webapp was built for my family NFL 2021 postseason pickem league.', 'Feel free to create an account, log in and see the functionality of the site.', 'This was my first Python/Flask app.  It utilizes a PostgreSQL database to store user information and the team selections.'],
            techlist:['python','flask','bootstrap', 'postgresql', 'heroku'],
            link:'https://peaceful-everglades-01949.herokuapp.com/auth/login',
            github:'https://github.com/hansonjw/hansonnfl_3'
        },
        zookeeper:{
            title:'Zoo KeepR',
            images: require('./images/zookeepr.svg').default,
            words:['This webapp was built during the UC Berkeley web development course.', 'In this project I gained exposure to forms and handling POST requests.', 'I also gained some preliminary experience utilizing a MySQL database on the back end to store form data.'],
            techlist:['javascript', 'html','css','mysql','heroku'],
            link:'https://pacific-island-81874.herokuapp.com/animals',
            github:'https://github.com/hansonjw/zookeepr'
        },
        techblog:{
            title:'My First Blog',
            images: require('./images/blog.svg').default,
            words:['This webapp was built during the UC Berkeley web development course.','This is where I really started to understand requests, database interfaces, routes, and storing data. Filler text Filler text Filler text Filler text Filler text Filler text Filler text Filler text Filler text'],
            techlist:['javascript', 'html','css','mysql', 'heroku',],
            link:'https://vast-fjord-84705.herokuapp.com',
            github:'https://github.com/hansonjw/tech-blog'
        },
    },
}

export default CONTENT
