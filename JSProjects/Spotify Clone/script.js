let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myPrograssBar = document.getElementById("myPrograssBar");
let songItems = Array.from(document.getElementsByClassName("song-item"));
let songs = [
  { songName: "1.mp3", filePath: "1.mp3", coverPath: "1.jpg" },
  { songName: "2.mp3", filePath: "2.mp3", coverPath: "2.jpg" },
  { songName: "3.mp3", filePath: "3.mp3", coverPath: "3.jpg" },
  { songName: "4.mp3", filePath: "4.mp3", coverPath: "4.jpg" },
  { songName: "5.mp3", filePath: "5.mp3", coverPath: "5.jpg" },
  { songName: "6.mp3", filePath: "6.mp3", coverPath: "6.jpg" },
  { songName: ".7.mp3", filePath: "7.mp3", coverPath: "7.jpg" },
  { songName: "8.mp3", filePath: "8.mp3", coverPath: "8.jpg" },
  { songName: "9.mp3", filePath: "9.mp3", coverPath: "9.jpg" },
  { songName: "10.mp3", filePath: "10.mp3", coverPath: "10.jpg" },
];

// audioElement.play();

// Handle play/pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen to Event

audioElement.addEventListener("timeupdate", () => {
  //   Update Seckber

  prograss = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(prograss);

  myPrograssBar.value = prograss;
});

myPrograssBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myPrograssBar.value * audioElement.duration) / 100;
});

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const makeAllPlys = () => {
  Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
    element.classList.add("fa-google-play");
    element.classList.remove("fa-circle-pause");
  });
};

Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlys();
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-google-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.currentTime = 0;
    audioElement.src = `${index + 1}.mp3`;
    audioElement.play();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
  });
});
