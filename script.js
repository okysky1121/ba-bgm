let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const PLAYLIST = [
    {
        title: 'Constant Moderato',
        artist: 'Mitsukiyo',
        id: 'SHkF48SgiSA',
        track: 1,
        start: 0.1,
        end: 2*60+17
    },
    {
        title: 'Luminous Memory',
        artist: 'Mitsukiyo',
        id: 'D3boxTP-ZG8',
        track: 2,
        start: 0.1,
        end: 2*60+16
    },
    {
        title: 'Mischievous Step',
        artist: 'Mitsukiyo',
        id: 'FHW2fNPaHU4',
        track: 3,
        start: 0.1,
        end: 2*60+30
    },
    {
        title: 'Lovely Picnic',
        artist: 'Mitsukiyo',
        id: 'hbYXXaaE9F0',
        track: 4,
        start: 6*60,
        end: 8*60+5
    },
    {
        title: 'Colorful Mess',
        artist: 'KARUT',
        id: 'OF9cu3cutj0',
        track: 5,
        start: 0.1,
        end: 1*60+51
    },
    {
        title: 'Funky Road',
        artist: 'KARUT',
        id: 'hbYXXaaE9F0',
        track: 6,
        start: 11*60+43,
        end: 13*60+53
    },
    {
        title: 'Unwelcome School',
        artist: 'Mitsukiyo',
        id: 'pEg_d2f6myw',
        track: 7,
        start: 0.1,
        end: 2*60
    },
    {
        title: 'Shady Girls',
        artist: 'Mitsukiyo',
        id: 'v7s-gHSs-YM',
        track: 8,
        start: 0.1,
        end: 2*60+34
    },
    {
        title: 'Midsummer cat',
        artist: 'Mitsukiyo',
        id: 'jokHmrFq56E',
        track: 9,
        start: 0.1,
        end: 2*60+19
    },
    {
        title: 'Romantic Smile',
        artist: 'Mitsukiyo',
        id: 'EBnOCXXg91o',
        track: 10,
        start: 0.1,
        end: 2*60+13
    },
    {
        title: 'Connected Sky',
        artist: 'KARUT',
        id: 'DzhcJxrS5Z8',
        track: 11,
        start: 0.1,
        end: 2*60+1
    },
    {
        title: 'Shooting Stars',
        artist: 'KARUT',
        id: 'yfsqGCO_ZfM',
        track: 12,
        start: 0.1,
        end: 1*60+56
    },
    {
        title: 'Barrier',
        artist: 'KARUT',
        id: 'phqb4ifkTrE',
        track: 13,
        start: 0.1,
        end: 2*60+4
    },
    {
        title: 'Step by Step',
        artist: 'KARUT',
        id: 'kuacQoR4U8I',
        track: 14,
        start: 0.1,
        end: 2*60+10
    },
    {
        title: 'Honey Jam',
        artist: 'Mitsukiyo',
        id: 'x-2yKahdTpg',
        track: 15,
        start: 0.1,
        end: 2*60+18
    },
    {
        title: 'MX Adventure',
        artist: 'Mitsukiyo',
        id: 'hbYXXaaE9F0',
        track: 16,
        start: 8*60+4,
        end: 9*60+55
    },
    {
        title: 'Irasshaimase',
        artist: 'Mitsukiyo',
        id: 'jHSozMn7GgA',
        track: 17,
        start: 0.1,
        end: 2*60+9
    },
    {
        title: 'Mechanical JUNGLE',
        artist: 'KARUT',
        id: 'JhWiVeXf2JM',
        track: 18,
        start: 0.1,
        end: 2*60+2
    },
    {
        title: 'Virtual Storm',
        artist: 'KARUT',
        id: 'vCvjZB8PqMQ',
        track: 19,
        start: 0.1,
        end: 2*60+5
    },
    {
        title: 'Tech N Tech',
        artist: 'KARUT',
        id: 'bg0GKgxO9lo',
        track: 20,
        start: 0.1,
        end: 2*60+3
    },
    {
        title: 'Midnight Trip',
        artist: 'Nor',
        id: 'KopFUu0F4gk',
        track: 21,
        start: 0.1,
        end: 1*60+32
    },
    {
        title: 'Daily Routine 247',
        artist: 'Nor',
        id: 'fTW7D5u0HfE',
        track: 22,
        start: 0.1,
        end: 1*60+55
    },
    {
        title: 'Party Time',
        artist: 'Mitsukiyo',
        id: 'eGX7qsgX7js',
        track: 23,
        start: 8*60+58,
        end: 10*60+16
    },
    {
        title: 'Endless Carnival',
        artist: 'Mitsukiyo',
        id: 'eOUzJN-W-rE',
        track: 24,
        start: 0.1,
        end: 2*60+22
    },
    {
        title: 'Future Bossa',
        artist: 'Mitsukiyo',
        id: 'kiwWb_1KFKs',
        track: 25,
        start: 0.1,
        end: 2*60+10
    },
    {
        title: 'Lemonade Diary',
        artist: 'Mitsukiyo',
        id: 'WECXxQnpBPE',
        track: 26,
        start: 0.1,
        end: 2*60+34
    },
    {
        title: 'Fade Out',
        artist: 'KARUT',
        id: 'v6Zw9m89CS8',
        track: 27,
        start: 0.1,
        end: 1*60+30
    },
    {
        title: 'Plug and Play',
        artist: 'KARUT',
        id: 'UqKlf3sOo3I',
        track: 28,
        start: 0.1,
        end: 2*60+7
    },
    {
        title: 'Alert',
        artist: 'KARUT',
        id: 'EDJttssxhuA',
        track: 29,
        start: 0.1,
        end: 1*60+58
    },
    {
        title: 'CrossFire',
        artist: 'KARUT',
        id: 'AqBVDJDB0ps',
        track: 30,
        start: 0.1,
        end: 1*60+54
    },
    {
        title: 'Hello to Halo',
        artist: 'Nor',
        id: 'ai3lHklPdV0',
        track: 31,
        start: 0*60+1,
        end: 1*60+45
    },
    {
        title: 'GGF',
        artist: 'Nor',
        id: 'skr-e1x4wy4',
        track: 32,
        start: 0.1,
        end: 1*60+51
    },
    {
        title: 'Vivid Night',
        artist: 'Nor',
        id: 'hbYXXaaE9F0',
        track: 33,
        start: 9*60+56,
        end: 11*60+43
    },
    {
        title: 'Aoharu',
        artist: 'Nor',
        id: 'Oeedwk9oQLk',
        track: 34,
        start: 0.1,
        end: 1*60+48
    },
    {
        title: 'Morose Dreamer',
        artist: 'Mitsukiyo',
        id: 'bLCRlPmpzEs',
        track: 35,
        start: 0*60+1,
        end: 2*60+21
    },
    {
        title: 'Koi is Love',
        artist: 'Mitsukiyo',
        id: 'lzUS9plwjoQ',
        track: 36,
        start: 0.1,
        end: 1*60+48
    },
    {
        title: 'Aira',
        artist: 'Mitsukiyo',
        id: 'bLCRlPmpzEs',
        track: 37,
        start: 2*60+21,
        end: 4*60+37
    },
    {
        title: 'Guruguru Usagi',
        artist: 'Mitsukiyo',
        id: 'rpOxGU1CssA',
        track: 38,
        start: 0.1,
        end: 2*60+17,
    },
    {
        title: 'Water Drop',
        artist: 'KARUT',
        id: '0vpYgve07W8',
        track: 39,
        start: 0.1,
        end: 2*60+10
    },
    {
        title: 'Neo City Dive',
        artist: 'KARUT',
        id: 'VjdZmDzbZzk',
        track: 40,
        start: 0.1,
        end: 2*60+18
    },
    {
        title: 'Interface',
        artist: 'KARUT',
        id: 'kvWf9z02tIw',
        track: 41,
        start: 0.1,
        end: 1*60+56
    },
    {
        title: 'Glitch Street',
        artist: 'KARUT',
        id: 'XOY9xsXeYWk',
        track: 42,
        start: 0.1,
        end: 2*60+6
    },
    {
        title: 'Han-nari',
        artist: 'Nor',
        id: 'tWZ5uRPurec',
        track: 57,
        start: 0*60+1,
        end: 1*60+41
    },
    {
        title: 'SAKURA PUNCH',
        artist: 'Nor',
        id: 'tWZ5uRPurec',
        track: 58,
        start: 1*60+42,
        end: 3*60+45
    },
    {
        title: 'SAKURA PUNCH (Hard Arrange)',
        artist: 'Nor',
        id: 'tWZ5uRPurec',
        track: 60,
        start: 3*60+45,
        end: 5*60+47
    },
    {
        title: 'Rolling beat',
        artist: 'Mitsukiyo',
        id: 'lKRgr_mO2jQ',
        track: 61,
        start: 0.1,
        end: 2*60+31
    },
    {
        title: 'Pixel Time',
        artist: 'Mitsukiyo',
        id: 'jLNikHtJUeA',
        track: 64,
        start: 0.1,
        end: 2*60+10
    },
    {
        title: 'Summer Bounce',
        artist: 'Mitsukiyo',
        id: 'lTjp3sGQ-NY',
        track: 79,
        start: 0.1,
        end: 2*60+18
    },
    {
        title: 'Colorful Beach',
        artist: 'Mitsukiyo',
        id: 'lTjp3sGQ-NY',
        track: 80,
        start: 2*60+18,
        end: 4*60+22
    },
    {
        title: 'Summer Bounce (Hard Arrange)',
        artist: 'KARUT',
        id: 'kENHnTLwoY8',
        track: 81,
        start: 1*60+46,
        end: 3*60+38
    },
    {
        title: 'PRST Academy',
        artist: 'Mitsukiyo',
        id: 'cTLVPXpKu-E',
        track: 83,
        start: 0.1,
        end: 1*60+43
    },
    {
        title: 'PRST Marching',
        artist: 'Mitsukiyo',
        id: 'cTLVPXpKu-E',
        track: 84,
        start: 1*60+43,
        end: 3*60+59
    },
    {
        title: 'Summertime Archive',
        artist: 'Mitsukiyo',
        id: 'kENHnTLwoY8',
        track: 86,
        start: 0.1,
        end: 1*60+46
    },
    {
        title: 'Oriental Drop',
        artist: 'KARUT',
        id: 'lu_oLWJg6ao',
        track: 88,
        start: 0.1,
        end: 2*60+3
    },
    {
        title: 'The Dragon Express',
        artist: 'KARUT',
        id: 'lu_oLWJg6ao',
        track: 89,
        start: 2*60+3,
        end: 4*60+6
    },
    {
        title: 'Bunny Bunny Carrot Carrot',
        artist: 'Mitsukiyo',
        id: 'YJUngIIbR-4',
        track: 94,
        start: 0.1,
        end: 1*60+55
    },
    {
        title: 'Jackpot 777',
        artist: 'KARUT',
        id: 'YJUngIIbR-4',
        track: 95,
        start: 1*60+55,
        end: 3*60+48
    },
    {
        title: 'OperationD',
        artist: 'Nor',
        id: 'zhkSWznNGlA',
        track: 96,
        start: 0.1,
        end: 1*60+53
    },
    {
        title: 'Nesno wons',
        artist: 'Mitsukiyo',
        id: 'aVKifR68kzQ',
        track: 99,
        start: 0*60+0.01,
        end: 1*60+56
    },
];

PLAYLIST.current = 0;

document.getElementById('playlist').innerHTML += PLAYLIST.map((el, i) => {
    return `<article class="pl" onclick="play(${i})"><p><span class="pl-title">${el.track}. ${el.title}</span><br/><span class="pl-artist">${el.artist || 'ㅇㅇ'}</span></p></article>`;
}).join('');


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'SHkF48SgiSA',
        width: Math.min(350, window.innerWidth-50),
        height: 0.55*(Math.min(350, window.innerWidth-50))
    });

    player.__interval = setInterval(function () {
        if (player.playerInfo.currentTime > PLAYLIST[0].end) {
            play(0);
        }
    }, 100);
}

function minsec (n) {
    return `${Math.floor(n/60)}:${String((n%60)|0).padStart(2, '0')}`;
}

function play (num) {
    clearInterval(player.__interval);
    
    document.querySelectorAll(`article.pl[onclick="play(${PLAYLIST.current})"]>p>span`)[0].setAttribute('class', 'pl-title');
    document.querySelectorAll(`article.pl[onclick="play(${PLAYLIST.current})"]>p>span`)[1].setAttribute('class', 'pl-artist');
    
    PLAYLIST.current = num;
    
    document.querySelectorAll(`article.pl[onclick="play(${num})"]>p>span`)[0].setAttribute('class', 'pl-np-title');
    document.querySelectorAll(`article.pl[onclick="play(${num})"]>p>span`)[1].setAttribute('class', 'pl-np-artist');
    
    document.getElementById('music-tit').innerText = PLAYLIST[num].title;
    
    document.getElementById('src-url').innerText = `https://www.youtube.com/watch?v=${PLAYLIST[num].id}`;
    document.getElementById('src-url').setAttribute('href', `https://www.youtube.com/watch?v=${PLAYLIST[num].id}`);
    
    let duration = PLAYLIST[num].end - PLAYLIST[num].start;
    document.getElementById('duration').innerText = minsec(duration);
    
    if (document.getElementById('resume-music')) {
        document.getElementById('resume-music').innerText = '❚❚';
        document.getElementById('resume-music').setAttribute('id', 'pause-music');
        document.getElementById('pause-music').setAttribute('onclick', 'pause();');
    }
    
    player.loadVideoById({
        videoId: PLAYLIST[num].id,
        startSeconds: PLAYLIST[num].start,
        endSeconds: PLAYLIST[num].end
    });
    
    player.__interval = setInterval(function () {
        if (player.playerInfo.currentTime > PLAYLIST[num].end) {
            nextmusic();
        }
        document.getElementById('progress').innerText = minsec(player.playerInfo.currentTime - PLAYLIST[num].start);
        
    }, 100);
}

function pause () {
    document.getElementById('pause-music').innerText = '▶';
    document.getElementById('pause-music').setAttribute('id', 'resume-music');
    document.getElementById('resume-music').setAttribute('onclick', 'resume();');
    player.pauseVideo();
}

function resume () {
    document.getElementById('resume-music').innerText = '❚❚';
    document.getElementById('resume-music').setAttribute('id', 'pause-music');
    document.getElementById('pause-music').setAttribute('onclick', 'pause();');
    player.playVideo();
}

function prevmusic () {
    if (player.playerInfo.currentTime - PLAYLIST[PLAYLIST.current].start <= 5) {
        play((PLAYLIST.current + PLAYLIST.length - 1) % PLAYLIST.length);
    }
    else {
        play(PLAYLIST.current);
    }
}

function nextmusic () {
    play((PLAYLIST.current + 1) % PLAYLIST.length);
}
