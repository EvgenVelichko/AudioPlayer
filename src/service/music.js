document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const seekBar = document.getElementById("seek-bar");
  const volumeControl = document.getElementById("volume");

  let isPlaying = false;
  let currentTrackIndex = 0;
  const audio = new Audio();

  const tracks = [
    {
      title: "Middle Of The Night",
      artist: "Elley Duhe",
      src: "src/assets/music/music1.mp3",
      cover: "src/assets//cover1.jpg",
    },
    {
      title: "The Monster",
      artist: "Eminem feat. Rihanna ",
      src: "src/assets/music/music3.mp3",
      cover: "src/assets/cover2.jpg",
    },
    {
      title: "Dont stop the music(R)",
      artist: "Rihanna",
      src: "src/assets/music/music2.mp3",
      cover: "src/assets/cover3.jpg",
    },
  ];

  const title = document.querySelector(".audio-info h2");
  const cover = document.querySelector(".album-cover img");

  function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    title.textContent = `${track.title} - ${track.artist}`;
    cover.src = track.cover;
    audio.src = track.src;
    audio.play();
    isPlaying = true;
    playButton.innerHTML = "&#10074;&#10074;";
  }

  loadTrack(currentTrackIndex);

  playButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playButton.innerHTML = "&#9654;";
      isPlaying = false;
    } else {
      audio.play();
      playButton.innerHTML = "&#10074;&#10074;";
      isPlaying = true;
    }
  });

  prevButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
  });

  nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
  });

  volumeControl.addEventListener("input", (e) => {
    const volume = e.target.value / 100;
    audio.volume = volume;
  });

  seekBar.addEventListener("input", (e) => {
    const seekTo = (audio.duration * e.target.value) / 100;
    audio.currentTime = seekTo;
  });

  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
  });
});

document.getElementById('track1').addEventListener('click', () => {
    loadTrack(0);  
    audio.play();  
    updatePlayButton();  
});

document.getElementById('track2').addEventListener('click', () => {
    loadTrack(1);  
    audio.play();  
    updatePlayButton();  
});

document.getElementById('track3').addEventListener('click', () => {
    loadTrack(2);  
    audio.play();  
    updatePlayButton();  
});
function updatePlayButton() {
    if (isPlaying) {
        playButton.innerHTML = "&#10074;&#10074;"; 
    } else {
        playButton.innerHTML = "&#9654;"; 
    }
}
