document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('video');
  const playPauseBtn = document.getElementById('play-pause');
  const muteBtn = document.getElementById('mute');
  const progressBar = document.querySelector('.progress');
  const volumeBar = document.querySelector('.volume');
  const timeDisplay = document.getElementById('time');

  playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
          video.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
          video.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
  });

  muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
  });

  video.addEventListener('timeupdate', () => {
      const minutes = Math.floor(video.currentTime / 60);
      const seconds = Math.floor(video.currentTime - minutes * 60);
      const minutesDuration = Math.floor(video.duration / 60);
      const secondsDuration = Math.floor(video.duration - minutesDuration * 60);
      timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${minutesDuration.toString().padStart(2, '0')}:${secondsDuration.toString().padStart(2, '0')}`;
      progressBar.value = (video.currentTime / video.duration) * 100;
  });

  progressBar.addEventListener('input', () => {
      const percentage = (progressBar.value / 100) * video.duration;
      video.currentTime = percentage;
  });

  volumeBar.addEventListener('input', () => {
      video.volume = volumeBar.value;
  });

  progressBar.addEventListener('mousedown', () => {
      video.pause();
  });

  progressBar.addEventListener('mouseup', () => {
      video.play();
  });
});