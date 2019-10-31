document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('video');
  const player = new Plyr(video, { captions: { active: true, update: true, language: 'en' } });
  if (!Hls.isSupported()) {
    video.src = source;
  } else {
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
    window.hls = hls;
    player.on('languagechange', () => {
      setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
    });
  }

  window.player = player;
});
