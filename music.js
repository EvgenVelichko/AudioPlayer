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
<<<<<<< Updated upstream
      cover: "src/assets/cover/cover1.jpg",
    },
    {
      title: "The Monster",
      artist: "Eminem feat. Rihanna",
      src: "src/assets/music/music2.mp3",
      cover: "src/assets/cover/cover2.jpg",
    },
    {
      title: "Dont Stop The Music (Remix) ",
      artist: " Ed Marquis",
      src: "src/assets/music/music3.mp3",
      cover: "src/assets/cover/cover3.jpg",
=======
      cover: "src/assets/cover1.jpg",
    },
    {
      title: "Dont stop the musci(R)",
      artist: "Rihanna",
      src: "src/assets/music/music2.mp3",
      cover: "src/assets/cover3.jpg",
>>>>>>> Stashed changes
    },
    {
      title: "The Monster",
      artist: "Eminem feat. Rihanna",
      src: "src/assets/music/music3.mp3",
      cover: "src/assets/cover2.jpg",
    },
  ];

  const title = document.querySelector(".audio-info h2");
  const cover = document.querySelector(".album-cover img");

  function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    title.textContent = `${track.title} - ${track.artist}`;
    cover.src = track.cover;
    audio.src = track.src;
<<<<<<< Updated upstream
    audio.play();
    isPlaying = true;
    playButton.innerHTML = "&#10074;&#10074;"; // Меняем кнопку на паузу
=======
    playButton.innerHTML = "&#9654;";
    isPlaying = false;
>>>>>>> Stashed changes
  }

  loadTrack(currentTrackIndex);

  playButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
<<<<<<< Updated upstream
      playButton.innerHTML = "&#9654;"; // Меняем на Play
      isPlaying = false;
    } else {
      audio.play();
      playButton.innerHTML = "&#10074;&#10074;"; // Меняем на Pause
=======
      playButton.innerHTML = "&#9654;"; 
      isPlaying = false;
    } else {
      audio.play();
      playButton.innerHTML = "&#10074;&#10074;"; 
>>>>>>> Stashed changes
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
    const volume = e.target.value / 100; // Приводим к диапазону от 0 до 1
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
function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    title.textContent = `${track.title} - ${track.artist}`;
    cover.src = track.cover;
    audio.src = track.src;
    playButton.innerHTML = "&#9654;"; 
    isPlaying = false;

    seekBar.value = 0; 
}
