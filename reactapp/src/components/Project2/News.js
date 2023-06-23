import React from 'react'
import Newsitem from './Newsitem'

export default function News() {
    const artticles = [
        {
          "source": { "id": "the-irish-times", "name": "The Irish Times" },
          "author": "Ciarán Murphy",
          "title": "Ciarán Murphy: Time the GAA treated women’s teams with respect and equality",
          "description": "The country’s top football and camogie players are simply demanding the basics – things like mileage expenses, medical services, and playing gear",
          "url": "https://www.irishtimes.com/sport/gaelic-games/2023/06/22/ciaran-murphy-time-the-gaa-treated-womens-teams-with-respect-and-equality/",
          "urlToImage": "https://www.irishtimes.com/resizer/7kivhKY5Ha58oLbQLUbkm43DNNQ=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/VTMHDPSCQBHY7MOJYA3GG2UXWY.jpg",
          "publishedAt": "2023-06-22T05:00:00Z",
          "content": "Last week I got a text message from a friend of mine currently engaged in a frantic 80-hour week of taxiing his kids from one sport to the next to the next. Hes by no means a GAA person, and in fact … [+5010 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Pa Sport Staff",
          "title": "On this day in 2012: Danish Kaneria given lifetime domestic ban by ECB",
          "description": "The ECB panel delivered a damning verdict following the Pakistani’s involvement in a spot-fixing plot.",
          "url": "https://www.independent.co.uk/sport/cricket/ecb-pakistani-essex-english-welsh-b2362063.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/22/06/2a9dfde67b89000258bdc2e8aa826576Y29udGVudHNlYXJjaGFwaSwxNjg3NDI1MTUx-2.3891430.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-22T05:00:00Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nDanish Kaneria was banned from English and … [+1558 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "NCA NewsWire",
          "title": "Ricky Ponting slams Ollie Robinson over his Ashes outburst at Usman Khawaja during first Test",
          "description": "Former Australian captain Ricky Ponting has put new Ashes villain Ollie Robinson in the gun, labelling the bowler a 'slow learner' for his efforts to unsettle Usman Khawaja in the opening Test.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12221207/Slow-learner-Ponting-whacks-Ashes-villain-called-delivers-harsh-truth-England.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/05/72400953-0-image-a-2_1687407870628.jpg",
          "publishedAt": "2023-06-22T04:42:46Z",
          "content": "Former Australian captain Ricky Ponting has put new Ashes villain Ollie Robinson in the gun, labelling the bowler a 'slow learner' for his failed efforts to unsettle Usman Khawaja in the opening Test… [+3661 chars]"
        },
        {
          "source": { "id": null, "name": "Biztoc.com" },
          "author": "ft.com",
          "title": "Ashes showdown looks to put women’s cricket on par with men’s game",
          "description": "Joint marketing boosts ticket sales for England-Australia clash in previously male-dominated sport",
          "url": "https://biztoc.com/x/02f67ce4fc235b7c",
          "urlToImage": "https://c.biztoc.com/210/og.png",
          "publishedAt": "2023-06-22T04:38:04Z",
          "content": "Joint marketing boosts ticket sales for England-Australia clash in previously male-dominated sport\r\nThis story appeared on ft.com, 2023-06-21."
        },
        {
          "source": { "id": null, "name": "Khabarhub.com" },
          "author": "Khabarhub",
          "title": "World Cup Qualifier: Nepal playing against West Indies",
          "description": "KATHMANDU: Nepal is playing its third match in the ICC One Day Cricket World Cup Qualifiers against West Indies today. In the match to be held at 12: 45 pm, Nepal is competing against the West Indies in Harare. Earlier, Nepal lost to Zimbabwe in the first mat…",
          "url": "https://english.khabarhub.com/2023/22/308165/",
          "urlToImage": "https://english.khabarhub.com/wp-content/uploads/2023/06/Nepal_West-Indies_sportewave.webp",
          "publishedAt": "2023-06-22T04:25:40Z",
          "content": "KATHMANDU: Nepal is playing its third match in the ICC One Day Cricket World Cup Qualifiers against West Indies today.\r\nIn the match to be held at 12: 45 pm, Nepal is competing against the West Indie… [+541 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": "NDTV Sports Desk",
          "title": "Watch: Anderson Turns Peacekeeper To Dissolve Robinson-Khawaja Altercation",
          "description": "Ollie Robinson and Usman Khawaja squared-off on multiple occasions during the Edgbaston Test.",
          "url": "https://sports.ndtv.com/ashes-2023/tension-rises-again-between-usman-khawaja-ollie-robinson-during-1st-ashes-test-watch-4140023",
          "urlToImage": "https://c.ndtvimg.com/2023-06/fonjfhqo_usman-khawaja-_625x300_21_June_23.jpg",
          "publishedAt": "2023-06-22T04:15:37Z",
          "content": "The thrilling first Ashes Test match between England and Australia ended in the favour of the Pat Cummins-led side on Tuesday by two wickets. Playing in Birmingham, the visitors held their nerves as … [+2084 chars]"
        },
        {
          "source": { "id": null, "name": "Lancashire Telegraph" },
          "author": "Sarah McGee",
          "title": "Plea issued after vandals break into Accrington Cricket Club",
          "description": "Vandals caused thousands in damage after breaking into cricket club",
          "url": "https://www.lancashiretelegraph.co.uk/news/23603177.plea-issued-vandals-break-accrington-cricket-club/",
          "urlToImage": "https://www.lancashiretelegraph.co.uk/resources/images/16912165/?type=og-image",
          "publishedAt": "2023-06-22T04:00:00Z",
          "content": "The vandals broke in at around 1am, damaging bi-folding doors, a garage roof, and the sites alarm and CCTV system.\r\nBryan McGrath, committee member at Accrington Cricket Club, said it will cost thous… [+1797 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": "NDTV Sports Desk",
          "title": "\"I Can't Do Much\": Incoming Pakistan Board Chief Softens Asia Cup Stance",
          "description": "Zaka Ashraf, the PCB nominated chairman of the board, has softened his stance on the Asia Cup, saying since the 'hybrid model' has already been approved, he can't do much to change it.",
          "url": "https://sports.ndtv.com/cricket/i-cant-do-much-incoming-pakistan-board-chief-softens-asia-cup-stance-4142107",
          "urlToImage": "https://c.ndtvimg.com/2023-06/89ilec6o_zaka-ashraf-twitter_650x300_22_June_23.jpg",
          "publishedAt": "2023-06-22T03:29:35Z",
          "content": "A fresh Asia Cup 2023 controversy seemed to have erupted on Wednesday after the incoming Pakistan Cricket Board (PCB) chief Zaka Ashraf slammed the 'hybrid model', suggesting Pakistan should be hosti… [+1754 chars]"
        },
        {
          "source": { "id": null, "name": "The Indian Express" },
          "author": "Sports Desk",
          "title": "Ricky Ponting hits back at Ollie Robinson for dragging his name while defending his send-off of Usman Khawaja",
          "description": "Former Australia captain says \"If he (Robinson) is sitting back thinking about me, then no wonder he bowled like the way that he did in that game.\"",
          "url": "https://indianexpress.com/article/sports/cricket/ricky-ponting-hits-back-at-ollie-robinson-for-dragging-his-name-while-defending-his-send-off-of-usman-khawaja-8678903/",
          "urlToImage": "https://images.indianexpress.com/2023/06/Ollie-Robinson.jpg",
          "publishedAt": "2023-06-22T02:53:27Z",
          "content": "Former Australia captain Ricky Ponting has slammed England seamer Ollie Robinson for dragging his name while defending his send-off of Usman Khawaja. \r\n“We’ve all seen Ricky Ponting and other Aussies… [+1213 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "James Cooney",
          "title": "Aussie Ashes heroes add insult to injury by choosing to party in infamous pub after Test win",
          "description": "Australian cricket players have been spotted celebrating their thrilling Ashes victory in the pub that David Warner threw a punch at Joe Root - and some English fans are furious.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12221171/Aussie-Ashes-heroes-add-insult-injury-choosing-party-infamous-pub-Test-win.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/03/72398691-0-image-a-171_1687400601574.jpg",
          "publishedAt": "2023-06-22T02:48:52Z",
          "content": "Australian cricket players have been spotted celebrating their thrilling Ashes victory in the pub where David Warner punched Joe Root almost exactly a decade ago - and some English fans are furious.\r… [+3634 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Mary Mrad",
          "title": "Moment WA premier tells Taylor Swift 'it's your loss' after she snubbed major cities on Eras Tour",
          "description": "WA Premier Roger Cook has reacted to news Taylor Swift will only be performing in Sydney and Melbourne during the Australian leg of her The Eras Tour.",
          "url": "https://www.dailymail.co.uk/tvshowbiz/article-12221269/Moment-WA-premier-tells-Taylor-Swift-loss-snubbed-major-cities-Eras-Tour.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/03/72399017-0-image-a-59_1687400438827.jpg",
          "publishedAt": "2023-06-22T02:48:51Z",
          "content": "Western Australia Premier Roger Cook has reacted to news Taylor Swift will only be performing in Sydney and Melbourne during the Australian leg of her The Eras Tour.\r\nThe pop superstar announced on W… [+1801 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": "NDTV Sports Desk",
          "title": "\"This Is Bit Of Overspin...\": Australia Great On ICC's Penalising Moeen",
          "description": "England all-rounder Moeen Ali became the talk of the town after he was reprimanded by the International Cricket Council for breaching the Code of Conduct during the ongoing first Ashes Test",
          "url": "https://sports.ndtv.com/ashes-2023/this-is-bit-of-overspin-australia-great-on-iccs-penalising-moeen-ali-4136997",
          "urlToImage": "https://c.ndtvimg.com/2023-06/ucoo86e8_moeen-ali-afp_625x300_18_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-06-22T02:26:34Z",
          "content": "England all-rounder Moeen Ali became the talk of the town after he was reprimanded by the International Cricket Council for breaching the Code of Conduct during the ongoing first Ashes Test against A… [+1849 chars]"
        },
        {
          "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
          "author": "ABC News",
          "title": "How Darcie Brown has become an integral cog in the Australian women's cricket squad",
          "description": "Darcie Brown has only played 35 matches for Australia, but her trophy cabinet is already stacked to the brim, with the quick a key part of Australia's success.",
          "url": "https://www.abc.net.au/news/2023-06-22/womens-ashes-darcie-brown-on-the-rise-for-australia/102509246",
          "urlToImage": "https://live-production.wcms.abc-cdn.net.au/0fff20d60b45a6723cf2ad762665616d?impolicy=wcms_crop_resize&cropH=2237&cropW=3976&xPos=0&yPos=142&width=862&height=485",
          "publishedAt": "2023-06-22T02:00:51Z",
          "content": "Darcie Brown is still a fresh face in one of the most successful teams in world sporting history.\r\nIn the past 15 months, Brown has won an ODI World Cup, a T20 World Cup, a Commonwealth gold medal an… [+4739 chars]"
        },
        {
          "source": { "id": "google-news", "name": "Google News" },
          "author": null,
          "title": "Nepal Vs West Indies ICC Men`s ODI Cricket World Cup 2023 Qualifier Group A Match Livestreaming: When And W... - Zee News",
          "description": "<ol><li>Nepal Vs West Indies ICC Men`s ODI Cricket World Cup 2023 Qualifier Group A Match Livestreaming: When And W...  Zee News\r\n</li><li>World Cup Qualifiers and India series: West Indies face scheduling conflict | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><l…",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMivgFodHRwczovL3plZW5ld3MuaW5kaWEuY29tL2NyaWNrZXQvbmVwYWwtdnMtd2VzdC1pbmRpZXMtaWNjLW1lbi1zLW9kaS1jcmlja2V0LXdvcmxkLWN1cC0yMDIzLXF1YWxpZmllci1ncm91cC1hLW1hdGNoLWxpdmVzdHJlYW1pbmctd2hlbi1hbmQtd2hlcmUtdG8td2F0Y2gtbmVwLXZzLXdpLWxpdmUtaW4taW5kaWEtMjYyNTE1Mi5odG1s0gHCAWh0dHBzOi8vemVlbmV3cy5pbmRpYS5jb20vY3JpY2tldC9uZXBhbC12cy13ZXN0LWluZGllcy1pY2MtbWVuLXMtb2RpLWNyaWNrZXQtd29ybGQtY3VwLTIwMjMtcXVhbGlmaWVyLWdyb3VwLWEtbWF0Y2gtbGl2ZXN0cmVhbWluZy13aGVuLWFuZC13aGVyZS10by13YXRjaC1uZXAtdnMtd2ktbGl2ZS1pbi1pbmRpYS0yNjI1MTUyLmh0bWwvYW1w?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-06-22T01:44:25Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Tyrell Feaster, Ap",
          "title": "MLB 'views Netherlands, Germany, and France as potential destinations for future games in Europe'",
          "description": "Major League Baseball has big plans for growing its European fanbase and, on top of returning to London, it also intends to target other countries, such as France, Germany, and the Netherlands.",
          "url": "https://www.dailymail.co.uk/sport/mlb/article-12221083/MLB-views-Netherlands-Germany-France-potential-destinations-future-games-Europe.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/00/72377143-0-image-a-65_1687391492561.jpg",
          "publishedAt": "2023-06-22T01:39:50Z",
          "content": "Major League Baseball has big plans for growing its European fanbase and, on top of reintroducing baseball to fans in London, it also intends to target other countries, such as France, Germany, and t… [+6487 chars]"
        },
        {
          "source": { "id": null, "name": "Rolling Stone" },
          "author": "John Lonsdale",
          "title": "‘And Just Like That’ Season Two: How to Watch the ‘Sex and the City’ Reboot Online",
          "description": "Can't help but wonder where to stream the 'Sex and the City' reboot's premiere? Here's how to watch the new episodes at home",
          "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/how-to-watch-and-just-like-that-sex-and-the-city-hbo-online-1267406/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2021/12/And-Just-Like-That-Watch-HBO-Max.jpg?w=1584&h=900&crop=1",
          "publishedAt": "2023-06-22T01:00:00Z",
          "content": "Carrie, Miranda, and Charlotte return to the small screen once again for the latest installment in the Sex and the City franchise, And Just Like That Season Two, with the first two new episodes now s… [+3885 chars]"
        },
        {
          "source": { "id": "news-com-au", "name": "News.com.au" },
          "author": "Lexie Cartwright",
          "title": "Taylor Swift’s Australian tour for ‘Eras’: Ticketek releases ticket prices",
          "description": "Taylor Swift ignited pandemonium among her Australian fans when she announced yesterday she was bringing her blockbuster &lsquo;Eras&rsquo; tour down under next year.",
          "url": "https://www.news.com.au/entertainment/music/tours/ticketek-releases-prices-for-taylor-swifts-eras-tour-in-australia/news-story/ce5f1ecccbea4676dea41dc9e1ff6e54",
          "urlToImage": "https://content.api.news/v3/images/bin/a4d6b7823a209327172fd438c17903bd",
          "publishedAt": "2023-06-22T00:23:00Z",
          "content": "Taylor Swift ignited pandemonium among her Australian fans when she announced yesterday she was bringing her blockbuster ‘Eras’ tour down under next year.\r\nBut unless diehard ‘Swifties’ are content s… [+4200 chars]"
        },
        {
          "source": { "id": "national-geographic", "name": "National Geographic" },
          "author": "Liz Langley",
          "title": "Nevada is crawling with swarms of smelly 'Mormon crickets'",
          "description": "Millions of the bugs, native to the U.S. West, are blanketing sidewalks and devouring vegetation.",
          "url": "https://www.nationalgeographic.com/animals/article/swarms-mormon-crickets-invade-nevada",
          "urlToImage": "https://i.natgeofe.com/n/cdc052b2-827a-4f1a-93d6-6a7ea6e1e7f6/NationalGeographic_2773137_16x9.jpg?w=1200",
          "publishedAt": "2023-06-22T00:00:00Z",
          "content": "Hordes of Mormon cricketstechnically a type of shield-back katydid and not a cricket at allhave been migrating through Elko, Nevada and other areas of the West in recent weeks, creating a scene like … [+548 chars]"
        },
        {
          "source": { "id": null, "name": "The Boston Globe" },
          "author": "Christina Goldbaum, Zia ur-Rehman",
          "title": "‘Like doomsday’: How hope of a better life ended on a boat in the Mediterranean",
          "description": "Two young cousins from For decades, as India and Pakistan fought over the contested area of Kashmir, the town faced frequent cross-border shelling, destroying homes and taking lives. Leaving was a way for young men to escape that violence and support their fa…",
          "url": "https://www.bostonglobe.com/2023/06/21/world/like-doomsday-how-hope-better-life-ended-boat-mediterranean/",
          "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Ia8_UmRTeuhV0ddToNnEI6ycSYs=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/WG22YBQAPJR6U4MDYLIUHG6F44.jpg",
          "publishedAt": "2023-06-21T23:31:20Z",
          "content": "So late one night in March, they hugged their fathers and brothers goodbye and set off on the journey, across hundreds of miles, by land, air, and sea, through four countries and driven by a dream of… [+5233 chars]"
        },
        {
          "source": { "id": null, "name": "Rolling Stone" },
          "author": "John Lonsdale",
          "title": "How to Watch the Complete ‘Sex and the City’ Series Online Free",
          "description": "On the heels of another season of 'And Just Like That,' here's how to watch the show that started it all",
          "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/how-to-watch-sex-and-the-city-online-free-1234775848/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/06/Sex-and-the-city-original-series.jpg?crop=4px%2C46px%2C1796px%2C1010px&resize=1600%2C900",
          "publishedAt": "2023-06-21T23:30:58Z",
          "content": "And just like that … 25 years have gone by since Sex and the City first made its television debut. Starring Sarah Jessica Parker (Carrie Bradshaw), Kim Cattrall (Samantha Jones), Kristin Davis (Charl… [+3422 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Aine Fox",
          "title": "‘Bittersweet’ Windrush 75th anniversary marked",
          "description": "Events will be held at the Port of Tilbury where the Empire Windrush ship arrived on June 22 1948.",
          "url": "https://www.independent.co.uk/news/uk/amber-rudd-caribbean-windsor-itv-news-the-king-b2361955.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/22/00/a743b6ebf7a5e656c080edc9d4ad48eaY29udGVudHNlYXJjaGFwaSwxNjg3NDUxODY4-2.72697937.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-21T23:01:17Z",
          "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nCommemorations and celebrations are taking place acr… [+3543 chars]"
        },
        {
          "source": { "id": null, "name": "Mirror Online" },
          "author": "mirrornews@mirror.co.uk (Sara Wallis)",
          "title": "Faces of Windrush generation immortalised by portraits as King Charles lauds 'pioneers'",
          "description": "Marking the 75th anniversary of HMT Empire Windrush docking in Essex, a BBC documentary will follow the project, which King Charles III has commemorated in a book",
          "url": "https://www.mirror.co.uk/news/royals/faces-windrush-generation-immortalised-portraits-30292821",
          "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30292896.ece/ALTERNATES/s1200/1_new-exclusive-social-Recovered-copy.jpg",
          "publishedAt": "2023-06-21T23:01:00Z",
          "content": "The King is celebrating Windrush pioneers with a series of portraits commissioned for the Royal Court Collection.\r\n Marking the 75th anniversary of HMT Empire Windrush docking in Essex, a BBC documen… [+4732 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Kevin Liptak,Arlette Saenz,Jennifer Hansler",
          "title": "Biden rolls out the red carpet for Modi for a visit fraught with trade-offs",
          "description": "Welcoming Indian Prime Minister Narendra Modi to the White House this week for a state visit -- the most elevated form of American diplomacy -- will require President Joe Biden to make certain trade-offs.",
          "url": "https://www.cnn.com/2023/06/21/politics/joe-biden-narendra-modi-visit/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230621090523-01-modi-biden.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-06-21T22:00:06Z",
          "content": "Welcoming Indian Prime Minister Narendra Modi to the White House this week for a state visit the most elevated form of American diplomacy will require President Joe Biden to make certain trade-offs.\r… [+8258 chars]"
        },
        {
          "source": { "id": null, "name": "Japan Today" },
          "author": null,
          "title": "MLB views UK as a gateway to European growth, with eyes on Paris and Germany",
          "description": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands? Major League Baseball has big plans for Europe, starting with an English reintroduction to the sport this weekend when the St…",
          "url": "https://japantoday.com/category/sports/mlb-views-the-uk-as-a-gateway-to-european-growth-with-eyes-on-paris-and-germany",
          "urlToImage": null,
          "publishedAt": "2023-06-21T21:37:35Z",
          "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+6090 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Ian Herbert",
          "title": "IAN HERBERT: Forget Bazball, this was brain dead!",
          "description": "IAN HERBERT: 'If you fail, you fail,' was what Ben Stokes said before the Test began. A philosophy to amuse many a sacked football manager. A philosophy which does not really stack up.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12220411/IAN-HERBERT-Forget-Bazball-brain-dead.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/21/72389071-0-image-a-64_1687379664213.jpg",
          "publishedAt": "2023-06-21T21:32:01Z",
          "content": "A match of the utmost sublimity, of course. Contrasts in philosophies of style and captaincy. Cricket that ebbed and flowed and sparkled like a river beneath the bluest summer sky, turning Skys intro… [+6351 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Nasser Hussain, David Lloyd, Paul Newman, Lawrence Booth",
          "title": "TEN BURNING ASHES ISSUES: Time to drop Moeen Ali? And Do England need to re-think Bazball?",
          "description": "Mail Sport experts - former England captain Nasser Hussain, former England coach David Lloyd, Cricket Correspondent Paul Newman and Wisden editor Lawrence Booth - tackle 10 key questions.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12220459/TEN-BURNING-ASHES-ISSUES-Time-drop-Moeen-Ali-England-need-think-Bazball.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/22/72391557-0-image-a-14_1687383219386.jpg",
          "publishedAt": "2023-06-21T21:30:49Z",
          "content": "An epic first Test ended with Australia just about getting over the line to take a 1-0 lead in the Ashes. \r\nPat Cummings and Nathan Lyon steered the tourists to victory with the bat, scoring an unbea… [+13486 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Kate Cross",
          "title": "KATE CROSS: Australia hold no fear after dealing with this parasite in my intestine",
          "description": "KATE CROSS - ENGLAND PACE BOWLER: An Ashes series is always that little bit extra special and this one is especially so. We are all champing at the bit to get going now.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12220191/KATE-CROSS-Australia-hold-no-fear-dealing-parasite-intestine.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/21/72388399-0-image-a-47_1687378685586.jpg",
          "publishedAt": "2023-06-21T21:30:46Z",
          "content": "An Ashes series is always that little bit extra special and this one is especially so. We are all champing at the bit to get going now.\r\nA five-day Test at Trent Bridge to kick it all off today is pa… [+5649 chars]"
        },
        {
          "source": { "id": "usa-today", "name": "USA Today" },
          "author": "Cory Woodroof",
          "title": "Starling Marte's golf-like swing turned an absurdly low pitch into a 2-run double",
          "description": "Mets outfielder Starling Marte defied the laws of gravity with this astounding hit on a low ball.",
          "url": "https://ftw.usatoday.com/2023/06/starling-marte-mets-low-pitch-hit-astros",
          "urlToImage": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2023/06/marte.png?w=1024&h=576&crop=1",
          "publishedAt": "2023-06-21T20:55:32Z",
          "content": "New York Mets outfielder Starling Marte didn’t let the laws of gravity keep him from hammering a ball that was coming his way on Wednesday.\r\nOn a very low Houston Astros pitch that went on a downward… [+1171 chars]"
        },
        {
          "source": { "id": null, "name": "Elite Daily" },
          "author": "Adrianne Reece, and ,Michele Mendez",
          "title": "Taylor Swift’s ‘The Eras’ Tour: New Dates, Tickets, & Opening Act",
          "description": "Taylor Swift just announced 42 new international dates for her 2024 'The Eras Tour.' Here's who opening for the singer next year and where fans can register for tickets.",
          "url": "https://www.elitedaily.com/entertainment/taylor-swift-the-eras-tour-new-dates-tickets-opening-acts",
          "urlToImage": "https://imgix.bustle.com/uploads/image/2023/6/21/3dc25eff-bf0d-4e5f-8e5b-94ee4c528df7-tay001.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
          "publishedAt": "2023-06-21T20:55:19Z",
          "content": "Swfities, this is not a drill: Taylor Swift has extended her Eras Tour again. On June 20, the singer added 45 (!) international dates across Europe, Asia, and Australia. These exciting add-ons come n… [+6640 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "T20 Blast: Smeed fires Somerset past Glamorgan",
          "description": "Will Smeed top scored for south group leaders Somerset, who powered past Glamorgan in Cardiff.",
          "url": "https://www.bbc.co.uk/sport/cricket/65980063",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1204F/production/_130170837_smead_huw1.jpg",
          "publishedAt": "2023-06-21T20:32:05Z",
          "content": "Will Smeeds 66 helped Somerset past Glamorgan at Sophia Gardens.\r\n<table><tr><th>Vitality Blast, South Group: Glamorgan v Somerset</th></tr>\r\n<tr><td>Glamorgan 171 (19.3 overs): Carlson 71, Van der G… [+4082 chars]"
        },
        {
          "source": { "id": null, "name": "Hplusmagazine.com" },
          "author": "abhishek",
          "title": "Enjoy Essentially The Most Rewarding Expertise With Big 5 On 1xbit",
          "description": "Enjoy Essentially The Most Rewarding Expertise With Big 5 On 1xbit There are many reasons why the operator grew to prominence that quickly, and above all, that is mainly owing to the intensive range of markets to wager on. The...",
          "url": "https://hplusmagazine.com/2023/06/21/enjoy-essentially-the-most-rewarding-expertise-8/",
          "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
          "publishedAt": "2023-06-21T20:26:53Z",
          "content": "There are many reasons why the operator grew to prominence that quickly, and above all, that is mainly owing to the intensive range of markets to wager on. The minimal deposit that you can place in y… [+48510 chars]"
        },
        {
          "source": { "id": null, "name": "Hplusmagazine.com" },
          "author": "abhishek",
          "title": "Mild Up The Xmas Tree With 1xbit And Win This Christmas",
          "description": "Mild Up The Xmas Tree With 1xbit And Win This Christmas Nonetheless, some sites like 1xBit nonetheless register with regulatory our bodies. However, information about the official licence of 1xBit isn’t on the net site, making it hard to confirm....",
          "url": "https://hplusmagazine.com/2023/06/21/mild-up-the-xmas-tree-with-1xbit-and-win-this-2/",
          "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
          "publishedAt": "2023-06-21T20:13:09Z",
          "content": "Nonetheless, some sites like 1xBit nonetheless register with regulatory our bodies. However, information about the official licence of 1xBit isn’t on the net site, making it hard to confirm. We don’t… [+34353 chars]"
        },
        {
          "source": { "id": null, "name": "Hplusmagazine.com" },
          "author": "abhishek",
          "title": "How 1xbet Hopes To Seize Ugandan Market",
          "description": "How 1xbet Hopes To Seize Ugandan Market Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing...",
          "url": "https://hplusmagazine.com/2023/06/21/how-1xbet-hopes-to-seize-ugandan-market-128/",
          "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
          "publishedAt": "2023-06-21T20:09:08Z",
          "content": "Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing up and joining the positioning. You … [+37314 chars]"
        },
        {
          "source": { "id": null, "name": "Hplusmagazine.com" },
          "author": "abhishek",
          "title": "How 1xbet Hopes To Seize Ugandan Market",
          "description": "How 1xbet Hopes To Seize Ugandan Market Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing...",
          "url": "https://hplusmagazine.com/2023/06/21/how-1xbet-hopes-to-seize-ugandan-market-128-2/",
          "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
          "publishedAt": "2023-06-21T20:09:08Z",
          "content": "Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing up and joining the positioning. You … [+37314 chars]"
        },
        {
          "source": { "id": null, "name": "NBCSports.com" },
          "author": "Associated Press",
          "title": "Jake Fraley’s homer sends the surging Reds to their 11th straight win, 5-3 over the Rockies",
          "description": "Jake Fraley hit a tiebreaking, two-run homer in the eighth inning, and the Cincinnati Reds extended their majors-best winning streak to 11 games, rallying past the Colorado Rockies 5-3 on Wednesday for a three-game sweep.",
          "url": "https://mlb.nbcsports.com/2023/06/21/jake-fraleys-homer-sends-the-surging-reds-to-their-11th-straight-win-5-3-over-the-rockies/",
          "urlToImage": "https://mlb.nbcsports.com/wp-content/uploads/sites/7/2023/06/USATSI_20925903.jpg",
          "publishedAt": "2023-06-21T20:08:49Z",
          "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+5919 chars]"
        },
        {
          "source": { "id": null, "name": "Hplusmagazine.com" },
          "author": "abhishek",
          "title": "1xbet Bonus 2023",
          "description": "1xbet Bonus 2023 After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,250,000 UGX, you...",
          "url": "https://hplusmagazine.com/2023/06/21/1xbet-bonus-2023/",
          "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
          "publishedAt": "2023-06-21T20:01:40Z",
          "content": "After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,… [+41242 chars]"
        },
        {
          "source": { "id": null, "name": "Hplusmagazine.com" },
          "author": "abhishek",
          "title": "1xbet Bonus 2023",
          "description": "1xbet Bonus 2023 After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,250,000 UGX, you...",
          "url": "https://hplusmagazine.com/2023/06/21/1xbet-bonus-2023-2/",
          "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
          "publishedAt": "2023-06-21T20:01:40Z",
          "content": "After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,… [+41242 chars]"
        },
        {
          "source": { "id": null, "name": "Mirror Online" },
          "author": "mirrornews@mirror.co.uk (Russell Myers)",
          "title": "Prince William hails Windrush generation as he meets one of first arrivals 75 years ago",
          "description": "Marking the anniversary of the Empire Windrush docking at Tilbury, the hour-long programme will tell the story of those who left the Caribbean for a new life in Britain",
          "url": "https://www.mirror.co.uk/news/uk-news/prince-william-hails-windrush-generation-30292445",
          "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30292945.ece/ALTERNATES/s1200/1_new-exclusive-social-Recovered-copy.jpg",
          "publishedAt": "2023-06-21T20:00:19Z",
          "content": "Prince William hailed the Windrush generation as he met one of the first arrivals as part of a Daily Mirror-backed Pride of Britain documentary.\r\nMarking the 75th anniversary of the Empire Windrush d… [+2420 chars]"
        },
        {
          "source": { "id": null, "name": "New Zealand Herald" },
          "author": "Stuart Whitaker",
          "title": "Te Puke retailer Don Bayliss remembered as a larger-than-life character",
          "description": "His funeral was one of the biggest the town has ever seen.",
          "url": "https://www.nzherald.co.nz/bay-of-plenty-times/news/don-bayliss-remembered-as-a-larger-than-life-character/BXNAYOG4DRGJTGS6FJ3MB4ELYQ/",
          "urlToImage": "https://www.nzherald.co.nz/resizer/E_6EgBYIS-bjIC24P1wuMuYc2-s=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/JT6SWQA3BVDA3D7EJEUTWCOWRY.JPG",
          "publishedAt": "2023-06-21T20:00:00Z",
          "content": "Don Bayliss on the occasion of his second retirement as owner of Don Bayliss Clothing in Te Puke. Photo / Stuart WhitakerWe lost one of lifes characters really - and thats sad because I dont know if … [+5296 chars]"
        },
        {
          "source": { "id": null, "name": "Rediff.com" },
          "author": "sports@rediff.co.in (Rediff Sports)",
          "title": "Steve Waugh, Sania Mirza attend opening ceremony",
          "description": "Dubai witnessed a historic moment as the inaugural edition of the Global Chess League was held on Thursday.",
          "url": "https://www.rediff.com/sports/report/global-chess-league-steve-waugh-sania-mirza-attend-opening-ceremony/20230622.htm",
          "urlToImage": "https://im.rediff.com/sports/2023/jun/21chess-league.jpg",
          "publishedAt": "2023-06-21T19:58:54Z",
          "content": "Dubai witnessed a historic moment in the world of chess as the inaugural edition of the Global Chess League officially opened with a dazzling ceremony at the Ritz-Carlton Hotel.\r\nChess enthusiasts, d… [+1580 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Mukta Lad",
          "title": "Cannes Lions 2023: India bags 6 medals on second day",
          "description": "FCB Group also won two silvers in the entertainment category - FCB Interface won for Navneet's 'TR For Teacher' campaign in the 'Entertainment, Social Behaviour & Cultural Insight' category, and FCB India and FCB Kinnect won the other silver in the 'Entertain…",
          "url": "https://economictimes.indiatimes.com/news/international/world-news/cannes-lions-2023-india-bags-6-medals-on-second-day/articleshow/101172089.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101172096,width-1070,height-580,imgsize-630536,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-06-21T19:38:48Z",
          "content": "Indian agencies bagged six medals on day 2 of the International Festival of Creativity, held in Cannes. Of the six wins, FCB India's 'Untangling the Politics of Hair' for Stir won a gold in the 'Indu… [+1604 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Richard Gibson",
          "title": "RICHARD GIBSON - INSIDE COUNTY CRICKET: Veteran Steven Croft blasts his first T20 century",
          "description": "RICHARD GIBSON:",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12220297/RICHARD-GIBSON-INSIDE-COUNTY-CRICKET-Veteran-Steven-Croft-blasts-T20-century.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/20/72386439-0-image-a-37_1687375927408.jpg",
          "publishedAt": "2023-06-21T19:32:43Z",
          "content": "Steven Crofts maiden Twenty20 hundred at the age of 38 came about more by circumstance than design.\r\nCrofts name was illuminated on a Lancashire scorecard full of stars when he crunched a 52-ball 101… [+7059 chars]"
        },
        {
          "source": { "id": null, "name": "Sky Sports" },
          "author": null,
          "title": "Barcelona agree deal to sign Gundogan from Man City",
          "description": "Barcelona have agreed a deal to sign Ilkay Gundogan from Manchester City on a free transfer, with the midfielder set to pen a three-year contract.",
          "url": "https://www.skysports.com/football/news/11095/12907277/ilkay-gundogan-barcelona-agree-deal-to-sign-man-city-midfielder-on-free-transfer",
          "urlToImage": "https://e0.365dm.com/23/06/1600x900/skysports-ilkay-gundogan-erling-haaland_6177221.jpg?20230603164158",
          "publishedAt": "2023-06-21T19:15:00Z",
          "content": "Barcelona have agreed a deal to sign Ilkay Gundogan from Manchester City on a free transfer, with the midfielder set to pen a three-year contract.\r\nThe move has not been officially announced by eithe… [+1445 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Ali Martin",
          "title": "No need to panic but England have big decisions to make for Lord’s",
          "description": "Losing the first Ashes Test in such a manner will highlight the failings even though a lot went rightSo, where do England go from here? After coming up short in a teeming, undulating first Ashes Test at Edgbaston, one that left combatants and spectators drain…",
          "url": "https://www.theguardian.com/sport/2023/jun/21/england-big-decisions-lords-ashes-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/40e8111db31cb17e3b23f2441b9d44246b100ee9/0_134_3101_1861/master/3101.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=26f397996c88c66f79ffa360088a0bb4",
          "publishedAt": "2023-06-21T19:00:48Z",
          "content": "So, where do England go from here? After coming up short in a teeming, undulating first Ashes Test at Edgbaston, one that left combatants and spectators drained but richer for it, the smart-alec answ… [+12491 chars]"
        },
        {
          "source": { "id": null, "name": "City A.M." },
          "author": "Matt Hardy",
          "title": "‘The WPL is out ahead but The Hundred can be next best thing in women’s cricket’",
          "description": "The Hundred may be approaching its third season this summer but it has been blown off course by the hurricane that is the Women’s Premier League (WPL). The WPL is the women’s equivalent to the Indian Premier League (IPL), cricket’s biggest global franchise pr…",
          "url": "https://www.cityam.com/the-wpl-is-out-ahead-but-the-hundred-can-be-next-best-thing-in-womens-cricket/",
          "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/06/GettyImages-1420535720.jpg",
          "publishedAt": "2023-06-21T19:00:00Z",
          "content": "Wednesday 21 June 2023 8:00 pm\r\nThe Hundred may be approaching its third season this summer but it has been blown off course by the hurricane that is the Womens Premier League (WPL). (Photo by Alex D… [+4120 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": null,
          "title": "Nuance over bazball, aggression tamed",
          "description": "Named after their coach Brendon 'Baz' McCullum, bazball is aggressive play hitched to a mental fearlessness that pushes for victory, no matter what the conditions are. It has reaped the side dividends, with a dramatic roster of victories.",
          "url": "https://economictimes.indiatimes.com/opinion/just-in-jest/nuance-over-bazball-aggression-tamed/articleshow/101171840.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101171844,width-1070,height-580,imgsize-47996,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-06-21T18:57:54Z",
          "content": "In the world of easy binaries, the world is divided into two sorts of people - those who are gung-ho, and those who are 'Gunga Din'. The first pertains to folks who are unthinkingly enthusiastic and … [+1249 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": "Valkerie Baynes",
          "title": "Lauren Filer backed to give England 'wicket-taking' edge",
          "description": "Heather Knight hopes Dukes ball will aid England's quest for 20 wickets",
          "url": "https://www.espncricinfo.com/story/heather-knight-lauren-filer-england-test-debut-wicket-taking-1382764",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/362300/362395.6.jpg",
          "publishedAt": "2023-06-21T18:51:57Z",
          "content": "NewsHeather Knight hopes Dukes ball will aid England's quest for 20 wickets\r\nHeather Knight addresses the media  •  PA Images/Getty\r\nWith nearly 15,000 people set to attend over the course of the fiv… [+4696 chars]"
        },
        {
          "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
          "author": "Brittany Carter",
          "title": "'I get grumpy when people say that': The key change that could define the Women's Ashes series",
          "description": "You've heard of Bazball, but what about Jonball? Australia and England are set to fire in the upcoming Women's Ashes series.",
          "url": "https://www.abc.net.au/news/2023-06-22/key-change-that-could-define-2023-womens-ashes-series/102507146",
          "urlToImage": "https://live-production.wcms.abc-cdn.net.au/ae20e96d744aa731e6b9d99d35b53369?impolicy=wcms_crop_resize&cropH=2625&cropW=4666&xPos=0&yPos=147&width=862&height=485",
          "publishedAt": "2023-06-21T18:36:21Z",
          "content": "We are days out from the first ball of the Women's Ashes, and it'll be another big commitment from fans of the Australian team to follow along throughout the night.\r\nCricket diehards were tested with… [+11785 chars]"
        },
        {
          "source": { "id": null, "name": "Business Standard" },
          "author": null,
          "title": "CWC Qualifier Day 4 Report: Scintillating Scotland lit up the tournament",
          "description": "ICC CWC Qualifier 2023: Michael Leask played a blinder as Scotland defeated arch-rivals Ireland by one wicket in a last-ball finish at the Cricket World Cup Qualifier. In a West Asian derby, Oman beat UAE comprehensively",
          "url": "https://www.business-standard.com/cricket/news/cwc-qualifier-day-4-report-scintillating-scotland-lit-up-the-tournament-123062101357_1.html",
          "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/21/full/1687370416-6331.jpg",
          "publishedAt": "2023-06-21T18:20:13Z",
          "content": "Michael Leask wins the game for Scotland with a 91* against Ireland at the CWC Qualifier 2023. Photo: Cricket Scotalnd"
        },
        {
          "source": { "id": null, "name": "Livemint" },
          "author": "mint",
          "title": "Merger should go through whether I’m the CEO or not: Punit Goenka",
          "description": "In his first interview since announcing the merger in December 2021, Punit Goenka speaks about the commitment of both Zee and Sony towards the merger and the way ahead for the company",
          "url": "https://www.livemint.com/companies/merger-should-go-through-whether-i-m-the-ceo-or-not-punit-goenka-11687370950315.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/21/600x338/2-0-1275529496-punitgoenka2-0_1679599960353_1687371330133.JPG",
          "publishedAt": "2023-06-21T18:15:56Z",
          "content": "MUMBAI : Punit Goenka, the managing director and chief executive of Zee Entertainment Enterprises Ltd, has his hands fullon one end, he is working on completing the companys merger with Sony Pictures… [+10751 chars]"
        },
        {
          "source": { "id": null, "name": "WWD" },
          "author": "Msocha1",
          "title": "Walter Van Beirendonck Men’s Spring 2024",
          "description": "The Belgian designer explored the specter of generative AI through wonky clothes.",
          "url": "https://wwd.com/runway/mens-spring-2024/paris/walter-van-beirendonck/review/",
          "urlToImage": "https://wwd.com/wp-content/uploads/2023/06/walter-van-beirendonck-men-spring-2024-paris-001.jpg?w=1024",
          "publishedAt": "2023-06-21T18:14:17Z",
          "content": "If you tasked generative AI with approximating Walter Van Beirendonck spring 2024 men’s collection, among this human’s suggested list of prompts: cricket padding, blimps, cycling jerseys, frothy wedd… [+1283 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": "NDTV Sports Desk",
          "title": "Fire At Harare Sports Club, ICC Examines Venue For Further WC Qualifiers",
          "description": "The venue is slated to host four more Super Six games, three more group matches, and the championship game on July 9.",
          "url": "https://sports.ndtv.com/cricket/fire-at-cricket-world-cup-qualifier-venue-in-harare-report-4141664",
          "urlToImage": "https://c.ndtvimg.com/2023-06/tiafa95o_harare-sports-city-twitter_625x300_22_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-06-21T18:07:11Z",
          "content": "A fire broke out at the Harare Sports Club, one of the two venues for the ongoing ICC Cricket World Cup qualifiers matches, on Tuesday, Zimbabwe Cricket confirmed in a statement. A quick response fro… [+1980 chars]"
        },
        {
          "source": { "id": null, "name": "Android Authority" },
          "author": "Ryan Whitwam",
          "title": "Motorola Moto G Stylus 5G (2023) review: Should you buy it?",
          "description": "The 2023 Moto G Stylus 5G has a solid 1080p LCD and cool gesture control, but it all comes down to how much you want a stylus.",
          "url": "https://www.androidauthority.com/motorola-moto-g-stylus-5g-2023-review-3335628/",
          "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/06/Moto-G-Stylus-5G-8.jpg",
          "publishedAt": "2023-06-21T18:00:38Z",
          "content": "If you want a stylus and 5G support without spending an arm and a leg, the Moto G Stylus 5G (2023) is a decent option with solid performance and a good display.\r\nMotorola Moto G Stylus 5G (2023) revi… [+10891 chars]"
        },
        {
          "source": { "id": null, "name": "Deadspin" },
          "author": "Sean Beckwith",
          "title": "Not sure the UK will find MLB any more entertaining than the US",
          "description": "Serious question: If you underwent a bunch of plastic surgery, how eager would you be to show off the new goods? Even though the boob job is lopsided, the calf implants didn’t take, and your face literally can’t smile through the botox, you’d be on the first …",
          "url": "https://deadspin.com/st-louis-cardinals-cubs-mlb-england-west-ham-1850561446",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/16e34bdc55d0137065e46b3848727ba6.jpg",
          "publishedAt": "2023-06-21T17:54:00Z",
          "content": "Serious question: If you underwent a bunch of plastic surgery, how eager would you be to show off the new goods? Even though the boob job is lopsided, the calf implants didnt take, and your face lite… [+4449 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": "Valkerie Baynes",
          "title": "Alyssa Healy nervous but excited for 'most hyped Women's Ashes'",
          "description": "Test selection will come down to \"a couple of calls here and there\", says Australia captain",
          "url": "https://www.espncricinfo.com/story/australia-alyssa-healy-nervous-excited-women-s-ashes-1382756",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/362300/362394.6.jpg",
          "publishedAt": "2023-06-21T17:39:07Z",
          "content": "NewsTest selection will come down to \"a couple of calls here and there\", says Australia captain\r\nAlyssa Healy walks out to Australia middle practice at Trent Bridge  •  PA Images via Getty Images\r\nAl… [+5043 chars]"
        },
        {
          "source": { "id": null, "name": "Telegraph.co.uk" },
          "author": "Fiona Tomas",
          "title": "Heather Knight’s England to embrace ‘Bazball’ in women’s Ashes",
          "description": "Hosts know they will have to be at their best if they are to beat formidable Australia side that has reigned supreme in all formats",
          "url": "https://www.telegraph.co.uk/cricket/2023/06/21/heather-knights-england-to-embrace-bazball-in-womens-ashes/",
          "urlToImage": "https://www.telegraph.co.uk/content/dam/cricket/2023/06/21/TELEMMGLPICT000339999617_16873679064280_trans_NvBQzQNjv4BqF63Hcb6k_7i1LXEFJido7cHMj960fXL19vqsQgw6fmc.jpeg?impolicy=logo-overlay",
          "publishedAt": "2023-06-21T17:33:01Z",
          "content": "It is a sentiment shared by Clare Connor, the ECBs managing director of womens cricket. England women have got the opportunity to play a positive style of cricket alongside the approach were used to … [+2108 chars]"
        },
        {
          "source": { "id": null, "name": "Bleeding Cool News" },
          "author": "Rich Johnston",
          "title": "Madam Satan in Archie Comics' September 2023 Solicits",
          "description": "Archie Comics has Madam Satan from their Chilling Adventures Presents line celebrating her 83rd birthday this year, and not looking a day over 76. Here is their September 2023 solicits and solicitations. CHILLING ADVENTURES PRESENTS… MADAM SATAN: HELL ON EART…",
          "url": "https://bleedingcool.com/comics/madam-satan-in-archie-comics-september-2023-solicits/",
          "urlToImage": "https://bleedingcool.com/wp-content/uploads/2023/06/MadamSatanHellOnEarthVar-1200x628.jpg",
          "publishedAt": "2023-06-21T17:27:09Z",
          "content": "Posted in: Comics | Tagged: archie, madam satan\r\nArchie Comics have Madam Satan from their Chilling Adventures Presnets line in their September 2023 solicits and solicitations.\r\nArchie Comics has Mad… [+5764 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "David Charlesworth",
          "title": "The greatest show and spotlight on bowlers – Women’s Ashes talking points",
          "description": "Australia are without regular captain Meg Lanning due to medical issues.",
          "url": "https://www.independent.co.uk/sport/cricket/australia-england-kate-cross-ashes-ben-stokes-b2361809.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/21/18/16f0b5b9c778a633fd28dd3672f58473Y29udGVudHNlYXJjaGFwaSwxNjg3NDU0MjI4-2.72688105.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-21T17:25:13Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nEngland will attempt to end a miserable pas… [+3751 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Lewis Browning",
          "title": "Pat Cummins' wife reveals she watched dramatic first Ashes Test win in a lay-by in Yorkshire",
          "description": "Arriving at the crease with his side seven wickets down and still needing 71 runs to win the game, Cummins hit a not out 44 and enjoyed an unbeaten partnership of 55 with Nathan Lyon.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12219929/Pat-Cummins-wife-reveals-watched-dramatic-Ashes-Test-win-lay-Yorkshire.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/18/72383273-0-image-a-8_1687368146674.jpg",
          "publishedAt": "2023-06-21T17:23:41Z",
          "content": "Pat Cummins' wife has revealed the bizarre location she watched her husband steer Australia to victory in the first Ashes Test.\r\nCummins took his side over the line at Edgbaston on Tuesday in what wa… [+2300 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Rory Dollard",
          "title": "England approach ‘validated’ despite defeat in opening Ashes Test, says Brendon McCullum",
          "description": "England drove the game forward for the majority of five gripping days at Edgbaston but still find themselves 1-0 down with four to play",
          "url": "https://www.independent.co.uk/sport/cricket/brendon-mccullum-ben-stokes-pat-cummins-edgbaston-jonny-bairstow-b2361800.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/21/18/a4eb4019c0a4d1e925c785b027417a9aY29udGVudHNlYXJjaGFwaSwxNjg3NDMwNTI4-2.72643796.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-21T17:15:20Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nHead coach Brendon McCullum insisted Englan… [+4201 chars]"
        },
        {
          "source": { "id": "the-irish-times", "name": "The Irish Times" },
          "author": "Simon Burnton",
          "title": "Brendon McCullum defends tactics and blames England defeat on bad luck",
          "description": "Head coach says his side will double down on approach for second Test at Lord's",
          "url": "https://www.irishtimes.com/sport/2023/06/21/brendon-mccullum-defends-tactics-and-blames-england-defeat-on-bad-luck/",
          "urlToImage": "https://www.irishtimes.com/resizer/TFdyVHWMZILgWFtRBvO3zQyhElo=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/STVIME6GQSBWXUJWDGRC6YJUTM.jpg",
          "publishedAt": "2023-06-21T17:11:10Z",
          "content": "Brendon McCullum has insisted that Englands thrilling, narrow defeat against Australia in the first Ashes Test has not tarnished his teams freewheeling approach to the game.\r\nMcCulllum said that desp… [+4460 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Pa Sport Staff",
          "title": "Robertson appreciative as Newcastle remember Tiote – Wednesday’s sporting social",
          "description": "Stars also turn out at the Louis Vuitton Fashion Show.",
          "url": "https://www.independent.co.uk/sport/andy-robertson-newcastle-aston-villa-manchester-united-billy-gilmour-b2361798.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/21/18/2a0a523d8503089bfbd72aa2dd6590e0Y29udGVudHNlYXJjaGFwaSwxNjg3NDUzMzky-2.72692792.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-21T17:10:17Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nSports stars and clubs across the world con… [+701 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": "Matt Roller",
          "title": "Middlesex lead queue to sign Derbyshire's Leus du Plooy",
          "description": "Head coach Mickey Arthur hopes Derbyshire captain can be persuaded to stay",
          "url": "https://www.espncricinfo.com/story/derbyshire-leus-du-plooy-middlesex-1382748",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/361700/361763.6.jpg",
          "publishedAt": "2023-06-21T17:05:22Z",
          "content": "NewsHead coach Mickey Arthur hopes Derbyshire captain can be persuaded to stay\r\nLeus du Plooy is Derbyshire's captain  •  Getty Images\r\nLeus du Plooy is considering an offer from Middlesex as he weig… [+2538 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": "Matt Roller",
          "title": "Brendon McCullum: Edgbaston defeat 'validated our style of play'",
          "description": "England coach says team will likely ramp up aggression for second Test at Lord's",
          "url": "https://www.espncricinfo.com/story/brendon-mccullum-australia-edgbaston-defeat-validated-england-style-1382737",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/360800/360883.6.jpg",
          "publishedAt": "2023-06-21T17:05:22Z",
          "content": "NewsEngland coach says team will likely ramp up aggression for second Test at Lord's\r\nBrendon McCullum and Ben Stokes will be sticking to their methods  •  Alex Davidson/Getty Images\r\nBrendon McCullu… [+4117 chars]"
        },
        {
          "source": { "id": null, "name": "FRANCE 24 English" },
          "author": "FRANCE24",
          "title": "England coach McCullum has 'no regrets' after Australia loss",
          "description": "Defeat left England 1-0 down in the five-match Ashes contest as they bid for a first series win over arch rivals Australia since 2015.\n\nEngland were denied victory in Birmingham by an unbroken ninth-wicket stand of 55 between Australia captain Pat Cummins and…",
          "url": "https://www.france24.com/en/live-news/20230621-england-coach-mccullum-has-no-regrets-after-australia-loss",
          "urlToImage": "https://s.france24.com/media/display/a4ed695e-1055-11ee-98f0-005056a90284/w:1280/p:16x9/199578f603bb758617728aa8557f1cf6d0c49c60.jpg",
          "publishedAt": "2023-06-21T17:04:12Z",
          "content": "Birmingham (United Kingdom) (AFP) England coach Brendon McCullum insisted he had \"no regrets\" about his side's tactics after a stunning two-wicket loss to Australia in the first Test at Edgbaston. De… [+2687 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "England will go 'harder' at Australia - McCullum",
          "description": "Coach Brendon McCullum says England will go \"harder\" at Australia after their agonising two-wicket defeat in the first Ashes Test at Edgbaston.",
          "url": "https://www.bbc.co.uk/sport/cricket/65934474",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AA88/production/_130165634_brendonmccullum.jpg",
          "publishedAt": "2023-06-21T17:02:20Z",
          "content": "Coach Brendon McCullum says England will go \"harder\" at Australia after their agonising two-wicket defeat in the first Ashes Test at Edgbaston.\r\nNinth-wicket pair Pat Cummins and Nathan Lyon got Aust… [+3013 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Paul Newman",
          "title": "Brendon McCullum insists he has NO regrets over England's approach in first Ashes Test",
          "description": "The England coach had no regrets when the dust settled on what will be remembered as a classic opening Ashes contest that England could and really should have won on the final day.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12219555/Brendon-McCullum-insists-NO-regrets-Englands-approach-Ashes-Test.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/17/72381303-0-image-a-19_1687365560628.jpg",
          "publishedAt": "2023-06-21T17:00:49Z",
          "content": "Englands sluggers may have been dropped to the canvas by more orthodox boxers at Edgbaston but Brendon McCullum insisted on Wednesday they will keep on swinging when they attempt to hit back in round… [+4914 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Simon Burnton",
          "title": "Brendon McCullum defends tactics and blames England defeat on bad luck",
          "description": "<ul><li>Australia won first Ashes Test by two wickets at Edgbaston</li><li>‘The way we played, I think it’s validated our style of play’</li></ul>Brendon McCullum has insisted that England’s thrilling, narrow defeat against Australia in the first Ashes Test h…",
          "url": "https://www.theguardian.com/sport/2023/jun/21/cricket-brendon-mccullum-defends-tactics-and-blames-england-defeat-on-bad-luck",
          "urlToImage": "https://i.guim.co.uk/img/media/796b66e045ec6516ab9e5ecab1344b99dc587d0a/0_300_4499_2700/master/4499.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f8c8d8a1d9afa7cef226e789229a6e88",
          "publishedAt": "2023-06-21T17:00:45Z",
          "content": "Brendon McCullum has insisted that Englands thrilling, narrow defeat against Australia in the first Ashes Test has not tarnished his teams freewheeling approach to the game.\r\nMcCulllum said that desp… [+9770 chars]"
        },
        {
          "source": { "id": null, "name": "Mirror Online" },
          "author": "mirrornews@mirror.co.uk (Dean Wilson)",
          "title": "England make selection decision on Jonny Bairstow and Ben Foakes with defiant Ashes vow",
          "description": "England lost a nail-biting first Ashes test against Australia at Edgbaston, with Brendon McCullum fielding questions over his side's approach going into the Lord's meeting next week",
          "url": "https://www.mirror.co.uk/sport/cricket/england-ashes-team-bairstow-foakes-30290200",
          "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30290222.ece/ALTERNATES/s1200/0_FOAKES.jpg",
          "publishedAt": "2023-06-21T17:00:00Z",
          "content": "England are keen to ask the same players to fire up again at Lords in their bid to square the series at the first chance.\r\nThere are no regrets over the team they picked for the opening clash with th… [+3668 chars]"
        },
        {
          "source": { "id": null, "name": "City A.M." },
          "author": "Matt Hardy",
          "title": "Ashes: Fifth day of first Test breaks broadcasting records for Sky Sports",
          "description": "The final day of the pulsating first Ashes Test match between England and Australia broke broadcasting records for Sky Sports. A peak audience of 2.12m watched as Australia batted out the day and chased down 98 runs in the final session to take a 1-0 series l…",
          "url": "https://www.cityam.com/ashes-fifth-day-of-first-test-breaks-broadcasting-records-for-sky-sports/",
          "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/06/GettyImages-1414091530.jpg",
          "publishedAt": "2023-06-21T17:00:00Z",
          "content": "Wednesday 21 June 2023 6:00 pm\r\nThe final day of the pulsating first Ashes Test match between England and Australia broke broadcasting records for Sky Sports. (Photo by Gareth Copley/Getty Images)\r\nT… [+1890 chars]"
        },
        {
          "source": { "id": null, "name": "The Conversation Africa" },
          "author": "Jo Adetunji, Editor",
          "title": "Download our latest e-book: 75 years of Windrush",
          "description": "Experts examine the legacy of the arrival of the ship Empire Windrush and the generation of Caribbean migrants to Britain named after it.",
          "url": "https://theconversation.com/download-our-latest-e-book-75-years-of-windrush-208217",
          "urlToImage": "https://images.theconversation.com/files/533181/original/file-20230621-11329-7lslyr.png?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
          "publishedAt": "2023-06-21T16:52:53Z",
          "content": "June 22 marks 75 years since the arrival of the HMT Empire Windrush at London’s Tilbury Docks. Many were veterans of the second world war, invited to Britain to help rebuild. They brought with them a… [+738 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "Berringhton hails Scots after 'tense' World Cup win over Irish",
          "description": "\"What a game of cricket\" declares captain Richie Berrington after Scotland's final-ball win over Ireland in their opening World Cup Qualifier.",
          "url": "https://www.bbc.co.uk/sport/cricket/65976552",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/8580/production/_130167143_leask.jpg",
          "publishedAt": "2023-06-21T16:44:55Z",
          "content": "Michael Leask hit a four on the final ball to secure victory\r\n<table>\r\n<tr><td>Ireland v Scotland:World Cup Qualifier - Group B, Bulawayo</td></tr><tr><td>Ireland 286-8 (50 overs): Campher 120, Dockr… [+2836 chars]"
        },
        {
          "source": { "id": null, "name": "NBCSports.com" },
          "author": "Associated Press",
          "title": "MASN agrees to payment in dispute over Nationals-Orioles TV rights, AP source says",
          "description": "MASN has agreed to pay the Washington Nationals and Baltimore Orioles around $100 million each following a protracted dispute over the value of the Nationals' television rights from 2012 to 2016.",
          "url": "https://mlb.nbcsports.com/2023/06/21/masn-agrees-to-payment-in-dispute-over-nationals-orioles-tv-rights-ap-source-says/",
          "urlToImage": "https://mlb.nbcsports.com/wp-content/uploads/sites/7/2023/06/USATSI_20497625.jpg",
          "publishedAt": "2023-06-21T16:37:48Z",
          "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+5919 chars]"
        },
        {
          "source": { "id": null, "name": "FREDZONE" },
          "author": "Geordano DOKPO",
          "title": "Les 8 jeux ajoutés sur Xbox Game Pass en Juin 2023",
          "description": "Le mois de juin est arrivé avec de belles nouveautés pour les abonnés du Xbox Game Pass. En effet, Microsoft a déjà confirmé la liste des nouveaux titres qui font leur entrée dans le catalogue de son service d’abonnement au cours de ce mois.  Évidemment, d’au…",
          "url": "https://www.fredzone.org/les-8-jeux-ajoutes-sur-xbox-game-pass-en-juin-2023-rjg174",
          "urlToImage": "https://www.fredzone.org/wp-content/uploads/2023/03/170781667_m_normal_none.jpg",
          "publishedAt": "2023-06-21T16:30:36Z",
          "content": "Le mois de juin est arrivé avec de belles nouveautés pour les abonnés du Xbox Game Pass. En effet, Microsoft a déjà confirmé la liste des nouveaux titres qui font leur entrée dans le catalogue de son… [+2725 chars]"
        },
        {
          "source": { "id": null, "name": "New York Post" },
          "author": "Miles Schachner",
          "title": "Dave Portnoy launches into unhinged cricket rant: ‘Sounds like torture camp’",
          "description": "Dave Portnoy aired all of his cricket grievances on Tuesday.",
          "url": "https://nypost.com/2023/06/21/barstool-sports-dave-portnoy-goes-on-torture-camp-rant-about-cricket/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-2yuicrosz-1687362017565.jpg?quality=75&strip=all&1687347689&w=1024",
          "publishedAt": "2023-06-21T16:25:53Z",
          "content": "Dave Portnoy said he was unprepared to talk about cricket on Tuesday  but then he went on a tirade for the ages.\r\nSpeaking during an appearance on “Piers Morgan Uncensored,” Portnoy debated with form… [+1969 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "TIMESOFINDIA.COM",
          "title": "PCB's likely chairman Zaka Ashraf rejects 'hybrid model' for Asia Cup",
          "description": "Zaka Ashraf, the anticipated incoming chairman of the Pakistan Cricket Board (PCB), has dismissed the \"hybrid model\" proposed by his predecessor, Najam Sethi, for the upcoming Asia Cup.",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/asia-cup/pcbs-likely-chairman-zaka-ashraf-rejects-hybrid-model-for-asia-cup-on-collision-course-with-bcci/articleshow/101170406.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101170417,width-1070,height-580,imgsize-63604,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-06-21T16:24:28Z",
          "content": "Top-5 legends who played 'Bazball' before it even existed"
        },
        {
          "source": { "id": "fox-sports", "name": "Fox Sports" },
          "author": null,
          "title": "MLB views UK as gateway to European growth, with eyes on Paris and Germany",
          "description": "MLB has big plans for Europe, with a reintroduction this weekend when the Cardinals and Cubs square off for a two-game series in London.",
          "url": "https://www.foxsports.com/stories/mlb/mlb-views-uk-as-gateway-to-european-growth-with-eyes-on-paris-and-germany",
          "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/06/1408/814/london-16x9.jpg?ve=1&tl=1",
          "publishedAt": "2023-06-21T16:21:40Z",
          "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+5944 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": "Press Trust of India",
          "title": "Pakistan Board's Incoming Chairman Rejects Asia Cup 'Hybrid Model'",
          "description": "The likely new chairman of PCB Zaka Ashraf has rejected his predecessor Najam Sethi's much-publicised \"hybrid model\" for the upcoming Asia Cup",
          "url": "https://sports.ndtv.com/cricket/pakistan-boards-incoming-chairman-rejects-asia-cup-hybrid-model-4141181",
          "urlToImage": "https://c.ndtvimg.com/2023-06/lk6icvag_zaka-ashraf-806_625x300_21_June_23.jpg",
          "publishedAt": "2023-06-21T16:00:35Z",
          "content": "The likely new chairman of Pakistan Cricket Board (PCB) Zaka Ashraf has rejected his predecessor Najam Sethi's much-publicised \"hybrid model\" for the upcoming Asia Cup, which is slated to be held in … [+3621 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Jack Rathborn",
          "title": "Ben Stokes and England must have ‘no fear’ and stay loyal to Bazball despite Ashes defeat",
          "description": "Ian Bell believes Brendon McCullum will encourage Stokes to continue making aggressive decisions ahead of the second Test at Lord’s",
          "url": "https://www.independent.co.uk/sport/cricket/ashes-england-australia-ben-stokes-ian-bell-b2361735.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/21/08/SEI161028432.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-21T15:59:39Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nIan Bell has tipped England to hold their n… [+2023 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Raf Nicholson at Trent Bridge",
          "title": "England bid to topple Australia and inject ‘bang’ into Women’s Ashes opener",
          "description": "<ul><li>Heather Knight wants ‘team that’s going to take 20 wickets’</li><li>Series opens with standalone Test match</li></ul>Lauren Filer’s ability to “bang the ball in” has earned the pace bowler an unexpected place in Heather Knight’s side for Thursday’s As…",
          "url": "https://www.theguardian.com/sport/2023/jun/21/heather-knight-lauren-filer-cricket-england-australia-womens-ashes-test-trent-bridge",
          "urlToImage": "https://i.guim.co.uk/img/media/62f376ae8d5955060dc62ae7d72343069307446d/0_122_2700_1620/master/2700.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2159a8ad3320d78f7bffdf632e2baa1c",
          "publishedAt": "2023-06-21T15:53:33Z",
          "content": "Lauren Filers ability to bang the ball in has earned the pace bowler an unexpected place in Heather Knights side for Thursdays Ashes Test. The England captain is seeking an aggressive attack that can… [+9861 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "PTI",
          "title": "PCB's likely chairman Zaka Ashraf rejects 'hybrid model' for Asia Cup, on collision course with BCCI",
          "description": "\"The first point is that I had rejected the hybrid model (for Asia Cup) in the past itself - because I do not agree with it. The board of the Asian Cricket Council had decided that it should be held in Pakistan, then we should host it,\" Ashraf said during a p…",
          "url": "https://economictimes.indiatimes.com/news/sports/pcbs-likely-chairman-zaka-ashraf-rejects-hybrid-model-for-asia-cup-on-collision-course-with-bcci/articleshow/101170122.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101170137,width-1070,height-580,imgsize-10562,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-06-21T15:53:05Z",
          "content": "The likely new chairman of Pakistan Cricket Board (PCB) Zaka Ashraf has rejected his predecessor Najam Sethi's much-publicised \"hybrid model\" for the upcoming Asia Cup, which is slated to be held in … [+3636 chars]"
        },
        {
          "source": { "id": null, "name": "Independent.ie" },
          "author": "Online Editors",
          "title": "Ireland’s Cricket World Cup hopes hang by a thread following final ball defeat to Scotland",
          "description": "IRELAND’S hopes of qualifying for the World Cup are hanging by the flimsiest of threads after an astonishing display of hitting by all-rounder Michael Leask took Scotland to a one-wicket victory off the last ball of a thriller in Bulawayo.",
          "url": "https://www.independent.ie/sport/other-sports/cricket/irelands-cricket-world-cup-hopes-hang-by-a-thread-following-final-ball-defeat-to-scotland/a860197639.html",
          "urlToImage": "https://focus.independent.ie/thumbor/RO1lSCLFXdcWN80nbzC8oAOPXWA=/35x0:1965x1286/1930x1286/prod-mh-ireland/4500058d-263d-4dfc-bafc-45c8b058377f/7ce65e41-c547-4498-af2c-7eb9288dc952/480fc93c-3696-40f7-9f18-c73a504ddf6b.jpg",
          "publishedAt": "2023-06-21T15:46:16Z",
          "content": "IRELANDS hopes of qualifying for the World Cup are hanging by the flimsiest of threads after an astonishing display of hitting by all-rounder Michael Leask took Scotland to a one-wicket victory off t… [+38 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Lawrence Booth",
          "title": "With Edgbaston heroics Australia have banished demons of close defeats in previous Ashes series",
          "description": "LAWRENCE BOOTH: It wasn't supposed to be like this. Australia always stood a decent chance of victory, of course - but a close Australian victory? England don't normally lose nail-biters to them.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12219529/With-Edgbaston-heroics-Australia-banished-demons-close-defeats-previous-Ashes-series.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/16/72377865-0-image-a-100_1687361914535.jpg",
          "publishedAt": "2023-06-21T15:44:12Z",
          "content": "It wasnt supposed to be like this. Australia always stood a decent chance of victory, of course but a close Australian victory? Because whatever Ashes indignities England have suffered down the years… [+5032 chars]"
        },
        {
          "source": { "id": null, "name": "City A.M." },
          "author": "Matt Hardy",
          "title": "Women’s Ashes: Time for England to seize their moment in spotlight",
          "description": "England’s cricketers have been urged to use the Women’s Ashes to seize their moment and join their football and rugby counterparts in the national spotlight.  More than 80,000 fans are expected to pack into seven venues in six cities for this year’s Women’s A…",
          "url": "https://www.cityam.com/womens-ashes-time-for-england-to-seize-their-moment-in-spotlight/",
          "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/06/GettyImages-1500285859-1.jpg",
          "publishedAt": "2023-06-21T15:43:21Z",
          "content": "Wednesday 21 June 2023 4:43 pm\r\nEnglands cricketers have been urged to use the Womens Ashes to seize their moment and join their football and rugby counterparts in the national spotlight. (Photo by G… [+2505 chars]"
        },
        {
          "source": { "id": null, "name": "Aajtak.in" },
          "author": "aajtak.in",
          "title": "चैम्पियन ने चैम्पियन की तरह किया प्रहार... टीम इंडिया सीखे कैसे हासिल होता है टारगेट",
          "description": "एशेज सीरीज के पहले टेस्ट मैच में इंग्लैंड ने 281 रनों का टारगेट दिया था, जिसे ऑस्ट्रेलियाई टीम ने काफी संघर्ष के बाद 8 विकेट गंवाकर हासिल कर लिया. इस मैच के हीरो उस्मान ख्वाजा और पैट कमिंस रहे, जिनके आगे मेजबान इंग्लैंड टीम पस्त नजर आई. भारतीय टीम को भी ऑस्ट्…",
          "url": "https://www.aajtak.in/sports/cricket/story/england-vs-australia-1st-test-analysis-in-ashes-series-2023-pat-cummins-usman-khawaja-team-india-weak-in-target-chasing-tspo-1720190-2023-06-21",
          "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202306/pat_cummins_and_australia_team_ashes-sixteen_nine.jpg",
          "publishedAt": "2023-06-21T15:36:01Z",
          "content": "England vs Australia Ashes Series 2023: 2023 , . (WTC) 2 .\r\n , . , . .\r\n . , WTC 444 , 234 .\r\n 281 , 8 . 227 8 , . 8 55 . 44 16 . 4 , ....\r\nTest cricket at its best \r\nAustralia seal a mouth-watering … [+446 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Pa Sport Staff",
          "title": "Yorkshire set to appoint Harry Chathli as new chair",
          "description": "Club members will need to ratify the appointment at an EGM.",
          "url": "https://www.independent.co.uk/sport/cricket/yorkshire-lord-surrey-headingley-b2361727.html",
          "urlToImage": "https://static.independent.co.uk/2023/06/21/16/21160017-2b7f6d65-a260-4474-956f-b5622cc8ae09.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-06-21T15:31:43Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nHarry Chathli is set to become Yorkshires n… [+2830 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "TIMESOFINDIA.COM",
          "title": "Watch: India, Pakistan players engage in heated exchange",
          "description": "Be it in any sports, emotions always run high when India and Pakistan clash on the field. We have witnessed numerous on-field brawls between India and Pakistan players in cricket and hockey in the past but the SAFF Football Championship match also saw the pla…",
          "url": "https://timesofindia.indiatimes.com/sports/football/top-stories/watch-india-pakistan-players-engage-in-heated-exchange-during-saff-championship-match/articleshow/101169779.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101169803,width-1070,height-580,imgsize-60790,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-06-21T15:30:47Z",
          "content": "Top-5 legends who played 'Bazball' before it even existed"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Sam Brookes",
          "title": "FIVE THINGS WE LEARNED from Australia's two-wicket win in the first Ashes Test",
          "description": "It is a tough defeat for England to take, but Ben Stokes spoke of his pride with how his team played, and they now have a week to regroup before the second Test begins at Lord's.",
          "url": "https://www.dailymail.co.uk/sport/cricket/article-12217903/FIVE-THINGS-LEARNED-Australias-two-wicket-win-Ashes-Test.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/10/72364577-0-image-a-14_1687339056906.jpg",
          "publishedAt": "2023-06-21T15:29:43Z",
          "content": "The Ashes summer could hardly have got off to a more thrilling start, with Australia finally prevailing by two wickets in the dying embers of the final day thanks to a sensational ninth-wicket partne… [+9815 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "The Ashes 2023: Women's Test match set for enthralling Trent Bridge opener",
          "description": "Australia are a dominant force in women's cricket, but they and England are facing a step into the unknown when the Women's Ashes begins on Thursday.",
          "url": "https://www.bbc.co.uk/sport/cricket/65976942",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2888/production/_130167301_microsoftteams-image.png",
          "publishedAt": "2023-06-21T15:23:19Z",
          "content": "'I feel like we're programmed the same' - Williamson on relationship with Knight\r\n<table><tr><th>Women's Ashes: England v Australia</th></tr>\r\n<tr><td>Venue: Trent Bridge Date: 22-26 June</td></tr><t… [+4982 chars]"
        },
        {
          "source": { "id": "google-news", "name": "Google News" },
          "author": null,
          "title": "IND vs WI to be Rescheduled? WI stars in schedule conflict as WC Qualifiers threaten 1st Test - InsideSport",
          "description": "<ol><li>IND vs WI to be Rescheduled? WI stars in schedule conflict as WC Qualifiers threaten 1st Test  InsideSport\r\n</li><li>World Cup Qualifiers and India series: West Indies face scheduling conflict | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>Sammy urges …",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3Lmluc2lkZXNwb3J0LmluL2luZC12cy13aS10by1iZS1yZXNjaGVkdWxlZC13aS1zdGFycy1pbi1zY2hlZHVsZS1jb25mbGljdC1hcy13Yy1xdWFsaWZpZXJzLXRocmVhdGVuLTFzdC10ZXN0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-06-21T15:19:52Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": { "id": null, "name": "NBCSports.com" },
          "author": "Associated Press",
          "title": "MLB views the UK as a gateway to European growth, with eyes on Paris and Germany",
          "description": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?",
          "url": "https://mlb.nbcsports.com/2023/06/21/mlb-views-the-uk-as-a-gateway-to-european-growth-with-eyes-on-paris-and-germany/",
          "urlToImage": "https://mlb.nbcsports.com/wp-content/uploads/sites/7/2019/07/gettyimages-1152561600-e1687360564791.jpg",
          "publishedAt": "2023-06-21T15:18:39Z",
          "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+5919 chars]"
        },
        {
          "source": { "id": null, "name": "NBCSports.com" },
          "author": "Associated Press",
          "title": "Red Sox pitcher Tanner Houck set to have surgery to insert a plate for a facial fracture",
          "description": "Boston Red Sox pitcher Tanner Houck is scheduled to have surgery next week to insert a plate to help a facial fracture heal after he was hit by a batted ball.",
          "url": "https://mlb.nbcsports.com/2023/06/21/red-sox-pitcher-tanner-houck-set-to-have-surgery-to-insert-a-plate-for-a-facial-fracture/",
          "urlToImage": "https://mlb.nbcsports.com/wp-content/uploads/sites/7/2023/06/TannerHouck-e1687360164243.jpg",
          "publishedAt": "2023-06-21T15:11:22Z",
          "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+5919 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": "ESPNcricinfo staff",
          "title": "Harry Chathli in line to become new permanent chair at Yorkshire",
          "description": "Business leader set to succeed Lord Kamlesh Patel once his nomination has been ratified",
          "url": "https://www.espncricinfo.com/story/harry-chathli-in-line-to-become-new-permanent-chair-at-yorkshire-county-cricket-club-1382729",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/362300/362390.6.jpg",
          "publishedAt": "2023-06-21T15:06:04Z",
          "content": "Harry Chathli has been nominated to become new Chair of Yorkshire County Cricket Club  •  Yorkshire CCC"
        },
        {
          "source": { "id": null, "name": "FRANCE 24 English" },
          "author": "FRANCE24",
          "title": "England to stick with 'Bazball' despite agonising Australia loss",
          "description": "Ben Stokes's team are licking their wounds after losing to Australia by two wickets in a dramatic Ashes opener at Edgbaston on Tuesday.\n\nThere was a time when beating arch-rivals Australia was the be-all and end-all for an England cricketer.\n\nBut captain Stok…",
          "url": "https://www.france24.com/en/live-news/20230621-england-to-stick-with-bazball-despite-agonising-australia-loss",
          "urlToImage": "https://s.france24.com/media/display/3541cfa8-1043-11ee-b72d-005056a90284/w:1280/p:16x9/aeb119db15a7970e2b88898fdb5a5062698b2259.jpg",
          "publishedAt": "2023-06-21T14:52:14Z",
          "content": "Birmingham (United Kingdom) (AFP) Is it possible to play reduced-risk 'Bazball', or is that missing the point of England's pioneering, aggressive approach to Test cricket? Ben Stokes's team are licki… [+3012 chars]"
        },
        {
          "source": { "id": null, "name": "Business Standard" },
          "author": null,
          "title": "Ashes: Australia, England docked WTC points by ICC for slow over-rate",
          "description": "Australia and England lost two points from their World Test Championship tally on Wednesday after both sides were found guilty of maintaining slow over rates during the first Ashes Test",
          "url": "https://www.business-standard.com/cricket/news/ashes-australia-england-docked-wtc-points-by-icc-for-slow-over-rate-123062100351_1.html",
          "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/19/full/1687119659-7844.jpg",
          "publishedAt": "2023-06-21T14:52:11Z",
          "content": "Australia and England lost two points from their World Test Championship tally on Wednesday after both sides were found guilty of maintaining slow over rates during the first Test match of Ashes 2023… [+1756 chars]"
        },
        {
          "source": { "id": null, "name": "STLtoday.com" },
          "author": "By Derrick Goold St. Louis Post-Dispatch",
          "title": "Postcard from London: Catching up with UK amateur baseball club that's seen interest spike",
          "description": "Coming out of the pandemic, interest in the London Mets' \"Baseball For Beginnings\" program has mushroomed. Just ask London Mustangs and Minotaurs.",
          "url": "https://www.stltoday.com/sports/baseball/professional/birdland/postcard-from-london-catching-up-with-uk-amateur-baseball-club-thats-seen-interest-spike/article_ca910ab6-100b-11ee-8a10-5f117273c492.html",
          "urlToImage": "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/a9/ca910ab6-100b-11ee-8a10-5f117273c492/6492b71fe89ef.preview.jpg?crop=1662%2C873%2C0%2C187&resize=1200%2C630&order=crop%2Cresize",
          "publishedAt": "2023-06-21T14:45:00Z",
          "content": "A corner of Finsbury Park in North London is carved into two baseball diamonds and serves as the home field of the London Mets, a championship amateur team, that is the top level of baseball organiza… [+8555 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "PTI",
          "title": "Will BCCI increase selectors' remuneration to attract big names like Sehwag?",
          "description": "Cricket News: The big names in Indian cricket, of late, have opted to stay away when it comes to applying for the national selector's job.",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/news/will-bcci-increase-national-selectors-remuneration-to-attract-big-names-like-virender-sehwag/articleshow/101168678.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101168740,width-1070,height-580,imgsize-72834,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-06-21T14:31:21Z",
          "content": "Top-5 legends who played 'Bazball' before it even existed"
        },
        {
          "source": { "id": "espn", "name": "ESPN" },
          "author": null,
          "title": "MLB: London series jumping point for Euro push",
          "description": "MLB sees its upcoming London series between the Cardinals and Cubs as a \"jumping-off point\" for the sport to grow in Europe.",
          "url": "https://www.espn.com/mlb/story/_/id/37892159/mlb-eyes-london-series-jumping-point-push-europe",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0621%2Fr1189080_1296x729_16%2D9.jpg",
          "publishedAt": "2023-06-21T14:21:10Z",
          "content": "LONDON -- London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starti… [+5898 chars]"
        },
        {
          "source": { "id": "google-news", "name": "Google News" },
          "author": null,
          "title": "Harare Sports Club cleared to host World Cup Qualifiers after fire incident | Cricbuzz.com - Cricbuzz - Cricbuzz",
          "description": "<ol><li>Harare Sports Club cleared to host World Cup Qualifiers after fire incident | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>Fire At Harare Sports Club, ICC Examines Venue For Further Cricket World Cup Qualifier Matches  NDTV Sports\r\n</li><li>Fire at Har…",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMihAFodHRwczovL3d3dy5jcmljYnV6ei5jb20vY3JpY2tldC1uZXdzLzEyNjkxNC9oYXJhcmUtc3BvcnRzLWNsdWItY2xlYXJlZC10by1ob3N0LXdvcmxkLWN1cC1xdWFsaWZpZXJzLWFmdGVyLWZpcmUtaW5jaWRlbnQtY3JpY2J1enpjb23SAYUBaHR0cDovL20uY3JpY2J1enouY29tL2FtcC9jcmlja2V0LW5ld3MvMTI2OTE0L2hhcmFyZS1zcG9ydHMtY2x1Yi1jbGVhcmVkLXRvLWhvc3Qtd29ybGQtY3VwLXF1YWxpZmllcnMtYWZ0ZXItZmlyZS1pbmNpZGVudC1jcmljYnV6emNvbQ?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-06-21T14:11:38Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "PTI",
          "title": "Will BCCI increase national selectors' remuneration to attract big names like Virender Sehwag?",
          "description": "The chairman of the senior selection panel earns Rs 1 crore annually while the four other members are paid Rs 90 lakh per annum. Former cricketers with notable international achievements are either associated with broadcast channels or with IPL teams as exper…",
          "url": "https://economictimes.indiatimes.com/news/sports/will-bcci-increase-national-selectors-remuneration-to-attract-big-names-like-virender-sehwag/articleshow/101168415.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101168432,width-1070,height-580,imgsize-27848,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-06-21T14:11:31Z",
          "content": "The big names in Indian cricket, of late, have opted to stay away when it comes to applying for the national selector's job. The ones, who willingly do it, are not taken seriously for lack of stature… [+4171 chars]"
        }
      ]
  return (
    <div className='container '>
        <h2>Adfar News Channel</h2>
        <div className="row">
            {artticles.map((element,index)=>{
             return <div className='col-md-4'>
                  <Newsitem title={element.title} description={element.description} image={element.urlToImage}/>
             </div>
            })} 
        </div>
      
       
    </div>
  )
}
