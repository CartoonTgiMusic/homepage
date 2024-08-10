const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const product = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("h6");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h6")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

function Close() {
  window.close();
}

const tabs = document.querySelectorAll(".tab-btn");
const allContents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    allContents.forEach((content) => {
      content.classList.remove("active");
    });
    allContents[index].classList.add("active");
  });
});

function createTrackItem(index, name, duration) {
  var trackItem = document.createElement("div");
  trackItem.setAttribute("class", "playlist-track-ctn product");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn").appendChild(trackItem);

  var playBtnItem = document.createElement("div");
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement("i");
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  var trackInfoItem = document.createElement("div");
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name;
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement("div");
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration;
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
  
  var h6 = document.createElement("h6");
  h6.innerHTML = `${name}${duration}`;
  document.querySelector("#ptc-" + index).appendChild(h6);
}

var listAudio = [
  {
    name: "မင်္ဂလာႏဒျာႏဗွေႏဩ",
    file: "assets/musics/aoaudios/music1.mp3",
    duration: "ကာတွန်းစွိုꩻ",
  },
  {
    name: "ဆုတောင်ꩻနော",
    file: "assets/musics/aoaudios/music2.mp3",
    duration: "ခွန်ချို",
  },
  {
    name: "တဖြာꩻတွမ်ႏတဖြာꩻ",
    file: "assets/musics/aoaudios/music3.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "အောဝ်ႏကော့ꩻမွောင်ꩻ",
    file: "assets/musics/aoaudios/music4.mp3",
    duration: "ခွန်ပျူ",
  },
  {
    name: "သေနာႏလဲဥ်း",
    file: "assets/musics/aoaudios/music5.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "အောဝ်ႏ",
    file: "assets/musics/aoaudios/music6.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "လဲဥ်ꩻထိုႏမွန်းခွေꩻ",
    file: "assets/musics/aoaudios/music7.mp3",
    duration: "ခွန်ကော်လီ",
  },
  {
    name: "တဥ်ႏခွေါင်ဒျာႏနော်",
    file: "assets/musics/aoaudios/music8.mp3",
    duration: "ခွန်ဝဒုတ်",
  },
  {
    name: "အွဥ်ႏဖိင်ꩻခန်း ",
    file: "assets/musics/aoaudios/music9.mp3",
    duration: "ခွန်ချိူ",
  },
  {
    name: "မွိုက်လွေꩻဟိုင်း",
    file: "assets/musics/aoaudios/music10.mp3",
    duration: "ခွန်ကျော်စိုး",
  },
  {
    name: "ကမ်းဒျာႏနာꩻသꩻ",
    file: "assets/musics/aoaudios/music11.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "မဲ့ꩻခွေꩻလွဥ်ꩻယန်း",
    file: "assets/musics/aoaudios/music12.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "နာꩻထန်ႏထိုꩻ",
    file: "assets/musics/aoaudios/music13.mp3",
    duration: "ခွန်ဇော်ခက်",
  },

  {
    name: "စာႏနာႏဖေႏ လာမဲင်းပေꩻ",
    file: "assets/musics/happytime/music1.mp3",
    duration: "ခွန်ရှိန်း+ခွန်ဆန်းလေး",
  },
  {
    name: "အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    file: "assets/musics/happytime/music2.mp3",
    duration: "ခွန်ကျော်သိန်း(ABC)+ခွန်သိန်းဟန်",
  },
  {
    name: "ဗွိုးဟိုင်း",
    file: "assets/musics/happytime/music3.mp3",
    duration: "ခွန်တကီးတဘဲ+ခွန်ထင်အောင်လင်း",
  },
  {
    name: "လွေꩻညာꩻဆောင်းတဆင်ႏလွုမ်",
    file: "assets/musics/happytime/music4.mp3",
    duration: "ခွန်ကော်လီ",
  },
  {
    name: "အုံပွေါႏနာꩻ",
    file: "assets/musics/happytime/music5.mp3",
    duration: "ခွန်မောဝ်ႏတန်+ခွန်ရှိန်း+ခွန်သိန်းဟန်",
  },
  {
    name: "မွိုး",
    file: "assets/musics/happytime/music6.mp3",
    duration: "ခွန်ပျူ",
  },
  {
    name: "မဲဉ်လꩻချာꩻငါႏ",
    file: "assets/musics/happytime/music7.mp3",
    duration: "အစွိုꩻ",
  },
  {
    name: "ခွေꩻယူႏတဖြောင်ꩻတဝ်း",
    file: "assets/musics/happytime/music8.mp3",
    duration: "အစွိုꩻ",
  },
  {
    name: "ရက်ꩻချာꩻဗဲင်းခွေꩻမွိုင်ꩻနင်ႏ",
    file: "assets/musics/happytime/music9.mp3",
    duration: "ခွန်ရှိန်း",
  },
  {
    name: "၁၈နိန်ႏလိုႏရွဲ",
    file: "assets/musics/happytime/music10.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "မူနမ်တန်",
    file: "assets/musics/happytime/music11.mp3",
    duration: "ခွန်နေအောင်",
  },
  {
    name: "နာꩻ ထိုꩻမား",
    file: "assets/musics/happytime/music12.mp3",
    duration: "ခွန်မောဝ်ႏတန်",
  },
  {
    name: "မို့ဦးရာသီႏ",
    file: "assets/musics/happytime/music13.mp3",
    duration: "ခွန်ဘစိန်",
  },
  {
    name: "ဒွေါဝ်ꩻ",
    file: "assets/musics/happytime/music14.mp3",
    duration: "အစွိုꩻ",
  },

  {
    name: "အွဥ်ႏဖိင်ꩻတꩻလꩻတဝ်း",
    file: "assets/musics/hlhaudios/music1.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "သဲင်ꩻလွဥ်ချာခမ်းမွိုင်",
    file: "assets/musics/hlhaudios/music2.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "ထွူလဲဥ်း",
    file: "assets/musics/hlhaudios/music3.mp3",
    duration: "ခွန်ကျော်စိုး",
  },
  {
    name: "ခံႏလွို့အသွုမ်",
    file: "assets/musics/hlhaudios/music4.mp3",
    duration: "ခွန်အောင်သိုက်",
  },
  {
    name: "ထောင်လွေꩻထဲင်း",
    file: "assets/musics/hlhaudios/music5.mp3",
    duration: "ခွန်တကီးတဘဲ",
  },
  {
    name: "ဆွိုးခန်းမွိုင်",
    file: "assets/musics/hlhaudios/music6.mp3",
    duration: "ကာတွန်းစွိုꩻ",
  },
  {
    name: "ယူးတွမ်ႏညော်ႏ",
    file: "assets/musics/hlhaudios/music7.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "နာꩻဖေႏကသေ",
    file: "assets/musics/hlhaudios/music8.mp3",
    duration: "ခွန်ကျော်စိုး",
  },
  {
    name: "အွဥ်ႏဖိင်ꩻ",
    file: "assets/musics/hlhaudios/music9.mp3",
    duration: "ခွန်အောင်သိုက်",
  },
  {
    name: "နီမွိုးပနမ်",
    file: "assets/musics/hlhaudios/music10.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "အတ္တ",
    file: "assets/musics/hlhaudios/music11.mp3",
    duration: "ခွန်တကီးတဘဲ",
  },
  {
    name: "လောကတရာꩻ",
    file: "assets/musics/hlhaudios/music12.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },

  {
    name: "ဗါး",
    file: "assets/musics/hnrtaudios/music1.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "ထွားနုဲင်းရုဲင်းတဝ်း",
    file: "assets/musics/hnrtaudios/music2.mp3",
    duration: "ခွန်ပျူ",
  },
  {
    name: "စွꩻခွင်ꩻဗဲင်းမွိုင်",
    file: "assets/musics/hnrtaudios/music3.mp3",
    duration: "ခွန်အောင်သိုက်",
  },
  {
    name: "အုံဟဝ်နေႏမွိုး",
    file: "assets/musics/hnrtaudios/music4.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "နားဟွိုန်ꩻ",
    file: "assets/musics/hnrtaudios/music5.mp3",
    duration: "ခွန်တကီးတဘဲ",
  },
  {
    name: "နာꩻဒေါ့ꩻ",
    file: "assets/musics/hnrtaudios/music6.mp3",
    duration: "ခွန်စောနိုင်",
  },
  {
    name: "အွဥ်ဝင်ꩻစွီꩻစူ",
    file: "assets/musics/hnrtaudios/music7.mp3",
    duration: "ခွန်ပျူ+နန်းမိုခမ်း",
  },
  {
    name: "အရက်ꩻသွတ်ꩻခွေꩻအလောင်း",
    file: "assets/musics/hnrtaudios/music8.mp3",
    duration: "ခွန်အောင်သိုက်",
  },
  {
    name: "နွန်ႏ",
    file: "assets/musics/hnrtaudios/music9.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "ရက်ꩻမွေးမွေးလဲဥ်းနာꩻ",
    file: "assets/musics/hnrtaudios/music10.mp3",
    duration: "ခွန်စောနိုင်",
  },
  {
    name: "တူနယ်တဲနယ်",
    file: "assets/musics/hnrtaudios/music11.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "အပဲစ်ꩻကင်ꩻထာꩻရက်ꩻ",
    file: "assets/musics/hnrtaudios/music12.mp3",
    duration: "ခွန်ကျော်စိုး",
  },
  {
    name: "နီဖာဗွေႏ",
    file: "assets/musics/hnrtaudios/music13.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "နာꩻထန်ႏထိုႏ",
    file: "assets/musics/hnrtaudios/music14.mp3",
    duration: "ခွန်ဇော်ခက်",
  },

  {
    name: "အရက်ꩻသွတ်ꩻ",
    file: "assets/musics/tdaudios/music1.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "မွိုးသောက",
    file: "assets/musics/tdaudios/music2.mp3",
    duration: "ခွန်ချို",
  },
  {
    name: "ဆာႏပေႏ",
    file: "assets/musics/tdaudios/music3.mp3",
    duration: "ခွန်ပျူ",
  },
  {
    name: "နင်ႏလိင်ႏလဲဥ်",
    file: "assets/musics/tdaudios/music4.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "ယူႏငါႏမွုန်းဒွုမ်",
    file: "assets/musics/tdaudios/music5.mp3",
    duration: "ခွန်ချို",
  },
  {
    name: "ဝါးပေꩻဗွါ",
    file: "assets/musics/tdaudios/music6.mp3",
    duration: "ခွန်ပျူ",
  },
  {
    name: "တဒွီ",
    file: "assets/musics/tdaudios/music7.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "သꩻရာႏတꩻခါꩻ",
    file: "assets/musics/tdaudios/music8.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "သွꩻမူႏ",
    file: "assets/musics/tdaudios/music9.mp3",
    duration: "ခွန်ချိူ",
  },
  {
    name: "ဒေါ့ꩻနွောဝ်ꩻမွုန်းခွေꩻ",
    file: "assets/musics/tdaudios/music10.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
  {
    name: "ယူႏလꩻခွင်ꩻ",
    file: "assets/musics/tdaudios/music11.mp3",
    duration: "ခွန်ပဒဲကော",
  },
  {
    name: "ဝေးမူႏ",
    file: "assets/musics/tdaudios/music12.mp3",
    duration: "ခွန်ပျူ",
  },
  {
    name: "ဖေႏမွုန်းအသွုမ်ꩻ",
    file: "assets/musics/tdaudios/music13.mp3",
    duration: "ကာတွန်းစွိုꩻ",
  },

  {
    name: "Track-1",
    file: "assets/musics/katochock/music1.mp3",
    duration: "Group",
  },
  {
    name: "Track-2",
    file: "assets/musics/katochock/music2.mp3",
    duration: "ခွန်ကော်လီ",
  },
  {
    name: "Track-3",
    file: "assets/musics/katochock/music3.mp3",
    duration: "ခွန်ဂျိမ်း",
  },
  {
    name: "Track-4",
    file: "assets/musics/katochock/music4.mp3",
    duration: "ခွန်ထင်အောင်လင်း+ခွန်ရှိန်း",
  },
  {
    name: "Track-5",
    file: "assets/musics/katochock/music7.mp3",
    duration: "Group",
  },
  {
    name: "Track-6",
    file: "assets/musics/katochock/music8.mp3",
    duration: "Group",
  },
  {
    name: "Track-7",
    file: "assets/musics/katochock/music9.mp3",
    duration: "ခွန်ရှိန်း",
  },
  {
    name: "Track-8",
    file: "assets/musics/katochock/music13.mp3",
    duration: "ခွန်ခွန်ကျော်ဦး",
  },
];

for (var i = 0; i < listAudio.length; i++) {
  createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index) {
  var player = document.querySelector("#source-audio");
  player.src = listAudio[index].file;
  document.querySelector(".titles").innerHTML =
    listAudio[index].name+ ' - ' + listAudio[index].duration;
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load();
  this.toggleAudio();
  this.updateStylePlaylist(this.indexAudio, index);
  this.indexAudio = index;
}
var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
  for (let i = 0; i < playListItems.length; i++) {
    if (playListItems[i] == event.target) {
      var clickedIndex = event.target.getAttribute("data-index");
      if (clickedIndex == this.indexAudio) {
        // alert('Same audio');
        this.toggleAudio();
      } else {
        loadNewTrack(clickedIndex);
      }
    }
  }
}

document.querySelector("#source-audio").src = listAudio[indexAudio].file;
document.querySelector(".titles").innerHTML =
  listAudio[indexAudio].name + ' - ' + listAudio[indexAudio].duration;

var currentAudio = document.getElementById("myAudio");

currentAudio.load();

currentAudio.onloadedmetadata = function () {
  document.getElementsByClassName("duration")[0].innerHTML = this.getMinutes(
    this.currentAudio.duration
  );
}.bind(this);

var interval1;

function toggleAudio() {
  if (this.currentAudio.paused) {
    document.querySelector("#icon-play").style.display = "none";
    document.querySelector("#icon-pause").style.display = "block";
    document
      .querySelector("#ptc-" + this.indexAudio)
      .classList.add("active-track");
    this.playToPause(this.indexAudio);
    this.currentAudio.play();
  } else {
    document.querySelector("#icon-play").style.display = "block";
    document.querySelector("#icon-pause").style.display = "none";
    this.pauseToPlay(this.indexAudio);
    this.currentAudio.pause();
  }
}

function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}

var timer = document.getElementsByClassName("timer")[0];

var barProgress = document.getElementById("myBar");

var width = 0;

function onTimeUpdate() {
  var t = this.currentAudio.currentTime;
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  if (this.currentAudio.ended) {
    document.querySelector("#icon-play").style.display = "block";
    document.querySelector("#icon-pause").style.display = "none";
    this.pauseToPlay(this.indexAudio);
    if (this.indexAudio < listAudio.length - 1) {
      var index = parseInt(this.indexAudio) + 1;
      this.loadNewTrack(index);
    }
  }
}

function setBarProgress() {
  var progress =
    (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
  document.getElementById("myBar").style.width = progress + "%";
}

function getMinutes(t) {
  var min = parseInt(parseInt(t) / 60);
  var sec = parseInt(t % 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return min + ":" + sec;
}

var progressbar = document.querySelector("#myProgress");
progressbar.addEventListener("click", seek.bind(this));

function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent * 100 + "%";
}

function next() {
  if (this.indexAudio < listAudio.length - 1) {
    var oldIndex = this.indexAudio;
    this.indexAudio++;
    updateStylePlaylist(oldIndex, this.indexAudio);
    this.loadNewTrack(this.indexAudio);
  }
}

function previous() {
  if (this.indexAudio > 0) {
    var oldIndex = this.indexAudio;
    this.indexAudio--;
    updateStylePlaylist(oldIndex, this.indexAudio);
    this.loadNewTrack(this.indexAudio);
  }
}

function updateStylePlaylist(oldIndex, newIndex) {
  document.querySelector("#ptc-" + oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector("#ptc-" + newIndex).classList.add("active-track");
  this.playToPause(newIndex);
}

function playToPause(index) {
  var ele = document.querySelector("#p-img-" + index);
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
  var ele = document.querySelector("#p-img-" + index);
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}

function forward() {
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5;
  this.setBarProgress();
}
function rewind() {
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5;
  this.setBarProgress();
}

function toggleMute() {
  var btnMute = document.querySelector("#toggleMute");
  var volUp = document.querySelector("#icon-vol-up");
  var volMute = document.querySelector("#icon-vol-mute");
  if (this.currentAudio.muted == false) {
    this.currentAudio.muted = true;
    volUp.style.display = "none";
    volMute.style.display = "block";
  } else {
    this.currentAudio.muted = false;
    volMute.style.display = "none";
    volUp.style.display = "block";
  }
}
