const audioPlayer = document.getElementById("audio-player");
const volumeControl = document.getElementById("volume");

volumeControl.addEventListener("input", function () {
  audioPlayer.volume = this.value;
});

function playTrack(track) {
  audioPlayer.src = track;
  audioPlayer.play();
}
