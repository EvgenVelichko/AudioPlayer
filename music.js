const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const seekBar = document.getElementById("seek-bar");
const volumeControl = document.getElementById("volume");

let isPlaying = false;

playButton.addEventListener("click", () => {
  if (isPlaying) {
    playButton.innerHTML = "&#9654;"; // Пауза
    isPlaying = false;
  } else {
    playButton.innerHTML = "&#10074;&#10074;"; // Играет
    isPlaying = true;
  }
});

seekBar.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(`Seeking to: ${value}`);
});

volumeControl.addEventListener("input", (e) => {
  const volume = e.target.value;
  console.log(`Volume set to: ${volume}`);
});


const tracks = [
  {
    title: "Middle Of The Night",
    artist: "Elley Duhe",
    src: "music1.mp3",
    cover: "cover1.jpg",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "music2.mp3",
    cover: "cover2.jpg",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "music3.mp3",
    cover: "cover3.jpg",
  },
];

let currentTrackIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("track-title");
const artist = document.getElementById("track-artist");
const cover = document.getElementById("cover");

function loadTrack(trackIndex) {
  const track = tracks[trackIndex];
  title.textContent = track.title;
  artist.textContent = track.artist;
  audio.src = track.src;
  cover.src = track.cover;
  audio.play();
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
});

loadTrack(currentTrackIndex);
