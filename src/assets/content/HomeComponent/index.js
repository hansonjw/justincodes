import WORDS from './words.js'
const CONTENT = {
    intro: {
        title: 'Justin Codes',
        quote: `“What looks like talent is often careful preparation. What looks like skill is often persistent revision.”`,
        quotesource: "James Clear",
        words: WORDS.intro,
        images: {image: require('./images/pro.jpeg')},
    },
    learning: {
        title: 'Life Long Learner',
        quote: `"Experience is a dear teacher, but fools will learn at no other."`,
        quotesource: "Benjamin Franklin",
        words: {
            uco: WORDS.uco,
            und: WORDS.und,
            // em: WORDS.em,
            uca: WORDS.uca
        },
        images: {
            uco: {image: require('./images/uco.png'), title:'University of Colorado', words: WORDS.uco, link:'https://colorado.edu'},
            und: {image: require('./images/und.png'), title:'University of Notre Dame', words: WORDS.und, link:'https://www.nd.edu'},
            // em: {image: require('./images/em.png'), title:'ExxonMobil', words: WORDS.em, link:'https://www.exxonmobil.com'},
            uca: {image: require('./images/uca.png'), title:'Berkeley Extension', words: WORDS.uca, link:'https://extension.berkeley.edu'},
        },
    },
    skills: {
        title: 'Skills',
        quote: `"The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights."`,
        quotesource: 'Muhammad Ali',
        words: WORDS,
        categories: [
            {
                category: "Programming Languages",
                items: [
                    {icon: require('./../Tech/images/python.svg').default, name:'Python', link:'https://www.python.org'},
                    {icon: require('./../Tech/images/javascript.svg').default, name:'JavaScript', link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                ]
            },
            {
                category: "Cloud Computing",
                items: [
                    {icon: require('./../Tech/images/aws.svg').default, name:'AWS', link:'https://aws.amazon.com'},
                    {icon: require('./../Tech/images/github.svg').default, name:'GitHub', link:'https://github.com'},
                    {icon: require('./../Tech/images/heroku.png'), name:'Heroku', link:'https://www.heroku.com/'},
                ]         
            },
            {
                category: "Data",
                items: [
                    {icon: require('./../Tech/images/mongodb.svg').default, name:'MongoDB', link:'https://www.mongodb.com'},
                    {icon: require('./../Tech/images/mysql.svg').default,name:'MySQL', link:'https://www.mysql.com'},
                    {icon: require('./../Tech/images/postgresql.svg').default,name:'PostgreSQL', link:'https://www.postgresql.org'},
                ]
            },
            {
                category: "Web Development",
                items: [
                    {icon: require('./../Tech/images/html.svg').default, name:'HTML', link:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                    {icon: require('./../Tech/images/css.svg').default, name:'CSS', link:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                    {icon: require('./../Tech/images/react.svg').default, name:'React', link:'https://www.reactjs.org/'},
                    {icon: require('./../Tech/images/bootstrap.png'), name:'Bootstrap', link:'https://getbootstrap.com'},
                    {icon: require('./../Tech/images/flask.svg').default, name:'Flask', link:'https://flask.palletsprojects.com/en/2.2.x/'},
                    {icon: require('./../Tech/images/django.svg').default, name:'Django', link:'https://www.djangoproject.com'},             
                    {icon: require('./../Tech/images/bulma.png'), name:'Bulma', link:'https://bulma.io'},
                ]
            },
        ],
    },
}

export default CONTENT;