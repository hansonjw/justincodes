const CONTENT = {
    title:'Interests',
    quote: `"Curiosity has its own reason for existing."`,
    quotesource: 'Albert Einstein',
    keys: ['maroonbells', 'stream', 'redwoods', 'onetree', 'mechazilla','garden', 'starbase','saturn5', 'solar', 'brk', 'trinidad', 'pebble','mendocino', 'lostwhale', 'cash', 'cashmace'],
    images: {
        garden:require('./images/garden.jpeg'),
        maroonbells:require('./images/maroonbells.jpeg'),
        starbase:require('./images/starbase.jpeg'),
        mechazilla:require('./images/mechazilla.jpeg'),
        stream:require('./images/stream.jpeg'),
        brk:require('./images/brk.jpeg'),
        pebble:require('./images/pebble.jpeg'),
        saturn5:require('./images/saturn5.jpeg'),
        cash:require('./images/cash.jpeg'),
        cashmace:require('./images/cashmace.jpeg'),
        solar:require('./images/solar.png'),
        lostwhale:require('./images/lostwhale.png'),
        mendocino:require('./images/mendocino.png'),
        redwoods:require('./images/redwoods.png'),
        onetree:require('./images/onetree.png'),
        trinidad:require('./images/trinidad.png'),
    },
    words: {
        garden: [
          "This is the SpaceX 'Rocket Garden' at Starbase where the older versions of rockets are on display for the public.",
          "Wandering through the SpaceX facility and seeing all the progress they have made is a mind-boggling experience.",
          "There is a launch complex as well as a humongous rocket manufacturing building. It's almost startling how close you are allowed to get to everything happening down there!"
        ],
        maroonbells: [
          "This is the famous 'Maroon Bells' just outside of Aspen, CO.",
          "Having grown up in Colorado, I will always love and appreciate the mountains... especially in the summertime."
        ],
        starbase: [
          "Starbase, Texas is an R&D facility for SpaceX located on the far Southern Tip of Texas. Here, SpaceX is developing the rockets and technology to take humanity to the Moon and Mars.",
          "The 'Starbase' sign is a popular tourist stop and photo opportunity. The top of this long sign is tiled in solar panels."
        ],
        mechazilla: [
          "This is a view from Boca Chica Beach looking back at the SpaceX launch complex.",
          "The launch-and-catch-structure has been nicknamed 'Mechazilla' and is almost 400 feet tall by my estimation.",
          "In the picture, you can also see a heavy booster and a 'Starship' on the ground by the cranes."
        ],
        stream: [
          "This was a great little hike in Pfeiffer Big Sur State Park. This was my first encounter with redwood trees and sequoias.",
          "Here, the seeds were planted for a return trip to California to visit the Redwood State and National Parks up North."
        ],
        brk: [
          "Studying the writings of Warren Buffett has been one of the most important steps in my development as a business professional.",
          "In 2016, I attended the Berkshire Hathaway Annual Meeting where I saw Mr. Buffett speak in person.",
          "That was quite a thrill!"
        ],
        pebble: [
          "Another stunning view of the California coast. This is the lone cypress which serves as the logo for the world-famous Pebble Beach Golf Club."
        ],
        saturn5: [
          "If you are in Texas and you are interested in space, then the Johnson Space Center near Houston is a must-see.",
          "On display here is a Saturn V rocket cobbled together with remaining parts from the Apollo program. This massive rocket is required to propel just three men to the moon!"
        ],
        cash: [
          "This is Cash. We found him in the bushes of the house across the street. We took him in, nursed him back to health, and started working with a local animal rescue to find him a permanent home.",
          "Happy to report that Cash was adopted by a great home!"
        ],
        cashmace: [
          "On the same day we met Cash, Mace (larger eared kitten on the right) came to our doorstep. Mace was really afraid of humans and quite wild in a primal sense.",
          "We ended up fostering him as well. It has been such a joy to see him transform into the friendly and fun-loving kitten he has become."
        ],
        solar: ["On a recent road trip through California we stopped at this charging station between Las Vegas and San Luis Obispo. It is a very large station with ~40+ charging stalls in the middle of the desert.", "It felt very far from civilization, yet the solar panels and EV charging felt so very futuristic. It was such a striking contrast to many of the sights I have seen while working in the oil industry for over a decade.", "Hard not to think about how far civilization is advancing in our lifetimes. What better time to be alive!"],
        lostwhale: ["...another stunning view of the Pacific from Northern California. If you are ever in Northern California, I highly recommend the Lost Whale Inn."],
        mendocino: ["The Pacific Ocean stirs my soul. This is a view from the bluff looking back at the town of Mendocino."],
        redwoods: ["What can I say...The majesty of the Redwoods in Northern California far exceeded any hopes and expectations I had.", "The trees are absolutely indescribable...and really hard to capture in a photograph!", "I highly recommend seeing the State and National Parks if ever you are up in that part of the state."],
        onetree: ["Another picture from the Redwoods parks.", "What a great trip!"],
        trinidad: ["Yet another picture of the Pacific Ocean...", "There is nothing like walking on the beach and looking out on the Pacific Ocean to rekindle my sense of awe and wonder with this beautiful world."],
        },
    links : {
        garden:'https://goo.gl/maps/ao5J71RrhYNk6t8r7',
        maroonbells:"https://goo.gl/maps/KV2tuxrd3RKb1wRv6",
        starbase:'https://goo.gl/maps/ao5J71RrhYNk6t8r7',
        mechazilla: "https://goo.gl/maps/kdun97NejvLk1uvg6",
        stream:'https://goo.gl/maps/nB7yJQzNaukAa9ZN6',
        brk:'https://goo.gl/maps/AVZNKKpusvkeCt529',
        pebble:'https://goo.gl/maps/j4KiHk79RmHAxB7a9',
        saturn5:'https://g.page/spacecenterhou?share',
        cash:'https://www.facebook.com/meowtownar/',
        cashmace:'https://www.facebook.com/meowtownar/',
        solar:'https://goo.gl/maps/ePFTDCMA3QuhDAtC6',
        lostwhale:'https://goo.gl/maps/2EqRyHobdmFChWtF8',
        mendocino:'https://goo.gl/maps/R1yEyKjfS91QsRvK6',
        redwoods:'https://goo.gl/maps/NqohCfNFqBQZQbm69',
        onetree:'https://goo.gl/maps/NqohCfNFqBQZQbm69',
        trinidad:'https://goo.gl/maps/P9u9pKKXMZingGP68',
    },
    titles: {
        garden:'Boca Chica, TX',
        maroonbells:'Aspen, CO',
        starbase:'Starbase, TX',
        mechazilla:'Boca Chica, TX',
        stream:'Big Sur, CA',
        brk:'Omaha, NE',
        pebble:'Monterey Penninsula, CA',
        saturn5:'Houston, TX',
        cash:'Fort Worth, TX',
        cashmace:'Fort Worth, TX',
        solar:'Baker, CA',
        lostwhale:'Northern California Coast',
        mendocino:'Mendocino, CA',
        redwoods:'Redwoods State & National Parks, CA',
        onetree:'Redwoods State & National Parks, CA',
        trinidad:'Trinidad, CA',
    },
    linktext: {
    },
    // footer:footer,
}

export default CONTENT;