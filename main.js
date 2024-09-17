const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const product = document.querySelectorAll(".product");
  const H3 = document.querySelectorAll(".h3");
  const pname = document.getElementsByTagName("h6");

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h6")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        H3.forEach((h)=>{
          h.style.display = ''
        })
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
        H3.forEach((h)=>{
          h.style.display = 'none'
        })

      }
    }
  }
};

const tabs = document.querySelectorAll(".tab-btn");
const allContents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
tab.addEventListener("click", () => {
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
document.querySelector('#search-icon').addEventListener('click',()=>{
  document.querySelector('#search-item').focus()
})
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 6,
    },
  },
});

var swiper = new Swiper(".slide-container2", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
 
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 7,
    },
    1000: {
      slidesPerView: 10,
    },
  },
});
var swiper = new Swiper(".slide-container3", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
 
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


function createTrackItem(index, name, duration) {

  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div product");
  newDiv.setAttribute("id", "nd-" + index);
  document.querySelector(".playlist-ctn").appendChild(newDiv);

  var trackItem = document.createElement("div");
  trackItem.setAttribute("class", "playlist-track-ctn ");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector("#nd-"+index).appendChild(trackItem);

  let barBox = document.createElement('div')
    barBox.setAttribute('class','bar-box inactive')
    barBox.setAttribute('id','bb-'+index)
    document.querySelector('#nd-'+index).appendChild(barBox)

    let barImg = document.createElement('i')
    barImg.setAttribute('class','fas fa-bars bar-btn')
    barImg.setAttribute('width', '40')
    barImg.setAttribute('height', '40')
    barImg.setAttribute('id', 'bi-'+index)
    document.querySelector('#bb-'+index).appendChild(barImg)

  var songNum = document.createElement("div");
  songNum.setAttribute("class", "num-box");
  songNum.setAttribute("id", "s-num-" + index);
  songNum.textContent = (index + 1)+"."
  document.querySelector("#ptc-" + index).appendChild(songNum);

  var playBtnItem = document.createElement("div");
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement("i");
  btnImg.setAttribute("class", "fas fa-compact-disc inactive rotate");
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
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "ဆုတောင်ꩻနော",
    file: "assets/musics/aoaudios/music2.mp3",
    singer: "ခွန်ချို",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "တဖြာꩻတွမ်ႏတဖြာꩻ",
    file: "assets/musics/aoaudios/music3.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "အောဝ်ႏကော့ꩻမွောင်ꩻ",
    file: "assets/musics/aoaudios/music4.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "သေနာႏလဲဥ်း",
    file: "assets/musics/aoaudios/music5.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "အောဝ်ႏ",
    file: "assets/musics/aoaudios/music6.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "လဲဥ်ꩻထိုႏမွန်းခွေꩻ",
    file: "assets/musics/aoaudios/music7.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "တဥ်ႏခွေါင်ဒျာႏနော်",
    file: "assets/musics/aoaudios/music8.mp3",
    singer: "ခွန်ဝဒုတ်",
    profile:"assets/images/mimgs/kwd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "အွဥ်ႏဖိင်ꩻခန်း ",
    file: "assets/musics/aoaudios/music9.mp3",
    singer: "ခွန်ချိူ",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ပဒဲကော ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "မွိုက်လွေꩻဟိုင်း",
    file: "assets/musics/aoaudios/music10.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ကျော်စိုး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "ကမ်းဒျာႏနာꩻသꩻ",
    file: "assets/musics/aoaudios/music11.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "မဲ့ꩻခွေꩻလွဥ်ꩻယန်း",
    file: "assets/musics/aoaudios/music12.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },
  {
    name: "နာꩻထန်ႏထိုꩻ",
    file: "assets/musics/aoaudios/music13.mp3",
    singer: "ခွန်ဇော်ခက်",
    profile:"assets/images/mimgs/kzk.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"ao.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
  },

  {
    name: "စာႏနာႏဖေႏ လာမဲင်းပေꩻ",
    file: "assets/musics/happytime/music1.mp3",
    singer: "ခွန်ရှိန်း+ခွန်ဆန်းလေး",
    profile:"assets/images/mimgs/kck.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    file: "assets/musics/happytime/music2.mp3",
    singer: "ခွန်ကျော်သိန်း(ABC)+ခွန်သိန်းဟန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဗွိုးဟိုင်း",
    file: "assets/musics/happytime/music3.mp3",
    singer: "ခွန်တကီးတဘဲ+ခွန်ထင်အောင်လင်း",
    profile:"assets/images/mimgs/khal.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "လွေꩻညာꩻဆောင်းတဆင်ႏလွုမ်",
    file: "assets/musics/happytime/music4.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "အုံပွေါႏနာꩻ",
    file: "assets/musics/happytime/music5.mp3",
    singer: "ခွန်မောဝ်ႏတန်+ခွန်ရှိန်း+ခွန်သိန်းဟန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "မွိုး",
    file: "assets/musics/happytime/music6.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "မဲဉ်လꩻချာꩻငါႏ အပဲစ်ကင်လိုပေဖဝ",
    file: "assets/musics/happytime/music7.mp3",
    singer: "အစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - အစွိုꩻ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ခွေꩻယူႏတဖြောင်ꩻတဝ်း",
    file: "assets/musics/happytime/music8.mp3",
    singer: "အစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - အစွိုꩻ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ရက်ꩻချာꩻဗဲင်းခွေꩻမွိုင်ꩻနင်ႏ",
    file: "assets/musics/happytime/music9.mp3",
    singer: "ခွန်ရှိန်း",
    profile:"assets/images/mimgs/kck.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "၁၈နိန်ႏလိုႏရွဲ",
    file: "assets/musics/happytime/music10.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "မူနမ်တန်",
    file: "assets/musics/happytime/music11.mp3",
    singer: "ခွန်နေအောင်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "နာꩻ ထိုꩻမား",
    file: "assets/musics/happytime/music12.mp3",
    singer: "ခွန်မောဝ်ႏတန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "မို့ဦးရာသီႏ",
    file: "assets/musics/happytime/music13.mp3",
    singer: "ခွန်ဘစိန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဒွေါဝ်ꩻ",
    file: "assets/musics/happytime/music14.mp3",
    singer: "အစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - အစွိုꩻ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happytime.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },

  {
    name: "အွဥ်ႏဖိင်ꩻတꩻလꩻတဝ်း",
    file: "assets/musics/hlhaudios/music1.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "သဲင်ꩻလွဥ်ချာခမ်းမွိုင်",
    file: "assets/musics/hlhaudios/music2.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "ထွူလဲဥ်း",
    file: "assets/musics/hlhaudios/music3.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ကျော်စိုး",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name:"ခံႏလွို့အသွုမ်",
    file:"assets/musics/hlhaudios/music4.mp3",
    singer:"ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.jpg",
    writer:"Composer - ခွန်အောင်သိုက်",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "ထောင်လွေꩻထဲင်း",
    file: "assets/musics/hlhaudios/music5.mp3",
    singer: "ခွန်တကီးတဘဲ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "ဆွိုးခန်းမွိုင်",
    file: "assets/musics/hlhaudios/music6.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "ယူးတွမ်ႏညော်ႏ",
    file: "assets/musics/hlhaudios/music7.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "နာꩻဖေႏကသေ",
    file: "assets/musics/hlhaudios/music8.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "အွဥ်ႏဖိင်ꩻ",
    file: "assets/musics/hlhaudios/music9.mp3",
    singer: "ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.jpg",
    writer:"Composer - ခွန်အောင်သိုက်",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "နီမွိုးပနမ်",
    file: "assets/musics/hlhaudios/music10.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "အတ္တ",
    file: "assets/musics/hlhaudios/music11.mp3",
    singer: "ခွန်တကီးတဘဲ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },
  {
    name: "လောကတရာꩻ",
    file: "assets/musics/hlhaudios/music12.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ကျော်ခမ်း",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlh.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
  },

  {
    name: "ဗါး",
    file: "assets/musics/hnrtaudios/music1.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "ထွားနုဲင်းရုဲင်းတဝ်း",
    file: "assets/musics/hnrtaudios/music2.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်တင်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "စွꩻခွင်ꩻဗဲင်းမွိုင်",
    file: "assets/musics/hnrtaudios/music3.mp3",
    singer: "ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.jpg",
    writer:"Composer - ခွန်ဇိုလ်",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "အုံဟဝ်နေႏမွိုး",
    file: "assets/musics/hnrtaudios/music4.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "နားဟွိုန်ꩻ",
    file: "assets/musics/hnrtaudios/music5.mp3",
    singer: "ခွန်တကီးတဘဲ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "နာꩻဒေါ့ꩻ",
    file: "assets/musics/hnrtaudios/music6.mp3",
    singer: "ခွန်စောနိုင်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "အွဥ်ဝင်ꩻစွီꩻစူ",
    file: "assets/musics/hnrtaudios/music7.mp3",
    singer: "ခွန်ပျူ+နန်းမိုခမ်း",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "အရက်ꩻသွတ်ꩻခွေꩻအလောင်း",
    file: "assets/musics/hnrtaudios/music8.mp3",
    singer: "ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.jpg",
    writer:"Composer - ခွန်အောင်သိုက်",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "နွန်ႏ",
    file: "assets/musics/hnrtaudios/music9.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "ရက်ꩻမွေးမွေးလဲဥ်းနာꩻ",
    file: "assets/musics/hnrtaudios/music10.mp3",
    singer: "ခွန်စောနိုင်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ဇေလတ်",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "တူနယ်တဲနယ်",
    file: "assets/musics/hnrtaudios/music11.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "အပဲစ်ꩻကင်ꩻထာꩻရက်ꩻ",
    file: "assets/musics/hnrtaudios/music12.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ကျော်စိုး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "နီဖာဗွေႏ",
    file: "assets/musics/hnrtaudios/music13.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },
  {
    name: "နာꩻထန်ႏထိုႏ",
    file: "assets/musics/hnrtaudios/music14.mp3",
    singer: "ခွန်ဇော်ခက်",
    profile:"assets/images/mimgs/kzk.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrt.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
  },

  {
    name: "အရက်ꩻသွတ်ꩻ",
    file: "assets/musics/tdaudios/music1.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "မွိုးသောက",
    file: "assets/musics/tdaudios/music2.mp3",
    singer: "ခွန်ချို",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဆာႏပေႏ",
    file: "assets/musics/tdaudios/music3.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "နင်ႏလိင်ႏလဲဥ်",
    file: "assets/musics/tdaudios/music4.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ယူႏငါႏမွုန်းဒွုမ်",
    file: "assets/musics/tdaudios/music5.mp3",
    singer: "ခွန်ချို",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဝါးပေꩻဗွါ",
    file: "assets/musics/tdaudios/music6.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "တဒွီ",
    file: "assets/musics/tdaudios/music7.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "သꩻရာႏတꩻခါꩻ",
    file: "assets/musics/tdaudios/music8.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "သွꩻမူႏ",
    file: "assets/musics/tdaudios/music9.mp3",
    singer: "ခွန်ချိူ",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ပျူ ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဒေါ့ꩻနွောဝ်ꩻမွုန်းခွေꩻ",
    file: "assets/musics/tdaudios/music10.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ယူႏလꩻခွင်ꩻ",
    file: "assets/musics/tdaudios/music11.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဝေးမူႏ",
    file: "assets/musics/tdaudios/music12.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },
  {
    name: "ဖေႏမွုန်းအသွုမ်ꩻ",
    file: "assets/musics/tdaudios/music13.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"td.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
  },

  {
    name: "ကာတွန်းစွိုꩻ",
    file: "assets/musics/katochock/music1.mp3",
    singer: "Group",
    profile:"assets/images/mimgs/cover6.jpg",
    writer:"Composer - ကာတွန်းစွိုꩻ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "Track-2",
    file: "assets/musics/katochock/music2.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "လွꩻထီႏငါႏလဲဉ်းနာꩻ",
    file: "assets/musics/katochock/music3.mp3",
    singer: "ခွန်ဂျိမ်း",
    profile:"assets/images/mimgs/kj.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "မဲဉ်လꩻချာꩻငါႏ",
    file: "assets/musics/katochock/music4.mp3",
    singer: "ခွန်ထင်အောင်လင်း+ခွန်ရှိန်း",
    profile:"assets/images/mimgs/khal.jpg",
    writer:"Composer - ခွန်ရှိန်း+ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "ကတွူဆွော့မွုန်းဒွုမ်နင်",
    file: "assets/musics/katochock/music7.mp3",
    singer: "Group",
    profile:"assets/images/mimgs/cover6.jpg",
    writer:"Composer - ခွန်ရှိန်း+ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "ထာရုပ်ကော်",
    file: "assets/musics/katochock/music8.mp3",
    singer: "Group",
    profile:"assets/images/mimgs/cover6.jpg",
    writer:"Composer - ခွန်ရှိန်း+ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "စွယ်ငါလဲဉ်းနာ",
    file: "assets/musics/katochock/music9.mp3",
    singer: "ခွန်ရှိန်း",
    profile:"assets/images/mimgs/kck.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
  {
    name: "Track-8",
    file: "assets/musics/katochock/music13.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoo.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
  },
];

for (var i = 0; i < listAudio.length; i++) {
  createTrackItem(i, listAudio[i].name, listAudio[i].singer);
}
var indexAudio = 0;

function loadNewTrack(index) {
  var player = document.querySelector("#source-audio");
  player.src = listAudio[index].file;
  document.querySelector(".titles").innerHTML =
  listAudio[index].name;
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
  document.querySelector('#search-item').value = ''
  for (let i = 0; i < playListItems.length; i++) {
    document.querySelector('.none-block').style.display = 'block'
    if (playListItems[i] == event.target) {
      var clickedIndex = event.target.getAttribute("data-index");
      var barBoxs = document.querySelectorAll('.bar-box')
           barBoxs[i].classList.remove('inactive')
      if (clickedIndex == this.indexAudio) {
        // alert('Same audio');
        this.toggleAudio();
      } else {
        loadNewTrack(clickedIndex);
      }
    }
  }
}

var barsBtn = document.querySelectorAll('.bar-box');
for(let i=0; i<barsBtn.length; i++){
    barsBtn[i].addEventListener('click',()=>{
      document.querySelector('.songs-mainctn').classList.add('inactive')
      document.querySelector('.replace-ctn').classList.remove('inactive')
      document.querySelector('.prev-box').classList.add('inactive')
      document.querySelector('.next-box').classList.add('inactive')
      document.querySelector('.shullfe-box').classList.remove('inactive')
      document.querySelector('.repeat-box').classList.remove('inactive')

      document.querySelector('.song-header').innerHTML = listAudio[i].name;
      document.querySelector('.writer-header').innerHTML = listAudio[i].writer;
      document.querySelector('.album-header').innerHTML = listAudio[i].album;
      document.querySelector('.album-url').href = listAudio[i].albuml_url;
      document.querySelector(' .band-header').innerHTML = listAudio[i].band
      document.querySelector('.band-url').href = listAudio[i].band_url;
      document.querySelector('.date-header').innerHTML = listAudio[i].date
      document.querySelector('.replace-imagebox').style.backgroundImage = "url("+listAudio[i].profile+")"
    })
}

document.querySelector('.replace-arrow').addEventListener('click',()=>{

    document.querySelector('.replace-ctn').classList.add('inactive')
    document.querySelector('.songs-mainctn').classList.remove('inactive')
    document.querySelector('.shullfe-box').classList.add('inactive')
        document.querySelector('.repeat-box').classList.add('inactive')
        document.querySelector('.prev-box').classList.remove('inactive')
        document.querySelector('.next-box').classList.remove('inactive')
})

document.querySelector("#source-audio").src = listAudio[indexAudio].file;
document.querySelector(".titles").innerHTML =listAudio[indexAudio].singer;

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
      .querySelector("#nd-" + this.indexAudio)
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
  document.querySelector("#bb-" + oldIndex).classList.add("inactive");
  document.querySelector("#bb-" + newIndex).classList.remove("inactive");
  document.querySelector("#nd-" + oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector("#nd-" + newIndex).classList.add("active-track");
  this.playToPause(newIndex);
}

function playToPause(index) {
  var ele = document.querySelector("#pbp-" + index);
  var songNum = document.querySelector("#s-num-" + index);
  ele.style.display = 'block'
  songNum.style.display = 'none'
}

function pauseToPlay(index) {
  var ele = document.querySelector("#pbp-" + index);
  var songNum = document.querySelector("#s-num-" + index);
  ele.style.display = 'none'
  songNum.style.display = 'block'
}

function forward() {
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5;
  this.setBarProgress();
}
function rewind() {
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5;
  this.setBarProgress();
}
let isRandom = false
      function shullfe() {
        isRandom ? pauseRandom() : playRandom();
      }
      function playRandom() {
        isRandom = true;
        document.querySelector('#btn-shuffle').style.color = 'red'
      }
      function pauseRandom() {
        isRandom = false;
        document.querySelector('#btn-shuffle').style.color = 'black'
      }
      
      let isLoop = false;
      function repeat() {
        pauseRandom();
        if (this.currentAudio.loop != true && this.currentAudio.play()) {
          this.currentAudio.loop = true;
          this.currentAudio.play();
          document.querySelector(".re-icon").style.display = "none";
          document.querySelector(".once-icon").style.display = "block";
        } else {
          this.currentAudio.loop = false;
          document.querySelector(".re-icon").style.display = "block";
          document.querySelector(".once-icon").style.display = "none";
        }
      }

function toggleMute() {
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
