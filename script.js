const playButton = document.getElementById('play-button');
const audioPlayer = document.getElementById('audioplayer')

playButton.addEventListener('click', () => {
    audioPlayer.play();
})