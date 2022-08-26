import musics from './musics.js';

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const playlist = document.getElementById('playlist'),
  npTitle = document.getElementById('music-tit'),
  npSrc = document.getElementById('src-url'),
  duration = document.getElementById('duration'),
  progress = document.getElementById('progress');

musics.forEach(({ title, artist }, i) => {
  const article = document.createElement('article'),
    p = document.createElement('p'),
    br = document.createElement('br'),
    pTitle = document.createElement('span'),
    pTrtist = document.createElement('span');

  article.className = 'pl';
  pTitle.className = 'pl-title';
  pTrtist.className = 'pl-artist';
  pTitle.textContent = `${i + 1}. ${title}`;
  pTrtist.textContent = artist;
  article.dataset.index = i;

  p.appendChild(pTitle);
  p.appendChild(br);
  p.appendChild(pTrtist);
  article.appendChild(p);
  playlist.appendChild(article);
});

function minsec(n) {
  return `${Math.max(0, Math.floor(n / 60)) || 0}:${`${n % 60 | 0}`.padStart(
    2,
    '0'
  )}`;
}

function highlight(i) {
  document.querySelector('.pl.np')?.classList.remove('np');
  document.querySelector(`.pl:nth-child(${i + 2})`).classList.add('np');
}

const Music = {
  player: null,
  current: 0,
  play(i) {
    if (i >= musics.length || i < 0) return;

    highlight(i);
    npTitle.textContent = musics[i].title;
    npSrc.href = `https://www.youtube.com/watch?v=${musics[i].id}`;
    this.current = i;

    if (!this.player.loadVideoById) return;
    this.player.loadVideoById({
      videoId: musics[i].id,
      startSeconds: musics[i].start,
      endSeconds: musics[i].end,
    });
    duration.textContent = minsec(musics[i].end - musics[i].start);
  },
  pause() {
    this.player.pauseVideo();
  },
  resume() {
    this.player.playVideo();
  },
  prev() {
    this.play(this.current - 1);
  },
  next() {
    this.play((this.current + 1) % musics.length);
  },
};

playlist.addEventListener('click', (e) => {
  let target;
  switch (e.target.tagName) {
    case 'SPAN':
      target = e.target.parentElement.parentElement;
      break;
    case 'P':
      target = e.target.parentElement;
      break;
    case 'ARTICLE':
      target = e.target;
      break;
    default:
      return;
  }

  Music.play(parseInt(target.dataset.index));
});

window.onYouTubeIframeAPIReady = () => {
  Music.player = new YT.Player('player', {
    videoId: musics[0].id,
  });

  Music.play(0);

  setInterval(() => {
    if (Music.player.playerInfo.currentTime > musics[0].end) {
      Music.next();
    }

    progress.textContent = minsec(
      Music.player.playerInfo.currentTime - musics[0].start
    );
  }, 100);
};
