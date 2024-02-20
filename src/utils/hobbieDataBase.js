const bookBackground = 'https://wallpapers.com/images/featured/book-5q6xbfxwtbme5kaj.jpg'

const reviewDef = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit fugit, quis consectetur voluptatem ab ratione, earum autem deserunt eaque placeat deleniti mollitia ad quo fuga! Rerum asperiores ducimus dolore?
  Neque quasi voluptas culpa amet consequuntur beatae quis doloribus illo! Accusantium explicabo vero voluptate pariatur commodi rerum ut incidunt numquam itaque asperiores corporis similique maiores, illo natus possimus reprehenderit aperiam?`

const hobbieDataBase = [
    {   category: 'Films', 
        title: 'Inception', 
        description: 'A great representation of the question, what could we do if we could control dreams?',
        rate: '9.5 / 10',
        recomendation: 'I hope you like it',
        reviewTitle: 'What if you can bend reality',
        review: reviewDef,
        imageBlock: 'https://imgs.search.brave.com/TshZmlPoN1eqULIM3M21YtRRNKhWUL99gl_REUbdpX8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDMvSW5jZXB0aW9u/LURvbS1Db2JiLmpw/Zw',
        quoteTitle: 'When the dream becomes your reality',
        quoteDescription: 'A single idea from the human mind can build cities. An idea can transform the world and rewrite all the rules.',
        quoteWriter: 'Cobb',
        imageSrc: 'https://m.media-amazon.com/images/I/A1eIBPcRUqL._AC_UF894,1000_QL80_.jpg', 
        imageBackground: 'https://wallpaperswide.com/download/inception_totem-wallpaper-1920x1080.jpg',
    },

    {   category: 'Films', 
        title: 'Oppenheimer', 
        description: 'The manhattan proyect on the hands of Cristopher Nolan',
        rate: '8.5 / 10',
        recomendation: 'Recomended (history, directing, acting)',
        reviewTitle: 'The destroyer of worlds',
        review: reviewDef,
        imageBlock: 'https://imgs.search.brave.com/gnbt9SiMs9iaTeThsWll0LUZcAP4D-LHeHM716YbIP0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzY0/Yjg1ZTM1YTQ2Y2Uz/MDAxOWEyMmMwZj93/aWR0aD0xMjAwJmZv/cm1hdD1qcGVn',
        quoteTitle: 'The old Hindu scripture',
        quoteDescription: 'We knew the world would not be the same. A few people laughed, a few people cried, most people were silent. I remembered the line from the Hindu scripture, the Bhagavad-Gita. [...], “Now, I am become Death, the destroyer of worlds.” I suppose we all thought that one way or another.',
        quoteWriter: 'J. Robert Oppenheimer',
        imageSrc: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/S4367N7H5VAYTB225C4GCG2ZHI.jpeg', 
        imageBackground: 'https://pixewall.com/wp-content/uploads/2023/07/oppenheimer90930510052-scaled.jpg',
    },

    {   category: 'Books', 
        title: 'Never Split The Difference',  
        description: 'A book about the human nature towards the emotions and how to use it for negotiating',
        rate: '9 / 10',
        recomendation: 'For those who want to improve their lives and negotiate better',
        reviewTitle: 'Your life depends on negociate',
        review: reviewDef,
        imageBlock: 'https://imgs.search.brave.com/J82oYEh3KKybFQ7-4Fx53H8bXtSImFEIHrMoqFadBYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzk2LzExLzU1/LzM2MF9GXzk2MTE1/NTIyX3AyM1NvTmhp/cE80T1JoSXZlS0ts/SEVTUDk0b3pJOTJ4/LmpwZw',
        quoteTitle: `Humans are like machines, well not quite`,
        quoteDescription: 'To get what you want, you only need to know how to ask for it. Humans are like machines but with chemestry, you just need to press the right buttons',
        quoteWriter: 'Kalixer',
        imageSrc: 'https://images.squarespace-cdn.com/content/v1/5a1ee5b29f07f5ecc278f6c8/1567952731469-P0061DFC7X6K5OBV86JO/Never+Split+The+Difference.jpg', 
        imageBackground: bookBackground,
    },

    {   category: 'Books', 
        title: 'Quiet', 
        description: `The power of Introverts in a world that can't stop talking`,
        rate: '7.5 / 10',
        recomendation: 'For those who are introvert or if you want to know more about Introversion',
        reviewTitle: 'Introversion is now a flaw, but unrefined ore',
        review: reviewDef,
        imageBlock: 'https://cdn.vox-cdn.com/thumbor/SLAtvuMIPXZT3Gt1EuH76LjLl5Q=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21852109/thrawn_treason_interview_tall.jpg',
        quoteTitle: 'Being an Introvert is having a gift',
        quoteDescription: `Being an introvert can seem like a disadvantage, but once you accept who you are and acknowledge it's not a flaw, but unrefined ore you can outpower those who are not as talented as you`,
        quoteWriter: 'Kalixer',
        imageSrc: 'https://images.booksense.com/images/722/694/9788417694722.jpg', 
        imageBackground: bookBackground,
    },

    {   category: 'Series', 
        title: 'SmallVille', 
        description: 'Backstory of the iconic hero, allies and villains',
        rate: '7.5 / 10',
        recomendation: `Fan or not fan of DC, if you want to know more of the lore, you'll like this`,
        reviewTitle: 'Superman before Superman',
        review: reviewDef,
        imageBlock: 'https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/4Q4BMPMUT5GBXMA7K2W7O5UALE.jpg',
        quoteTitle: 'Dawn of the hero',
        quoteDescription: 'Not everyday they give us the backstory of an iconic character and his development before becoming what we all know, and this show (sometimes best sometimes not so much), does exactly that',
        quoteWriter: 'Kalixer',
        imageSrc: 'https://www.bolsamania.com/seriesadictos/wp-content/uploads/2011/01/00037716.jpg', 
        imageBackground: 'https://images.alphacoders.com/118/1184862.jpg',
    },

    {   category: 'Series', 
        title: 'Clone Wars', 
        description: '3 years of clone wars equals a pool of lore for the fans that enrich the saga overall',
        rate: '8.5 / 10',
        recomendation: `Unless you're a real fan of the saga, maybe you won't watch 160 episodes`,
        reviewTitle: '7 season full of lore',
        review: reviewDef,
        imageBlock: 'https://www.rockandpop.cl/wp-content/uploads/2020/12/5fe68a9477116d28757543b165fa0042.jpeg',
        quoteTitle: 'The force will be with you... Always',
        quoteDescription: 'Geogre Lucas did a great job when it comes to take just one forgetable dialoge in a movie that makes you wonder: Did George did an excelent job creating all this lore, did he planned from the beggining on the 70s o a bit of both?',
        quoteWriter: 'Kalixer',
        imageSrc: 'https://m.media-amazon.com/images/I/817h8As4D7L.jpg', 
        imageBackground: 'https://lumiere-a.akamaihd.net/v1/images/clone-wars-chronological-order-ahsoka_tall_6768d628.jpeg?region=0,0,1536,864',
    },

    {   category: 'VideoGames', 
        title: 'Forza Motorsport', 
        description: 'Default description',
        rate: '8 / 10',
        recomendation: 'Not arcade, for those who want to feel what real racing is',
        reviewTitle: 'The greatest simulator so far',
        review: reviewDef,
        imageBlock: 'https://cdn.sortiraparis.com/images/80/66131/959519-forza-motorsport-l-experience-de-conduite-virtuelle-la-plus-realiste-debarque-sur-xbox-et-pc.jpg',
        quoteTitle: 'For those who want to try something else',
        quoteDescription: `This is not like playing NFS, Burnout, or even Forza Horizon. If you are more casual and want more arcady racing games, you'll like them, I like them. But this is something else, this is more a simulator than a VideoGame. If you like it, great, if you don't, that's ok too. There is market for everyone`,
        quoteWriter: 'Kalixer',
        imageSrc: 'https://myhotposters.com/cdn/shop/products/mL6943_1024x1024.jpg?v=1697834226', 
        imageBackground: 'https://images3.alphacoders.com/133/1334079.png',
    },

    {   category: 'VideoGames', 
        title: 'Forza Horizon 5',  
        description: `Arcade racing game that does'nt shay away when you want to simulate more`,
        rate: '9.5 / 10',
        recomendation: 'Absolutely, for the whole family and motor fans',
        reviewTitle: 'One of the GOTYs',
        review: reviewDef,
        imageBlock: 'https://www.overtake.gg/wp-content/uploads/2023/06/FH5-Upgrade-Heroes-cover.webp',
        quoteTitle: 'Not afraid when you push it further',
        quoteDescription: 'This is a must have if you like racing games, stunning visuals, marvelous optimization, customs, tracks, There is something for every taste',
        quoteWriter: 'Kalixer',
        imageSrc: 'https://i.ebayimg.com/images/g/9VoAAOSwaU9hfHFE/s-l1600.jpg', 
        imageBackground: 'https://i.redd.it/oklr0hxxlu571.png',
    },

    {   category: 'VideoGames', 
        title: 'Outer Wilds', 
        description: 'You, Space, Exploration',
        rate: '9.5 / 10',
        recomendation: 'Not for everyone, this is for someone that is curious and wants to unravel misteries',
        reviewTitle: 'This is something else',
        review: reviewDef,
        imageBlock: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/software/switch/70010000038712/5c90aecec1d337a77b96f10ff05f9964f6424e63edd0a9e6428eaef9de19c78e',
        quoteTitle: `It's ok to play a game just once`,
        quoteDescription: `Really, play it without spoilers, even if you don't use to care about them. This is a game that relies entierly on your knowledge and what you learn on the process. Protect yourself from the spoilers`,
        quoteWriter: 'Kalixer',
        imageSrc: 'https://m.media-amazon.com/images/I/61nDUVM-I3L.jpg', 
        imageBackground: 'https://preview.redd.it/y1jqr8m0fv531.jpg?width=2580&format=pjpg&auto=webp&s=2f377181d98a5629682394e29c687679a49bfef1',
    },

    {   category: 'VideoGames', 
        title: 'Escape Academy', 
        description: 'A game about escaping, the only tool you have is your mind',
        rate: '8 / 10',
        recomendation: 'If you want take pleasure on solving problems',
        reviewTitle: 'For those who want to think',
        review: reviewDef,
        imageBlock: 'https://escapeacademygame.com/storage/media/screen_03.jpg',
        quoteTitle: `Academy or just puzzles?`,
        quoteDescription: 'I love puzzle games and I think everyone should play them, the younger the better. It sharpens your mind and really makes you think',
        quoteWriter: 'Kalixer',
        imageSrc: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/2716/LNQM7aIv1GVdyqqtzZ24oa28.png', 
        imageBackground: 'https://images.alphacoders.com/125/1251036.jpg',
    },

]

export { hobbieDataBase }