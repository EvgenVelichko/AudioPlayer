const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevTrackBtn = document.getElementById('prev-track');
const nextTrackBtn = document.getElementById('next-track');
const shuffleBtn = document.getElementById('shuffle');
const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const albumCover = document.getElementById('album-cover');
const playlist = document.getElementById('playlist');

let isPlaying = false;
let currentTrackIndex = 0;
let isShuffling = false;

const tracks = [
    {
        title: "Middle Of The Night1",
        artist: "Elley Duhe",
        src: "music/track1.mp3",
        cover: ""
    },
    {
        title: "Трек 2",
        artist: "Артист 2",
        src: "track2.mp3",
        cover: "cover2.jpg"
    },
    {
        title: "Трек 3",
        artist: "Артист 3",
        src: "track3.mp3",
        cover: "cover3.jpg"
    }
];

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    albumCover.src = track.cover;
}

function playPauseTrack() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '⏯️';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrackIndex = isShuffling ? getRandomTrackIndex() : (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸️';
}

function prevTrack() {
    currentTrackIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸️';
}

function getRandomTrackIndex() {
    return Math.floor(Math.random() * tracks.length);
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
}

function setProgress() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function toggleShuffle() {
    isShuffling = !isShuffling;
    shuffleBtn.style.color = isShuffling ? '#1db954' : 'white';
}

audio.onloadedmetadata = function() {
    progressBar.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
};

audio.ontimeupdate = updateProgress;
progressBar.oninput = setProgress;
volumeBar.oninput = function() {
    audio.volume = volumeBar.value;
};

playPauseBtn.addEventListener('click', playPauseTrack);
nextTrackBtn.addEventListener('click', nextTrack);
prevTrackBtn.addEventListener('click', prevTrack);
shuffleBtn.addEventListener('click', toggleShuffle);

tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = `${track.title} - ${track.artist}`;
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(index);
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸️';
    });
    playlist.appendChild(li);
});


loadTrack(currentTrackIndex);
