const services = [
    {
        id: 1,
        name: 'Rap',
        description: 'Rapping is a musical form of vocal delivery that incorporates "rhyme, rhythmic speech, and street vernacular", which is performed or chanted in a variety of ways, usually over a backing beat or musical accompaniment.',
        fee: 500,
        img: 'https://img.freepik.com/free-vector/rap-neon-word-microphone-flame-outline_1262-11901.jpg?size=338&ext=jpg'
    },
    {
        id: 2,
        name: 'Freestyle Rap',
        description: 'Freestyle is a style of improvisation, with or without instrumental beats, in which lyrics are recited with no particular subject or structure and with no prior memorization.',
        fee: 700,
        img: 'https://i.scdn.co/image/ab67706c0000bebb94e5c1062e02fc88b8bf3bd9'
    },
    {
        id: 3,
        name: 'Hip Hop Dance',
        description: 'Hip-hop dance is a fusion dance genre that incorporates elements of popping, locking, breaking, jazz, ballet, tap dancing and other styles and is typically performed to hip-hop, R&B, funk, electronic or pop music.',
        fee: 600,
        img: 'https://image.shutterstock.com/image-photo/flexible-sportive-girls-dancing-hiphop-260nw-1786064927.jpg'
    },
    {
        id: 4,
        name: 'Write your own Lyrics',
        description: 'Lyrics are words that make up a song, usually consisting of verses and choruses. The writer of lyrics is a lyricist.',
        fee: 800,
        img: 'data:image/png;base64,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'
    },
    {
        id:5,
        name:'Disc Jockey (DJ)',
        description:'A disc jockey, more commonly abbreviated as DJ, is a person who plays recorded music for an audience. Types of DJs include radio DJs, club DJs, mobile DJs, and turntablists.',
        fee: 1000,
        img: 'https://image.shutterstock.com/image-photo/portrait-confident-young-dj-headphones-260nw-1082977484.jpg'
    },
    {
        id:6,
        name: 'Audio Recording',
        description: 'Sound recording and reproduction is an electrical, mechanical, electronic, or digital inscription and re-creation of sound waves, such as spoken voice, singing, instrumental music, or sound effects.',
        fee: 1200,
        img: 'https://y31uv4ra1.vo.llnwd.net/content/wp/tweaklibrary_com/uploads/2020/05/best-Audio-recording-software.jpg'
    },
    {
        id:7,
        name:'Vocal Mix and Mastering',
        description: 'Mixing vocals is one of the most important tasks in music production. Modern tracks demand vocals that sound big, bold and flawless. Achieving this highly polished sound takes a lot of careful attention. ... But mixing is where you will apply the processing that contributes most to your vocal sound.',
        fee:1000,
        img: 'https://i.ytimg.com/vi/04o1kpdkpVU/maxresdefault.jpg'
    },
    {
        id:8,
        name: 'Beatboxing',
        description: "Beatboxing is a form of vocal percussion primarily involving the art of mimicking drum machines, using one's mouth, lips, tongue, and voice. It may also involve vocal imitation of turntablism, and other musical instruments.",
        fee: 1300,
        img: 'https://www.humanbeatbox.com/wp-content/uploads/2007/07/Beginners-guide-to-beatbox.png'
    }
]