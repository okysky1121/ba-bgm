let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const PLAYLIST = [
    {
        title: 'Constant Moderato',
        id: 'hbYXXaaE9F0',
        track: 1,
        start: 0*60+17,
        end: 2*60+34
    },
    {
        title: 'Luminous Memory',
        id: 'ai3lHklPdV0',
        track: 2,
        start: 1*60+45,
        end: 4*60
    },
    {
        title: 'Lovely Picnic',
        id: 'hbYXXaaE9F0',
        track: 4,
        start: 6*60,
        end: 8*60+5
    },
    {
        title: 'Colorful Mess',
        id: 'eGX7qsgX7js',
        track: 5,
        start: 14*60+9,
        end: 15*60+14
    },
    {
        title: 'Funky Road',
        id: 'hbYXXaaE9F0',
        track: 6,
        start: 11*60+43,
        end: 13*60+53
    },
    {
        title: 'Unwelcome School',
        id: 'eGX7qsgX7js',
        track: 7,
        start: 12*60+14,
        end: 14*60+9
    },
    {
        title: 'Midsummer cat',
        id: 'ai3lHklPdV0',
        track: 9,
        start: 5*60+36,
        end: 7*60+15
    },
    {
        title: 'Romantic Smile',
        id: 'ai3lHklPdV0',
        track: 10,
        start: 9*60+6,
        end: 11*60+15
    },
    {
        title: 'Connected Sky',
        id: 'hbYXXaaE9F0',
        track: 11,
        start: 17*60+32,
        end: 19*60+15
    },
    {
        title: 'Shooting Stars',
        id: 'ai3lHklPdV0',
        track: 12,
        start: 4*60,
        end: 5*60+36
    },
    {
        title: 'Barrier',
        id: 'hbYXXaaE9F0',
        track: 13,
        start: 13*60+53,
        end: 15*60+53
    },
    {
        title: 'Step by Step',
        id: 'hbYXXaaE9F0',
        track: 14,
        start: 4*60+23,
        end: 6*60
    },
    {
        title: 'Honey Jam',
        id: 'hbYXXaaE9F0',
        track: 15,
        start: 19*60+15,
        end: 21*60+34
    },
    {
        title: 'MX Adventure',
        id: 'hbYXXaaE9F0',
        track: 16,
        start: 8*60+4,
        end: 9*60+55
    },
    {
        title: 'Mechanical JUNGLE',
        id: 'eGX7qsgX7js',
        track: 18,
        start: 1,
        end: 1*60+39
    },
    {
        title: 'Virtual Storm',
        id: 'eGX7qsgX7js',
        track: 19,
        start: 1*60+52,
        end: 3*60+11
    },
    {
        title: 'Tech N Tech',
        id: 'eGX7qsgX7js',
        track: 20,
        start: 3*60+11,
        end: 5*60+3
    },
    {
        title: 'Midnight Trip',
        id: 'hbYXXaaE9F0',
        track: 21,
        start: 21*60+33.5,
        end: 22*60+52
    },
    {
        title: 'Daily Routine 247',
        id: 'hbYXXaaE9F0',
        track: 22,
        start: 15*60+53,
        end: 17*60+32
    },
    {
        title: 'Party Time',
        id: 'eGX7qsgX7js',
        track: 23,
        start: 8*60+58,
        end: 10*60+16
    },
    {
        title: 'Endless Carnival',
        id: 'eGX7qsgX7js',
        track: 24,
        start: 6*60+52,
        end: 8*60+58
    },
    {
        title: 'Future Bossa',
        id: 'eGX7qsgX7js',
        track: 25,
        start: 10*60+16,
        end: 12*60+14
    },
    {
        title: 'Plug and Play',
        id: 'hbYXXaaE9F0',
        track: 28,
        start: 2*60+34,
        end: 4*60+16
    },
    {
        title: 'CrossFire',
        id: 'eGX7qsgX7js',
        track: 30,
        start: 5*60+3,
        end: 6*60+43
    },
    {
        title: 'Hello to Halo',
        id: 'ai3lHklPdV0',
        track: 31,
        start: 0*60+1,
        end: 1*60+45
    },
    {
        title: 'GGF',
        id: 'eGX7qsgX7js',
        track: 32,
        start: 15*60+13,
        end: 17*60+3
    },
    {
        title: 'Vivid Night',
        id: 'hbYXXaaE9F0',
        track: 33,
        start: 9*60+56,
        end: 11*60+43
    },
    {
        title: 'Aoharu',
        id: 'ai3lHklPdV0',
        track: 34,
        start: 7*60+15,
        end: 9*60+5
    },
    {
        title: 'Morose Dreamer',
        id: 'bLCRlPmpzEs',
        track: 35,
        start: 0*60+1,
        end: 2*60+21
    },
    {
        title: 'Aira',
        id: 'bLCRlPmpzEs',
        track: 37,
        start: 2*60+21,
        end: 4*60+37
    },
    {
        title: 'Han-nari',
        id: 'tWZ5uRPurec',
        track: 57,
        start: 0*60+1,
        end: 1*60+41
    },
    {
        title: 'SAKURA PUNCH',
        id: 'tWZ5uRPurec',
        track: 58,
        start: 1*60+42,
        end: 3*60+45
    },
    {
        title: 'SAKURA PUNCH (Hard Arrange)',
        id: 'tWZ5uRPurec',
        track: 60,
        start: 3*60+45,
        end: 5*60+47
    },
    {
        title: 'Pixel Time',
        id: 'jLNikHtJUeA',
        track: 64,
        start: 0.1,
        end: 2*60+10
    },
    {
        title: 'Summer Bounce',
        id: 'lTjp3sGQ-NY',
        track: 79,
        start: 0.1,
        end: 2*60+18
    },
    {
        title: 'Colorful Beach',
        id: 'lTjp3sGQ-NY',
        track: 80,
        start: 2*60+18,
        end: 4*60+22
    },
    {
        title: 'Summer Bounce (Hard Arrange)',
        id: 'kENHnTLwoY8',
        track: 81,
        start: 1*60+46,
        end: 3*60+38
    },
    {
        title: 'PRST Academy',
        id: 'cTLVPXpKu-E',
        track: 83,
        start: 0.1,
        end: 1*60+43
    },
    {
        title: 'PRST Marching',
        id: 'cTLVPXpKu-E',
        track: 84,
        start: 1*60+43,
        end: 3*60+59
    },
    {
        title: 'Summertime Archive',
        id: 'kENHnTLwoY8',
        track: 86,
        start: 0.1,
        end: 1*60+46
    },
    {
        title: 'Oriental Drop',
        id: 'lu_oLWJg6ao',
        track: 88,
        start: 0.1,
        end: 2*60+3
    },
    {
        title: 'The Dragon Express',
        id: 'lu_oLWJg6ao',
        track: 89,
        start: 2*60+3,
        end: 4*60+6
    },
    {
        title: 'Bunny Bunny Carrot Carrot',
        id: 'YJUngIIbR-4',
        track: 94,
        start: 0.1,
        end: 1*60+55
    },
    {
        title: 'Jackpot 777',
        id: 'YJUngIIbR-4',
        track: 95,
        start: 1*60+55,
        end: 3*60+48
    },
    {
        title: 'OperationD',
        id: 'zhkSWznNGlA',
        track: 96,
        start: 0.1,
        end: 1*60+53
    },
    {
        title: 'Nesno wons',
        id: 'aVKifR68kzQ',
        track: 99,
        start: 0*60+0.01,
        end: 1*60+56
    },
    {
        title: 'Blue New World',
        id: 'L6bl6RAZFT8',
        track: 0,
        start: 0*60+1,
        end: 3*60+12
    },
];

PLAYLIST.current = 0;

document.getElementById('playlist').innerHTML += PLAYLIST.map((el, i) => {
    return `<p class="pl"><span onclick="play(${i})">${el.track}. ${el.title}</span></p>`;
}).join('');

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'hbYXXaaE9F0',
        width: Math.min(480, window.innerWidth-50),
        height: 0.55*(Math.min(480, window.innerWidth-50))
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
    PLAYLIST.current = num;
    
    document.getElementById('music-tit').innerText = PLAYLIST[num].title;
    
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
