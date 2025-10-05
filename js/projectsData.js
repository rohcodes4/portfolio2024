const projectsData = [
    {
        id: 26,
        name: "Beej Network",
        href: "https://beejnetwork.com/",
        imgSrc: "images/work/beejnetwork.png",
        description: "Investor's platform",
        category: "HTML Development"
    }, {
        id: 25,
        name: "RoroSaur",
        href: "https://rorosaur.com/",
        imgSrc: "images/work/rorosaur.png",
        description: "Baby Food brand",
        category: "Shopify Development"
    }, {
        id: 24,
        name: "Under The Mango Tree",
        href: "https://utmt.in/",
        imgSrc: "images/work/utmt.png",
        description: "Premium Honey Brand",
        category: "Shopify Development"
    }, {
        id: 23,
        name: "The Tiny Secret",
        href: "https://thetinysecret.com/",
        imgSrc: "images/work/thetinysecret.png",
        description: "Premium Self Care brand",
        category: "Shopify Development"
    }, {
        id: 22,
        name: "Edutravllr",
        href: "https://edutravllr.com/",
        imgSrc: "images/work/edutravllr.png",
        description: "Simplifying Education ",
        category: "Game Development"
    }, {
        id: 21,
        name: "Moy by Abeni",
        href: "https://moybyabeni.com/",
        imgSrc: "images/work/moybyabeni.png",
        description: "Premium Clothing Store",
        category: "Shopify Development"
    }, {
        id: 20,
        name: "Bombay Toy Company",
        href: "https://bombaytoycompany.com/",
        imgSrc: "images/work/btc.png",
        description: "Toy Store",
        category: "Shopify Development"
    }, {
        id: 19,
        name: "Kay Store",
        href: "https://kaystore.in/",
        imgSrc: "images/work/kayStore.webp",
        description: "Premium Clothing Store",
        category: "Shopify Development"
    },
    {
        id: 15,
        name: "Luxewalk",
        href: "https://www.luxewalk.com",
        imgSrc: "images/work/luxewalk.png",
        description: "Natural Candles E-Com Store",
        category: "Shopify Development"
    },
    {
        id: 18,
        name: "Onset Homes",
        href: "https://onsethomes.com",
        imgSrc: "images/work/onsetHomes.png",
        description: "Hand Crafted Collections and Throws",
        category: "Shopify Development"
    },
    {
        id: 17,
        name: "Teenprenuer Merch",
        href: "https://merch.teenpreneur.co",
        imgSrc: "images/work/merchtp.webp",
        description: "Entrepreneur Merchandise",
        category: "Shopify Development"
    },
    {
        id: 16,
        name: "HyperIllusion",
        href: "https://www.hyperillusion.in",
        imgSrc: "images/work/HyperIllusion.webp",
        description: "Street Culture Fashion Brand",
        category: "Shopify Development"
    },

    {
        id: 14,
        name: "ExpliciveX",
        href: "https://www.explicivex.com",
        imgSrc: "images/work/explicivex.webp",
        description: "Digital Marketing Agency",
        category: "Wordpress Development"
    },
    {
        id: 13,
        name: "Witty Spirit",
        href: "https://www.wittyspirit.com",
        imgSrc: "images/work/WittySpirit.webp",
        description: "Fashion Brand",
        category: "Shopify Development"
    },
    {
        id: 12,
        name: "Teenprenuer Blog",
        href: "https://www.teenpreneur.co",
        imgSrc: "images/work/teenpreneur.webp",
        description: "Teenage Entreprenuer Blog",
        category: "Wordpress Development"
    },
    {
        id: 11,
        name: "The Gifts Basket",
        href: "https://rohit-photography.netlify.app/",
        imgSrc: "images/work/tgb.webp",
        description: "Unique Gifts Store",
        category: "Shopify Development"
    },
    {
        id: 10,
        name: "Blue Specttica",
        href: "https://rohit-photography.netlify.app/",
        imgSrc: "images/work/blueSpecttica.webp",
        description: "Optical store with unique Lens Selection steps",
        category: "Shopify Development"
    },
    {
        id: 9,
        name: "SpaceX by Rohit",
        href: "https://www.spacex-herokuapp.com",
        imgSrc: "images/work/SpaceXRohit.webp",
        description: "SpaceX launches made using SpaceX API",
        category: "React Development"
    },
    {
        id: 8,
        name: "The Drip Story",
        href: "https://www.thedripstory.com",
        imgSrc: "images/work/TheDripStory.webp",
        description: "Digital Service Agency",
        category: "Wordpress Development"
    },
    {
        id: 7,
        name: "Interior Decorators",
        href: "https://rohit-decorators.netlify.app/",
        imgSrc: "images/work/decorators.webp",
        description: "Project made for non-existent Interior Decorators Store",
        category: "Website Development"
    },
    {
        id: 6,
        name: "Kay Desi",
        href: "https://kaydesi.in",
        imgSrc: "images/work/kayDesi.webp",
        description: "Indian Clothing store",
        category: "Shopify Development"
    },
    {
        id: 5,
        name: "SVM Electronics",
        href: "https://rohcodes4.github.io/svm-react",
        imgSrc: "images/work/svm-react.webp",
        description: "LG Retail Showroom",
        category: "React Development"
    },
    {
        id: 4,
        name: "Paranoia Miami",
        href: "https://paranoiamiami.com/",
        imgSrc: "images/work/paranoia.webp",
        description: "Award Winning Horror Maze based out in Miami, Florida",
        category: "Wordpress Development"
    },
    {
        id: 3,
        name: "Mobile App Website",
        href: "https://rohit-mobile-app.netlify.app",
        imgSrc: "images/work/mobileapp.webp",
        description: "Project Website made for Mobile Application",
        category: "Website Development"
    },
    {
        id: 2,
        name: "Youtube Clone",
        href: "https://rohcodes4.github.io/rohit-ytc",
        imgSrc: "images/work/ytc.webp",
        description: "Youtube clone made using Youtube Data API v3",
        category: "React Development"
    },
    {
        id: 1,
        name: "Phohit",
        href: "https://rohit-photography.netlify.app/",
        imgSrc: "images/work/Phohit.webp",
        description: "Photography portfolio website",
        category: "Website Development"
    }
]