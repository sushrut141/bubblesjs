const IMDB_DATA = [
    {
      "Title": "Guardians of the Galaxy",
      "Genre": "Action",
      "Director": "James Gunn",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 8.1,
      "Votes": 757074,
      "Revenue (Millions)": 333.13
    },
    {
      "Title": "Prometheus",
      "Genre": "Adventure",
      "Director": "Ridley Scott",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7,
      "Votes": 485820,
      "Revenue (Millions)": 126.46
    },
    {
      "Title": "Split",
      "Genre": "Horror",
      "Director": "M. Night Shyamalan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.3,
      "Votes": 157606,
      "Revenue (Millions)": 138.12
    },
    {
      "Title": "Sing",
      "Genre": "Animation",
      "Director": "Christophe Lourdelet",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 7.2,
      "Votes": 60545,
      "Revenue (Millions)": 270.32
    },
    {
      "Title": "Suicide Squad",
      "Genre": "Action",
      "Director": "David Ayer",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.2,
      "Votes": 393727,
      "Revenue (Millions)": 325.02
    },
    {
      "Title": "The Great Wall",
      "Genre": "Action",
      "Director": "Yimou Zhang",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.1,
      "Votes": 56036,
      "Revenue (Millions)": 45.13
    },
    {
      "Title": "La La Land",
      "Genre": "Comedy",
      "Director": "Damien Chazelle",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 8.3,
      "Votes": 258682,
      "Revenue (Millions)": 151.06
    },
    {
      "Title": "Mindhorn",
      "Genre": "Comedy",
      "Director": "Sean Foley",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6.4,
      "Votes": 2490,
      
    },
    {
      "Title": "The Lost City of Z",
      "Genre": "Action",
      "Director": "James Gray",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 141,
      "Rating": 7.1,
      "Votes": 7188,
      "Revenue (Millions)": 8.01
    },
    {
      "Title": "Passengers",
      "Genre": "Adventure",
      "Director": "Morten Tyldum",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7,
      "Votes": 192177,
      "Revenue (Millions)": 100.01
    },
    {
      "Title": "Fantastic Beasts and Where to Find Them",
      "Genre": "Adventure",
      "Director": "David Yates",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.5,
      "Votes": 232072,
      "Revenue (Millions)": 234.02
    },
    {
      "Title": "Hidden Figures",
      "Genre": "Biography",
      "Director": "Theodore Melfi",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 7.8,
      "Votes": 93103,
      "Revenue (Millions)": 169.27
    },
    {
      "Title": "Rogue One",
      "Genre": "Action",
      "Director": "Gareth Edwards",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.9,
      "Votes": 323118,
      "Revenue (Millions)": 532.17
    },
    {
      "Title": "Moana",
      "Genre": "Animation",
      "Director": "Ron Clements",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7.7,
      "Votes": 118151,
      "Revenue (Millions)": 248.75
    },
    {
      "Title": "Colossal",
      "Genre": "Action",
      "Director": "Nacho Vigalondo",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.4,
      "Votes": 8612,
      "Revenue (Millions)": 2.87
    },
    {
      "Title": "The Secret Life of Pets",
      "Genre": "Animation",
      "Director": "Chris Renaud",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 6.6,
      "Votes": 120259,
      "Revenue (Millions)": 368.31
    },
    {
      "Title": "Hacksaw Ridge",
      "Genre": "Biography",
      "Director": "Mel Gibson",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 8.2,
      "Votes": 211760,
      "Revenue (Millions)": 67.12
    },
    {
      "Title": "Jason Bourne",
      "Genre": "Action",
      "Director": "Paul Greengrass",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.7,
      "Votes": 150823,
      "Revenue (Millions)": 162.16
    },
    {
      "Title": "Lion",
      "Genre": "Biography",
      "Director": "Garth Davis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 8.1,
      "Votes": 102061,
      "Revenue (Millions)": 51.69
    },
    {
      "Title": "Arrival",
      "Genre": "Drama",
      "Director": "Denis Villeneuve",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 8,
      "Votes": 340798,
      "Revenue (Millions)": 100.5
    },
    {
      "Title": "Gold",
      "Genre": "Adventure",
      "Director": "Stephen Gaghan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 6.7,
      "Votes": 19053,
      "Revenue (Millions)": 7.22
    },
    {
      "Title": "Manchester by the Sea",
      "Genre": "Drama",
      "Director": "Kenneth Lonergan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 137,
      "Rating": 7.9,
      "Votes": 134213,
      "Revenue (Millions)": 47.7
    },
    {
      "Title": "Hounds of Love",
      "Genre": "Crime",
      "Director": "Ben Young",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.7,
      "Votes": 1115,
      
    },
    {
      "Title": "Trolls",
      "Genre": "Animation",
      "Director": "Walt Dohrn",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.5,
      "Votes": 38552,
      "Revenue (Millions)": 153.69
    },
    {
      "Title": "Independence Day: Resurgence",
      "Genre": "Action",
      "Director": "Roland Emmerich",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 5.3,
      "Votes": 127553,
      "Revenue (Millions)": 103.14
    },
    {
      "Title": "Paris pieds nus",
      "Genre": "Comedy",
      "Director": "Dominique Abel",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 83,
      "Rating": 6.8,
      "Votes": 222,
      
    },
    {
      "Title": "Bahubali: The Beginning",
      "Genre": "Action",
      "Director": "S.S. Rajamouli",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 159,
      "Rating": 8.3,
      "Votes": 76193,
      "Revenue (Millions)": 6.5
    },
    {
      "Title": "Dead Awake",
      "Genre": "Horror",
      "Director": "Phillip Guzman",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 4.7,
      "Votes": 523,
      "Revenue (Millions)": 0.01
    },
    {
      "Title": "Bad Moms",
      "Genre": "Comedy",
      "Director": "Jon Lucas",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.2,
      "Votes": 66540,
      "Revenue (Millions)": 113.08
    },
    {
      "Title": "Assassin's Creed",
      "Genre": "Action",
      "Director": "Justin Kurzel",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 5.9,
      "Votes": 112813,
      "Revenue (Millions)": 54.65
    },
    {
      "Title": "Why Him?",
      "Genre": "Comedy",
      "Director": "John Hamburg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.3,
      "Votes": 48123,
      "Revenue (Millions)": 60.31
    },
    {
      "Title": "Nocturnal Animals",
      "Genre": "Drama",
      "Director": "Tom Ford",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.5,
      "Votes": 126030,
      "Revenue (Millions)": 10.64
    },
    {
      "Title": "X-Men: Apocalypse",
      "Genre": "Action",
      "Director": "Bryan Singer",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 7.1,
      "Votes": 275510,
      "Revenue (Millions)": 155.33
    },
    {
      "Title": "Deadpool",
      "Genre": "Action",
      "Director": "Tim Miller",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 8,
      "Votes": 627797,
      "Revenue (Millions)": 363.02
    },
    {
      "Title": "Resident Evil: The Final Chapter",
      "Genre": "Action",
      "Director": "Paul W.S. Anderson",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 5.6,
      "Votes": 46165,
      "Revenue (Millions)": 26.84
    },
    {
      "Title": "Captain America: Civil War",
      "Genre": "Action",
      "Director": "Anthony Russo",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 147,
      "Rating": 7.9,
      "Votes": 411656,
      "Revenue (Millions)": 408.08
    },
    {
      "Title": "Interstellar",
      "Genre": "Adventure",
      "Director": "Christopher Nolan",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 169,
      "Rating": 8.6,
      "Votes": 1047747,
      "Revenue (Millions)": 187.99
    },
    {
      "Title": "Doctor Strange",
      "Genre": "Action",
      "Director": "Scott Derrickson",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7.6,
      "Votes": 293732,
      "Revenue (Millions)": 232.6
    },
    {
      "Title": "The Magnificent Seven",
      "Genre": "Action",
      "Director": "Antoine Fuqua",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 6.9,
      "Votes": 122853,
      "Revenue (Millions)": 93.38
    },
    {
      "Title": "5/25/77",
      "Genre": "Comedy",
      "Director": "Patrick Read Johnson",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.1,
      "Votes": 241,
      
    },
    {
      "Title": "Sausage Party",
      "Genre": "Animation",
      "Director": "Greg Tiernan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6.3,
      "Votes": 120690,
      "Revenue (Millions)": 97.66
    },
    {
      "Title": "Moonlight",
      "Genre": "Drama",
      "Director": "Barry Jenkins",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 7.5,
      "Votes": 135095,
      "Revenue (Millions)": 27.85
    },
    {
      "Title": "Don't Fuck in the Woods",
      "Genre": "Horror",
      "Director": "Shawn Burkett",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 73,
      "Rating": 2.7,
      "Votes": 496,
      
    },
    {
      "Title": "The Founder",
      "Genre": "Biography",
      "Director": "John Lee Hancock",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7.2,
      "Votes": 37033,
      "Revenue (Millions)": 12.79
    },
    {
      "Title": "Lowriders",
      "Genre": "Drama",
      "Director": "Ricardo de Montreuil",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 6.3,
      "Votes": 279,
      "Revenue (Millions)": 4.21
    },
    {
      "Title": "Pirates of the Caribbean: On Stranger Tides",
      "Genre": "Action",
      "Director": "Rob Marshall",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 136,
      "Rating": 6.7,
      "Votes": 395025,
      "Revenue (Millions)": 241.06
    },
    {
      "Title": "Miss Sloane",
      "Genre": "Drama",
      "Director": "John Madden",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.3,
      "Votes": 17818,
      "Revenue (Millions)": 3.44
    },
    {
      "Title": "Fallen",
      "Genre": "Adventure",
      "Director": "Scott Hicks",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 5.6,
      "Votes": 5103,
      
    },
    {
      "Title": "Star Trek Beyond",
      "Genre": "Action",
      "Director": "Justin Lin",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 7.1,
      "Votes": 164567,
      "Revenue (Millions)": 158.8
    },
    {
      "Title": "The Last Face",
      "Genre": "Drama",
      "Director": "Sean Penn",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 3.7,
      "Votes": 987,
      
    },
    {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Genre": "Action",
      "Director": "J.J. Abrams",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 136,
      "Rating": 8.1,
      "Votes": 661608,
      "Revenue (Millions)": 936.63
    },
    {
      "Title": "Underworld: Blood Wars",
      "Genre": "Action",
      "Director": "Anna Foerster",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 5.8,
      "Votes": 41362,
      "Revenue (Millions)": 30.35
    },
    {
      "Title": "Mother's Day",
      "Genre": "Comedy",
      "Director": "Garry Marshall",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 5.6,
      "Votes": 20221,
      "Revenue (Millions)": 32.46
    },
    {
      "Title": "John Wick",
      "Genre": "Action",
      "Director": "Chad Stahelski",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.2,
      "Votes": 321933,
      "Revenue (Millions)": 43
    },
    {
      "Title": "The Dark Knight",
      "Genre": "Action",
      "Director": "Christopher Nolan",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 152,
      "Rating": 9,
      "Votes": 1791916,
      "Revenue (Millions)": 533.32
    },
    {
      "Title": "Silence",
      "Genre": "Adventure",
      "Director": "Martin Scorsese",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 161,
      "Rating": 7.3,
      "Votes": 49190,
      "Revenue (Millions)": 7.08
    },
    {
      "Title": "Don't Breathe",
      "Genre": "Crime",
      "Director": "Fede Alvarez",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 7.2,
      "Votes": 121103,
      "Revenue (Millions)": 89.21
    },
    {
      "Title": "Me Before You",
      "Genre": "Drama",
      "Director": "Thea Sharrock",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.4,
      "Votes": 113322,
      "Revenue (Millions)": 56.23
    },
    {
      "Title": "Their Finest",
      "Genre": "Comedy",
      "Director": "Lone Scherfig",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7,
      "Votes": 3739,
      "Revenue (Millions)": 3.18
    },
    {
      "Title": "Sully",
      "Genre": "Biography",
      "Director": "Clint Eastwood",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 7.5,
      "Votes": 137608,
      "Revenue (Millions)": 125.07
    },
    {
      "Title": "Batman v Superman: Dawn of Justice",
      "Genre": "Action",
      "Director": "Zack Snyder",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 151,
      "Rating": 6.7,
      "Votes": 472307,
      "Revenue (Millions)": 330.25
    },
    {
      "Title": "The Autopsy of Jane Doe",
      "Genre": "Horror",
      "Director": "Andr??? ???vredal",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 6.8,
      "Votes": 35870,
      
    },
    {
      "Title": "The Girl on the Train",
      "Genre": "Crime",
      "Director": "Tate Taylor",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.5,
      "Votes": 102177,
      "Revenue (Millions)": 75.31
    },
    {
      "Title": "Fifty Shades of Grey",
      "Genre": "Drama",
      "Director": "Sam Taylor-Johnson",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 4.1,
      "Votes": 244474,
      "Revenue (Millions)": 166.15
    },
    {
      "Title": "The Prestige",
      "Genre": "Drama",
      "Director": "Christopher Nolan",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 8.5,
      "Votes": 913152,
      "Revenue (Millions)": 53.08
    },
    {
      "Title": "Kingsman: The Secret Service",
      "Genre": "Action",
      "Director": "Matthew Vaughn",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 7.7,
      "Votes": 440209,
      "Revenue (Millions)": 128.25
    },
    {
      "Title": "Patriots Day",
      "Genre": "Drama",
      "Director": "Peter Berg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.4,
      "Votes": 39784,
      "Revenue (Millions)": 31.86
    },
    {
      "Title": "Mad Max: Fury Road",
      "Genre": "Action",
      "Director": "George Miller",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 8.1,
      "Votes": 632842,
      "Revenue (Millions)": 153.63
    },
    {
      "Title": "Wakefield",
      "Genre": "Drama",
      "Director": "Robin Swicord",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.5,
      "Votes": 291,
      "Revenue (Millions)": 0.01
    },
    {
      "Title": "Deepwater Horizon",
      "Genre": "Action",
      "Director": "Peter Berg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7.2,
      "Votes": 89849,
      "Revenue (Millions)": 61.28
    },
    {
      "Title": "The Promise",
      "Genre": "Drama",
      "Director": "Terry George",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 5.9,
      "Votes": 149791,
      
    },
    {
      "Title": "Allied",
      "Genre": "Action",
      "Director": "Robert Zemeckis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7.1,
      "Votes": 78079,
      "Revenue (Millions)": 40.07
    },
    {
      "Title": "A Monster Calls",
      "Genre": "Drama",
      "Director": "J.A. Bayona",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 7.5,
      "Votes": 39134,
      "Revenue (Millions)": 3.73
    },
    {
      "Title": "Collateral Beauty",
      "Genre": "Drama",
      "Director": "David Frankel",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.8,
      "Votes": 43977,
      "Revenue (Millions)": 30.98
    },
    {
      "Title": "Zootopia",
      "Genre": "Animation",
      "Director": "Byron Howard",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 8.1,
      "Votes": 296853,
      "Revenue (Millions)": 341.26
    },
    {
      "Title": "Pirates of the Caribbean: At World's End",
      "Genre": "Action",
      "Director": "Gore Verbinski",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 169,
      "Rating": 7.1,
      "Votes": 498821,
      "Revenue (Millions)": 309.4
    },
    {
      "Title": "The Avengers",
      "Genre": "Action",
      "Director": "Joss Whedon",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 143,
      "Rating": 8.1,
      "Votes": 1045588,
      "Revenue (Millions)": 623.28
    },
    {
      "Title": "Inglourious Basterds",
      "Genre": "Adventure",
      "Director": "Quentin Tarantino",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 153,
      "Rating": 8.3,
      "Votes": 959065,
      "Revenue (Millions)": 120.52
    },
    {
      "Title": "Pirates of the Caribbean: Dead Man's Chest",
      "Genre": "Action",
      "Director": "Gore Verbinski",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 151,
      "Rating": 7.3,
      "Votes": 552027,
      "Revenue (Millions)": 423.03
    },
    {
      "Title": "Ghostbusters",
      "Genre": "Action",
      "Director": "Paul Feig",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 5.3,
      "Votes": 147717,
      "Revenue (Millions)": 128.34
    },
    {
      "Title": "Inception",
      "Genre": "Action",
      "Director": "Christopher Nolan",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 148,
      "Rating": 8.8,
      "Votes": 1583625,
      "Revenue (Millions)": 292.57
    },
    {
      "Title": "Captain Fantastic",
      "Genre": "Comedy",
      "Director": "Matt Ross",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.9,
      "Votes": 105081,
      "Revenue (Millions)": 5.88
    },
    {
      "Title": "The Wolf of Wall Street",
      "Genre": "Biography",
      "Director": "Martin Scorsese",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 180,
      "Rating": 8.2,
      "Votes": 865134,
      "Revenue (Millions)": 116.87
    },
    {
      "Title": "Gone Girl",
      "Genre": "Crime",
      "Director": "David Fincher",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 149,
      "Rating": 8.1,
      "Votes": 636243,
      "Revenue (Millions)": 167.74
    },
    {
      "Title": "Furious Seven",
      "Genre": "Action",
      "Director": "James Wan",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 137,
      "Rating": 7.2,
      "Votes": 301249,
      "Revenue (Millions)": 350.03
    },
    {
      "Title": "Jurassic World",
      "Genre": "Action",
      "Director": "Colin Trevorrow",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7,
      "Votes": 455169,
      "Revenue (Millions)": 652.18
    },
    {
      "Title": "Live by Night",
      "Genre": "Crime",
      "Director": "Ben Affleck",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 6.4,
      "Votes": 27869,
      "Revenue (Millions)": 10.38
    },
    {
      "Title": "Avatar",
      "Genre": "Action",
      "Director": "James Cameron",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 162,
      "Rating": 7.8,
      "Votes": 935408,
      "Revenue (Millions)": 760.51
    },
    {
      "Title": "The Hateful Eight",
      "Genre": "Crime",
      "Director": "Quentin Tarantino",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 187,
      "Rating": 7.8,
      "Votes": 341170,
      "Revenue (Millions)": 54.12
    },
    {
      "Title": "The Accountant",
      "Genre": "Action",
      "Director": "Gavin O'Connor",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.4,
      "Votes": 162122,
      "Revenue (Millions)": 86.2
    },
    {
      "Title": "Prisoners",
      "Genre": "Crime",
      "Director": "Denis Villeneuve",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 153,
      "Rating": 8.1,
      "Votes": 431185,
      "Revenue (Millions)": 60.96
    },
    {
      "Title": "Warcraft",
      "Genre": "Action",
      "Director": "Duncan Jones",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7,
      "Votes": 187547,
      "Revenue (Millions)": 47.17
    },
    {
      "Title": "The Help",
      "Genre": "Drama",
      "Director": "Tate Taylor",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 146,
      "Rating": 8.1,
      "Votes": 342429,
      "Revenue (Millions)": 169.71
    },
    {
      "Title": "War Dogs",
      "Genre": "Comedy",
      "Director": "Todd Phillips",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.1,
      "Votes": 106463,
      "Revenue (Millions)": 43.02
    },
    {
      "Title": "Avengers: Age of Ultron",
      "Genre": "Action",
      "Director": "Joss Whedon",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 141,
      "Rating": 7.4,
      "Votes": 516895,
      "Revenue (Millions)": 458.99
    },
    {
      "Title": "The Nice Guys",
      "Genre": "Action",
      "Director": "Shane Black",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.4,
      "Votes": 175067,
      "Revenue (Millions)": 36.25
    },
    {
      "Title": "Kimi no na wa",
      "Genre": "Animation",
      "Director": "Makoto Shinkai",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 8.6,
      "Votes": 34110,
      "Revenue (Millions)": 4.68
    },
    {
      "Title": "The Void",
      "Genre": "Horror",
      "Director": "Jeremy Gillespie",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 5.8,
      "Votes": 9247,
      "Revenue (Millions)": 0.15
    },
    {
      "Title": "Personal Shopper",
      "Genre": "Drama",
      "Director": "Olivier Assayas",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 6.3,
      "Votes": 10181,
      "Revenue (Millions)": 1.29
    },
    {
      "Title": "The Departed",
      "Genre": "Crime",
      "Director": "Martin Scorsese",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 151,
      "Rating": 8.5,
      "Votes": 937414,
      "Revenue (Millions)": 132.37
    },
    {
      "Title": "Legend",
      "Genre": "Biography",
      "Director": "Brian Helgeland",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7,
      "Votes": 108836,
      "Revenue (Millions)": 1.87
    },
    {
      "Title": "Thor",
      "Genre": "Action",
      "Director": "Kenneth Branagh",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7,
      "Votes": 570814,
      "Revenue (Millions)": 181.02
    },
    {
      "Title": "The Martian",
      "Genre": "Adventure",
      "Director": "Ridley Scott",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 8,
      "Votes": 556097,
      "Revenue (Millions)": 228.43
    },
    {
      "Title": "Contratiempo",
      "Genre": "Crime",
      "Director": "Oriol Paulo",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.9,
      "Votes": 7204,
      
    },
    {
      "Title": "The Man from U.N.C.L.E.",
      "Genre": "Action",
      "Director": "Guy Ritchie",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.3,
      "Votes": 202973,
      "Revenue (Millions)": 45.43
    },
    {
      "Title": "Hell or High Water",
      "Genre": "Crime",
      "Director": "David Mackenzie",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.7,
      "Votes": 115546,
      "Revenue (Millions)": 26.86
    },
    {
      "Title": "The Comedian",
      "Genre": "Comedy",
      "Director": "Taylor Hackford",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 5.4,
      "Votes": 1954,
      "Revenue (Millions)": 1.66
    },
    {
      "Title": "The Legend of Tarzan",
      "Genre": "Action",
      "Director": "David Yates",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.3,
      "Votes": 117590,
      "Revenue (Millions)": 126.59
    },
    {
      "Title": "All We Had",
      "Genre": "Drama",
      "Director": "Katie Holmes",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 5.8,
      "Votes": 1004,
      
    },
    {
      "Title": "Ex Machina",
      "Genre": "Drama",
      "Director": "Alex Garland",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 7.7,
      "Votes": 339797,
      "Revenue (Millions)": 25.44
    },
    {
      "Title": "The Belko Experiment",
      "Genre": "Action",
      "Director": "Greg McLean",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6.3,
      "Votes": 3712,
      "Revenue (Millions)": 10.16
    },
    {
      "Title": "12 Years a Slave",
      "Genre": "Biography",
      "Director": "Steve McQueen",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 134,
      "Rating": 8.1,
      "Votes": 486338,
      "Revenue (Millions)": 56.67
    },
    {
      "Title": "The Bad Batch",
      "Genre": "Romance",
      "Director": "Ana Lily Amirpour",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.1,
      "Votes": 512,
      
    },
    {
      "Title": "",
      "Genre": "Action",
      "Director": "Zack Snyder",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.7,
      "Votes": 637104,
      "Revenue (Millions)": 210.59
    },
    {
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Genre": "Adventure",
      "Director": "David Yates",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 8.1,
      "Votes": 590595,
      "Revenue (Millions)": 380.96
    },
    {
      "Title": "Office Christmas Party",
      "Genre": "Comedy",
      "Director": "Josh Gordon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 5.8,
      "Votes": 30761,
      "Revenue (Millions)": 54.73
    },
    {
      "Title": "The Neon Demon",
      "Genre": "Horror",
      "Director": "Nicolas Winding Refn",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.2,
      "Votes": 50359,
      "Revenue (Millions)": 1.33
    },
    {
      "Title": "Dangal",
      "Genre": "Action",
      "Director": "Nitesh Tiwari",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 161,
      "Rating": 8.8,
      "Votes": 48969,
      "Revenue (Millions)": 11.15
    },
    {
      "Title": "10 Cloverfield Lane",
      "Genre": "Drama",
      "Director": "Dan Trachtenberg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 7.2,
      "Votes": 192968,
      "Revenue (Millions)": 71.9
    },
    {
      "Title": "Finding Dory",
      "Genre": "Animation",
      "Director": "Andrew Stanton",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.4,
      "Votes": 157026,
      "Revenue (Millions)": 486.29
    },
    {
      "Title": "Miss Peregrine's Home for Peculiar Children",
      "Genre": "Adventure",
      "Director": "Tim Burton",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 6.7,
      "Votes": 101058,
      "Revenue (Millions)": 87.24
    },
    {
      "Title": "Divergent",
      "Genre": "Adventure",
      "Director": "Neil Burger",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 6.7,
      "Votes": 362093,
      "Revenue (Millions)": 150.83
    },
    {
      "Title": "Mike and Dave Need Wedding Dates",
      "Genre": "Adventure",
      "Director": "Jake Szymanski",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6,
      "Votes": 53183,
      "Revenue (Millions)": 46.01
    },
    {
      "Title": "Boyka: Undisputed IV",
      "Genre": "Action",
      "Director": "Todor Chapkanov",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 7.4,
      "Votes": 10428,
      
    },
    {
      "Title": "The Dark Knight Rises",
      "Genre": "Action",
      "Director": "Christopher Nolan",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 164,
      "Rating": 8.5,
      "Votes": 1222645,
      "Revenue (Millions)": 448.13
    },
    {
      "Title": "The Jungle Book",
      "Genre": "Adventure",
      "Director": "Jon Favreau",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.5,
      "Votes": 198243,
      "Revenue (Millions)": 364
    },
    {
      "Title": "Transformers: Age of Extinction",
      "Genre": "Action",
      "Director": "Michael Bay",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 165,
      "Rating": 5.7,
      "Votes": 255483,
      "Revenue (Millions)": 245.43
    },
    {
      "Title": "Nerve",
      "Genre": "Adventure",
      "Director": "Henry Joost",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.6,
      "Votes": 69651,
      "Revenue (Millions)": 38.56
    },
    {
      "Title": "Mamma Mia!",
      "Genre": "Comedy",
      "Director": "Phyllida Lloyd",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.4,
      "Votes": 153481,
      "Revenue (Millions)": 143.7
    },
    {
      "Title": "The Revenant",
      "Genre": "Adventure",
      "Director": "Alejandro Gonz???lez I??????rritu",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 156,
      "Rating": 8,
      "Votes": 499424,
      "Revenue (Millions)": 183.64
    },
    {
      "Title": "Fences",
      "Genre": "Drama",
      "Director": "Denzel Washington",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 7.3,
      "Votes": 50953,
      "Revenue (Millions)": 57.64
    },
    {
      "Title": "Into the Woods",
      "Genre": "Adventure",
      "Director": "Rob Marshall",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 6,
      "Votes": 109756,
      "Revenue (Millions)": 128
    },
    {
      "Title": "The Shallows",
      "Genre": "Drama",
      "Director": "Jaume Collet-Serra",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 6.4,
      "Votes": 78328,
      "Revenue (Millions)": 55.12
    },
    {
      "Title": "Whiplash",
      "Genre": "Drama",
      "Director": "Damien Chazelle",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 8.5,
      "Votes": 477276,
      "Revenue (Millions)": 13.09
    },
    {
      "Title": "Furious 6",
      "Genre": "Action",
      "Director": "Justin Lin",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 7.1,
      "Votes": 318051,
      "Revenue (Millions)": 238.67
    },
    {
      "Title": "The Place Beyond the Pines",
      "Genre": "Crime",
      "Director": "Derek Cianfrance",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 140,
      "Rating": 7.3,
      "Votes": 200090,
      "Revenue (Millions)": 21.38
    },
    {
      "Title": "No Country for Old Men",
      "Genre": "Crime",
      "Director": "Ethan Coen",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 8.1,
      "Votes": 660286,
      "Revenue (Millions)": 74.27
    },
    {
      "Title": "The Great Gatsby",
      "Genre": "Drama",
      "Director": "Baz Luhrmann",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 143,
      "Rating": 7.3,
      "Votes": 386102,
      "Revenue (Millions)": 144.81
    },
    {
      "Title": "Shutter Island",
      "Genre": "Mystery",
      "Director": "Martin Scorsese",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 138,
      "Rating": 8.1,
      "Votes": 855604,
      "Revenue (Millions)": 127.97
    },
    {
      "Title": "Brimstone",
      "Genre": "Mystery",
      "Director": "Martin Koolhoven",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 148,
      "Rating": 7.1,
      "Votes": 13004,
      
    },
    {
      "Title": "Star Trek",
      "Genre": "Action",
      "Director": "J.J. Abrams",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 8,
      "Votes": 526324,
      "Revenue (Millions)": 257.7
    },
    {
      "Title": "Diary of a Wimpy Kid",
      "Genre": "Comedy",
      "Director": "Thor Freudenthal",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 6.2,
      "Votes": 34184,
      "Revenue (Millions)": 64
    },
    {
      "Title": "The Big Short",
      "Genre": "Biography",
      "Director": "Adam McKay",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 7.8,
      "Votes": 246360,
      "Revenue (Millions)": 70.24
    },
    {
      "Title": "Room",
      "Genre": "Drama",
      "Director": "Lenny Abrahamson",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 8.2,
      "Votes": 224132,
      "Revenue (Millions)": 14.68
    },
    {
      "Title": "Django Unchained",
      "Genre": "Drama",
      "Director": "Quentin Tarantino",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 165,
      "Rating": 8.4,
      "Votes": 1039115,
      "Revenue (Millions)": 162.8
    },
    {
      "Title": "Ah-ga-ssi",
      "Genre": "Drama",
      "Director": "Chan-wook Park",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 8.1,
      "Votes": 33418,
      "Revenue (Millions)": 2.01
    },
    {
      "Title": "The Edge of Seventeen",
      "Genre": "Comedy",
      "Director": "Kelly Fremon Craig",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 7.4,
      "Votes": 47694,
      "Revenue (Millions)": 14.26
    },
    {
      "Title": "Watchmen",
      "Genre": "Action",
      "Director": "Zack Snyder",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 162,
      "Rating": 7.6,
      "Votes": 410249,
      "Revenue (Millions)": 107.5
    },
    {
      "Title": "Superbad",
      "Genre": "Comedy",
      "Director": "Greg Mottola",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.6,
      "Votes": 442082,
      "Revenue (Millions)": 121.46
    },
    {
      "Title": "Inferno",
      "Genre": "Action",
      "Director": "Ron Howard",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 6.2,
      "Votes": 97623,
      "Revenue (Millions)": 34.26
    },
    {
      "Title": "The BFG",
      "Genre": "Adventure",
      "Director": "Steven Spielberg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.4,
      "Votes": 50853,
      "Revenue (Millions)": 55.47
    },
    {
      "Title": "The Hunger Games",
      "Genre": "Adventure",
      "Director": "Gary Ross",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 142,
      "Rating": 7.2,
      "Votes": 735604,
      "Revenue (Millions)": 408
    },
    {
      "Title": "White Girl",
      "Genre": "Drama",
      "Director": "Elizabeth Wood",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 5.8,
      "Votes": 4299,
      "Revenue (Millions)": 0.2
    },
    {
      "Title": "Sicario",
      "Genre": "Action",
      "Director": "Denis Villeneuve",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 7.6,
      "Votes": 243230,
      "Revenue (Millions)": 46.88
    },
    {
      "Title": "Twin Peaks: The Missing Pieces",
      "Genre": "Drama",
      "Director": "David Lynch",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 8.1,
      "Votes": 1973,
      
    },
    {
      "Title": "Aliens vs Predator - Requiem",
      "Genre": "Action",
      "Director": "Colin Strause",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 4.7,
      "Votes": 97618,
      "Revenue (Millions)": 41.8
    },
    {
      "Title": "Pacific Rim",
      "Genre": "Action",
      "Director": "Guillermo del Toro",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 7,
      "Votes": 400519,
      "Revenue (Millions)": 101.79
    },
    {
      "Title": "Crazy, Stupid, Love.",
      "Genre": "Comedy",
      "Director": "Glenn Ficarra",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.4,
      "Votes": 396714,
      "Revenue (Millions)": 84.24
    },
    {
      "Title": "Scott Pilgrim vs. the World",
      "Genre": "Action",
      "Director": "Edgar Wright",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.5,
      "Votes": 291457,
      "Revenue (Millions)": 31.49
    },
    {
      "Title": "Hot Fuzz",
      "Genre": "Action",
      "Director": "Edgar Wright",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 7.9,
      "Votes": 373244,
      "Revenue (Millions)": 23.62
    },
    {
      "Title": "Mine",
      "Genre": "Thriller",
      "Director": "Fabio Guaglione",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6,
      "Votes": 5926,
      
    },
    {
      "Title": "Free Fire",
      "Genre": "Action",
      "Director": "Ben Wheatley",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 7,
      "Votes": 6946,
      "Revenue (Millions)": 1.8
    },
    {
      "Title": "X-Men: Days of Future Past",
      "Genre": "Action",
      "Director": "Bryan Singer",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 8,
      "Votes": 552298,
      "Revenue (Millions)": 233.91
    },
    {
      "Title": "Jack Reacher: Never Go Back",
      "Genre": "Action",
      "Director": "Edward Zwick",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.1,
      "Votes": 78043,
      "Revenue (Millions)": 58.4
    },
    {
      "Title": "Casino Royale",
      "Genre": "Action",
      "Director": "Martin Campbell",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 8,
      "Votes": 495106,
      "Revenue (Millions)": 167.01
    },
    {
      "Title": "Twilight",
      "Genre": "Drama",
      "Director": "Catherine Hardwicke",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 5.2,
      "Votes": 361449,
      "Revenue (Millions)": 191.45
    },
    {
      "Title": "Now You See Me 2",
      "Genre": "Action",
      "Director": "Jon M. Chu",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 6.5,
      "Votes": 156567,
      "Revenue (Millions)": 65.03
    },
    {
      "Title": "Woman in Gold",
      "Genre": "Biography",
      "Director": "Simon Curtis",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7.3,
      "Votes": 39723,
      "Revenue (Millions)": 33.31
    },
    {
      "Title": "13 Hours",
      "Genre": "Action",
      "Director": "Michael Bay",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 7.3,
      "Votes": 76935,
      "Revenue (Millions)": 52.82
    },
    {
      "Title": "Spectre",
      "Genre": "Action",
      "Director": "Sam Mendes",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 148,
      "Rating": 6.8,
      "Votes": 308981,
      "Revenue (Millions)": 200.07
    },
    {
      "Title": "Nightcrawler",
      "Genre": "Crime",
      "Director": "Dan Gilroy",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.9,
      "Votes": 332476,
      "Revenue (Millions)": 32.28
    },
    {
      "Title": "Kubo and the Two Strings",
      "Genre": "Animation",
      "Director": "Travis Knight",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.9,
      "Votes": 72778,
      "Revenue (Millions)": 48.02
    },
    {
      "Title": "Beyond the Gates",
      "Genre": "Adventure",
      "Director": "Jackson Stewart",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 84,
      "Rating": 5.2,
      "Votes": 2127,
      
    },
    {
      "Title": "Her",
      "Genre": "Drama",
      "Director": "Spike Jonze",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 8,
      "Votes": 390531,
      "Revenue (Millions)": 25.56
    },
    {
      "Title": "Frozen",
      "Genre": "Animation",
      "Director": "Chris Buck",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.5,
      "Votes": 451894,
      "Revenue (Millions)": 400.74
    },
    {
      "Title": "Tomorrowland",
      "Genre": "Action",
      "Director": "Brad Bird",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 6.5,
      "Votes": 143069,
      "Revenue (Millions)": 93.42
    },
    {
      "Title": "Dawn of the Planet of the Apes",
      "Genre": "Action",
      "Director": "Matt Reeves",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 7.6,
      "Votes": 337777,
      "Revenue (Millions)": 208.54
    },
    {
      "Title": "Tropic Thunder",
      "Genre": "Action",
      "Director": "Ben Stiller",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7,
      "Votes": 321442,
      "Revenue (Millions)": 110.42
    },
    {
      "Title": "The Conjuring 2",
      "Genre": "Horror",
      "Director": "James Wan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 134,
      "Rating": 7.4,
      "Votes": 137203,
      "Revenue (Millions)": 102.46
    },
    {
      "Title": "Ant-Man",
      "Genre": "Action",
      "Director": "Peyton Reed",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.3,
      "Votes": 368912,
      "Revenue (Millions)": 180.19
    },
    {
      "Title": "Bridget Jones's Baby",
      "Genre": "Comedy",
      "Director": "Sharon Maguire",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.7,
      "Votes": 43086,
      "Revenue (Millions)": 24.09
    },
    {
      "Title": "The VVitch: A New-England Folktale",
      "Genre": "Horror",
      "Director": "Robert Eggers",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.8,
      "Votes": 101781,
      "Revenue (Millions)": 25.14
    },
    {
      "Title": "Cinderella",
      "Genre": "Drama",
      "Director": "Kenneth Branagh",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 7,
      "Votes": 117018,
      "Revenue (Millions)": 201.15
    },
    {
      "Title": "Realive",
      "Genre": "Sci-Fi",
      "Director": "Mateo Gil",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 5.9,
      "Votes": 1176,
      
    },
    {
      "Title": "Forushande",
      "Genre": "Drama",
      "Director": "Asghar Farhadi",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 8,
      "Votes": 22389,
      "Revenue (Millions)": 3.4
    },
    {
      "Title": "Love",
      "Genre": "Drama",
      "Director": "Gaspar No???",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 135,
      "Rating": 6,
      "Votes": 24003,
      
    },
    {
      "Title": "Billy Lynn's Long Halftime Walk",
      "Genre": "Drama",
      "Director": "Ang Lee",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.3,
      "Votes": 11944,
      "Revenue (Millions)": 1.72
    },
    {
      "Title": "Crimson Peak",
      "Genre": "Drama",
      "Director": "Guillermo del Toro",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 6.6,
      "Votes": 97454,
      "Revenue (Millions)": 31.06
    },
    {
      "Title": "Drive",
      "Genre": "Crime",
      "Director": "Nicolas Winding Refn",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.8,
      "Votes": 461509,
      "Revenue (Millions)": 35.05
    },
    {
      "Title": "Trainwreck",
      "Genre": "Comedy",
      "Director": "Judd Apatow",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 6.3,
      "Votes": 106364,
      "Revenue (Millions)": 110.01
    },
    {
      "Title": "The Light Between Oceans",
      "Genre": "Drama",
      "Director": "Derek Cianfrance",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.2,
      "Votes": 27382,
      "Revenue (Millions)": 12.53
    },
    {
      "Title": "Below Her Mouth",
      "Genre": "Drama",
      "Director": "April Mullen",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.6,
      "Votes": 1445,
      
    },
    {
      "Title": "Spotlight",
      "Genre": "Crime",
      "Director": "Tom McCarthy",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 8.1,
      "Votes": 268282,
      "Revenue (Millions)": 44.99
    },
    {
      "Title": "Morgan",
      "Genre": "Horror",
      "Director": "Luke Scott",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 5.8,
      "Votes": 22107,
      "Revenue (Millions)": 3.91
    },
    {
      "Title": "Warrior",
      "Genre": "Action",
      "Director": "Gavin O'Connor",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 140,
      "Rating": 8.2,
      "Votes": 355722,
      "Revenue (Millions)": 13.65
    },
    {
      "Title": "Captain America: The First Avenger",
      "Genre": "Action",
      "Director": "Joe Johnston",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 6.9,
      "Votes": 547368,
      "Revenue (Millions)": 176.64
    },
    {
      "Title": "Hacker",
      "Genre": "Crime",
      "Director": "Akan Satayev",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 6.3,
      "Votes": 3799,
      
    },
    {
      "Title": "Into the Wild",
      "Genre": "Adventure",
      "Director": "Sean Penn",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 148,
      "Rating": 8.1,
      "Votes": 459304,
      "Revenue (Millions)": 18.35
    },
    {
      "Title": "The Imitation Game",
      "Genre": "Biography",
      "Director": "Morten Tyldum",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 8.1,
      "Votes": 532353,
      "Revenue (Millions)": 91.12
    },
    {
      "Title": "Central Intelligence",
      "Genre": "Action",
      "Director": "Rawson Marshall Thurber",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.3,
      "Votes": 97082,
      "Revenue (Millions)": 127.38
    },
    {
      "Title": "Edge of Tomorrow",
      "Genre": "Action",
      "Director": "Doug Liman",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.9,
      "Votes": 471815,
      "Revenue (Millions)": 100.19
    },
    {
      "Title": "A Cure for Wellness",
      "Genre": "Drama",
      "Director": "Gore Verbinski",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 146,
      "Rating": 6.5,
      "Votes": 12193,
      "Revenue (Millions)": 8.1
    },
    {
      "Title": "Snowden",
      "Genre": "Biography",
      "Director": "Oliver Stone",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 134,
      "Rating": 7.3,
      "Votes": 79855,
      "Revenue (Millions)": 21.48
    },
    {
      "Title": "Iron Man",
      "Genre": "Action",
      "Director": "Jon Favreau",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7.9,
      "Votes": 737719,
      "Revenue (Millions)": 318.3
    },
    {
      "Title": "Allegiant",
      "Genre": "Action",
      "Director": "Robert Schwentke",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 5.7,
      "Votes": 70504,
      "Revenue (Millions)": 66
    },
    {
      "Title": "X: First Class",
      "Genre": "Action",
      "Director": "Matthew Vaughn",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.8,
      "Votes": 550011,
      "Revenue (Millions)": 146.41
    },
    {
      "Title": "Raw (II)",
      "Genre": "Drama",
      "Director": "Julia Ducournau",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 7.5,
      "Votes": 5435,
      "Revenue (Millions)": 0.51
    },
    {
      "Title": "Paterson",
      "Genre": "Comedy",
      "Director": "Jim Jarmusch",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.5,
      "Votes": 26089,
      "Revenue (Millions)": 2.14
    },
    {
      "Title": "Bridesmaids",
      "Genre": "Comedy",
      "Director": "Paul Feig",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 6.8,
      "Votes": 227912,
      "Revenue (Millions)": 169.08
    },
    {
      "Title": "The Girl with All the Gifts",
      "Genre": "Drama",
      "Director": "Colm McCarthy",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.7,
      "Votes": 23713,
      
    },
    {
      "Title": "San Andreas",
      "Genre": "Action",
      "Director": "Brad Peyton",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 6.1,
      "Votes": 161396,
      "Revenue (Millions)": 155.18
    },
    {
      "Title": "Spring Breakers",
      "Genre": "Drama",
      "Director": "Harmony Korine",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.3,
      "Votes": 114290,
      "Revenue (Millions)": 14.12
    },
    {
      "Title": "Transformers",
      "Genre": "Action",
      "Director": "Michael Bay",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 7.1,
      "Votes": 531112,
      "Revenue (Millions)": 318.76
    },
    {
      "Title": "Old Boy",
      "Genre": "Action",
      "Director": "Spike Lee",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 5.8,
      "Votes": 54679,
      
    },
    {
      "Title": "Thor: The Dark World",
      "Genre": "Action",
      "Director": "Alan Taylor",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7,
      "Votes": 443584,
      "Revenue (Millions)": 206.36
    },
    {
      "Title": "Gods of Egypt",
      "Genre": "Action",
      "Director": "Alex Proyas",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 5.5,
      "Votes": 73568,
      "Revenue (Millions)": 31.14
    },
    {
      "Title": "Captain America: The Winter Soldier",
      "Genre": "Action",
      "Director": "Anthony Russo",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 136,
      "Rating": 7.8,
      "Votes": 542362,
      "Revenue (Millions)": 259.75
    },
    {
      "Title": "Monster Trucks",
      "Genre": "Action",
      "Director": "Chris Wedge",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 5.7,
      "Votes": 7044,
      "Revenue (Millions)": 33.04
    },
    {
      "Title": "A Dark Song",
      "Genre": "Drama",
      "Director": "Liam Gavin",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.1,
      "Votes": 1703,
      
    },
    {
      "Title": "Kick-Ass",
      "Genre": "Action",
      "Director": "Matthew Vaughn",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.7,
      "Votes": 456749,
      "Revenue (Millions)": 48.04
    },
    {
      "Title": "Hardcore Henry",
      "Genre": "Action",
      "Director": "Ilya Naishuller",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.7,
      "Votes": 61098,
      "Revenue (Millions)": 9.24
    },
    {
      "Title": "Cars",
      "Genre": "Animation",
      "Director": "John Lasseter",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.1,
      "Votes": 283445,
      "Revenue (Millions)": 244.05
    },
    {
      "Title": "It Follows",
      "Genre": "Horror",
      "Director": "David Robert Mitchell",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.9,
      "Votes": 136399,
      "Revenue (Millions)": 14.67
    },
    {
      "Title": "The Girl with the Dragon Tattoo",
      "Genre": "Crime",
      "Director": "David Fincher",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 158,
      "Rating": 7.8,
      "Votes": 348551,
      "Revenue (Millions)": 102.52
    },
    {
      "Title": "We're the Millers",
      "Genre": "Comedy",
      "Director": "Rawson Marshall Thurber",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7,
      "Votes": 334867,
      "Revenue (Millions)": 150.37
    },
    {
      "Title": "American Honey",
      "Genre": "Drama",
      "Director": "Andrea Arnold",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 163,
      "Rating": 7,
      "Votes": 19660,
      "Revenue (Millions)": 0.66
    },
    {
      "Title": "The Lobster",
      "Genre": "Comedy",
      "Director": "Yorgos Lanthimos",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.1,
      "Votes": 121313,
      "Revenue (Millions)": 8.7
    },
    {
      "Title": "Predators",
      "Genre": "Action",
      "Director": "Nimr???d Antal",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.4,
      "Votes": 179450,
      "Revenue (Millions)": 52
    },
    {
      "Title": "Maleficent",
      "Genre": "Action",
      "Director": "Robert Stromberg",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7,
      "Votes": 268877,
      "Revenue (Millions)": 241.41
    },
    {
      "Title": "Rupture",
      "Genre": "Horror",
      "Director": "Steven Shainberg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 4.8,
      "Votes": 2382,
      
    },
    {
      "Title": "Pan's Labyrinth",
      "Genre": "Drama",
      "Director": "Guillermo del Toro",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 8.2,
      "Votes": 498879,
      "Revenue (Millions)": 37.62
    },
    {
      "Title": "A Kind of Murder",
      "Genre": "Crime",
      "Director": "Andy Goddard",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 5.2,
      "Votes": 3305,
      "Revenue (Millions)": 0
    },
    {
      "Title": "Apocalypto",
      "Genre": "Action",
      "Director": "Mel Gibson",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 7.8,
      "Votes": 247926,
      "Revenue (Millions)": 50.86
    },
    {
      "Title": "Mission: Impossible - Rogue Nation",
      "Genre": "Action",
      "Director": "Christopher McQuarrie",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 7.4,
      "Votes": 257472,
      "Revenue (Millions)": 195
    },
    {
      "Title": "The Huntsman: Winter's War",
      "Genre": "Action",
      "Director": "Cedric Nicolas-Troyan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 6.1,
      "Votes": 66766,
      "Revenue (Millions)": 47.95
    },
    {
      "Title": "The Perks of Being a Wallflower",
      "Genre": "Drama",
      "Director": "Stephen Chbosky",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 8,
      "Votes": 377336,
      "Revenue (Millions)": 17.74
    },
    {
      "Title": "Jackie",
      "Genre": "Biography",
      "Director": "Pablo Larra???n",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.8,
      "Votes": 41446,
      "Revenue (Millions)": 13.96
    },
    {
      "Title": "The Disappointments Room",
      "Genre": "Drama",
      "Director": "D.J. Caruso",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 3.9,
      "Votes": 4895,
      "Revenue (Millions)": 2.41
    },
    {
      "Title": "The Grand Budapest Hotel",
      "Genre": "Adventure",
      "Director": "Wes Anderson",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 8.1,
      "Votes": 530881,
      "Revenue (Millions)": 59.07
    },
    {
      "Title": "The Host",
      "Genre": "Action",
      "Director": "Andrew Niccol",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 5.9,
      "Votes": 96852,
      "Revenue (Millions)": 26.62
    },
    {
      "Title": "Fury",
      "Genre": "Action",
      "Director": "David Ayer",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 134,
      "Rating": 7.6,
      "Votes": 332234,
      "Revenue (Millions)": 85.71
    },
    {
      "Title": "Inside Out",
      "Genre": "Animation",
      "Director": "Pete Docter",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 8.2,
      "Votes": 416689,
      "Revenue (Millions)": 356.45
    },
    {
      "Title": "Rock Dog",
      "Genre": "Animation",
      "Director": "Ash Brannon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 5.8,
      "Votes": 1109,
      "Revenue (Millions)": 9.4
    },
    {
      "Title": "Terminator Genisys",
      "Genre": "Action",
      "Director": "Alan Taylor",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 6.5,
      "Votes": 205365,
      "Revenue (Millions)": 89.73
    },
    {
      "Title": "Percy Jackson & the Olympians: The Lightning Thief",
      "Genre": "Adventure",
      "Director": "Chris Columbus",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 5.9,
      "Votes": 148949,
      "Revenue (Millions)": 88.76
    },
    {
      "Title": "Les Mis???rables",
      "Genre": "Drama",
      "Director": "Tom Hooper",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 158,
      "Rating": 7.6,
      "Votes": 257426,
      "Revenue (Millions)": 148.78
    },
    {
      "Title": "Children of Men",
      "Genre": "Drama",
      "Director": "Alfonso Cuar???n",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7.9,
      "Votes": 382910,
      "Revenue (Millions)": 35.29
    },
    {
      "Title": "20th Century Women",
      "Genre": "Comedy",
      "Director": "Mike Mills",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.4,
      "Votes": 14708,
      "Revenue (Millions)": 5.66
    },
    {
      "Title": "Spy",
      "Genre": "Action",
      "Director": "Paul Feig",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.1,
      "Votes": 188017,
      "Revenue (Millions)": 110.82
    },
    {
      "Title": "The Intouchables",
      "Genre": "Biography",
      "Director": "Olivier Nakache",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 8.6,
      "Votes": 557965,
      "Revenue (Millions)": 13.18
    },
    {
      "Title": "Bonjour Anne",
      "Genre": "Comedy",
      "Director": "Eleanor Coppola",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 4.9,
      "Votes": 178,
      "Revenue (Millions)": 0.32
    },
    {
      "Title": "Kynodontas",
      "Genre": "Drama",
      "Director": "Yorgos Lanthimos",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 7.3,
      "Votes": 50946,
      "Revenue (Millions)": 0.11
    },
    {
      "Title": "Straight Outta Compton",
      "Genre": "Biography",
      "Director": "F. Gary Gray",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 147,
      "Rating": 7.9,
      "Votes": 139831,
      "Revenue (Millions)": 161.03
    },
    {
      "Title": "The Amazing Spider-Man 2",
      "Genre": "Action",
      "Director": "Marc Webb",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 142,
      "Rating": 6.7,
      "Votes": 342183,
      "Revenue (Millions)": 202.85
    },
    {
      "Title": "The Conjuring",
      "Genre": "Horror",
      "Director": "James Wan",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.5,
      "Votes": 330305,
      "Revenue (Millions)": 137.39
    },
    {
      "Title": "The Hangover",
      "Genre": "Comedy",
      "Director": "Todd Phillips",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.8,
      "Votes": 611563,
      "Revenue (Millions)": 277.31
    },
    {
      "Title": "Battleship",
      "Genre": "Action",
      "Director": "Peter Berg",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 5.8,
      "Votes": 210349,
      "Revenue (Millions)": 65.17
    },
    {
      "Title": "Rise of the Planet of the Apes",
      "Genre": "Action",
      "Director": "Rupert Wyatt",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 7.6,
      "Votes": 422290,
      "Revenue (Millions)": 176.74
    },
    {
      "Title": "Lights Out",
      "Genre": "Horror",
      "Director": "David F. Sandberg",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 81,
      "Rating": 6.4,
      "Votes": 69823,
      "Revenue (Millions)": 67.24
    },
    {
      "Title": "Norman: The Moderate Rise and Tragic Fall of a New York Fixer",
      "Genre": "Drama",
      "Director": "Joseph Cedar",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.1,
      "Votes": 664,
      "Revenue (Millions)": 2.27
    },
    {
      "Title": "Birdman or (The Unexpected Virtue of Ignorance)",
      "Genre": "Comedy",
      "Director": "Alejandro Gonz???lez I??????rritu",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.8,
      "Votes": 440299,
      "Revenue (Millions)": 42.34
    },
    {
      "Title": "Black Swan",
      "Genre": "Drama",
      "Director": "Darren Aronofsky",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 8,
      "Votes": 581518,
      "Revenue (Millions)": 106.95
    },
    {
      "Title": "Dear White People",
      "Genre": "Comedy",
      "Director": "Justin Simien",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.2,
      "Votes": 21715,
      "Revenue (Millions)": 4.4
    },
    {
      "Title": "Nymphomaniac: Vol. I",
      "Genre": "Drama",
      "Director": "Lars von Trier",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7,
      "Votes": 90556,
      "Revenue (Millions)": 0.79
    },
    {
      "Title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
      "Genre": "Action",
      "Director": "Dave Green",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6,
      "Votes": 59312,
      "Revenue (Millions)": 0.54
    },
    {
      "Title": "Knock Knock",
      "Genre": "Drama",
      "Director": "Eli Roth",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 4.9,
      "Votes": 53441,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "Dirty Grandpa",
      "Genre": "Comedy",
      "Director": "Dan Mazer",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6,
      "Votes": 75137,
      "Revenue (Millions)": 35.54
    },
    {
      "Title": "Cloud Atlas",
      "Genre": "Drama",
      "Director": "Tom Tykwer",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 172,
      "Rating": 7.5,
      "Votes": 298651,
      "Revenue (Millions)": 27.1
    },
    {
      "Title": "X-Men Origins: Wolverine",
      "Genre": "Action",
      "Director": "Gavin Hood",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.7,
      "Votes": 388447,
      "Revenue (Millions)": 179.88
    },
    {
      "Title": "Satanic",
      "Genre": "Horror",
      "Director": "Jeffrey G. Hunt",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 3.7,
      "Votes": 2384,
      
    },
    {
      "Title": "Skyfall",
      "Genre": "Action",
      "Director": "Sam Mendes",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 143,
      "Rating": 7.8,
      "Votes": 547386,
      "Revenue (Millions)": 304.36
    },
    {
      "Title": "The Hobbit: An Unexpected Journey",
      "Genre": "Adventure",
      "Director": "Peter Jackson",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 169,
      "Rating": 7.9,
      "Votes": 668651,
      "Revenue (Millions)": 303
    },
    {
      "Title": "21 Jump Street",
      "Genre": "Action",
      "Director": "Phil Lord",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7.2,
      "Votes": 432046,
      "Revenue (Millions)": 138.45
    },
    {
      "Title": "Sing Street",
      "Genre": "Comedy",
      "Director": "John Carney",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 8,
      "Votes": 52144,
      "Revenue (Millions)": 3.23
    },
    {
      "Title": "Ballerina",
      "Genre": "Animation",
      "Director": "Eric Summer",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6.8,
      "Votes": 4729,
      
    },
    {
      "Title": "Oblivion",
      "Genre": "Action",
      "Director": "Joseph Kosinski",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7,
      "Votes": 410125,
      "Revenue (Millions)": 89.02
    },
    {
      "Title": "22 Jump Street",
      "Genre": "Action",
      "Director": "Phil Lord",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.1,
      "Votes": 280110,
      "Revenue (Millions)": 191.62
    },
    {
      "Title": "Zodiac",
      "Genre": "Crime",
      "Director": "David Fincher",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 157,
      "Rating": 7.7,
      "Votes": 329683,
      "Revenue (Millions)": 33.05
    },
    {
      "Title": "Everybody Wants Some!!",
      "Genre": "Comedy",
      "Director": "Richard Linklater",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7,
      "Votes": 36312,
      "Revenue (Millions)": 3.37
    },
    {
      "Title": "Iron Man Three",
      "Genre": "Action",
      "Director": "Shane Black",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 7.2,
      "Votes": 591023,
      "Revenue (Millions)": 408.99
    },
    {
      "Title": "Now You See Me",
      "Genre": "Crime",
      "Director": "Louis Leterrier",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7.3,
      "Votes": 492324,
      "Revenue (Millions)": 117.7
    },
    {
      "Title": "Sherlock Holmes",
      "Genre": "Action",
      "Director": "Guy Ritchie",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.6,
      "Votes": 501769,
      "Revenue (Millions)": 209.02
    },
    {
      "Title": "Death Proof",
      "Genre": "Thriller",
      "Director": "Quentin Tarantino",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.1,
      "Votes": 220236,
      
    },
    {
      "Title": "The Danish Girl",
      "Genre": "Biography",
      "Director": "Tom Hooper",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7,
      "Votes": 110773,
      "Revenue (Millions)": 12.71
    },
    {
      "Title": "Hercules",
      "Genre": "Action",
      "Director": "Brett Ratner",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6,
      "Votes": 122838,
      "Revenue (Millions)": 72.66
    },
    {
      "Title": "Sucker Punch",
      "Genre": "Action",
      "Director": "Zack Snyder",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.1,
      "Votes": 204874,
      "Revenue (Millions)": 36.38
    },
    {
      "Title": "Keeping Up with the Joneses",
      "Genre": "Action",
      "Director": "Greg Mottola",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 5.8,
      "Votes": 30405,
      "Revenue (Millions)": 14.9
    },
    {
      "Title": "Jupiter Ascending",
      "Genre": "Action",
      "Director": "Lana Wachowski",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 5.3,
      "Votes": 150121,
      "Revenue (Millions)": 47.38
    },
    {
      "Title": "Masterminds",
      "Genre": "Action",
      "Director": "Jared Hess",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 5.8,
      "Votes": 26508,
      "Revenue (Millions)": 17.36
    },
    {
      "Title": "Iris",
      "Genre": "Thriller",
      "Director": "Jalil Lespert",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 6.1,
      "Votes": 726,
      
    },
    {
      "Title": "Busanhaeng",
      "Genre": "Action",
      "Director": "Sang-ho Yeon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.5,
      "Votes": 58782,
      "Revenue (Millions)": 2.13
    },
    {
      "Title": "Pitch Perfect",
      "Genre": "Comedy",
      "Director": "Jason Moore",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.2,
      "Votes": 226631,
      "Revenue (Millions)": 65
    },
    {
      "Title": "Neighbors 2: Sorority Rising",
      "Genre": "Comedy",
      "Director": "Nicholas Stoller",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 5.7,
      "Votes": 76327,
      "Revenue (Millions)": 55.29
    },
    {
      "Title": "The Exception",
      "Genre": "Drama",
      "Director": "David Leveaux",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7.7,
      "Votes": 96,
      
    },
    {
      "Title": "Man of Steel",
      "Genre": "Action",
      "Director": "Zack Snyder",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 143,
      "Rating": 7.1,
      "Votes": 577010,
      "Revenue (Millions)": 291.02
    },
    {
      "Title": "The Choice",
      "Genre": "Drama",
      "Director": "Ross Katz",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.6,
      "Votes": 20514,
      "Revenue (Millions)": 18.71
    },
    {
      "Title": "Ice Age: Collision Course",
      "Genre": "Animation",
      "Director": "Mike Thurmeier",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.7,
      "Votes": 34523,
      "Revenue (Millions)": 64.06
    },
    {
      "Title": "The Devil Wears Prada",
      "Genre": "Comedy",
      "Director": "David Frankel",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.8,
      "Votes": 302268,
      "Revenue (Millions)": 124.73
    },
    {
      "Title": "The Infiltrator",
      "Genre": "Biography",
      "Director": "Brad Furman",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 7.1,
      "Votes": 43929,
      "Revenue (Millions)": 15.43
    },
    {
      "Title": "There Will Be Blood",
      "Genre": "Drama",
      "Director": "Paul Thomas Anderson",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 158,
      "Rating": 8.1,
      "Votes": 400682,
      "Revenue (Millions)": 40.22
    },
    {
      "Title": "The Equalizer",
      "Genre": "Action",
      "Director": "Antoine Fuqua",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.2,
      "Votes": 249425,
      "Revenue (Millions)": 101.53
    },
    {
      "Title": "Lone Survivor",
      "Genre": "Action",
      "Director": "Peter Berg",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 7.5,
      "Votes": 218996,
      "Revenue (Millions)": 125.07
    },
    {
      "Title": "The Cabin in the Woods",
      "Genre": "Horror",
      "Director": "Drew Goddard",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7,
      "Votes": 295554,
      "Revenue (Millions)": 42.04
    },
    {
      "Title": "The House Bunny",
      "Genre": "Comedy",
      "Director": "Fred Wolf",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 5.5,
      "Votes": 67033,
      "Revenue (Millions)": 48.24
    },
    {
      "Title": "She's Out of My League",
      "Genre": "Comedy",
      "Director": "Jim Field Smith",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.4,
      "Votes": 105619,
      "Revenue (Millions)": 31.58
    },
    {
      "Title": "Inherent Vice",
      "Genre": "Comedy",
      "Director": "Paul Thomas Anderson",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 148,
      "Rating": 6.7,
      "Votes": 69509,
      "Revenue (Millions)": 8.09
    },
    {
      "Title": "Alice Through the Looking Glass",
      "Genre": "Adventure",
      "Director": "James Bobin",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.2,
      "Votes": 57207,
      "Revenue (Millions)": 77.04
    },
    {
      "Title": "Vincent N Roxxy",
      "Genre": "Crime",
      "Director": "Gary Michael Schultz",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.5,
      "Votes": 403,
      
    },
    {
      "Title": "The Fast and the Furious: Tokyo Drift",
      "Genre": "Action",
      "Director": "Justin Lin",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6,
      "Votes": 193479,
      "Revenue (Millions)": 62.49
    },
    {
      "Title": "How to Be Single",
      "Genre": "Comedy",
      "Director": "Christian Ditter",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.1,
      "Votes": 59886,
      "Revenue (Millions)": 46.81
    },
    {
      "Title": "The Blind Side",
      "Genre": "Biography",
      "Director": "John Lee Hancock",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 7.7,
      "Votes": 237221,
      "Revenue (Millions)": 255.95
    },
    {
      "Title": "La vie d'Ad???le",
      "Genre": "Drama",
      "Director": "Abdellatif Kechiche",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 180,
      "Rating": 7.8,
      "Votes": 103150,
      "Revenue (Millions)": 2.2
    },
    {
      "Title": "The Babadook",
      "Genre": "Drama",
      "Director": "Jennifer Kent",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 6.8,
      "Votes": 132580,
      "Revenue (Millions)": 0.92
    },
    {
      "Title": "The Hobbit: The Battle of the Five Armies",
      "Genre": "Adventure",
      "Director": "Peter Jackson",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 7.4,
      "Votes": 385598,
      "Revenue (Millions)": 255.11
    },
    {
      "Title": "Harry Potter and the Order of the Phoenix",
      "Genre": "Adventure",
      "Director": "David Yates",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 138,
      "Rating": 7.5,
      "Votes": 385325,
      "Revenue (Millions)": 292
    },
    {
      "Title": "Snowpiercer",
      "Genre": "Action",
      "Director": "Bong Joon Ho",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7,
      "Votes": 199048,
      "Revenue (Millions)": 4.56
    },
    {
      "Title": "The 5th Wave",
      "Genre": "Action",
      "Director": "J Blakeson",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 5.2,
      "Votes": 73093,
      "Revenue (Millions)": 34.91
    },
    {
      "Title": "The Stakelander",
      "Genre": "Action",
      "Director": "Dan Berk",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 81,
      "Rating": 5.3,
      "Votes": 1263,
      
    },
    {
      "Title": "The Visit",
      "Genre": "Comedy",
      "Director": "M. Night Shyamalan",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 6.2,
      "Votes": 81429,
      "Revenue (Millions)": 65.07
    },
    {
      "Title": "Fast Five",
      "Genre": "Action",
      "Director": "Justin Lin",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 7.3,
      "Votes": 300803,
      "Revenue (Millions)": 209.81
    },
    {
      "Title": "Step Up",
      "Genre": "Crime",
      "Director": "Anne Fletcher",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.5,
      "Votes": 95960,
      "Revenue (Millions)": 65.27
    },
    {
      "Title": "Lovesong",
      "Genre": "Drama",
      "Director": "So Yong Kim",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 84,
      "Rating": 6.4,
      "Votes": 616,
      "Revenue (Millions)": 0.01
    },
    {
      "Title": "RocknRolla",
      "Genre": "Action",
      "Director": "Guy Ritchie",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.3,
      "Votes": 203096,
      "Revenue (Millions)": 5.69
    },
    {
      "Title": "In Time",
      "Genre": "Action",
      "Director": "Andrew Niccol",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.7,
      "Votes": 319025,
      "Revenue (Millions)": 37.55
    },
    {
      "Title": "The Social Network",
      "Genre": "Biography",
      "Director": "David Fincher",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.7,
      "Votes": 510100,
      "Revenue (Millions)": 96.92
    },
    {
      "Title": "The Last Witch Hunter",
      "Genre": "Action",
      "Director": "Breck Eisner",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6,
      "Votes": 71149,
      "Revenue (Millions)": 27.36
    },
    {
      "Title": "Victor Frankenstein",
      "Genre": "Drama",
      "Director": "Paul McGuigan",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6,
      "Votes": 37975,
      "Revenue (Millions)": 5.77
    },
    {
      "Title": "A Street Cat Named Bob",
      "Genre": "Biography",
      "Director": "Roger Spottiswoode",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 7.4,
      "Votes": 12643,
      "Revenue (Millions)": 0.04
    },
    {
      "Title": "Green Room",
      "Genre": "Crime",
      "Director": "Jeremy Saulnier",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7,
      "Votes": 62885,
      "Revenue (Millions)": 3.22
    },
    {
      "Title": "Blackhat",
      "Genre": "Crime",
      "Director": "Michael Mann",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 5.4,
      "Votes": 43085,
      "Revenue (Millions)": 7.1
    },
    {
      "Title": "Storks",
      "Genre": "Animation",
      "Director": "Nicholas Stoller",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 6.9,
      "Votes": 34248,
      "Revenue (Millions)": 72.66
    },
    {
      "Title": "American Sniper",
      "Genre": "Action",
      "Director": "Clint Eastwood",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.3,
      "Votes": 353305,
      "Revenue (Millions)": 350.12
    },
    {
      "Title": "Dallas Buyers Club",
      "Genre": "Biography",
      "Director": "Jean-Marc Vall???e",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 8,
      "Votes": 352801,
      "Revenue (Millions)": 27.3
    },
    {
      "Title": "Lincoln",
      "Genre": "Biography",
      "Director": "Steven Spielberg",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 150,
      "Rating": 7.4,
      "Votes": 207497,
      "Revenue (Millions)": 182.2
    },
    {
      "Title": "Rush",
      "Genre": "Action",
      "Director": "Ron Howard",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 8.1,
      "Votes": 339722,
      "Revenue (Millions)": 26.9
    },
    {
      "Title": "Before I Wake",
      "Genre": "Drama",
      "Director": "Mike Flanagan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.1,
      "Votes": 18201,
      
    },
    {
      "Title": "Silver Linings Playbook",
      "Genre": "Comedy",
      "Director": "David O. Russell",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 7.8,
      "Votes": 564364,
      "Revenue (Millions)": 132.09
    },
    {
      "Title": "Tracktown",
      "Genre": "Drama",
      "Director": "Alexi Pappas",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 5.9,
      "Votes": 115,
      
    },
    {
      "Title": "The Fault in Our Stars",
      "Genre": "Drama",
      "Director": "Josh Boone",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7.8,
      "Votes": 271301,
      "Revenue (Millions)": 124.87
    },
    {
      "Title": "Blended",
      "Genre": "Comedy",
      "Director": "Frank Coraci",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.5,
      "Votes": 93764,
      "Revenue (Millions)": 46.28
    },
    {
      "Title": "Fast & Furious",
      "Genre": "Action",
      "Director": "Justin Lin",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.6,
      "Votes": 217464,
      "Revenue (Millions)": 155.02
    },
    {
      "Title": "Looper",
      "Genre": "Action",
      "Director": "Rian Johnson",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.4,
      "Votes": 452369,
      "Revenue (Millions)": 66.47
    },
    {
      "Title": "White House Down",
      "Genre": "Action",
      "Director": "Roland Emmerich",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 6.4,
      "Votes": 173320,
      "Revenue (Millions)": 73.1
    },
    {
      "Title": "Pete's Dragon",
      "Genre": "Adventure",
      "Director": "David Lowery",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6.8,
      "Votes": 36322,
      "Revenue (Millions)": 76.2
    },
    {
      "Title": "Spider-Man 3",
      "Genre": "Action",
      "Director": "Sam Raimi",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 6.2,
      "Votes": 406219,
      "Revenue (Millions)": 336.53
    },
    {
      "Title": "The Three Musketeers",
      "Genre": "Action",
      "Director": "Paul W.S. Anderson",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.8,
      "Votes": 92329,
      "Revenue (Millions)": 20.32
    },
    {
      "Title": "Stardust",
      "Genre": "Adventure",
      "Director": "Matthew Vaughn",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 7.7,
      "Votes": 220664,
      "Revenue (Millions)": 38.35
    },
    {
      "Title": "American Hustle",
      "Genre": "Crime",
      "Director": "David O. Russell",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 138,
      "Rating": 7.3,
      "Votes": 379088,
      "Revenue (Millions)": 150.12
    },
    {
      "Title": "Jennifer's Body",
      "Genre": "Comedy",
      "Director": "Karyn Kusama",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 5.1,
      "Votes": 96617,
      "Revenue (Millions)": 16.2
    },
    {
      "Title": "Midnight in Paris",
      "Genre": "Comedy",
      "Director": "Woody Allen",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 7.7,
      "Votes": 320323,
      "Revenue (Millions)": 56.82
    },
    {
      "Title": "Lady Macbeth",
      "Genre": "Drama",
      "Director": "William Oldroyd",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 7.3,
      "Votes": 1396,
      
    },
    {
      "Title": "Joy",
      "Genre": "Drama",
      "Director": "David O. Russell",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 6.6,
      "Votes": 97679,
      "Revenue (Millions)": 56.44
    },
    {
      "Title": "The Dressmaker",
      "Genre": "Comedy",
      "Director": "Jocelyn Moorhouse",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.1,
      "Votes": 33352,
      "Revenue (Millions)": 2.02
    },
    {
      "Title": "Caf??? Society",
      "Genre": "Comedy",
      "Director": "Woody Allen",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.7,
      "Votes": 45579,
      "Revenue (Millions)": 11.08
    },
    {
      "Title": "Insurgent",
      "Genre": "Adventure",
      "Director": "Robert Schwentke",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 6.3,
      "Votes": 171970,
      "Revenue (Millions)": 130
    },
    {
      "Title": "Seventh Son",
      "Genre": "Action",
      "Director": "Sergei Bodrov",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 5.5,
      "Votes": 59958,
      "Revenue (Millions)": 17.18
    },
    {
      "Title": "Demain tout commence",
      "Genre": "Comedy",
      "Director": "Hugo G???lin",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.4,
      "Votes": 5496,
      
    },
    {
      "Title": "The Theory of Everything",
      "Genre": "Biography",
      "Director": "James Marsh",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.7,
      "Votes": 299718,
      "Revenue (Millions)": 35.89
    },
    {
      "Title": "This Is the End",
      "Genre": "Comedy",
      "Director": "Evan Goldberg",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.6,
      "Votes": 327838,
      "Revenue (Millions)": 101.47
    },
    {
      "Title": "About Time",
      "Genre": "Comedy",
      "Director": "Richard Curtis",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.8,
      "Votes": 221600,
      "Revenue (Millions)": 15.29
    },
    {
      "Title": "Step Brothers",
      "Genre": "Comedy",
      "Director": "Adam McKay",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.9,
      "Votes": 223065,
      "Revenue (Millions)": 100.47
    },
    {
      "Title": "Clown",
      "Genre": "Horror",
      "Director": "Jon Watts",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 5.7,
      "Votes": 14248,
      "Revenue (Millions)": 0.05
    },
    {
      "Title": "Star Trek Into Darkness",
      "Genre": "Action",
      "Director": "J.J. Abrams",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.8,
      "Votes": 417663,
      "Revenue (Millions)": 228.76
    },
    {
      "Title": "Zombieland",
      "Genre": "Adventure",
      "Director": "Ruben Fleischer",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 7.7,
      "Votes": 409403,
      "Revenue (Millions)": 75.59
    },
    {
      "Title": "Hail, Caesar!",
      "Genre": "Comedy",
      "Director": "Ethan Coen",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6.3,
      "Votes": 89059,
      "Revenue (Millions)": 30
    },
    {
      "Title": "Slumdog Millionaire",
      "Genre": "Drama",
      "Director": "Danny Boyle",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 8,
      "Votes": 677044,
      "Revenue (Millions)": 141.32
    },
    {
      "Title": "The Twilight Saga: Breaking Dawn - Part 2",
      "Genre": "Adventure",
      "Director": "Bill Condon",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 5.5,
      "Votes": 194329,
      "Revenue (Millions)": 292.3
    },
    {
      "Title": "American Wrestler: The Wizard",
      "Genre": "Drama",
      "Director": "Alex Ranarivelo",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.9,
      "Votes": 286,
      
    },
    {
      "Title": "The Amazing Spider-Man",
      "Genre": "Action",
      "Director": "Marc Webb",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 136,
      "Rating": 7,
      "Votes": 474320,
      "Revenue (Millions)": 262.03
    },
    {
      "Title": "Ben-Hur",
      "Genre": "Action",
      "Director": "Timur Bekmambetov",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 5.7,
      "Votes": 28326,
      "Revenue (Millions)": 26.38
    },
    {
      "Title": "Sleight",
      "Genre": "Action",
      "Director": "J.D. Dillard",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6,
      "Votes": 702,
      "Revenue (Millions)": 3.85
    },
    {
      "Title": "The Maze Runner",
      "Genre": "Action",
      "Director": "Wes Ball",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.8,
      "Votes": 335531,
      "Revenue (Millions)": 102.41
    },
    {
      "Title": "Criminal",
      "Genre": "Action",
      "Director": "Ariel Vromen",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.3,
      "Votes": 38430,
      "Revenue (Millions)": 14.27
    },
    {
      "Title": "Wanted",
      "Genre": "Action",
      "Director": "Timur Bekmambetov",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.7,
      "Votes": 312495,
      "Revenue (Millions)": 134.57
    },
    {
      "Title": "Florence Foster Jenkins",
      "Genre": "Biography",
      "Director": "Stephen Frears",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.9,
      "Votes": 31776,
      "Revenue (Millions)": 27.37
    },
    {
      "Title": "Collide",
      "Genre": "Action",
      "Director": "Eran Creevy",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 5.7,
      "Votes": 7583,
      "Revenue (Millions)": 2.2
    },
    {
      "Title": "Black Mass",
      "Genre": "Biography",
      "Director": "Scott Cooper",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.9,
      "Votes": 135706,
      "Revenue (Millions)": 62.56
    },
    {
      "Title": "Creed",
      "Genre": "Drama",
      "Director": "Ryan Coogler",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.6,
      "Votes": 175673,
      "Revenue (Millions)": 109.71
    },
    {
      "Title": "Swiss Army Man",
      "Genre": "Adventure",
      "Director": "Dan Kwan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.1,
      "Votes": 61812,
      "Revenue (Millions)": 4.21
    },
    {
      "Title": "The Expendables 3",
      "Genre": "Action",
      "Director": "Patrick Hughes",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 6.1,
      "Votes": 137568,
      "Revenue (Millions)": 39.29
    },
    {
      "Title": "What We Do in the Shadows",
      "Genre": "Comedy",
      "Director": "Jemaine Clement",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 7.6,
      "Votes": 84016,
      "Revenue (Millions)": 3.33
    },
    {
      "Title": "Southpaw",
      "Genre": "Drama",
      "Director": "Antoine Fuqua",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7.4,
      "Votes": 169083,
      "Revenue (Millions)": 52.42
    },
    {
      "Title": "Hush",
      "Genre": "Horror",
      "Director": "Mike Flanagan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 81,
      "Rating": 6.6,
      "Votes": 45867,
      
    },
    {
      "Title": "Bridge of Spies",
      "Genre": "Drama",
      "Director": "Steven Spielberg",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 142,
      "Rating": 7.6,
      "Votes": 217938,
      "Revenue (Millions)": 72.31
    },
    {
      "Title": "The Lego Movie",
      "Genre": "Animation",
      "Director": "Phil Lord",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.8,
      "Votes": 266508,
      "Revenue (Millions)": 257.76
    },
    {
      "Title": "Everest",
      "Genre": "Action",
      "Director": "Baltasar Korm???kur",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 7.1,
      "Votes": 154647,
      "Revenue (Millions)": 43.25
    },
    {
      "Title": "Pixels",
      "Genre": "Action",
      "Director": "Chris Columbus",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 5.6,
      "Votes": 101092,
      "Revenue (Millions)": 78.75
    },
    {
      "Title": "Robin Hood",
      "Genre": "Action",
      "Director": "Ridley Scott",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 140,
      "Rating": 6.7,
      "Votes": 221117,
      "Revenue (Millions)": 105.22
    },
    {
      "Title": "The Wolverine",
      "Genre": "Action",
      "Director": "James Mangold",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 6.7,
      "Votes": 355362,
      "Revenue (Millions)": 132.55
    },
    {
      "Title": "John Carter",
      "Genre": "Action",
      "Director": "Andrew Stanton",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 6.6,
      "Votes": 220667,
      "Revenue (Millions)": 73.06
    },
    {
      "Title": "Keanu",
      "Genre": "Action",
      "Director": "Peter Atencio",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.3,
      "Votes": 31913,
      "Revenue (Millions)": 20.57
    },
    {
      "Title": "The Gunman",
      "Genre": "Action",
      "Director": "Pierre Morel",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 5.8,
      "Votes": 31194,
      "Revenue (Millions)": 10.64
    },
    {
      "Title": "Steve Jobs",
      "Genre": "Biography",
      "Director": "Danny Boyle",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 7.2,
      "Votes": 116112,
      "Revenue (Millions)": 17.75
    },
    {
      "Title": "Whisky Galore",
      "Genre": "Comedy",
      "Director": "Gillies MacKinnon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 5,
      "Votes": 102,
      
    },
    {
      "Title": "Grown Ups 2",
      "Genre": "Comedy",
      "Director": "Dennis Dugan",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 5.4,
      "Votes": 114482,
      "Revenue (Millions)": 133.67
    },
    {
      "Title": "The Age of Adaline",
      "Genre": "Drama",
      "Director": "Lee Toland Krieger",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.2,
      "Votes": 112288,
      "Revenue (Millions)": 42.48
    },
    {
      "Title": "The Incredible Hulk",
      "Genre": "Action",
      "Director": "Louis Leterrier",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.8,
      "Votes": 342355,
      "Revenue (Millions)": 134.52
    },
    {
      "Title": "Couples Retreat",
      "Genre": "Comedy",
      "Director": "Peter Billingsley",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 5.5,
      "Votes": 86417,
      "Revenue (Millions)": 109.18
    },
    {
      "Title": "Absolutely Anything",
      "Genre": "Comedy",
      "Director": "Terry Jones",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 6,
      "Votes": 26587,
      
    },
    {
      "Title": "Magic Mike",
      "Genre": "Comedy",
      "Director": "Steven Soderbergh",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.1,
      "Votes": 113686,
      "Revenue (Millions)": 113.71
    },
    {
      "Title": "Minions",
      "Genre": "Animation",
      "Director": "Kyle Balda",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 6.4,
      "Votes": 159830,
      "Revenue (Millions)": 336.03
    },
    {
      "Title": "The Black Room",
      "Genre": "Horror",
      "Director": "Rolfe Kanefsky",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 3.9,
      "Votes": 240,
      
    },
    {
      "Title": "Bronson",
      "Genre": "Action",
      "Director": "Nicolas Winding Refn",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 7.1,
      "Votes": 93972,
      "Revenue (Millions)": 0.1
    },
    {
      "Title": "Despicable Me",
      "Genre": "Animation",
      "Director": "Pierre Coffin",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.7,
      "Votes": 410607,
      "Revenue (Millions)": 251.5
    },
    {
      "Title": "The Best of Me",
      "Genre": "Drama",
      "Director": "Michael Hoffman",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.7,
      "Votes": 49041,
      "Revenue (Millions)": 26.76
    },
    {
      "Title": "The Invitation",
      "Genre": "Drama",
      "Director": "Karyn Kusama",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.7,
      "Votes": 40529,
      "Revenue (Millions)": 0.23
    },
    {
      "Title": "Zero Dark Thirty",
      "Genre": "Drama",
      "Director": "Kathryn Bigelow",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 157,
      "Rating": 7.4,
      "Votes": 226661,
      "Revenue (Millions)": 95.72
    },
    {
      "Title": "Tangled",
      "Genre": "Animation",
      "Director": "Nathan Greno",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.8,
      "Votes": 316459,
      "Revenue (Millions)": 200.81
    },
    {
      "Title": "The Hunger Games: Mockingjay - Part 2",
      "Genre": "Action",
      "Director": "Francis Lawrence",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 137,
      "Rating": 6.6,
      "Votes": 202380,
      "Revenue (Millions)": 281.67
    },
    {
      "Title": "Vacation",
      "Genre": "Adventure",
      "Director": "John Francis Daley",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 6.1,
      "Votes": 74589,
      "Revenue (Millions)": 58.88
    },
    {
      "Title": "Taken",
      "Genre": "Action",
      "Director": "Pierre Morel",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 7.8,
      "Votes": 502961,
      "Revenue (Millions)": 145
    },
    {
      "Title": "Pitch Perfect 2",
      "Genre": "Comedy",
      "Director": "Elizabeth Banks",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.5,
      "Votes": 108306,
      "Revenue (Millions)": 183.44
    },
    {
      "Title": "Monsters University",
      "Genre": "Animation",
      "Director": "Dan Scanlon",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 7.3,
      "Votes": 252119,
      "Revenue (Millions)": 268.49
    },
    {
      "Title": "Elle",
      "Genre": "Crime",
      "Director": "Paul Verhoeven",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 7.2,
      "Votes": 35417,
      
    },
    {
      "Title": "Mechanic: Resurrection",
      "Genre": "Action",
      "Director": "Dennis Gansel",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 5.6,
      "Votes": 48161,
      "Revenue (Millions)": 21.2
    },
    {
      "Title": "Tusk",
      "Genre": "Comedy",
      "Director": "Kevin Smith",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 5.4,
      "Votes": 34546,
      "Revenue (Millions)": 1.82
    },
    {
      "Title": "The Headhunter's Calling",
      "Genre": "Drama",
      "Director": "Mark Williams",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.9,
      "Votes": 164,
      
    },
    {
      "Title": "Atonement",
      "Genre": "Drama",
      "Director": "Joe Wright",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.8,
      "Votes": 202890,
      "Revenue (Millions)": 50.92
    },
    {
      "Title": "Harry Potter and the Deathly Hallows: Part 1",
      "Genre": "Adventure",
      "Director": "David Yates",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 146,
      "Rating": 7.7,
      "Votes": 357213,
      "Revenue (Millions)": 294.98
    },
    {
      "Title": "Shame",
      "Genre": "Drama",
      "Director": "Steve McQueen",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.2,
      "Votes": 155010,
      "Revenue (Millions)": 4
    },
    {
      "Title": "Hanna",
      "Genre": "Action",
      "Director": "Joe Wright",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.8,
      "Votes": 164208,
      "Revenue (Millions)": 40.25
    },
    {
      "Title": "The Babysitters",
      "Genre": "Drama",
      "Director": "David Ross",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 5.7,
      "Votes": 8914,
      "Revenue (Millions)": 0.04
    },
    {
      "Title": "Pride and Prejudice and Zombies",
      "Genre": "Action",
      "Director": "Burr Steers",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 5.8,
      "Votes": 35003,
      "Revenue (Millions)": 10.91
    },
    {
      "Title": "300: Rise of an Empire",
      "Genre": "Action",
      "Director": "Noam Murro",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6.2,
      "Votes": 237887,
      "Revenue (Millions)": 106.37
    },
    {
      "Title": "London Has Fallen",
      "Genre": "Action",
      "Director": "Babak Najafi",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 5.9,
      "Votes": 100702,
      "Revenue (Millions)": 62.4
    },
    {
      "Title": "The Curious Case of Benjamin Button",
      "Genre": "Drama",
      "Director": "David Fincher",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 166,
      "Rating": 7.8,
      "Votes": 485075,
      "Revenue (Millions)": 127.49
    },
    {
      "Title": "Sin City: A Dame to Kill For",
      "Genre": "Action",
      "Director": "Frank Miller",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6.5,
      "Votes": 122185,
      "Revenue (Millions)": 13.75
    },
    {
      "Title": "The Bourne Ultimatum",
      "Genre": "Action",
      "Director": "Paul Greengrass",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 8.1,
      "Votes": 525700,
      "Revenue (Millions)": 227.14
    },
    {
      "Title": "Srpski film",
      "Genre": "Horror",
      "Director": "Srdjan Spasojevic",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 5.2,
      "Votes": 43648,
      
    },
    {
      "Title": "The Purge: Election Year",
      "Genre": "Action",
      "Director": "James DeMonaco",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6,
      "Votes": 54216,
      "Revenue (Millions)": 79
    },
    {
      "Title": "3 Idiots",
      "Genre": "Comedy",
      "Director": "Rajkumar Hirani",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 170,
      "Rating": 8.4,
      "Votes": 238789,
      "Revenue (Millions)": 6.52
    },
    {
      "Title": "Zoolander 2",
      "Genre": "Comedy",
      "Director": "Ben Stiller",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 4.7,
      "Votes": 48297,
      "Revenue (Millions)": 28.84
    },
    {
      "Title": "World War Z",
      "Genre": "Action",
      "Director": "Marc Forster",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7,
      "Votes": 494819,
      "Revenue (Millions)": 202.35
    },
    {
      "Title": "Mission: Impossible - Ghost Protocol",
      "Genre": "Action",
      "Director": "Brad Bird",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.4,
      "Votes": 382459,
      "Revenue (Millions)": 209.36
    },
    {
      "Title": "Let Me Make You a Martyr",
      "Genre": "Action",
      "Director": "Corey Asraf",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6.4,
      "Votes": 223,
      
    },
    {
      "Title": "Filth",
      "Genre": "Comedy",
      "Director": "Jon S. Baird",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.1,
      "Votes": 81301,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "The Longest Ride",
      "Genre": "Drama",
      "Director": "George Tillman Jr.",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.1,
      "Votes": 58421,
      "Revenue (Millions)": 37.43
    },
    {
      "Title": "The imposible",
      "Genre": "Drama",
      "Director": "J.A. Bayona",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.6,
      "Votes": 156189,
      "Revenue (Millions)": 19
    },
    {
      "Title": "Kick-Ass 2",
      "Genre": "Action",
      "Director": "Jeff Wadlow",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.6,
      "Votes": 214825,
      "Revenue (Millions)": 28.75
    },
    {
      "Title": "Folk Hero & Funny Guy",
      "Genre": "Comedy",
      "Director": "Jeff Grace",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 5.6,
      "Votes": 220,
      
    },
    {
      "Title": "Oz the Great and Powerful",
      "Genre": "Adventure",
      "Director": "Sam Raimi",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 6.3,
      "Votes": 181521,
      "Revenue (Millions)": 234.9
    },
    {
      "Title": "Brooklyn",
      "Genre": "Drama",
      "Director": "John Crowley",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.5,
      "Votes": 94977,
      "Revenue (Millions)": 38.32
    },
    {
      "Title": "Coraline",
      "Genre": "Animation",
      "Director": "Henry Selick",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.7,
      "Votes": 156620,
      "Revenue (Millions)": 75.28
    },
    {
      "Title": "Blue Valentine",
      "Genre": "Drama",
      "Director": "Derek Cianfrance",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.4,
      "Votes": 151409,
      "Revenue (Millions)": 9.7
    },
    {
      "Title": "The Thinning",
      "Genre": "Thriller",
      "Director": "Michael J. Gallagher",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 81,
      "Rating": 6,
      "Votes": 4531,
      
    },
    {
      "Title": "Silent Hill",
      "Genre": "Adventure",
      "Director": "Christophe Gans",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 6.6,
      "Votes": 184152,
      "Revenue (Millions)": 46.98
    },
    {
      "Title": "Dredd",
      "Genre": "Action",
      "Director": "Pete Travis",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.1,
      "Votes": 213764,
      "Revenue (Millions)": 13.4
    },
    {
      "Title": "Hunt for the Wilderpeople",
      "Genre": "Adventure",
      "Director": "Taika Waititi",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.9,
      "Votes": 52331,
      "Revenue (Millions)": 5.2
    },
    {
      "Title": "Big Hero 6",
      "Genre": "Animation",
      "Director": "Don Hall",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.8,
      "Votes": 309186,
      "Revenue (Millions)": 222.49
    },
    {
      "Title": "Carrie",
      "Genre": "Drama",
      "Director": "Kimberly Peirce",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 5.9,
      "Votes": 113272,
      "Revenue (Millions)": 35.27
    },
    {
      "Title": "Iron Man 2",
      "Genre": "Action",
      "Director": "Jon Favreau",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7,
      "Votes": 556666,
      "Revenue (Millions)": 312.06
    },
    {
      "Title": "Demolition",
      "Genre": "Comedy",
      "Director": "Jean-Marc Vall???e",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7,
      "Votes": 58720,
      "Revenue (Millions)": 1.82
    },
    {
      "Title": "Pandorum",
      "Genre": "Action",
      "Director": "Christian Alvart",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.8,
      "Votes": 126656,
      "Revenue (Millions)": 10.33
    },
    {
      "Title": "Olympus Has Fallen",
      "Genre": "Action",
      "Director": "Antoine Fuqua",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 6.5,
      "Votes": 214994,
      "Revenue (Millions)": 98.9
    },
    {
      "Title": "I Am Number Four",
      "Genre": "Action",
      "Director": "D.J. Caruso",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.1,
      "Votes": 202682,
      "Revenue (Millions)": 55.09
    },
    {
      "Title": "Jagten",
      "Genre": "Drama",
      "Director": "Thomas Vinterberg",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 8.3,
      "Votes": 192263,
      "Revenue (Millions)": 0.61
    },
    {
      "Title": "The Proposal",
      "Genre": "Comedy",
      "Director": "Anne Fletcher",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.7,
      "Votes": 241709,
      "Revenue (Millions)": 163.95
    },
    {
      "Title": "Get Hard",
      "Genre": "Comedy",
      "Director": "Etan Cohen",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6,
      "Votes": 95119,
      "Revenue (Millions)": 90.35
    },
    {
      "Title": "Just Go with It",
      "Genre": "Comedy",
      "Director": "Dennis Dugan",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.4,
      "Votes": 182069,
      "Revenue (Millions)": 103.03
    },
    {
      "Title": "Revolutionary Road",
      "Genre": "Drama",
      "Director": "Sam Mendes",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7.3,
      "Votes": 159736,
      "Revenue (Millions)": 22.88
    },
    {
      "Title": "The Town",
      "Genre": "Crime",
      "Director": "Ben Affleck",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 7.6,
      "Votes": 294553,
      "Revenue (Millions)": 92.17
    },
    {
      "Title": "The Boy",
      "Genre": "Horror",
      "Director": "William Brent Bell",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6,
      "Votes": 51235,
      "Revenue (Millions)": 35.79
    },
    {
      "Title": "Denial",
      "Genre": "Biography",
      "Director": "Mick Jackson",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.6,
      "Votes": 8229,
      "Revenue (Millions)": 4.07
    },
    {
      "Title": "Predestination",
      "Genre": "Drama",
      "Director": "Michael Spierig",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.5,
      "Votes": 187760,
      
    },
    {
      "Title": "Goosebumps",
      "Genre": "Adventure",
      "Director": "Rob Letterman",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.3,
      "Votes": 57602,
      "Revenue (Millions)": 80.02
    },
    {
      "Title": "Sherlock Holmes: A Game of Shadows",
      "Genre": "Action",
      "Director": "Guy Ritchie",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 7.5,
      "Votes": 357436,
      "Revenue (Millions)": 186.83
    },
    {
      "Title": "Salt",
      "Genre": "Action",
      "Director": "Phillip Noyce",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.4,
      "Votes": 255813,
      "Revenue (Millions)": 118.31
    },
    {
      "Title": "Enemy",
      "Genre": "Mystery",
      "Director": "Denis Villeneuve",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 6.9,
      "Votes": 111558,
      "Revenue (Millions)": 1.01
    },
    {
      "Title": "District 9",
      "Genre": "Action",
      "Director": "Neill Blomkamp",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 8,
      "Votes": 556794,
      "Revenue (Millions)": 115.65
    },
    {
      "Title": "The Other Guys",
      "Genre": "Action",
      "Director": "Adam McKay",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.7,
      "Votes": 199900,
      "Revenue (Millions)": 119.22
    },
    {
      "Title": "American Gangster",
      "Genre": "Biography",
      "Director": "Ridley Scott",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 157,
      "Rating": 7.8,
      "Votes": 337835,
      "Revenue (Millions)": 130.13
    },
    {
      "Title": "Marie Antoinette",
      "Genre": "Biography",
      "Director": "Sofia Coppola",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.4,
      "Votes": 83941,
      "Revenue (Millions)": 15.96
    },
    {
      "Title": "",
      "Genre": "Action",
      "Director": "Roland Emmerich",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 158,
      "Rating": 5.8,
      "Votes": 297984,
      "Revenue (Millions)": 166.11
    },
    {
      "Title": "Harry Potter and the Half-Blood Prince",
      "Genre": "Adventure",
      "Director": "David Yates",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 153,
      "Rating": 7.5,
      "Votes": 351059,
      "Revenue (Millions)": 301.96
    },
    {
      "Title": "Argo",
      "Genre": "Biography",
      "Director": "Ben Affleck",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.7,
      "Votes": 481274,
      "Revenue (Millions)": 136.02
    },
    {
      "Title": "Eddie the Eagle",
      "Genre": "Biography",
      "Director": "Dexter Fletcher",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.4,
      "Votes": 56332,
      "Revenue (Millions)": 15.79
    },
    {
      "Title": "The Lives of Others",
      "Genre": "Drama",
      "Director": "Florian Henckel von Donnersmarck",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 137,
      "Rating": 8.5,
      "Votes": 278103,
      "Revenue (Millions)": 11.28
    },
    {
      "Title": "Pet",
      "Genre": "Horror",
      "Director": "Carles Torrens",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.7,
      "Votes": 8404,
      
    },
    {
      "Title": "Paint It Black",
      "Genre": "Drama",
      "Director": "Amber Tamblyn",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 8.3,
      "Votes": 61,
      
    },
    {
      "Title": "Macbeth",
      "Genre": "Drama",
      "Director": "Justin Kurzel",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.7,
      "Votes": 41642,
      
    },
    {
      "Title": "Forgetting Sarah Marshall",
      "Genre": "Comedy",
      "Director": "Nicholas Stoller",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 7.2,
      "Votes": 226619,
      "Revenue (Millions)": 62.88
    },
    {
      "Title": "The Giver",
      "Genre": "Drama",
      "Director": "Phillip Noyce",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.5,
      "Votes": 93799,
      "Revenue (Millions)": 45.09
    },
    {
      "Title": "Triple 9",
      "Genre": "Action",
      "Director": "John Hillcoat",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.3,
      "Votes": 48400,
      "Revenue (Millions)": 12.63
    },
    {
      "Title": "Perfetti sconosciuti",
      "Genre": "Comedy",
      "Director": "Paolo Genovese",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.7,
      "Votes": 17584,
      
    },
    {
      "Title": "Angry Birds",
      "Genre": "Animation",
      "Director": "Clay Kaytis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.3,
      "Votes": 55781,
      "Revenue (Millions)": 107.51
    },
    {
      "Title": "Moonrise Kingdom",
      "Genre": "Adventure",
      "Director": "Wes Anderson",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 7.8,
      "Votes": 254446,
      "Revenue (Millions)": 45.51
    },
    {
      "Title": "Hairspray",
      "Genre": "Comedy",
      "Director": "Adam Shankman",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.7,
      "Votes": 102954,
      "Revenue (Millions)": 118.82
    },
    {
      "Title": "Safe Haven",
      "Genre": "Drama",
      "Director": "Lasse Hallstr???m",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.7,
      "Votes": 84765,
      "Revenue (Millions)": 71.35
    },
    {
      "Title": "Focus",
      "Genre": "Comedy",
      "Director": "Glenn Ficarra",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 6.6,
      "Votes": 166489,
      "Revenue (Millions)": 53.85
    },
    {
      "Title": "Ratatouille",
      "Genre": "Animation",
      "Director": "Brad Bird",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 8,
      "Votes": 504039,
      "Revenue (Millions)": 206.44
    },
    {
      "Title": "Stake Land",
      "Genre": "Drama",
      "Director": "Jim Mickle",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.5,
      "Votes": 36091,
      "Revenue (Millions)": 0.02
    },
    {
      "Title": "The Book of Eli",
      "Genre": "Action",
      "Director": "Albert Hughes",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.9,
      "Votes": 241359,
      "Revenue (Millions)": 94.82
    },
    {
      "Title": "Cloverfield",
      "Genre": "Action",
      "Director": "Matt Reeves",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 7,
      "Votes": 313803,
      "Revenue (Millions)": 80.03
    },
    {
      "Title": "Point Break",
      "Genre": "Action",
      "Director": "Ericson Core",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 5.3,
      "Votes": 44553,
      "Revenue (Millions)": 28.77
    },
    {
      "Title": "Under the Skin",
      "Genre": "Drama",
      "Director": "Jonathan Glazer",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.3,
      "Votes": 94707,
      "Revenue (Millions)": 2.61
    },
    {
      "Title": "I Am Legend",
      "Genre": "Drama",
      "Director": "Francis Lawrence",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.2,
      "Votes": 565721,
      "Revenue (Millions)": 256.39
    },
    {
      "Title": "Men in Black 3",
      "Genre": "Action",
      "Director": "Barry Sonnenfeld",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6.8,
      "Votes": 278379,
      "Revenue (Millions)": 179.02
    },
    {
      "Title": "Super 8",
      "Genre": "Mystery",
      "Director": "J.J. Abrams",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.1,
      "Votes": 298913,
      "Revenue (Millions)": 126.98
    },
    {
      "Title": "Law Abiding Citizen",
      "Genre": "Crime",
      "Director": "F. Gary Gray",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7.4,
      "Votes": 228339,
      "Revenue (Millions)": 73.34
    },
    {
      "Title": "Up",
      "Genre": "Animation",
      "Director": "Pete Docter",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 8.3,
      "Votes": 722203,
      "Revenue (Millions)": 292.98
    },
    {
      "Title": "Maze Runner: The Scorch Trials",
      "Genre": "Action",
      "Director": "Wes Ball",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 6.3,
      "Votes": 159364,
      "Revenue (Millions)": 81.69
    },
    {
      "Title": "Carol",
      "Genre": "Drama",
      "Director": "Todd Haynes",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 7.2,
      "Votes": 77995,
      "Revenue (Millions)": 0.25
    },
    {
      "Title": "Imperium",
      "Genre": "Crime",
      "Director": "Daniel Ragussis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.5,
      "Votes": 27428,
      
    },
    {
      "Title": "Youth",
      "Genre": "Comedy",
      "Director": "Paolo Sorrentino",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7.3,
      "Votes": 52636,
      "Revenue (Millions)": 2.7
    },
    {
      "Title": "Mr. Nobody",
      "Genre": "Drama",
      "Director": "Jaco Van Dormael",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 141,
      "Rating": 7.9,
      "Votes": 166872,
      
    },
    {
      "Title": "City of Tiny Lights",
      "Genre": "Crime",
      "Director": "Pete Travis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.7,
      "Votes": 291,
      
    },
    {
      "Title": "Savages",
      "Genre": "Crime",
      "Director": "Oliver Stone",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 6.5,
      "Votes": 107960,
      "Revenue (Millions)": 47.31
    },
    {
      "Title": "(500) Days of Summer",
      "Genre": "Comedy",
      "Director": "Marc Webb",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.7,
      "Votes": 398972,
      "Revenue (Millions)": 32.39
    },
    {
      "Title": "Movie 43",
      "Genre": "Comedy",
      "Director": "Elizabeth Banks",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 4.3,
      "Votes": 83625,
      "Revenue (Millions)": 8.83
    },
    {
      "Title": "Gravity",
      "Genre": "Drama",
      "Director": "Alfonso Cuar???n",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 7.8,
      "Votes": 622089,
      "Revenue (Millions)": 274.08
    },
    {
      "Title": "The Boy in the Striped Pyjamas",
      "Genre": "Drama",
      "Director": "Mark Herman",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 7.8,
      "Votes": 144614,
      "Revenue (Millions)": 9.03
    },
    {
      "Title": "Shooter",
      "Genre": "Action",
      "Director": "Antoine Fuqua",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7.2,
      "Votes": 267820,
      "Revenue (Millions)": 46.98
    },
    {
      "Title": "The Happening",
      "Genre": "Sci-Fi",
      "Director": "M. Night Shyamalan",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 5,
      "Votes": 170897,
      "Revenue (Millions)": 64.51
    },
    {
      "Title": "Bone Tomahawk",
      "Genre": "Adventure",
      "Director": "S. Craig Zahler",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.1,
      "Votes": 47289,
      "Revenue (Millions)": 66.01
    },
    {
      "Title": "Magic Mike XXL",
      "Genre": "Comedy",
      "Director": "Gregory Jacobs",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 5.7,
      "Votes": 42506,
      
    },
    {
      "Title": "Easy A",
      "Genre": "Comedy",
      "Director": "Will Gluck",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 7.1,
      "Votes": 294950,
      "Revenue (Millions)": 58.4
    },
    {
      "Title": "Exodus: Gods and Kings",
      "Genre": "Action",
      "Director": "Ridley Scott",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 150,
      "Rating": 6,
      "Votes": 137299,
      "Revenue (Millions)": 65.01
    },
    {
      "Title": "Chappie",
      "Genre": "Action",
      "Director": "Neill Blomkamp",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 6.9,
      "Votes": 188769,
      "Revenue (Millions)": 31.57
    },
    {
      "Title": "The Hobbit: The Desolation of Smaug",
      "Genre": "Adventure",
      "Director": "Peter Jackson",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 161,
      "Rating": 7.9,
      "Votes": 513744,
      "Revenue (Millions)": 258.36
    },
    {
      "Title": "Half of a Yellow Sun",
      "Genre": "Drama",
      "Director": "Biyi Bandele",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.2,
      "Votes": 1356,
      "Revenue (Millions)": 0.05
    },
    {
      "Title": "Anthropoid",
      "Genre": "Biography",
      "Director": "Sean Ellis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.2,
      "Votes": 24100,
      "Revenue (Millions)": 2.96
    },
    {
      "Title": "The Counselor",
      "Genre": "Crime",
      "Director": "Ridley Scott",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 5.3,
      "Votes": 84927,
      "Revenue (Millions)": 16.97
    },
    {
      "Title": "Viking",
      "Genre": "Action",
      "Director": "Andrey Kravchuk",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 4.7,
      "Votes": 1830,
      "Revenue (Millions)": 23.05
    },
    {
      "Title": "Whiskey Tango Foxtrot",
      "Genre": "Biography",
      "Director": "Glenn Ficarra",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.6,
      "Votes": 36156,
      
    },
    {
      "Title": "Trust",
      "Genre": "Crime",
      "Director": "David Schwimmer",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7,
      "Votes": 36043,
      "Revenue (Millions)": 0.06
    },
    {
      "Title": "Birth of the Dragon",
      "Genre": "Action",
      "Director": "George Nolfi",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 3.9,
      "Votes": 552,
      "Revenue (Millions)": 93.05
    },
    {
      "Title": "Elysium",
      "Genre": "Action",
      "Director": "Neill Blomkamp",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.6,
      "Votes": 358932,
      
    },
    {
      "Title": "The Green Inferno",
      "Genre": "Adventure",
      "Director": "Eli Roth",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 5.4,
      "Votes": 26461,
      "Revenue (Millions)": 7.19
    },
    {
      "Title": "Godzilla",
      "Genre": "Action",
      "Director": "Gareth Edwards",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.4,
      "Votes": 318058,
      "Revenue (Millions)": 200.66
    },
    {
      "Title": "The Bourne Legacy",
      "Genre": "Action",
      "Director": "Tony Gilroy",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 135,
      "Rating": 6.7,
      "Votes": 245374,
      "Revenue (Millions)": 113.17
    },
    {
      "Title": "A Good Year",
      "Genre": "Comedy",
      "Director": "Ridley Scott",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.9,
      "Votes": 74674,
      "Revenue (Millions)": 7.46
    },
    {
      "Title": "Friend Request",
      "Genre": "Horror",
      "Director": "Simon Verhoeven",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 5.4,
      "Votes": 12758,
      "Revenue (Millions)": 64.03
    },
    {
      "Title": "Deja Vu",
      "Genre": "Action",
      "Director": "Tony Scott",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7,
      "Votes": 253858,
      
    },
    {
      "Title": "Lucy",
      "Genre": "Action",
      "Director": "Luc Besson",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6.4,
      "Votes": 352698,
      "Revenue (Millions)": 126.55
    },
    {
      "Title": "A Quiet Passion",
      "Genre": "Biography",
      "Director": "Terence Davies",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 7.2,
      "Votes": 1024,
      "Revenue (Millions)": 1.08
    },
    {
      "Title": "Need for Speed",
      "Genre": "Action",
      "Director": "Scott Waugh",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 6.5,
      "Votes": 143389,
      "Revenue (Millions)": 43.57
    },
    {
      "Title": "Jack Reacher",
      "Genre": "Action",
      "Director": "Christopher McQuarrie",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 7,
      "Votes": 250811,
      "Revenue (Millions)": 58.68
    },
    {
      "Title": "The Do-Over",
      "Genre": "Action",
      "Director": "Steven Brill",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 5.7,
      "Votes": 24761,
      "Revenue (Millions)": 0.54
    },
    {
      "Title": "True Crimes",
      "Genre": "Crime",
      "Director": "Alexandros Avranas",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 7.3,
      "Votes": 198,
      
    },
    {
      "Title": "American Pastoral",
      "Genre": "Crime",
      "Director": "Ewan McGregor",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.1,
      "Votes": 7115,
      
    },
    {
      "Title": "The Ghost Writer",
      "Genre": "Mystery",
      "Director": "Roman Polanski",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.2,
      "Votes": 137964,
      "Revenue (Millions)": 15.52
    },
    {
      "Title": "Limitless",
      "Genre": "Mystery",
      "Director": "Neil Burger",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 7.4,
      "Votes": 444417,
      "Revenue (Millions)": 79.24
    },
    {
      "Title": "Spectral",
      "Genre": "Action",
      "Director": "Nic Mathieu",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.3,
      "Votes": 27042,
      
    },
    {
      "Title": "P.S. I Love You",
      "Genre": "Drama",
      "Director": "Richard LaGravenese",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7.1,
      "Votes": 177247,
      "Revenue (Millions)": 53.68
    },
    {
      "Title": "Zipper",
      "Genre": "Drama",
      "Director": "Mora Stephens",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 5.7,
      "Votes": 4912,
      
    },
    {
      "Title": "Midnight Special",
      "Genre": "Drama",
      "Director": "Jeff Nichols",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.7,
      "Votes": 54787,
      "Revenue (Millions)": 3.71
    },
    {
      "Title": "Don't Think Twice",
      "Genre": "Comedy",
      "Director": "Mike Birbiglia",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.8,
      "Votes": 10485,
      "Revenue (Millions)": 4.42
    },
    {
      "Title": "Alice in Wonderland",
      "Genre": "Adventure",
      "Director": "Tim Burton",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.5,
      "Votes": 324898,
      "Revenue (Millions)": 334.19
    },
    {
      "Title": "Chuck",
      "Genre": "Biography",
      "Director": "Philippe Falardeau",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.8,
      "Votes": 391,
      "Revenue (Millions)": 0.11
    },
    {
      "Title": "I, Daniel Blake",
      "Genre": "Drama",
      "Director": "Ken Loach",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.9,
      "Votes": 22941,
      
    },
    {
      "Title": "The Break-Up",
      "Genre": "Comedy",
      "Director": "Peyton Reed",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 5.8,
      "Votes": 106381,
      "Revenue (Millions)": 118.68
    },
    {
      "Title": "Loving",
      "Genre": "Biography",
      "Director": "Jeff Nichols",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.1,
      "Votes": 17141,
      "Revenue (Millions)": 7.7
    },
    {
      "Title": "Fantastic Four",
      "Genre": "Action",
      "Director": "Josh Trank",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 4.3,
      "Votes": 121847,
      "Revenue (Millions)": 56.11
    },
    {
      "Title": "The Survivalist",
      "Genre": "Drama",
      "Director": "Stephen Fingleton",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.3,
      "Votes": 9187,
      
    },
    {
      "Title": "Colonia",
      "Genre": "Drama",
      "Director": "Florian Gallenberger",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.1,
      "Votes": 30074,
      
    },
    {
      "Title": "The Boy Next Door",
      "Genre": "Mystery",
      "Director": "Rob Cohen",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 4.6,
      "Votes": 30180,
      "Revenue (Millions)": 35.39
    },
    {
      "Title": "The Gift",
      "Genre": "Mystery",
      "Director": "Joel Edgerton",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 7.1,
      "Votes": 96688,
      "Revenue (Millions)": 43.77
    },
    {
      "Title": "Dracula Untold",
      "Genre": "Action",
      "Director": "Gary Shore",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.3,
      "Votes": 148504,
      "Revenue (Millions)": 55.94
    },
    {
      "Title": "In the Heart of the Sea",
      "Genre": "Action",
      "Director": "Ron Howard",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 6.9,
      "Votes": 90372,
      "Revenue (Millions)": 24.99
    },
    {
      "Title": "Idiocracy",
      "Genre": "Adventure",
      "Director": "Mike Judge",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 84,
      "Rating": 6.6,
      "Votes": 115355,
      "Revenue (Millions)": 0.44
    },
    {
      "Title": "The Expendables",
      "Genre": "Action",
      "Director": "Sylvester Stallone",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.5,
      "Votes": 283282,
      "Revenue (Millions)": 102.98
    },
    {
      "Title": "Evil Dead",
      "Genre": "Fantasy",
      "Director": "Fede Alvarez",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 6.5,
      "Votes": 133113,
      "Revenue (Millions)": 54.24
    },
    {
      "Title": "Sinister",
      "Genre": "Horror",
      "Director": "Scott Derrickson",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.8,
      "Votes": 171169,
      "Revenue (Millions)": 48.06
    },
    {
      "Title": "Wreck-It Ralph",
      "Genre": "Animation",
      "Director": "Rich Moore",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.8,
      "Votes": 290559,
      "Revenue (Millions)": 189.41
    },
    {
      "Title": "Snow White and the Huntsman",
      "Genre": "Action",
      "Director": "Rupert Sanders",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 6.1,
      "Votes": 239772,
      "Revenue (Millions)": 155.11
    },
    {
      "Title": "Pan",
      "Genre": "Adventure",
      "Director": "Joe Wright",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 5.8,
      "Votes": 47804,
      "Revenue (Millions)": 34.96
    },
    {
      "Title": "Transformers: Dark of the Moon",
      "Genre": "Action",
      "Director": "Michael Bay",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 154,
      "Rating": 6.3,
      "Votes": 338369,
      "Revenue (Millions)": 352.36
    },
    {
      "Title": "Juno",
      "Genre": "Comedy",
      "Director": "Jason Reitman",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 7.5,
      "Votes": 432461,
      "Revenue (Millions)": 143.49
    },
    {
      "Title": "A Hologram for the King",
      "Genre": "Comedy",
      "Director": "Tom Tykwer",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.1,
      "Votes": 26521,
      "Revenue (Millions)": 4.2
    },
    {
      "Title": "Money Monster",
      "Genre": "Crime",
      "Director": "Jodie Foster",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.5,
      "Votes": 68654,
      "Revenue (Millions)": 41.01
    },
    {
      "Title": "The Other Woman",
      "Genre": "Comedy",
      "Director": "Nick Cassavetes",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6,
      "Votes": 110825,
      "Revenue (Millions)": 83.91
    },
    {
      "Title": "Enchanted",
      "Genre": "Animation",
      "Director": "Kevin Lima",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7.1,
      "Votes": 150353,
      "Revenue (Millions)": 127.71
    },
    {
      "Title": "The Intern",
      "Genre": "Comedy",
      "Director": "Nancy Meyers",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 121,
      "Rating": 7.1,
      "Votes": 159582,
      "Revenue (Millions)": 75.27
    },
    {
      "Title": "Little Miss Sunshine",
      "Genre": "Comedy",
      "Director": "Jonathan Dayton",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7.8,
      "Votes": 374044,
      "Revenue (Millions)": 59.89
    },
    {
      "Title": "Bleed for This",
      "Genre": "Biography",
      "Director": "Ben Younger",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.8,
      "Votes": 11900,
      "Revenue (Millions)": 4.85
    },
    {
      "Title": "Clash of the Titans",
      "Genre": "Action",
      "Director": "Louis Leterrier",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 5.8,
      "Votes": 238206,
      "Revenue (Millions)": 163.19
    },
    {
      "Title": "The Finest Hours",
      "Genre": "Action",
      "Director": "Craig Gillespie",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.8,
      "Votes": 44425,
      "Revenue (Millions)": 27.55
    },
    {
      "Title": "Tron",
      "Genre": "Action",
      "Director": "Joseph Kosinski",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 6.8,
      "Votes": 273959,
      "Revenue (Millions)": 172.05
    },
    {
      "Title": "The Hunger Games: Catching Fire",
      "Genre": "Action",
      "Director": "Francis Lawrence",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 146,
      "Rating": 7.6,
      "Votes": 525646,
      "Revenue (Millions)": 424.65
    },
    {
      "Title": "All Good Things",
      "Genre": "Crime",
      "Director": "Andrew Jarecki",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.3,
      "Votes": 44158,
      "Revenue (Millions)": 0.58
    },
    {
      "Title": "Kickboxer: Vengeance",
      "Genre": "Action",
      "Director": "John Stockwell",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 4.9,
      "Votes": 6809,
      "Revenue (Millions)": 131.56
    },
    {
      "Title": "The Last Airbender",
      "Genre": "Action",
      "Director": "M. Night Shyamalan",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 4.2,
      "Votes": 125129,
      
    },
    {
      "Title": "Sex Tape",
      "Genre": "Comedy",
      "Director": "Jake Kasdan",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.1,
      "Votes": 89885,
      "Revenue (Millions)": 38.54
    },
    {
      "Title": "What to Expect When You're Expecting",
      "Genre": "Comedy",
      "Director": "Kirk Jones",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.7,
      "Votes": 60059,
      "Revenue (Millions)": 41.1
    },
    {
      "Title": "Moneyball",
      "Genre": "Biography",
      "Director": "Bennett Miller",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.6,
      "Votes": 297395,
      "Revenue (Millions)": 75.61
    },
    {
      "Title": "Ghost Rider",
      "Genre": "Action",
      "Director": "Mark Steven Johnson",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 5.2,
      "Votes": 190673,
      "Revenue (Millions)": 115.8
    },
    {
      "Title": "Unbroken",
      "Genre": "Biography",
      "Director": "Angelina Jolie",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 137,
      "Rating": 7.2,
      "Votes": 114006,
      "Revenue (Millions)": 115.6
    },
    {
      "Title": "Immortals",
      "Genre": "Action",
      "Director": "Tarsem Singh",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6,
      "Votes": 142900,
      "Revenue (Millions)": 83.5
    },
    {
      "Title": "Sunshine",
      "Genre": "Adventure",
      "Director": "Danny Boyle",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7.3,
      "Votes": 199860,
      "Revenue (Millions)": 3.68
    },
    {
      "Title": "Brave",
      "Genre": "Animation",
      "Director": "Mark Andrews",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 7.2,
      "Votes": 293941,
      "Revenue (Millions)": 237.28
    },
    {
      "Title": "M???n som hatar kvinnor",
      "Genre": "Drama",
      "Director": "Niels Arden Oplev",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 152,
      "Rating": 7.8,
      "Votes": 182074,
      "Revenue (Millions)": 10.1
    },
    {
      "Title": "Adoration",
      "Genre": "Drama",
      "Director": "Anne Fontaine",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.2,
      "Votes": 25208,
      "Revenue (Millions)": 0.32
    },
    {
      "Title": "The Drop",
      "Genre": "Crime",
      "Director": "Micha???l R. Roskam",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.1,
      "Votes": 116118,
      "Revenue (Millions)": 10.72
    },
    {
      "Title": "She's the Man",
      "Genre": "Comedy",
      "Director": "Andy Fickman",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 6.4,
      "Votes": 122864,
      "Revenue (Millions)": 2.34
    },
    {
      "Title": "Daddy's Home",
      "Genre": "Comedy",
      "Director": "Sean Anders",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.1,
      "Votes": 68306,
      "Revenue (Millions)": 150.32
    },
    {
      "Title": "Let Me In",
      "Genre": "Drama",
      "Director": "Matt Reeves",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.2,
      "Votes": 97141,
      "Revenue (Millions)": 12.13
    },
    {
      "Title": "Never Back Down",
      "Genre": "Action",
      "Director": "Jeff Wadlow",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.6,
      "Votes": 84083,
      "Revenue (Millions)": 24.85
    },
    {
      "Title": "Grimsby",
      "Genre": "Action",
      "Director": "Louis Leterrier",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 83,
      "Rating": 6.2,
      "Votes": 63408,
      "Revenue (Millions)": 6.86
    },
    {
      "Title": "Moon",
      "Genre": "Drama",
      "Director": "Duncan Jones",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.9,
      "Votes": 277123,
      "Revenue (Millions)": 5.01
    },
    {
      "Title": "Megamind",
      "Genre": "Animation",
      "Director": "Tom McGrath",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.3,
      "Votes": 183926,
      "Revenue (Millions)": 148.34
    },
    {
      "Title": "Gangster Squad",
      "Genre": "Action",
      "Director": "Ruben Fleischer",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.7,
      "Votes": 181432,
      "Revenue (Millions)": 46
    },
    {
      "Title": "Blood Father",
      "Genre": "Action",
      "Director": "Jean-Fran???ois Richet",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 6.4,
      "Votes": 40357,
      "Revenue (Millions)": 93.95
    },
    {
      "Title": "He's Just Not That Into You",
      "Genre": "Comedy",
      "Director": "Ken Kwapis",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 6.4,
      "Votes": 137684,
      
    },
    {
      "Title": "Kung Fu Panda 3",
      "Genre": "Animation",
      "Director": "Alessandro Carloni",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.2,
      "Votes": 89791,
      "Revenue (Millions)": 143.52
    },
    {
      "Title": "The Rise of the Krays",
      "Genre": "Crime",
      "Director": "Zackary Adler",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.1,
      "Votes": 1630,
      "Revenue (Millions)": 6.53
    },
    {
      "Title": "Handsome Devil",
      "Genre": "Drama",
      "Director": "John Butler",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.4,
      "Votes": 338,
      
    },
    {
      "Title": "Winter's Bone",
      "Genre": "Drama",
      "Director": "Debra Granik",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.2,
      "Votes": 116435,
      
    },
    {
      "Title": "Horrible Bosses",
      "Genre": "Comedy",
      "Director": "Seth Gordon",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.9,
      "Votes": 368556,
      "Revenue (Millions)": 117.53
    },
    {
      "Title": "Mommy",
      "Genre": "Drama",
      "Director": "Xavier Dolan",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 8.1,
      "Votes": 33560,
      "Revenue (Millions)": 3.49
    },
    {
      "Title": "Hellboy II: The Golden Army",
      "Genre": "Action",
      "Director": "Guillermo del Toro",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7,
      "Votes": 216932,
      "Revenue (Millions)": 75.75
    },
    {
      "Title": "Beautiful Creatures",
      "Genre": "Drama",
      "Director": "Richard LaGravenese",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 6.2,
      "Votes": 71822,
      "Revenue (Millions)": 19.45
    },
    {
      "Title": "Toni Erdmann",
      "Genre": "Comedy",
      "Director": "Maren Ade",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 162,
      "Rating": 7.6,
      "Votes": 24387,
      "Revenue (Millions)": 1.48
    },
    {
      "Title": "The Lovely Bones",
      "Genre": "Drama",
      "Director": "Peter Jackson",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 135,
      "Rating": 6.7,
      "Votes": 130702,
      "Revenue (Millions)": 43.98
    },
    {
      "Title": "The Assassination of Jesse James by the Coward Robert Ford",
      "Genre": "Biography",
      "Director": "Andrew Dominik",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 160,
      "Rating": 7.5,
      "Votes": 143564,
      "Revenue (Millions)": 3.9
    },
    {
      "Title": "Don Jon",
      "Genre": "Comedy",
      "Director": "Joseph Gordon-Levitt",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 6.6,
      "Votes": 199973,
      "Revenue (Millions)": 24.48
    },
    {
      "Title": "Bastille Day",
      "Genre": "Action",
      "Director": "James Watkins",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.3,
      "Votes": 21089,
      "Revenue (Millions)": 0.04
    },
    {
      "Title": "2307: Winter's Dream",
      "Genre": "Sci-Fi",
      "Director": "Joey Curtis",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 4,
      "Votes": 277,
      "Revenue (Millions)": 20.76
    },
    {
      "Title": "Free State of Jones",
      "Genre": "Action",
      "Director": "Gary Ross",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 6.9,
      "Votes": 29895,
      
    },
    {
      "Title": "Mr. Right",
      "Genre": "Action",
      "Director": "Paco Cabezas",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 6.3,
      "Votes": 30053,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "The Secret Life of Walter Mitty",
      "Genre": "Adventure",
      "Director": "Ben Stiller",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.3,
      "Votes": 249877,
      "Revenue (Millions)": 58.23
    },
    {
      "Title": "Dope",
      "Genre": "Comedy",
      "Director": "Rick Famuyiwa",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 7.3,
      "Votes": 66400,
      "Revenue (Millions)": 17.47
    },
    {
      "Title": "Underworld Awakening",
      "Genre": "Action",
      "Director": "M???ns M???rlind",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 6.4,
      "Votes": 127157,
      "Revenue (Millions)": 62.32
    },
    {
      "Title": "Antichrist",
      "Genre": "Drama",
      "Director": "Lars von Trier",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.6,
      "Votes": 94069,
      "Revenue (Millions)": 0.4
    },
    {
      "Title": "Friday the 13th",
      "Genre": "Horror",
      "Director": "Marcus Nispel",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 5.6,
      "Votes": 78631,
      "Revenue (Millions)": 65
    },
    {
      "Title": "Taken 3",
      "Genre": "Action",
      "Director": "Olivier Megaton",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6,
      "Votes": 144715,
      "Revenue (Millions)": 89.25
    },
    {
      "Title": "Total Recall",
      "Genre": "Action",
      "Director": "Len Wiseman",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.3,
      "Votes": 210965,
      "Revenue (Millions)": 58.88
    },
    {
      "Title": "X-Men: The Last Stand",
      "Genre": "Action",
      "Director": "Brett Ratner",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.7,
      "Votes": 406540,
      "Revenue (Millions)": 234.36
    },
    {
      "Title": "The Escort",
      "Genre": "Comedy",
      "Director": "Will Slocombe",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 6,
      "Votes": 7181,
      
    },
    {
      "Title": "The Whole Truth",
      "Genre": "Crime",
      "Director": "Courtney Hunt",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 6.1,
      "Votes": 10700,
      
    },
    {
      "Title": "Night at the Museum: Secret of the Tomb",
      "Genre": "Adventure",
      "Director": "Shawn Levy",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.2,
      "Votes": 74886,
      "Revenue (Millions)": 113.73
    },
    {
      "Title": "Love & Other Drugs",
      "Genre": "Comedy",
      "Director": "Edward Zwick",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.7,
      "Votes": 151519,
      "Revenue (Millions)": 32.36
    },
    {
      "Title": "The Interview",
      "Genre": "Comedy",
      "Director": "Evan Goldberg",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.6,
      "Votes": 261536,
      "Revenue (Millions)": 6.11
    },
    {
      "Title": "The Host",
      "Genre": "Comedy",
      "Director": "Bong Joon Ho",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7,
      "Votes": 73491,
      "Revenue (Millions)": 2.2
    },
    {
      "Title": "Megan Is Missing",
      "Genre": "Drama",
      "Director": "Michael Goi",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 4.9,
      "Votes": 6683,
      
    },
    {
      "Title": "WALL???E",
      "Genre": "Animation",
      "Director": "Andrew Stanton",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 8.4,
      "Votes": 776897,
      "Revenue (Millions)": 223.81
    },
    {
      "Title": "Knocked Up",
      "Genre": "Comedy",
      "Director": "Judd Apatow",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 7,
      "Votes": 309398,
      "Revenue (Millions)": 148.73
    },
    {
      "Title": "Source Code",
      "Genre": "Mystery",
      "Director": "Duncan Jones",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 7.5,
      "Votes": 404884,
      "Revenue (Millions)": 54.7
    },
    {
      "Title": "Lawless",
      "Genre": "Crime",
      "Director": "John Hillcoat",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.3,
      "Votes": 195360,
      "Revenue (Millions)": 37.4
    },
    {
      "Title": "Unfriended",
      "Genre": "Drama",
      "Director": "Levan Gabriadze",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 83,
      "Rating": 5.6,
      "Votes": 50402,
      "Revenue (Millions)": 31.54
    },
    {
      "Title": "American Reunion",
      "Genre": "Comedy",
      "Director": "Jon Hurwitz",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.7,
      "Votes": 178471,
      "Revenue (Millions)": 56.72
    },
    {
      "Title": "The Pursuit of Happyness",
      "Genre": "Biography",
      "Director": "Gabriele Muccino",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 8,
      "Votes": 361105,
      "Revenue (Millions)": 162.59
    },
    {
      "Title": "Relatos salvajes",
      "Genre": "Comedy",
      "Director": "Dami???n Szifron",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 8.1,
      "Votes": 110100,
      "Revenue (Millions)": 3.08
    },
    {
      "Title": "The Ridiculous 6",
      "Genre": "Comedy",
      "Director": "Frank Coraci",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 4.8,
      "Votes": 31149,
      
    },
    {
      "Title": "Frantz",
      "Genre": "Drama",
      "Director": "Fran???ois Ozon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.5,
      "Votes": 4304,
      "Revenue (Millions)": 0.86
    },
    {
      "Title": "Viral",
      "Genre": "Drama",
      "Director": "Henry Joost",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 5.5,
      "Votes": 3564,
      
    },
    {
      "Title": "Gran Torino",
      "Genre": "Drama",
      "Director": "Clint Eastwood",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 8.2,
      "Votes": 595779,
      "Revenue (Millions)": 148.09
    },
    {
      "Title": "Burnt",
      "Genre": "Comedy",
      "Director": "John Wells",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.6,
      "Votes": 76469,
      "Revenue (Millions)": 13.65
    },
    {
      "Title": "Tall Men",
      "Genre": "Fantasy",
      "Director": "Jonathan Holbrook",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 3.2,
      "Votes": 173,
      
    },
    {
      "Title": "Sleeping Beauty",
      "Genre": "Drama",
      "Director": "Julia Leigh",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 5.3,
      "Votes": 27006,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "Vampire Academy",
      "Genre": "Action",
      "Director": "Mark Waters",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 5.6,
      "Votes": 44111,
      "Revenue (Millions)": 7.79
    },
    {
      "Title": "Sweeney Todd: The Demon Barber of Fleet Street",
      "Genre": "Drama",
      "Director": "Tim Burton",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.4,
      "Votes": 296289,
      "Revenue (Millions)": 52.88
    },
    {
      "Title": "Solace",
      "Genre": "Crime",
      "Director": "Afonso Poyart",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.4,
      "Votes": 36300,
      
    },
    {
      "Title": "Insidious",
      "Genre": "Horror",
      "Director": "James Wan",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.8,
      "Votes": 219916,
      "Revenue (Millions)": 53.99
    },
    {
      "Title": "Popstar: Never Stop Never Stopping",
      "Genre": "Comedy",
      "Director": "Akiva Schaffer",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 6.7,
      "Votes": 30875,
      "Revenue (Millions)": 9.39
    },
    {
      "Title": "The Levelling",
      "Genre": "Drama",
      "Director": "Hope Dickson Leach",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 83,
      "Rating": 6.4,
      "Votes": 482,
      
    },
    {
      "Title": "Public Enemies",
      "Genre": "Biography",
      "Director": "Michael Mann",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 140,
      "Rating": 7,
      "Votes": 240323,
      "Revenue (Millions)": 97.03
    },
    {
      "Title": "Boyhood",
      "Genre": "Drama",
      "Director": "Richard Linklater",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 165,
      "Rating": 7.9,
      "Votes": 286722,
      "Revenue (Millions)": 25.36
    },
    {
      "Title": "Teenage Mutant Ninja Turtles",
      "Genre": "Action",
      "Director": "Jonathan Liebesman",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 5.9,
      "Votes": 178527,
      "Revenue (Millions)": 190.87
    },
    {
      "Title": "Eastern Promises",
      "Genre": "Crime",
      "Director": "David Cronenberg",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.7,
      "Votes": 198006,
      "Revenue (Millions)": 17.11
    },
    {
      "Title": "The Daughter",
      "Genre": "Drama",
      "Director": "Simon Stone",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.7,
      "Votes": 2798,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "Pineapple Express",
      "Genre": "Action",
      "Director": "David Gordon Green",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 7,
      "Votes": 267872,
      "Revenue (Millions)": 87.34
    },
    {
      "Title": "The First Time",
      "Genre": "Comedy",
      "Director": "Jon Kasdan",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 6.9,
      "Votes": 54027,
      "Revenue (Millions)": 0.02
    },
    {
      "Title": "Gone Baby Gone",
      "Genre": "Crime",
      "Director": "Ben Affleck",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.7,
      "Votes": 206707,
      "Revenue (Millions)": 20.3
    },
    {
      "Title": "The Heat",
      "Genre": "Action",
      "Director": "Paul Feig",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.6,
      "Votes": 140151,
      "Revenue (Millions)": 159.58
    },
    {
      "Title": "L'avenir",
      "Genre": "Drama",
      "Director": "Mia Hansen-L???ve",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.1,
      "Votes": 5796,
      "Revenue (Millions)": 0.28
    },
    {
      "Title": "Anna Karenina",
      "Genre": "Drama",
      "Director": "Joe Wright",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 6.6,
      "Votes": 75291,
      "Revenue (Millions)": 12.8
    },
    {
      "Title": "Regression",
      "Genre": "Crime",
      "Director": "Alejandro Amen???bar",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 5.7,
      "Votes": 26320,
      "Revenue (Millions)": 0.05
    },
    {
      "Title": "Ted 2",
      "Genre": "Adventure",
      "Director": "Seth MacFarlane",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.3,
      "Votes": 136323,
      "Revenue (Millions)": 81.26
    },
    {
      "Title": "Pain & Gain",
      "Genre": "Comedy",
      "Director": "Michael Bay",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 6.5,
      "Votes": 168875,
      "Revenue (Millions)": 49.87
    },
    {
      "Title": "Blood Diamond",
      "Genre": "Adventure",
      "Director": "Edward Zwick",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 143,
      "Rating": 8,
      "Votes": 422014,
      "Revenue (Millions)": 57.37
    },
    {
      "Title": "Devil's Knot",
      "Genre": "Biography",
      "Director": "Atom Egoyan",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 6.1,
      "Votes": 15514,
      
    },
    {
      "Title": "Child 44",
      "Genre": "Crime",
      "Director": "Daniel Espinosa",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 137,
      "Rating": 6.5,
      "Votes": 47703,
      "Revenue (Millions)": 1.21
    },
    {
      "Title": "The Hurt Locker",
      "Genre": "Drama",
      "Director": "Kathryn Bigelow",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 7.6,
      "Votes": 352023,
      "Revenue (Millions)": 15.7
    },
    {
      "Title": "Green Lantern",
      "Genre": "Action",
      "Director": "Martin Campbell",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 5.6,
      "Votes": 231907,
      "Revenue (Millions)": 116.59
    },
    {
      "Title": "War on Everyone",
      "Genre": "Action",
      "Director": "John Michael McDonagh",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 5.9,
      "Votes": 9285,
      
    },
    {
      "Title": "The Mist",
      "Genre": "Horror",
      "Director": "Frank Darabont",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7.2,
      "Votes": 233346,
      "Revenue (Millions)": 25.59
    },
    {
      "Title": "Escape Plan",
      "Genre": "Action",
      "Director": "Mikael H???fstr???m",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.7,
      "Votes": 188004,
      "Revenue (Millions)": 25.12
    },
    {
      "Title": "Love, Rosie",
      "Genre": "Comedy",
      "Director": "Christian Ditter",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.2,
      "Votes": 80415,
      "Revenue (Millions)": 0.01
    },
    {
      "Title": "The DUFF",
      "Genre": "Comedy",
      "Director": "Ari Sandel",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.5,
      "Votes": 57874,
      "Revenue (Millions)": 34.02
    },
    {
      "Title": "The Age of Shadows",
      "Genre": "Action",
      "Director": "Jee-woon Kim",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 140,
      "Rating": 7.2,
      "Votes": 2403,
      "Revenue (Millions)": 0.54
    },
    {
      "Title": "The Hunger Games: Mockingjay - Part 1",
      "Genre": "Action",
      "Director": "Francis Lawrence",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.7,
      "Votes": 331902,
      "Revenue (Millions)": 337.1
    },
    {
      "Title": "We Need to Talk About Kevin",
      "Genre": "Drama",
      "Director": "Lynne Ramsay",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 7.5,
      "Votes": 104953,
      "Revenue (Millions)": 1.74
    },
    {
      "Title": "Love & Friendship",
      "Genre": "Comedy",
      "Director": "Whit Stillman",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 6.5,
      "Votes": 16164,
      "Revenue (Millions)": 14.01
    },
    {
      "Title": "The Mortal Instruments: City of Bones",
      "Genre": "Action",
      "Director": "Harald Zwart",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 130,
      "Rating": 5.9,
      "Votes": 112313,
      "Revenue (Millions)": 31.17
    },
    {
      "Title": "Seven Pounds",
      "Genre": "Drama",
      "Director": "Gabriele Muccino",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.7,
      "Votes": 245144,
      "Revenue (Millions)": 69.95
    },
    {
      "Title": "The King's Speech",
      "Genre": "Biography",
      "Director": "Tom Hooper",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 8,
      "Votes": 534388,
      "Revenue (Millions)": 138.8
    },
    {
      "Title": "Hunger",
      "Genre": "Biography",
      "Director": "Steve McQueen",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 7.6,
      "Votes": 54486,
      "Revenue (Millions)": 0.15
    },
    {
      "Title": "Jumper",
      "Genre": "Action",
      "Director": "Doug Liman",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 6.1,
      "Votes": 252503,
      "Revenue (Millions)": 80.17
    },
    {
      "Title": "Toy Story 3",
      "Genre": "Animation",
      "Director": "Lee Unkrich",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 8.3,
      "Votes": 586669,
      "Revenue (Millions)": 414.98
    },
    {
      "Title": "Tinker Tailor Soldier Spy",
      "Genre": "Drama",
      "Director": "Tomas Alfredson",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 7.1,
      "Votes": 157053,
      "Revenue (Millions)": 24.1
    },
    {
      "Title": "Resident Evil: Retribution",
      "Genre": "Action",
      "Director": "Paul W.S. Anderson",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 5.4,
      "Votes": 114144,
      "Revenue (Millions)": 42.35
    },
    {
      "Title": "Dear Zindagi",
      "Genre": "Drama",
      "Director": "Gauri Shinde",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 151,
      "Rating": 7.8,
      "Votes": 23540,
      "Revenue (Millions)": 1.4
    },
    {
      "Title": "Genius",
      "Genre": "Biography",
      "Director": "Michael Grandage",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.5,
      "Votes": 10708,
      "Revenue (Millions)": 1.36
    },
    {
      "Title": "Pompeii",
      "Genre": "Action",
      "Director": "Paul W.S. Anderson",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 5.5,
      "Votes": 90188,
      "Revenue (Millions)": 23.22
    },
    {
      "Title": "Life of Pi",
      "Genre": "Adventure",
      "Director": "Ang Lee",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 7.9,
      "Votes": 471109,
      "Revenue (Millions)": 124.98
    },
    {
      "Title": "Hachi: A Dog's Tale",
      "Genre": "Drama",
      "Director": "Lasse Hallstr???m",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 8.1,
      "Votes": 177602,
      
    },
    {
      "Title": "10 Years",
      "Genre": "Comedy",
      "Director": "Jamie Linden",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.1,
      "Votes": 19636,
      "Revenue (Millions)": 0.2
    },
    {
      "Title": "I Origins",
      "Genre": "Drama",
      "Director": "Mike Cahill",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.3,
      "Votes": 86271,
      "Revenue (Millions)": 0.33
    },
    {
      "Title": "Live Free or Die Hard",
      "Genre": "Action",
      "Director": "Len Wiseman",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.2,
      "Votes": 347567,
      "Revenue (Millions)": 134.52
    },
    {
      "Title": "The Matchbreaker",
      "Genre": "Comedy",
      "Director": "Caleb Vetter",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.5,
      "Votes": 1427,
      
    },
    {
      "Title": "Funny Games",
      "Genre": "Crime",
      "Director": "Michael Haneke",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.5,
      "Votes": 73835,
      "Revenue (Millions)": 1.29
    },
    {
      "Title": "Ted",
      "Genre": "Comedy",
      "Director": "Seth MacFarlane",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7,
      "Votes": 494641,
      "Revenue (Millions)": 218.63
    },
    {
      "Title": "RED",
      "Genre": "Action",
      "Director": "Robert Schwentke",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 7.1,
      "Votes": 250012,
      "Revenue (Millions)": 90.36
    },
    {
      "Title": "Australia",
      "Genre": "Adventure",
      "Director": "Baz Luhrmann",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 165,
      "Rating": 6.6,
      "Votes": 106115,
      "Revenue (Millions)": 49.55
    },
    {
      "Title": "Faster",
      "Genre": "Action",
      "Director": "George Tillman Jr.",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.5,
      "Votes": 83788,
      "Revenue (Millions)": 23.23
    },
    {
      "Title": "The Neighbor",
      "Genre": "Crime",
      "Director": "Marcus Dunstan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 5.8,
      "Votes": 4754,
      
    },
    {
      "Title": "The Adjustment Bureau",
      "Genre": "Romance",
      "Director": "George Nolfi",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 7.1,
      "Votes": 208632,
      "Revenue (Millions)": 62.45
    },
    {
      "Title": "The Hollars",
      "Genre": "Comedy",
      "Director": "John Krasinski",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 6.5,
      "Votes": 5908,
      "Revenue (Millions)": 1.02
    },
    {
      "Title": "The Judge",
      "Genre": "Crime",
      "Director": "David Dobkin",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 141,
      "Rating": 7.4,
      "Votes": 146812,
      "Revenue (Millions)": 47.11
    },
    {
      "Title": "Closed Circuit",
      "Genre": "Crime",
      "Director": "John Crowley",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.2,
      "Votes": 18437,
      "Revenue (Millions)": 5.73
    },
    {
      "Title": "Transformers: Revenge of the Fallen",
      "Genre": "Action",
      "Director": "Michael Bay",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 150,
      "Rating": 6,
      "Votes": 335757,
      "Revenue (Millions)": 402.08
    },
    {
      "Title": "La tortue rouge",
      "Genre": "Animation",
      "Director": "Michael Dudok de Wit",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 80,
      "Rating": 7.6,
      "Votes": 11482,
      "Revenue (Millions)": 0.92
    },
    {
      "Title": "The Book of Life",
      "Genre": "Animation",
      "Director": "Jorge R. Guti???rrez",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.3,
      "Votes": 50388,
      "Revenue (Millions)": 50.15
    },
    {
      "Title": "Incendies",
      "Genre": "Drama",
      "Director": "Denis Villeneuve",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 8.2,
      "Votes": 92863,
      "Revenue (Millions)": 6.86
    },
    {
      "Title": "The Heartbreak Kid",
      "Genre": "Comedy",
      "Director": "Bobby Farrelly",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 5.8,
      "Votes": 74664,
      "Revenue (Millions)": 36.77
    },
    {
      "Title": "Happy Feet",
      "Genre": "Animation",
      "Director": "George Miller",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.5,
      "Votes": 141141,
      "Revenue (Millions)": 197.99
    },
    {
      "Title": "Entourage",
      "Genre": "Comedy",
      "Director": "Doug Ellin",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.6,
      "Votes": 64557,
      "Revenue (Millions)": 32.36
    },
    {
      "Title": "The Strangers",
      "Genre": "Horror",
      "Director": "Bryan Bertino",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 6.2,
      "Votes": 96718,
      "Revenue (Millions)": 52.53
    },
    {
      "Title": "Noah",
      "Genre": "Action",
      "Director": "Darren Aronofsky",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 138,
      "Rating": 5.8,
      "Votes": 209700,
      "Revenue (Millions)": 101.16
    },
    {
      "Title": "Neighbors",
      "Genre": "Comedy",
      "Director": "Nicholas Stoller",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.4,
      "Votes": 236500,
      "Revenue (Millions)": 150.06
    },
    {
      "Title": "Nymphomaniac: Vol. II",
      "Genre": "Drama",
      "Director": "Lars von Trier",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.7,
      "Votes": 65824,
      "Revenue (Millions)": 0.33
    },
    {
      "Title": "Wild",
      "Genre": "Adventure",
      "Director": "Jean-Marc Vall???e",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7.1,
      "Votes": 95553,
      "Revenue (Millions)": 37.88
    },
    {
      "Title": "Grown Ups",
      "Genre": "Comedy",
      "Director": "Dennis Dugan",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6,
      "Votes": 190385,
      "Revenue (Millions)": 162
    },
    {
      "Title": "Blair Witch",
      "Genre": "Horror",
      "Director": "Adam Wingard",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 5.1,
      "Votes": 26088,
      "Revenue (Millions)": 20.75
    },
    {
      "Title": "The Karate Kid",
      "Genre": "Action",
      "Director": "Harald Zwart",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 140,
      "Rating": 6.2,
      "Votes": 127983,
      "Revenue (Millions)": 176.59
    },
    {
      "Title": "Dark Shadows",
      "Genre": "Comedy",
      "Director": "Tim Burton",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.2,
      "Votes": 209326,
      "Revenue (Millions)": 79.71
    },
    {
      "Title": "Friends with Benefits",
      "Genre": "Comedy",
      "Director": "Will Gluck",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.6,
      "Votes": 286543,
      "Revenue (Millions)": 55.8
    },
    {
      "Title": "The Illusionist",
      "Genre": "Drama",
      "Director": "Neil Burger",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7.6,
      "Votes": 309934,
      "Revenue (Millions)": 39.83
    },
    {
      "Title": "The A-Team",
      "Genre": "Action",
      "Director": "Joe Carnahan",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.8,
      "Votes": 219116,
      "Revenue (Millions)": 77.21
    },
    {
      "Title": "The Guest",
      "Genre": "Thriller",
      "Director": "Adam Wingard",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.7,
      "Votes": 71069,
      "Revenue (Millions)": 0.32
    },
    {
      "Title": "The Internship",
      "Genre": "Comedy",
      "Director": "Shawn Levy",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 6.3,
      "Votes": 166342,
      "Revenue (Millions)": 44.67
    },
    {
      "Title": "Paul",
      "Genre": "Adventure",
      "Director": "Greg Mottola",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 7,
      "Votes": 201707,
      "Revenue (Millions)": 37.37
    },
    {
      "Title": "This Beautiful Fantastic",
      "Genre": "Comedy",
      "Director": "Simon Aboud",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.9,
      "Votes": 688,
      
    },
    {
      "Title": "The Da Vinci Code",
      "Genre": "Mystery",
      "Director": "Ron Howard",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 149,
      "Rating": 6.6,
      "Votes": 338280,
      "Revenue (Millions)": 217.54
    },
    {
      "Title": "Mr. Church",
      "Genre": "Comedy",
      "Director": "Bruce Beresford",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 7.7,
      "Votes": 16163,
      "Revenue (Millions)": 0.69
    },
    {
      "Title": "Hugo",
      "Genre": "Adventure",
      "Director": "Martin Scorsese",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 7.5,
      "Votes": 259182,
      "Revenue (Millions)": 73.82
    },
    {
      "Title": "The Blackcoat's Daughter",
      "Genre": "Horror",
      "Director": "Oz Perkins",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 5.6,
      "Votes": 4155,
      "Revenue (Millions)": 0.02
    },
    {
      "Title": "Body of Lies",
      "Genre": "Action",
      "Director": "Ridley Scott",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.1,
      "Votes": 182305,
      "Revenue (Millions)": 39.38
    },
    {
      "Title": "Knight of Cups",
      "Genre": "Drama",
      "Director": "Terrence Malick",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 5.7,
      "Votes": 17439,
      "Revenue (Millions)": 0.56
    },
    {
      "Title": "The Mummy: Tomb of the Dragon Emperor",
      "Genre": "Action",
      "Director": "Rob Cohen",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 5.2,
      "Votes": 124554,
      "Revenue (Millions)": 102.18
    },
    {
      "Title": "The Boss",
      "Genre": "Comedy",
      "Director": "Ben Falcone",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 5.4,
      "Votes": 29642,
      "Revenue (Millions)": 63.03
    },
    {
      "Title": "Hands of Stone",
      "Genre": "Action",
      "Director": "Jonathan Jakubowicz",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.6,
      "Votes": 8998,
      "Revenue (Millions)": 4.71
    },
    {
      "Title": "El secreto de sus ojos",
      "Genre": "Drama",
      "Director": "Juan Jos??? Campanella",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 8.2,
      "Votes": 144524,
      "Revenue (Millions)": 20.17
    },
    {
      "Title": "True Grit",
      "Genre": "Adventure",
      "Director": "Ethan Coen",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7.6,
      "Votes": 254904,
      "Revenue (Millions)": 171.03
    },
    {
      "Title": "We Are Your Friends",
      "Genre": "Drama",
      "Director": "Max Joseph",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.2,
      "Votes": 25903,
      "Revenue (Millions)": 3.59
    },
    {
      "Title": "A Million Ways to Die in the West",
      "Genre": "Comedy",
      "Director": "Seth MacFarlane",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 6.1,
      "Votes": 144779,
      "Revenue (Millions)": 42.62
    },
    {
      "Title": "Only for One Night",
      "Genre": "Thriller",
      "Director": "Chris Stokes",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 4.6,
      "Votes": 313,
      
    },
    {
      "Title": "Rules Don't Apply",
      "Genre": "Comedy",
      "Director": "Warren Beatty",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 5.7,
      "Votes": 3731,
      "Revenue (Millions)": 3.65
    },
    {
      "Title": "Ouija: Origin of Evil",
      "Genre": "Horror",
      "Director": "Mike Flanagan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 6.1,
      "Votes": 30035,
      "Revenue (Millions)": 34.9
    },
    {
      "Title": "Percy Jackson: Sea of Monsters",
      "Genre": "Adventure",
      "Director": "Thor Freudenthal",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 5.9,
      "Votes": 91684,
      "Revenue (Millions)": 68.56
    },
    {
      "Title": "Fracture",
      "Genre": "Crime",
      "Director": "Gregory Hoblit",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.2,
      "Votes": 148943,
      "Revenue (Millions)": 39
    },
    {
      "Title": "Oculus",
      "Genre": "Horror",
      "Director": "Mike Flanagan",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.5,
      "Votes": 92875,
      "Revenue (Millions)": 27.69
    },
    {
      "Title": "In Bruges",
      "Genre": "Comedy",
      "Director": "Martin McDonagh",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7.9,
      "Votes": 322536,
      "Revenue (Millions)": 7.76
    },
    {
      "Title": "This Means War",
      "Genre": "Action",
      "Director": "McG",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.3,
      "Votes": 154400,
      "Revenue (Millions)": 54.76
    },
    {
      "Title": "L???da Baarov???",
      "Genre": "Biography",
      "Director": "Filip Renc",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 5,
      "Votes": 353,
      
    },
    {
      "Title": "The Road",
      "Genre": "Adventure",
      "Director": "John Hillcoat",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 7.3,
      "Votes": 187302,
      "Revenue (Millions)": 0.06
    },
    {
      "Title": "Lavender",
      "Genre": "Drama",
      "Director": "Ed Gass-Donnelly",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 5.2,
      "Votes": 2083,
      
    },
    {
      "Title": "Deuces",
      "Genre": "Drama",
      "Director": "Jamal Hill",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 6.6,
      "Votes": 256,
      
    },
    {
      "Title": "Conan the Barbarian",
      "Genre": "Action",
      "Director": "Marcus Nispel",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 5.2,
      "Votes": 84893,
      "Revenue (Millions)": 21.27
    },
    {
      "Title": "The Fighter",
      "Genre": "Action",
      "Director": "David O. Russell",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.8,
      "Votes": 290056,
      "Revenue (Millions)": 93.57
    },
    {
      "Title": "August Rush",
      "Genre": "Drama",
      "Director": "Kirsten Sheridan",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.5,
      "Votes": 91229,
      "Revenue (Millions)": 31.66
    },
    {
      "Title": "Chef",
      "Genre": "Comedy",
      "Director": "Jon Favreau",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 7.3,
      "Votes": 151970,
      "Revenue (Millions)": 31.24
    },
    {
      "Title": "Eye in the Sky",
      "Genre": "Drama",
      "Director": "Gavin Hood",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.3,
      "Votes": 57826,
      "Revenue (Millions)": 18.7
    },
    {
      "Title": "Eagle Eye",
      "Genre": "Action",
      "Director": "D.J. Caruso",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6.6,
      "Votes": 156158,
      "Revenue (Millions)": 101.11
    },
    {
      "Title": "The Purge",
      "Genre": "Horror",
      "Director": "James DeMonaco",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 5.7,
      "Votes": 154588,
      "Revenue (Millions)": 64.42
    },
    {
      "Title": "PK",
      "Genre": "Comedy",
      "Director": "Rajkumar Hirani",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 153,
      "Rating": 8.2,
      "Votes": 103279,
      "Revenue (Millions)": 10.57
    },
    {
      "Title": "Ender's Game",
      "Genre": "Action",
      "Director": "Gavin Hood",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 6.7,
      "Votes": 194236,
      "Revenue (Millions)": 61.66
    },
    {
      "Title": "Indiana Jones and the Kingdom of the Crystal Skull",
      "Genre": "Action",
      "Director": "Steven Spielberg",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 6.2,
      "Votes": 351361,
      "Revenue (Millions)": 317.01
    },
    {
      "Title": "Paper Towns",
      "Genre": "Drama",
      "Director": "Jake Schreier",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 6.3,
      "Votes": 72515,
      "Revenue (Millions)": 31.99
    },
    {
      "Title": "High-Rise",
      "Genre": "Drama",
      "Director": "Ben Wheatley",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 5.7,
      "Votes": 25928,
      "Revenue (Millions)": 0.34
    },
    {
      "Title": "Quantum of Solace",
      "Genre": "Action",
      "Director": "Marc Forster",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6.6,
      "Votes": 347798,
      "Revenue (Millions)": 168.37
    },
    {
      "Title": "The Assignment",
      "Genre": "Action",
      "Director": "Walter Hill",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 4.5,
      "Votes": 2043,
      
    },
    {
      "Title": "How to Train Your Dragon",
      "Genre": "Animation",
      "Director": "Dean DeBlois",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 8.1,
      "Votes": 523893,
      "Revenue (Millions)": 217.39
    },
    {
      "Title": "Lady in the Water",
      "Genre": "Drama",
      "Director": "M. Night Shyamalan",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.6,
      "Votes": 82701,
      "Revenue (Millions)": 42.27
    },
    {
      "Title": "The Fountain",
      "Genre": "Drama",
      "Director": "Darren Aronofsky",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 7.3,
      "Votes": 199193,
      "Revenue (Millions)": 10.14
    },
    {
      "Title": "Cars 2",
      "Genre": "Animation",
      "Director": "John Lasseter",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6.2,
      "Votes": 110490,
      "Revenue (Millions)": 191.45
    },
    {
      "Title": "",
      "Genre": "Horror",
      "Director": "Rob Zombie",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 5.1,
      "Votes": 10871,
      "Revenue (Millions)": 0.78
    },
    {
      "Title": "Final Girl",
      "Genre": "Action",
      "Director": "Tyler Shields",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 4.7,
      "Votes": 9026,
      
    },
    {
      "Title": "Chalk It Up",
      "Genre": "Comedy",
      "Director": "Hisonni Johnson",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 4.8,
      "Votes": 499,
      
    },
    {
      "Title": "The Man Who Knew Infinity",
      "Genre": "Biography",
      "Director": "Matt Brown",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 7.2,
      "Votes": 29912,
      "Revenue (Millions)": 3.86
    },
    {
      "Title": "Unknown",
      "Genre": "Action",
      "Director": "Jaume Collet-Serra",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.9,
      "Votes": 218679,
      "Revenue (Millions)": 61.09
    },
    {
      "Title": "Self/less",
      "Genre": "Action",
      "Director": "Tarsem Singh",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.5,
      "Votes": 67196,
      "Revenue (Millions)": 12.28
    },
    {
      "Title": "Mr. Brooks",
      "Genre": "Crime",
      "Director": "Bruce A. Evans",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.3,
      "Votes": 128146,
      "Revenue (Millions)": 28.48
    },
    {
      "Title": "Tramps",
      "Genre": "Comedy",
      "Director": "Adam Leon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 82,
      "Rating": 6.5,
      "Votes": 1031,
      
    },
    {
      "Title": "Before We Go",
      "Genre": "Comedy",
      "Director": "Chris Evans",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 6.9,
      "Votes": 31370,
      "Revenue (Millions)": 0.04
    },
    {
      "Title": "Captain Phillips",
      "Genre": "Biography",
      "Director": "Paul Greengrass",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 134,
      "Rating": 7.8,
      "Votes": 346154,
      "Revenue (Millions)": 107.1
    },
    {
      "Title": "The Secret Scripture",
      "Genre": "Drama",
      "Director": "Jim Sheridan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.8,
      "Votes": 378,
      
    },
    {
      "Title": "Max Steel",
      "Genre": "Action",
      "Director": "Stewart Hendler",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 4.6,
      "Votes": 11555,
      "Revenue (Millions)": 3.77
    },
    {
      "Title": "Hotel Transylvania 2",
      "Genre": "Animation",
      "Director": "Genndy Tartakovsky",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 6.7,
      "Votes": 69157,
      "Revenue (Millions)": 169.69
    },
    {
      "Title": "Hancock",
      "Genre": "Action",
      "Director": "Peter Berg",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.4,
      "Votes": 366138,
      "Revenue (Millions)": 227.95
    },
    {
      "Title": "Sisters",
      "Genre": "Comedy",
      "Director": "Jason Moore",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 6,
      "Votes": 50241,
      "Revenue (Millions)": 87.03
    },
    {
      "Title": "The Family",
      "Genre": "Comedy",
      "Director": "Luc Besson",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.3,
      "Votes": 92868,
      "Revenue (Millions)": 36.92
    },
    {
      "Title": "Zack and Miri Make a Porno",
      "Genre": "Comedy",
      "Director": "Kevin Smith",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.6,
      "Votes": 154936,
      "Revenue (Millions)": 31.45
    },
    {
      "Title": "Ma vie de Courgette",
      "Genre": "Animation",
      "Director": "Claude Barras",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 66,
      "Rating": 7.8,
      "Votes": 4370,
      "Revenue (Millions)": 0.29
    },
    {
      "Title": "Man on a Ledge",
      "Genre": "Action",
      "Director": "Asger Leth",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6.6,
      "Votes": 129252,
      "Revenue (Millions)": 18.6
    },
    {
      "Title": "No Strings Attached",
      "Genre": "Comedy",
      "Director": "Ivan Reitman",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.2,
      "Votes": 178243,
      "Revenue (Millions)": 70.63
    },
    {
      "Title": "Rescue Dawn",
      "Genre": "Adventure",
      "Director": "Werner Herzog",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.3,
      "Votes": 87887,
      "Revenue (Millions)": 5.48
    },
    {
      "Title": "Despicable Me 2",
      "Genre": "Animation",
      "Director": "Pierre Coffin",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 7.4,
      "Votes": 304837,
      "Revenue (Millions)": 368.05
    },
    {
      "Title": "A Walk Among the Tombstones",
      "Genre": "Crime",
      "Director": "Scott Frank",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 6.5,
      "Votes": 93883,
      "Revenue (Millions)": 25.98
    },
    {
      "Title": "The World's End",
      "Genre": "Action",
      "Director": "Edgar Wright",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7,
      "Votes": 199813,
      "Revenue (Millions)": 26
    },
    {
      "Title": "Yoga Hosers",
      "Genre": "Comedy",
      "Director": "Kevin Smith",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 4.3,
      "Votes": 7091,
      
    },
    {
      "Title": "Seven Psychopaths",
      "Genre": "Comedy",
      "Director": "Martin McDonagh",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7.2,
      "Votes": 196652,
      "Revenue (Millions)": 14.99
    },
    {
      "Title": "Beowulf",
      "Genre": "Animation",
      "Director": "Robert Zemeckis",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.2,
      "Votes": 146566,
      "Revenue (Millions)": 82.16
    },
    {
      "Title": "Jack Ryan: Shadow Recruit",
      "Genre": "Action",
      "Director": "Kenneth Branagh",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 6.2,
      "Votes": 103681,
      "Revenue (Millions)": 50.55
    },
    {
      "Title": "",
      "Genre": "Fantasy",
      "Director": "Mikael H???fstr???m",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.8,
      "Votes": 221073,
      "Revenue (Millions)": 71.98
    },
    {
      "Title": "The Gambler",
      "Genre": "Crime",
      "Director": "Rupert Wyatt",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6,
      "Votes": 52537,
      "Revenue (Millions)": 33.63
    },
    {
      "Title": "Prince of Persia: The Sands of Time",
      "Genre": "Action",
      "Director": "Mike Newell",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 6.6,
      "Votes": 233148,
      "Revenue (Millions)": 90.76
    },
    {
      "Title": "The Spectacular Now",
      "Genre": "Comedy",
      "Director": "James Ponsoldt",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.1,
      "Votes": 115751,
      "Revenue (Millions)": 6.85
    },
    {
      "Title": "A United Kingdom",
      "Genre": "Biography",
      "Director": "Amma Asante",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.8,
      "Votes": 4771,
      "Revenue (Millions)": 3.9
    },
    {
      "Title": "USS Indianapolis: Men of Courage",
      "Genre": "Action",
      "Director": "Mario Van Peebles",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 5.2,
      "Votes": 4964,
      
    },
    {
      "Title": "Turbo Kid",
      "Genre": "Action",
      "Director": "Fran???ois Simard",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 6.7,
      "Votes": 19309,
      "Revenue (Millions)": 0.05
    },
    {
      "Title": "Mama",
      "Genre": "Horror",
      "Director": "Andr???s Muschietti",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 6.2,
      "Votes": 142560,
      "Revenue (Millions)": 71.59
    },
    {
      "Title": "Orphan",
      "Genre": "Horror",
      "Director": "Jaume Collet-Serra",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7,
      "Votes": 153448,
      "Revenue (Millions)": 41.57
    },
    {
      "Title": "To Rome with Love",
      "Genre": "Comedy",
      "Director": "Woody Allen",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 6.3,
      "Votes": 72050,
      "Revenue (Millions)": 16.68
    },
    {
      "Title": "Fantastic Mr. Fox",
      "Genre": "Animation",
      "Director": "Wes Anderson",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 7.8,
      "Votes": 149779,
      "Revenue (Millions)": 21
    },
    {
      "Title": "Inside Man",
      "Genre": "Crime",
      "Director": "Spike Lee",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 7.6,
      "Votes": 285441,
      "Revenue (Millions)": 88.5
    },
    {
      "Title": "I.T.",
      "Genre": "Crime",
      "Director": "John Moore",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 5.4,
      "Votes": 8755,
      
    },
    {
      "Title": "127 Hours",
      "Genre": "Adventure",
      "Director": "Danny Boyle",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 7.6,
      "Votes": 294010,
      "Revenue (Millions)": 18.33
    },
    {
      "Title": "Annabelle",
      "Genre": "Horror",
      "Director": "John R. Leonetti",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 5.4,
      "Votes": 91106,
      "Revenue (Millions)": 84.26
    },
    {
      "Title": "Wolves at the Door",
      "Genre": "Horror",
      "Director": "John R. Leonetti",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 73,
      "Rating": 4.6,
      "Votes": 564,
      
    },
    {
      "Title": "Suite Fran???aise",
      "Genre": "Drama",
      "Director": "Saul Dibb",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.9,
      "Votes": 13711,
      
    },
    {
      "Title": "The Imaginarium of Doctor Parnassus",
      "Genre": "Adventure",
      "Director": "Terry Gilliam",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.8,
      "Votes": 130153,
      "Revenue (Millions)": 7.69
    },
    {
      "Title": "G.I. Joe: The Rise of Cobra",
      "Genre": "Action",
      "Director": "Stephen Sommers",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 5.8,
      "Votes": 180105,
      "Revenue (Millions)": 150.17
    },
    {
      "Title": "Christine",
      "Genre": "Biography",
      "Director": "Antonio Campos",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 7,
      "Votes": 5855,
      "Revenue (Millions)": 0.3
    },
    {
      "Title": "Man Down",
      "Genre": "Drama",
      "Director": "Dito Montiel",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 90,
      "Rating": 5.8,
      "Votes": 4779,
      
    },
    {
      "Title": "Crawlspace",
      "Genre": "Horror",
      "Director": "Phil Claydon",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 5.3,
      "Votes": 1427,
      
    },
    {
      "Title": "Shut In",
      "Genre": "Drama",
      "Director": "Farren Blackburn",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 4.6,
      "Votes": 5715,
      "Revenue (Millions)": 6.88
    },
    {
      "Title": "The Warriors Gate",
      "Genre": "Action",
      "Director": "Matthias Hoene",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 5.3,
      "Votes": 1391,
      
    },
    {
      "Title": "Grindhouse",
      "Genre": "Action",
      "Director": "Robert Rodriguez",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 191,
      "Rating": 7.6,
      "Votes": 160350,
      "Revenue (Millions)": 25.03
    },
    {
      "Title": "Disaster Movie",
      "Genre": "Comedy",
      "Director": "Jason Friedberg",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 1.9,
      "Votes": 77207,
      "Revenue (Millions)": 14.17
    },
    {
      "Title": "Rocky Balboa",
      "Genre": "Drama",
      "Director": "Sylvester Stallone",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.2,
      "Votes": 171356,
      "Revenue (Millions)": 70.27
    },
    {
      "Title": "Diary of a Wimpy Kid: Dog Days",
      "Genre": "Comedy",
      "Director": "David Bowers",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 6.4,
      "Votes": 16917,
      "Revenue (Millions)": 49
    },
    {
      "Title": "Jane Eyre",
      "Genre": "Drama",
      "Director": "Cary Joji Fukunaga",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.4,
      "Votes": 67464,
      "Revenue (Millions)": 11.23
    },
    {
      "Title": "Fool's Gold",
      "Genre": "Action",
      "Director": "Andy Tennant",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 112,
      "Rating": 5.7,
      "Votes": 62719,
      "Revenue (Millions)": 70.22
    },
    {
      "Title": "The Dictator",
      "Genre": "Comedy",
      "Director": "Larry Charles",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 83,
      "Rating": 6.4,
      "Votes": 225394,
      "Revenue (Millions)": 59.62
    },
    {
      "Title": "The Loft",
      "Genre": "Mystery",
      "Director": "Erik Van Looy",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.3,
      "Votes": 38804,
      "Revenue (Millions)": 5.98
    },
    {
      "Title": "Bacalaureat",
      "Genre": "Crime",
      "Director": "Cristian Mungiu",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.5,
      "Votes": 5531,
      "Revenue (Millions)": 0.13
    },
    {
      "Title": "You Don't Mess with the Zohan",
      "Genre": "Action",
      "Director": "Dennis Dugan",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 5.5,
      "Votes": 163144,
      "Revenue (Millions)": 100.02
    },
    {
      "Title": "Exposed",
      "Genre": "Crime",
      "Director": "Gee Malik Linton",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 4.2,
      "Votes": 8409,
      
    },
    {
      "Title": "Maudie",
      "Genre": "Biography",
      "Director": "Aisling Walsh",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7.8,
      "Votes": 346,
      
    },
    {
      "Title": "Horrible Bosses 2",
      "Genre": "Comedy",
      "Director": "Sean Anders",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.3,
      "Votes": 125190,
      "Revenue (Millions)": 54.41
    },
    {
      "Title": "A Bigger Splash",
      "Genre": "Drama",
      "Director": "Luca Guadagnino",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 6.4,
      "Votes": 15232,
      "Revenue (Millions)": 1.98
    },
    {
      "Title": "Melancholia",
      "Genre": "Drama",
      "Director": "Lars von Trier",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 135,
      "Rating": 7.1,
      "Votes": 137117,
      "Revenue (Millions)": 3.03
    },
    {
      "Title": "The Princess and the Frog",
      "Genre": "Animation",
      "Director": "Ron Clements",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7.1,
      "Votes": 95480,
      "Revenue (Millions)": 104.37
    },
    {
      "Title": "Unstoppable",
      "Genre": "Action",
      "Director": "Tony Scott",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.8,
      "Votes": 157499,
      "Revenue (Millions)": 81.56
    },
    {
      "Title": "Flight",
      "Genre": "Drama",
      "Director": "Robert Zemeckis",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 138,
      "Rating": 7.3,
      "Votes": 276347,
      "Revenue (Millions)": 93.75
    },
    {
      "Title": "Home",
      "Genre": "Animation",
      "Director": "Tim Johnson",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 6.7,
      "Votes": 77447,
      "Revenue (Millions)": 177.34
    },
    {
      "Title": "La migliore offerta",
      "Genre": "Crime",
      "Director": "Giuseppe Tornatore",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 131,
      "Rating": 7.8,
      "Votes": 77986,
      "Revenue (Millions)": 0.09
    },
    {
      "Title": "Mean Dreams",
      "Genre": "Thriller",
      "Director": "Nathan Morlando",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.3,
      "Votes": 1066,
      
    },
    {
      "Title": "",
      "Genre": "Biography",
      "Director": "Brian Helgeland",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.5,
      "Votes": 69659,
      "Revenue (Millions)": 95
    },
    {
      "Title": "",
      "Genre": "Crime",
      "Director": "Robert Luketic",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 6.8,
      "Votes": 198395,
      "Revenue (Millions)": 81.16
    },
    {
      "Title": "Begin Again",
      "Genre": "Drama",
      "Director": "John Carney",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 7.4,
      "Votes": 111875,
      "Revenue (Millions)": 16.17
    },
    {
      "Title": "Out of the Furnace",
      "Genre": "Crime",
      "Director": "Scott Cooper",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 6.8,
      "Votes": 88829,
      "Revenue (Millions)": 11.33
    },
    {
      "Title": "Vicky Cristina Barcelona",
      "Genre": "Drama",
      "Director": "Woody Allen",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 7.1,
      "Votes": 208770,
      "Revenue (Millions)": 23.21
    },
    {
      "Title": "Kung Fu Panda",
      "Genre": "Animation",
      "Director": "Mark Osborne",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 7.6,
      "Votes": 329788,
      "Revenue (Millions)": 215.4
    },
    {
      "Title": "Barbershop: The Next Cut",
      "Genre": "Comedy",
      "Director": "Malcolm D. Lee",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 5.9,
      "Votes": 9993,
      "Revenue (Millions)": 54.01
    },
    {
      "Title": "Terminator Salvation",
      "Genre": "Action",
      "Director": "McG",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.6,
      "Votes": 297093,
      "Revenue (Millions)": 125.32
    },
    {
      "Title": "Freedom Writers",
      "Genre": "Biography",
      "Director": "Richard LaGravenese",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.5,
      "Votes": 55648,
      "Revenue (Millions)": 36.58
    },
    {
      "Title": "The Hills Have Eyes",
      "Genre": "Horror",
      "Director": "Alexandre Aja",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.4,
      "Votes": 136642,
      "Revenue (Millions)": 41.78
    },
    {
      "Title": "Changeling",
      "Genre": "Biography",
      "Director": "Clint Eastwood",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 141,
      "Rating": 7.8,
      "Votes": 206793,
      "Revenue (Millions)": 35.71
    },
    {
      "Title": "Remember Me",
      "Genre": "Drama",
      "Director": "Allen Coulter",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 7.2,
      "Votes": 119376,
      "Revenue (Millions)": 19.06
    },
    {
      "Title": "Koe no katachi",
      "Genre": "Animation",
      "Director": "Naoko Yamada",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 129,
      "Rating": 8.4,
      "Votes": 2421,
      
    },
    {
      "Title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
      "Genre": "Comedy",
      "Director": "Miguel Arteta",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 81,
      "Rating": 6.2,
      "Votes": 32310,
      "Revenue (Millions)": 66.95
    },
    {
      "Title": "Locke",
      "Genre": "Drama",
      "Director": "Steven Knight",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 7.1,
      "Votes": 100890,
      "Revenue (Millions)": 1.36
    },
    {
      "Title": "The 9th Life of Louis Drax",
      "Genre": "Mystery",
      "Director": "Alexandre Aja",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.3,
      "Votes": 6175,
      
    },
    {
      "Title": "Horns",
      "Genre": "Drama",
      "Director": "Alexandre Aja",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 6.5,
      "Votes": 61060,
      "Revenue (Millions)": 0.16
    },
    {
      "Title": "Indignation",
      "Genre": "Drama",
      "Director": "James Schamus",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.9,
      "Votes": 7402,
      "Revenue (Millions)": 3.4
    },
    {
      "Title": "The Stanford Prison Experiment",
      "Genre": "Biography",
      "Director": "Kyle Patrick Alvarez",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 6.9,
      "Votes": 20907,
      "Revenue (Millions)": 0.64
    },
    {
      "Title": "Diary of a Wimpy Kid: Rodrick Rules",
      "Genre": "Comedy",
      "Director": "David Bowers",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 6.6,
      "Votes": 20194,
      "Revenue (Millions)": 52.69
    },
    {
      "Title": "Mission: Impossible III",
      "Genre": "Action",
      "Director": "J.J. Abrams",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 126,
      "Rating": 6.9,
      "Votes": 270429,
      "Revenue (Millions)": 133.38
    },
    {
      "Title": "En man som heter Ove",
      "Genre": "Comedy",
      "Director": "Hannes Holm",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 116,
      "Rating": 7.7,
      "Votes": 21569,
      "Revenue (Millions)": 3.36
    },
    {
      "Title": "Dragonball Evolution",
      "Genre": "Action",
      "Director": "James Wong",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 85,
      "Rating": 2.7,
      "Votes": 59512,
      "Revenue (Millions)": 9.35
    },
    {
      "Title": "Red Dawn",
      "Genre": "Action",
      "Director": "Dan Bradley",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 5.4,
      "Votes": 64584,
      "Revenue (Millions)": 44.8
    },
    {
      "Title": "One Day",
      "Genre": "Drama",
      "Director": "Lone Scherfig",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 7,
      "Votes": 113599,
      "Revenue (Millions)": 13.77
    },
    {
      "Title": "Life as We Know It",
      "Genre": "Comedy",
      "Director": "Greg Berlanti",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 114,
      "Rating": 6.6,
      "Votes": 101301,
      "Revenue (Millions)": 53.36
    },
    {
      "Title": "28 Weeks Later",
      "Genre": "Drama",
      "Director": "Juan Carlos Fresnadillo",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7,
      "Votes": 221858,
      "Revenue (Millions)": 28.64
    },
    {
      "Title": "Warm Bodies",
      "Genre": "Comedy",
      "Director": "Jonathan Levine",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.9,
      "Votes": 193579,
      "Revenue (Millions)": 66.36
    },
    {
      "Title": "Blue Jasmine",
      "Genre": "Drama",
      "Director": "Woody Allen",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 7.3,
      "Votes": 160592,
      "Revenue (Millions)": 33.4
    },
    {
      "Title": "G.I. Joe: Retaliation",
      "Genre": "Action",
      "Director": "Jon M. Chu",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.8,
      "Votes": 152145,
      "Revenue (Millions)": 122.51
    },
    {
      "Title": "Wrath of the Titans",
      "Genre": "Action",
      "Director": "Jonathan Liebesman",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 5.8,
      "Votes": 159230,
      "Revenue (Millions)": 83.64
    },
    {
      "Title": "Shin Gojira",
      "Genre": "Action",
      "Director": "Hideaki Anno",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 6.9,
      "Votes": 8365,
      "Revenue (Millions)": 1.91
    },
    {
      "Title": "Saving Mr. Banks",
      "Genre": "Biography",
      "Director": "John Lee Hancock",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 125,
      "Rating": 7.5,
      "Votes": 125693,
      "Revenue (Millions)": 83.3
    },
    {
      "Title": "Transcendence",
      "Genre": "Drama",
      "Director": "Wally Pfister",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 6.3,
      "Votes": 184564,
      "Revenue (Millions)": 23.01
    },
    {
      "Title": "Rio",
      "Genre": "Animation",
      "Director": "Carlos Saldanha",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.9,
      "Votes": 173919,
      "Revenue (Millions)": 143.62
    },
    {
      "Title": "Equals",
      "Genre": "Drama",
      "Director": "Drake Doremus",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.1,
      "Votes": 16361,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "Babel",
      "Genre": "Drama",
      "Director": "Alejandro Gonz???lez I??????rritu",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 143,
      "Rating": 7.5,
      "Votes": 253417,
      "Revenue (Millions)": 34.3
    },
    {
      "Title": "The Tree of Life",
      "Genre": "Drama",
      "Director": "Terrence Malick",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 139,
      "Rating": 6.8,
      "Votes": 143517,
      "Revenue (Millions)": 13.3
    },
    {
      "Title": "The Lucky One",
      "Genre": "Drama",
      "Director": "Scott Hicks",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.5,
      "Votes": 82874,
      "Revenue (Millions)": 60.44
    },
    {
      "Title": "Piranha 3D",
      "Genre": "Comedy",
      "Director": "Alexandre Aja",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 5.5,
      "Votes": 75262,
      "Revenue (Millions)": 25
    },
    {
      "Title": "50/50",
      "Genre": "Comedy",
      "Director": "Jonathan Levine",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 7.7,
      "Votes": 281625,
      "Revenue (Millions)": 34.96
    },
    {
      "Title": "The Intent",
      "Genre": "Crime",
      "Director": "Femi Oyeniran",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 3.5,
      "Votes": 202,
      
    },
    {
      "Title": "This Is 40",
      "Genre": "Comedy",
      "Director": "Judd Apatow",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 134,
      "Rating": 6.2,
      "Votes": 108156,
      "Revenue (Millions)": 67.52
    },
    {
      "Title": "Real Steel",
      "Genre": "Action",
      "Director": "Shawn Levy",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 127,
      "Rating": 7.1,
      "Votes": 264480,
      "Revenue (Millions)": 85.46
    },
    {
      "Title": "Sex and the City",
      "Genre": "Comedy",
      "Director": "Michael Patrick King",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 145,
      "Rating": 5.5,
      "Votes": 102547,
      "Revenue (Millions)": 152.64
    },
    {
      "Title": "Rambo",
      "Genre": "Action",
      "Director": "Sylvester Stallone",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 7.1,
      "Votes": 187077,
      "Revenue (Millions)": 42.72
    },
    {
      "Title": "Planet Terror",
      "Genre": "Action",
      "Director": "Robert Rodriguez",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 7.1,
      "Votes": 174553,
      
    },
    {
      "Title": "Concussion",
      "Genre": "Biography",
      "Director": "Peter Landesman",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.1,
      "Votes": 61274,
      "Revenue (Millions)": 34.53
    },
    {
      "Title": "The Fall",
      "Genre": "Adventure",
      "Director": "Tarsem Singh",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 7.9,
      "Votes": 93036,
      "Revenue (Millions)": 2.28
    },
    {
      "Title": "The Ugly Truth",
      "Genre": "Comedy",
      "Director": "Robert Luketic",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.5,
      "Votes": 172558,
      "Revenue (Millions)": 88.92
    },
    {
      "Title": "Bride Wars",
      "Genre": "Comedy",
      "Director": "Gary Winick",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 5.5,
      "Votes": 83976,
      "Revenue (Millions)": 58.72
    },
    {
      "Title": "Sleeping with Other People",
      "Genre": "Comedy",
      "Director": "Leslye Headland",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 6.5,
      "Votes": 27730,
      "Revenue (Millions)": 0.81
    },
    {
      "Title": "Snakes on a Plane",
      "Genre": "Action",
      "Director": "David R. Ellis",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 5.6,
      "Votes": 118905,
      "Revenue (Millions)": 34.01
    },
    {
      "Title": "What If",
      "Genre": "Comedy",
      "Director": "Michael Dowse",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.8,
      "Votes": 55243,
      "Revenue (Millions)": 3.45
    },
    {
      "Title": "How to Train Your Dragon 2",
      "Genre": "Animation",
      "Director": "Dean DeBlois",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 7.9,
      "Votes": 237565,
      "Revenue (Millions)": 177
    },
    {
      "Title": "RoboCop",
      "Genre": "Action",
      "Director": "Jos??? Padilha",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.2,
      "Votes": 190833,
      "Revenue (Millions)": 58.61
    },
    {
      "Title": "In Dubious Battle",
      "Genre": "Drama",
      "Director": "James Franco",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 6.2,
      "Votes": 1455,
      
    },
    {
      "Title": "Hello, My Name Is Doris",
      "Genre": "Comedy",
      "Director": "Michael Showalter",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 6.7,
      "Votes": 12361,
      "Revenue (Millions)": 14.44
    },
    {
      "Title": "Ocean's Thirteen",
      "Genre": "Crime",
      "Director": "Steven Soderbergh",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 6.9,
      "Votes": 269581,
      "Revenue (Millions)": 117.14
    },
    {
      "Title": "Slither",
      "Genre": "Comedy",
      "Director": "James Gunn",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 6.5,
      "Votes": 64351,
      "Revenue (Millions)": 7.77
    },
    {
      "Title": "Contagion",
      "Genre": "Drama",
      "Director": "Steven Soderbergh",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6.6,
      "Votes": 187004,
      "Revenue (Millions)": 75.64
    },
    {
      "Title": "Il racconto dei racconti - Tale of Tales",
      "Genre": "Drama",
      "Director": "Matteo Garrone",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 6.4,
      "Votes": 17565,
      "Revenue (Millions)": 0.08
    },
    {
      "Title": "I Am the Pretty Thing That Lives in the House",
      "Genre": "Thriller",
      "Director": "Oz Perkins",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 4.7,
      "Votes": 4204,
      
    },
    {
      "Title": "Bridge to Terabithia",
      "Genre": "Adventure",
      "Director": "Gabor Csupo",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 7.2,
      "Votes": 117297,
      "Revenue (Millions)": 82.23
    },
    {
      "Title": "Coherence",
      "Genre": "Mystery",
      "Director": "James Ward Byrkit",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 89,
      "Rating": 7.2,
      "Votes": 66265,
      "Revenue (Millions)": 0.07
    },
    {
      "Title": "Notorious",
      "Genre": "Biography",
      "Director": "George Tillman Jr.",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 6.7,
      "Votes": 33007,
      "Revenue (Millions)": 36.84
    },
    {
      "Title": "Goksung",
      "Genre": "Drama",
      "Director": "Hong-jin Na",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 156,
      "Rating": 7.5,
      "Votes": 17962,
      "Revenue (Millions)": 0.79
    },
    {
      "Title": "The Expendables 2",
      "Genre": "Action",
      "Director": "Simon West",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.6,
      "Votes": 257395,
      "Revenue (Millions)": 85.02
    },
    {
      "Title": "The Girl Next Door",
      "Genre": "Crime",
      "Director": "Gregory Wilson",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 6.7,
      "Votes": 19351,
      
    },
    {
      "Title": "Perfume: The Story of a Murderer",
      "Genre": "Crime",
      "Director": "Tom Tykwer",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 147,
      "Rating": 7.5,
      "Votes": 199387,
      "Revenue (Millions)": 2.21
    },
    {
      "Title": "The Golden Compass",
      "Genre": "Adventure",
      "Director": "Chris Weitz",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.1,
      "Votes": 155078,
      "Revenue (Millions)": 70.08
    },
    {
      "Title": "Centurion",
      "Genre": "Action",
      "Director": "Neil Marshall",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.4,
      "Votes": 67801,
      "Revenue (Millions)": 0.12
    },
    {
      "Title": "Scouts Guide to the Zombie Apocalypse",
      "Genre": "Action",
      "Director": "Christopher Landon",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 6.3,
      "Votes": 31651,
      "Revenue (Millions)": 3.64
    },
    {
      "Title": "17 Again",
      "Genre": "Comedy",
      "Director": "Burr Steers",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 6.4,
      "Votes": 152808,
      "Revenue (Millions)": 64.15
    },
    {
      "Title": "No Escape",
      "Genre": "Action",
      "Director": "John Erick Dowdle",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 103,
      "Rating": 6.8,
      "Votes": 57921,
      "Revenue (Millions)": 27.29
    },
    {
      "Title": "Superman Returns",
      "Genre": "Action",
      "Director": "Bryan Singer",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 154,
      "Rating": 6.1,
      "Votes": 246797,
      "Revenue (Millions)": 200.07
    },
    {
      "Title": "The Twilight Saga: Breaking Dawn - Part 1",
      "Genre": "Adventure",
      "Director": "Bill Condon",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 4.9,
      "Votes": 190244,
      "Revenue (Millions)": 281.28
    },
    {
      "Title": "Precious",
      "Genre": "Drama",
      "Director": "Lee Daniels",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7.3,
      "Votes": 91623,
      "Revenue (Millions)": 47.54
    },
    {
      "Title": "The Sea of Trees",
      "Genre": "Drama",
      "Director": "Gus Van Sant",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 5.9,
      "Votes": 7475,
      "Revenue (Millions)": 0.02
    },
    {
      "Title": "Good Kids",
      "Genre": "Comedy",
      "Director": "Chris McCoy",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 6.1,
      "Votes": 3843,
      
    },
    {
      "Title": "The Master",
      "Genre": "Drama",
      "Director": "Paul Thomas Anderson",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 144,
      "Rating": 7.1,
      "Votes": 112902,
      "Revenue (Millions)": 16.38
    },
    {
      "Title": "Footloose",
      "Genre": "Comedy",
      "Director": "Craig Brewer",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 5.9,
      "Votes": 39380,
      "Revenue (Millions)": 51.78
    },
    {
      "Title": "If I Stay",
      "Genre": "Drama",
      "Director": "R.J. Cutler",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 107,
      "Rating": 6.8,
      "Votes": 92170,
      "Revenue (Millions)": 50.46
    },
    {
      "Title": "The Ticket",
      "Genre": "Drama",
      "Director": "Ido Fluk",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 5.4,
      "Votes": 924,
      
    },
    {
      "Title": "Detour",
      "Genre": "Thriller",
      "Director": "Christopher Smith",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.3,
      "Votes": 2205,
      
    },
    {
      "Title": "The Love Witch",
      "Genre": "Comedy",
      "Director": "Anna Biller",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 6.2,
      "Votes": 4669,
      "Revenue (Millions)": 0.22
    },
    {
      "Title": "Talladega Nights: The Ballad of Ricky Bobby",
      "Genre": "Action",
      "Director": "Adam McKay",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.6,
      "Votes": 137502,
      "Revenue (Millions)": 148.21
    },
    {
      "Title": "The Human Centipede (First Sequence)",
      "Genre": "Horror",
      "Director": "Tom Six",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 4.4,
      "Votes": 60655,
      "Revenue (Millions)": 0.18
    },
    {
      "Title": "Super",
      "Genre": "Comedy",
      "Director": "James Gunn",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 96,
      "Rating": 6.8,
      "Votes": 64535,
      "Revenue (Millions)": 0.32
    },
    {
      "Title": "The Siege of Jadotville",
      "Genre": "Action",
      "Director": "Richie Smyth",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 7.3,
      "Votes": 14689,
      
    },
    {
      "Title": "Up in the Air",
      "Genre": "Drama",
      "Director": "Jason Reitman",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7.4,
      "Votes": 279694,
      "Revenue (Millions)": 83.81
    },
    {
      "Title": "The Midnight Meat Train",
      "Genre": "Horror",
      "Director": "Ry???hei Kitamura",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.1,
      "Votes": 50255,
      "Revenue (Millions)": 0.07
    },
    {
      "Title": "The Twilight Saga: Eclipse",
      "Genre": "Adventure",
      "Director": "David Slade",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 4.9,
      "Votes": 192740,
      "Revenue (Millions)": 300.52
    },
    {
      "Title": "Transpecos",
      "Genre": "Thriller",
      "Director": "Greg Kwedar",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 86,
      "Rating": 5.8,
      "Votes": 1292,
      
    },
    {
      "Title": "What's Your Number?",
      "Genre": "Comedy",
      "Director": "Mark Mylod",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 106,
      "Rating": 6.1,
      "Votes": 62095,
      "Revenue (Millions)": 13.99
    },
    {
      "Title": "Riddick",
      "Genre": "Action",
      "Director": "David Twohy",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 119,
      "Rating": 6.4,
      "Votes": 132098,
      "Revenue (Millions)": 42
    },
    {
      "Title": "Triangle",
      "Genre": "Fantasy",
      "Director": "Christopher Smith",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 6.9,
      "Votes": 72533,
      
    },
    {
      "Title": "The Butler",
      "Genre": "Biography",
      "Director": "Lee Daniels",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 132,
      "Rating": 7.2,
      "Votes": 93322,
      "Revenue (Millions)": 116.63
    },
    {
      "Title": "King Cobra",
      "Genre": "Crime",
      "Director": "Justin Kelly",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 91,
      "Rating": 5.6,
      "Votes": 3990,
      "Revenue (Millions)": 0.03
    },
    {
      "Title": "After Earth",
      "Genre": "Action",
      "Director": "M. Night Shyamalan",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 4.9,
      "Votes": 166512,
      "Revenue (Millions)": 60.52
    },
    {
      "Title": "Kicks",
      "Genre": "Adventure",
      "Director": "Justin Tipping",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 80,
      "Rating": 6.1,
      "Votes": 2417,
      "Revenue (Millions)": 0.15
    },
    {
      "Title": "Me and Earl and the Dying Girl",
      "Genre": "Comedy",
      "Director": "Alfonso Gomez-Rejon",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 7.8,
      "Votes": 92076,
      "Revenue (Millions)": 6.74
    },
    {
      "Title": "The Descendants",
      "Genre": "Comedy",
      "Director": "Alexander Payne",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 7.3,
      "Votes": 211348,
      "Revenue (Millions)": 82.62
    },
    {
      "Title": "Sex and the City 2",
      "Genre": "Comedy",
      "Director": "Michael Patrick King",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 146,
      "Rating": 4.3,
      "Votes": 62403,
      "Revenue (Millions)": 95.33
    },
    {
      "Title": "The Kings of Summer",
      "Genre": "Adventure",
      "Director": "Jordan Vogt-Roberts",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 95,
      "Rating": 7.2,
      "Votes": 65653,
      "Revenue (Millions)": 1.29
    },
    {
      "Title": "Death Race",
      "Genre": "Action",
      "Director": "Paul W.S. Anderson",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 6.4,
      "Votes": 173731,
      "Revenue (Millions)": 36.06
    },
    {
      "Title": "That Awkward Moment",
      "Genre": "Comedy",
      "Director": "Tom Gormican",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 6.2,
      "Votes": 81823,
      "Revenue (Millions)": 26.05
    },
    {
      "Title": "Legion",
      "Genre": "Action",
      "Director": "Scott Stewart",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 100,
      "Rating": 5.2,
      "Votes": 84158,
      "Revenue (Millions)": 40.17
    },
    {
      "Title": "End of Watch",
      "Genre": "Crime",
      "Director": "David Ayer",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7.7,
      "Votes": 192190,
      "Revenue (Millions)": 40.98
    },
    {
      "Title": "3 Days to Kill",
      "Genre": "Action",
      "Director": "McG",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 117,
      "Rating": 6.2,
      "Votes": 73567,
      "Revenue (Millions)": 30.69
    },
    {
      "Title": "Lucky Number Slevin",
      "Genre": "Crime",
      "Director": "Paul McGuigan",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 110,
      "Rating": 7.8,
      "Votes": 271940,
      "Revenue (Millions)": 22.49
    },
    {
      "Title": "Trance",
      "Genre": "Crime",
      "Director": "Danny Boyle",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 7,
      "Votes": 97141,
      "Revenue (Millions)": 2.32
    },
    {
      "Title": "Into the Forest",
      "Genre": "Drama",
      "Director": "Patricia Rozema",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 101,
      "Rating": 5.9,
      "Votes": 10220,
      "Revenue (Millions)": 0.01
    },
    {
      "Title": "The Other Boleyn Girl",
      "Genre": "Biography",
      "Director": "Justin Chadwick",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 115,
      "Rating": 6.7,
      "Votes": 88260,
      "Revenue (Millions)": 26.81
    },
    {
      "Title": "I Spit on Your Grave",
      "Genre": "Crime",
      "Director": "Steven R. Monroe",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 108,
      "Rating": 6.3,
      "Votes": 60133,
      "Revenue (Millions)": 0.09
    },
    {
      "Title": "Custody",
      "Genre": "Drama",
      "Director": "James Lapine",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.9,
      "Votes": 280,
      
    },
    {
      "Title": "Inland Empire",
      "Genre": "Drama",
      "Director": "David Lynch",
      "Year": "2006-01-01",
      "Runtime (Minutes)": 180,
      "Rating": 7,
      "Votes": 44227,
      
    },
    {
      "Title": "L'odyss???e",
      "Genre": "Adventure",
      "Director": "J???r???me Salle",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 122,
      "Rating": 6.7,
      "Votes": 1810,
      
    },
    {
      "Title": "The Walk",
      "Genre": "Adventure",
      "Director": "Robert Zemeckis",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 7.3,
      "Votes": 92378,
      "Revenue (Millions)": 10.14
    },
    {
      "Title": "Wrecker",
      "Genre": "Action",
      "Director": "Micheal Bafaro",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 83,
      "Rating": 3.5,
      "Votes": 1210,
      
    },
    {
      "Title": "The Lone Ranger",
      "Genre": "Action",
      "Director": "Gore Verbinski",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 150,
      "Rating": 6.5,
      "Votes": 190855,
      "Revenue (Millions)": 89.29
    },
    {
      "Title": "Texas Chainsaw 3D",
      "Genre": "Horror",
      "Director": "John Luessenhop",
      "Year": "2013-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 4.8,
      "Votes": 37060,
      "Revenue (Millions)": 34.33
    },
    {
      "Title": "Disturbia",
      "Genre": "Drama",
      "Director": "D.J. Caruso",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 105,
      "Rating": 6.9,
      "Votes": 193491,
      "Revenue (Millions)": 80.05
    },
    {
      "Title": "Rock of Ages",
      "Genre": "Comedy",
      "Director": "Adam Shankman",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 123,
      "Rating": 5.9,
      "Votes": 64513,
      "Revenue (Millions)": 38.51
    },
    {
      "Title": "Scream 4",
      "Genre": "Horror",
      "Director": "Wes Craven",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.2,
      "Votes": 108544,
      "Revenue (Millions)": 38.18
    },
    {
      "Title": "Queen of Katwe",
      "Genre": "Biography",
      "Director": "Mira Nair",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 124,
      "Rating": 7.4,
      "Votes": 6753,
      "Revenue (Millions)": 8.81
    },
    {
      "Title": "My Big Fat Greek Wedding 2",
      "Genre": "Comedy",
      "Director": "Kirk Jones",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 6,
      "Votes": 20966,
      "Revenue (Millions)": 59.57
    },
    {
      "Title": "Dark Places",
      "Genre": "Drama",
      "Director": "Gilles Paquet-Brenner",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 113,
      "Rating": 6.2,
      "Votes": 31634,
      
    },
    {
      "Title": "Amateur Night",
      "Genre": "Comedy",
      "Director": "Lisa Addario",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 5,
      "Votes": 2229,
      
    },
    {
      "Title": "It's Only the End of the World",
      "Genre": "Drama",
      "Director": "Xavier Dolan",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 7,
      "Votes": 10658,
      
    },
    {
      "Title": "The Skin I Live In",
      "Genre": "Drama",
      "Director": "Pedro Almod???var",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 120,
      "Rating": 7.6,
      "Votes": 108772,
      "Revenue (Millions)": 3.19
    },
    {
      "Title": "Miracles from Heaven",
      "Genre": "Biography",
      "Director": "Patricia Riggen",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 109,
      "Rating": 7,
      "Votes": 12048,
      "Revenue (Millions)": 61.69
    },
    {
      "Title": "Annie",
      "Genre": "Comedy",
      "Director": "Will Gluck",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 118,
      "Rating": 5.3,
      "Votes": 27312,
      "Revenue (Millions)": 85.91
    },
    {
      "Title": "Across the Universe",
      "Genre": "Drama",
      "Director": "Julie Taymor",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 133,
      "Rating": 7.4,
      "Votes": 95172,
      "Revenue (Millions)": 24.34
    },
    {
      "Title": "Let's Be Cops",
      "Genre": "Comedy",
      "Director": "Luke Greenfield",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.5,
      "Votes": 112729,
      "Revenue (Millions)": 82.39
    },
    {
      "Title": "Max",
      "Genre": "Adventure",
      "Director": "Boaz Yakin",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.8,
      "Votes": 21405,
      "Revenue (Millions)": 42.65
    },
    {
      "Title": "Your Highness",
      "Genre": "Adventure",
      "Director": "David Gordon Green",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 102,
      "Rating": 5.6,
      "Votes": 87904,
      "Revenue (Millions)": 21.56
    },
    {
      "Title": "Final Destination 5",
      "Genre": "Horror",
      "Director": "Steven Quale",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 5.9,
      "Votes": 88000,
      "Revenue (Millions)": 42.58
    },
    {
      "Title": "Endless Love",
      "Genre": "Drama",
      "Director": "Shana Feste",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 104,
      "Rating": 6.3,
      "Votes": 33688,
      "Revenue (Millions)": 23.39
    },
    {
      "Title": "Martyrs",
      "Genre": "Horror",
      "Director": "Pascal Laugier",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 99,
      "Rating": 7.1,
      "Votes": 63785,
      
    },
    {
      "Title": "Selma",
      "Genre": "Biography",
      "Director": "Ava DuVernay",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 128,
      "Rating": 7.5,
      "Votes": 67637,
      "Revenue (Millions)": 52.07
    },
    {
      "Title": "Underworld: Rise of the Lycans",
      "Genre": "Action",
      "Director": "Patrick Tatopoulos",
      "Year": "2009-01-01",
      "Runtime (Minutes)": 92,
      "Rating": 6.6,
      "Votes": 129708,
      "Revenue (Millions)": 45.8
    },
    {
      "Title": "Taare Zameen Par",
      "Genre": "Drama",
      "Director": "Aamir Khan",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 165,
      "Rating": 8.5,
      "Votes": 102697,
      "Revenue (Millions)": 1.2
    },
    {
      "Title": "Take Me Home Tonight",
      "Genre": "Comedy",
      "Director": "Michael Dowse",
      "Year": "2011-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 6.3,
      "Votes": 45419,
      "Revenue (Millions)": 6.92
    },
    {
      "Title": "Resident Evil: Afterlife",
      "Genre": "Action",
      "Director": "Paul W.S. Anderson",
      "Year": "2010-01-01",
      "Runtime (Minutes)": 97,
      "Rating": 5.9,
      "Votes": 140900,
      "Revenue (Millions)": 60.13
    },
    {
      "Title": "Project X",
      "Genre": "Comedy",
      "Director": "Nima Nourizadeh",
      "Year": "2012-01-01",
      "Runtime (Minutes)": 88,
      "Rating": 6.7,
      "Votes": 164088,
      "Revenue (Millions)": 54.72
    },
    {
      "Title": "Secret in Their Eyes",
      "Genre": "Crime",
      "Director": "Billy Ray",
      "Year": "2015-01-01",
      "Runtime (Minutes)": 111,
      "Rating": 6.2,
      "Votes": 27585,
      
    },
    {
      "Title": "Hostel: Part II",
      "Genre": "Horror",
      "Director": "Eli Roth",
      "Year": "2007-01-01",
      "Runtime (Minutes)": 94,
      "Rating": 5.5,
      "Votes": 73152,
      "Revenue (Millions)": 17.54
    },
    {
      "Title": "Step Up 2: The Streets",
      "Genre": "Drama",
      "Director": "Jon M. Chu",
      "Year": "2008-01-01",
      "Runtime (Minutes)": 98,
      "Rating": 6.2,
      "Votes": 70699,
      "Revenue (Millions)": 58.01
    },
    {
      "Title": "Search Party",
      "Genre": "Adventure",
      "Director": "Scot Armstrong",
      "Year": "2014-01-01",
      "Runtime (Minutes)": 93,
      "Rating": 5.6,
      "Votes": 4881,
      
    },
    {
      "Title": "Nine Lives",
      "Genre": "Comedy",
      "Director": "Barry Sonnenfeld",
      "Year": "2016-01-01",
      "Runtime (Minutes)": 87,
      "Rating": 5.3,
      "Votes": 12435,
      "Revenue (Millions)": 19.64
    }
  ]