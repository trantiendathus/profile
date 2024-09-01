const musicTracks = [
    { url: 'https://files.catbox.moe/ide3uy.mp3', title: 'Đừng làm trái tim anh đau' },
    { url: 'https://files.catbox.moe/typrw7.mp3', title: 'Nhạc Tự Làm' },
    { url: 'https://files.catbox.moe/qtjs50.mp3', title: 'Một đường nở hoa' }
];

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = dateString;
}

function playMusic(trackUrl) {
    const music = document.getElementById('background-music');
    music.src = trackUrl;
    music.play();
    const trackTitle = musicTracks.find(track => track.url === trackUrl).title;
    document.getElementById('music-info').textContent = trackTitle;
}

// Update the clock and date immediately and then every second
updateClock();
setInterval(updateClock, 1000);
updateDate();

// Handle music toggle
const music = document.getElementById('background-music');
const toggleButton = document.getElementById('toggle-music');
const musicInfo = document.getElementById('music-info');
const trackSelect = document.getElementById('track-select');
const randomTrackButton = document.getElementById('random-track');
const themeToggleButton = document.getElementById('toggle-theme');

// Play a random track on page load
const randomIndex = Math.floor(Math.random() * musicTracks.length);
const randomTrack = musicTracks[randomIndex];
playMusic(randomTrack.url);

toggleButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleButton.textContent = 'Tắt nhạc';
        musicInfo.style.display = 'block'; // Show music info when playing
    } else {
        music.pause();
        toggleButton.textContent = 'Bật nhạc';
        musicInfo.style.display = 'none'; // Hide music info when paused
    }
});

// Change music track based on selection
trackSelect.addEventListener('change', () => {
    const selectedTrack = trackSelect.value;
    playMusic(selectedTrack);
});

// Play a random track
randomTrackButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * musicTracks.length);
    const randomTrack = musicTracks[randomIndex];
    playMusic(randomTrack.url);
});

// Toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Chế độ sáng';
    } else {
        themeToggleButton.textContent = 'Chế độ tối';
    }
});
