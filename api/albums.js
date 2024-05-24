const albums = [
  {
    id: 1,
    title: 'Yours Truly',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag1.png',
    tracks: [
      { id: 1, title: 'Honeymoon Avenue' },
      { id: 2, title: 'Baby I' },
      { id: 3, title: 'Right There' },
      { id: 4, title: 'Tattooed Heart' },
      { id: 5, title: 'Lovin\' It' },
      { id: 6, title: 'Piano' },
      { id: 7, title: 'Day Dreamin\'' },
      { id: 8, title: 'The Way' },
      { id: 9, title: 'You\'ll Never Know' },
      { id: 10, title: 'Almost is Never Enough' },
      { id: 11, title: 'Popular Song' },
      { id: 12, title: 'Better Left Unsaid' }
    ]
  },
  {
    id: 2,
    title: 'My Everything',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag2.jpg',
    tracks: [
      { id: 1, title: 'Problem' },
      { id: 2, title: 'One Last Time' },
      { id: 3, title: 'Why Try' },
      { id: 4, title: 'Break Free' },
      { id: 5, title: 'Best Mistake' },
      { id: 6, title: 'Be My Baby' },
      { id: 7, title: 'Break Your Heart Right Back' },
      { id: 8, title: 'Love Me Harder' },
      { id: 9, title: 'Just a Little Bit of Your Heart' },
      { id: 10, title: 'Hands on Me' },
      { id: 11, title: 'My Everything' },
      { id: 12, title: 'Bang Bang' }
    ]
  },
  {
    id: 3,
    title: 'Dangerous Woman',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag3.jpg',
    tracks: [
      { id: 1, title: 'Moonlight' },
      { id: 2, title: 'Dangerous Woman' },
      { id: 3, title: 'Be Alright' },
      { id: 4, title: 'Into You' },
      { id: 5, title: 'Side to Side' },
      { id: 6, title: 'Let Me Love You' },
      { id: 7, title: 'Greedy' },
      { id: 8, title: 'Leave Me Lonely' },
      { id: 9, title: 'Everyday' },
      { id: 10, title: 'Sometimes' },
      { id: 11, title: 'I Don\'t Care' },
      { id: 12, title: 'Bad Decisions' },
      { id: 13, title: 'Touch It' },
      { id: 14, title: 'Knew Better / Forever Boy' },
      { id: 15, title: 'Thinking Bout You' }
    ]
  },
  {
    id: 4,
    title: 'Sweetener',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag4.png',
    tracks: [
      { id: 1, title: 'Raindrops (An Angel Cried)' },
      { id: 2, title: 'Blazed' },
      { id: 3, title: 'The Light Is Coming' },
      { id: 4, title: 'R.E.M' },
      { id: 5, title: 'God is a Woman' },
      { id: 6, title: 'Sweetener' },
      { id: 7, title: 'Successful' },
      { id: 8, title: 'Everytime' },
      { id: 9, title: 'Breathin' },
      { id: 10, title: 'No Tears Left to Cry' },
      { id: 11, title: 'Borderline' },
      { id: 12, title: 'Better Off' },
      { id: 13, title: 'Goodnight n Go' },
      { id: 14, title: 'Pete Davidson' },
      { id: 15, title: 'Get Well Soon' }
    ]
  },
  {
    id: 5,
    title: 'Thank U, Next',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag5.png',
    tracks: [
      { id: 1, title: 'Imagine' },
      { id: 2, title: 'Needy' },
      { id: 3, title: 'NASA' },
      { id: 4, title: 'Bloodline' },
      { id: 5, title: 'Fake Smile' },
      { id: 6, title: 'Bad Idea' },
      { id: 7, title: 'Make Up' },
      { id: 8, title: 'Ghostin' },
      { id: 9, title: 'In My Head' },
      { id: 10, title: '7 rings' },
      { id: 11, title: 'Thank U, Next' },
      { id: 12, title: 'Break Up with Your Girlfriend, I\'m Bored' }
    ]
  },
  {
    id: 6,
    title: 'Positions',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag6.jpg',
    tracks: [
      { id: 1, title: 'shut up' },
      { id: 2, title: '34+35' },
      { id: 3, title: 'motive' },
      { id: 4, title: 'just like magic' },
      { id: 5, title: 'off the table' },
      { id: 6, title: 'six thirty' },
      { id: 7, title: 'safety net' },
      { id: 8, title: 'my hair' },
      { id: 9, title: 'nasty' },
      { id: 10, title: 'west side' },
      { id: 11, title: 'love language' },
      { id: 12, title: 'positions' },
      { id: 13, title: 'obvious' },
      { id: 14, title: 'pov' }
    ]
  },
  {
    id: 7,
    title: 'Eternal Sunshine',
    artist: 'Ariana Grande',
    coverUrl: 'photos/ag7.png',
    tracks: [
      { id: 1, title: 'intro (end of the world)' },
      { id: 2, title: 'bye' },
      { id: 3, title: 'don\'t wannt break up again' },
      { id: 4, title: 'Saturn Returns Interlude' },
      { id: 5, title: 'eternal sunshine' },
      { id: 6, title: 'supernatural' },
      { id: 7, title: 'true story' },
      { id: 8, title: 'the boy is mine' },
      { id: 9, title: 'yes, and?' },
      { id: 10, title: 'we can\'t be friends (wait for your love)' },
      { id: 11, title: 'i wish i hate you'},
      { id: 12, title: 'imperfect for you'},
      { id: 13, title: 'ordinary things (Ft. nonna)'}
    ]
  }
];


export async function fetchAlbums() {
  // Mock API call, replace with real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(albums);
    }, 500); // Simulate API delay
  });
}

export async function fetchAlbumById(id) {
  // Mock API call, replace with real API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const album = albums.find(album => album.id === parseInt(id));
      if (album) {
        resolve(album);
      } else {
        reject(new Error('Album not found'));
      }
    }, 500); // Simulate API delay
  });
}
