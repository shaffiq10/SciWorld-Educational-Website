const music = document.getElementById("homebgMusic");
const logo = document.querySelector(".logo");
let isPlaying = false;

if (music && logo) {

  window.addEventListener("load", () => {
    music.volume = 0.4;

    music.play().then(() => {
      isPlaying = true;
      logo.classList.add("playing");
    }).catch(() => {
      isPlaying = false;
    });
  });

  function toggleMusic() {
    if (isPlaying) {
      music.pause();
      isPlaying = false;
      logo.classList.remove("playing");
    } else {
      music.play();
      isPlaying = true;
      logo.classList.add("playing");
    }
  }

}
