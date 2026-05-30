const player = document.getElementById("audioPlayer");
const messageBox = document.getElementById("songMessage");

function playSong(src, message) {

    // show player
    player.classList.remove("hidden");

    // play song
    player.src = src;
    player.load();
    player.play();

    // show message
    messageBox.textContent = message;
}