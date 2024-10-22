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
document.querySelector('.glass').addEventListener('click',()=>{
  document.querySelector('input').focus()
});
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
      slidesPerView: 6,
    },
    1000: {
      slidesPerView: 9,
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


function createTrackItem(index, name, writer) {

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
  trackDurationItem.innerHTML = writer;
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
  
  var h6 = document.createElement("h6");
  h6.innerHTML = `${name}${writer}`;
  document.querySelector("#ptc-" + index).appendChild(h6);
}

var listAudio = [
  {
    
    id:1 ,
    name: "မင်္ဂလာႏဒျာႏဗွေႏဩ",
    file: "assets/musics/aoaudios/မင်္ဂလာႏဒျာႏဗွေႏဩ.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    
    id:2 ,
    name: "ဆုတောင်ꩻနော",
    file: "assets/musics/aoaudios/ဆုတောင်ꩻနော.mp3",
    singer: "ခွန်ချို",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:3 ,
    name: "တဖြာꩻတွမ်ႏတဖြာꩻ",
    file: "assets/musics/aoaudios/တဖြာꩻတွမ်ႏတဖြာꩻ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:4 ,
    name: "အောဝ်ႏကော့ꩻမွောင်ꩻ",
    file: "assets/musics/aoaudios/အောဝ်ႏကော့ꩻမွောင်ꩻ.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:5 ,
    name: "သေနာႏလဲဥ်း",
    file: "assets/musics/aoaudios/သေနာႏလဲဥ်း.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:6 ,
    name: "အောဝ်ႏ",
    file: "assets/musics/aoaudios/အောဝ်ႏ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:7 ,
    name: "လဲဥ်ꩻထိုႏမွန်းခွေꩻ",
    file: "assets/musics/aoaudios/လဲဥ်ꩻထိုႏမွန်းခွေꩻ.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:8,
    name: "တဥ်ႏခွေါင်ဒျာႏနော်",
    file: "assets/musics/aoaudios/တဥ်ႏခွေါင်ဒျာႏနော်.mp3",
    singer: "ခွန်ဝဒုတ်",
    profile:"assets/images/mimgs/kwd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:9 ,
    name: "အွဥ်ႏဖိင်ꩻခန်း ",
    file: "assets/musics/aoaudios/အွဥ်ႏဖိင်ꩻခန်း.mp3",
    singer: "ခွန်ချိူ",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ပဒဲကော ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:10 ,
    name: "မွိုက်လွေꩻဟိုင်း",
    file: "assets/musics/aoaudios/မွိုက်လွေꩻဟိုင်း.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ကျော်စိုး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:11 ,
    name: "ကမ်းဒျာႏနာꩻသꩻ",
    file: "assets/musics/aoaudios/ကမ်းဒျာႏနာꩻသꩻ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:12 ,
    name: "မဲ့ꩻခွေꩻလွဥ်ꩻယန်း",
    file: "assets/musics/aoaudios/မဲ့ꩻခွေꩻလွဥ်ꩻယန်း.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },
  {
    id:13 ,
    name: "နာꩻထန်ႏထိုꩻ",
    file: "assets/musics/aoaudios/နာꩻထန်ႏထိုꩻ.mp3",
    singer: "ခွန်ဇော်ခက်",
    profile:"assets/images/mimgs/kzk.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - အောဝ်ႏ",
    albuml_url:"aomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2013",
    cover:"assets/images/mimgs/cover3.jpg",
  },

  {
    id:14 ,
    name: "စာႏနာႏဖေႏ လာမဲင်းပေꩻ",
    file: "assets/musics/happytime/စာႏနာႏဖေႏ လာမဲင်းပေꩻ.mp3",
    singer: "ခွန်ရှိန်း+ခွန်ဆန်းလေး",
    profile:"assets/images/mimgs/kck.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:15 ,
    name: "အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    file: "assets/musics/happytime/အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ.mp3",
    singer: "ခွန်ကျော်သိန်း(ABC)+ခွန်သိန်းဟန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:16 ,
    name: "ဗွိုးဟိုင်း",
    file: "assets/musics/happytime/ဗွိုးဟိုင်း.mp3",
    singer: "ခွန်တကီးတဘဲ+ခွန်ထင်အောင်လင်း",
    profile:"assets/images/mimgs/khal.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:17 ,
    name: "လွေꩻညာꩻဆောင်းတဆင်ႏလွုမ်",
    file: "assets/musics/happytime/လွေꩻညာꩻဆောင်းတဆင်ႏလွုမ်.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:18 ,
    name: "အုံပွေါႏနာꩻ",
    file: "assets/musics/happytime/အုံပွေါႏနာꩻ.mp3",
    singer: "ခွန်မောဝ်ႏတန်+ခွန်ရှိန်း+ခွန်သိန်းဟန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:19 ,
    name: "မွိုး",
    file: "assets/musics/happytime/မွိုး.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:20 ,
    name: "မဲဉ်လꩻချာꩻငါႏ အပဲစ်ကင်လိုပေဖဝ",
    file: "assets/musics/happytime/မဲဉ်လꩻချာꩻငါႏ အပဲစ်ကင်လိုပေဖဝ.mp3",
    singer: "အစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - အစွိုꩻ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:21 ,
    name: "ခွေꩻယူႏတဖြောင်ꩻတဝ်း",
    file: "assets/musics/happytime/ခွေꩻယူႏတဖြောင်ꩻတဝ်း.mp3",
    singer: "အစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - အစွိုꩻ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:22 ,
    name: "ရက်ꩻချာꩻဗဲင်းခွေꩻမွိုင်ꩻနင်ႏ",
    file: "assets/musics/happytime/ရက်ꩻချာꩻဗဲင်းခွေꩻမွိုင်ꩻနင်ႏ.mp3",
    singer: "ခွန်ရှိန်း",
    profile:"assets/images/mimgs/kck.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:23 ,
    name: "၁၈နိန်ႏလိုႏရွဲ",
    file: "assets/musics/happytime/၁၈နိန်ႏလိုႏရွဲ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:24 ,
    name: "မူနမ်တန်",
    file: "assets/musics/happytime/မူနမ်တန်.mp3",
    singer: "ခွန်နေအောင်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:25 ,
    name: "နာꩻ ထိုꩻမား",
    file: "assets/musics/happytime/နာꩻ ထိုꩻမား.mp3",
    singer: "ခွန်မောဝ်ႏတန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:26 ,
    name: "မို့ဦးရာသီႏ",
    file: "assets/musics/happytime/မို့ဦးရာသီႏ.mp3",
    singer: "ခွန်ဘစိန်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },
  {
    id:27 ,
    name: "ဒွေါဝ်ꩻ",
    file: "assets/musics/happytime/ဒွေါဝ်ꩻ.mp3",
    singer: "အစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - အစွိုꩻ",
    album:"Album - အပျော်ႏသွတ်ꩻအခိန်ႏ အပျော်ႏသွတ်ꩻဖꩻဝ",
    albuml_url:"happymusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/logo.jpg",
  },

  {
    id:28 ,
    name: "အွဥ်ႏဖိင်ꩻတꩻလꩻတဝ်း",
    file: "assets/musics/hlhaudios/အွဥ်ႏဖိင်ꩻတꩻလꩻတဝ်း.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id: 29,
    name: "သဲင်ꩻလွဥ်ချာခမ်းမွိုင်",
    file: "assets/musics/hlhaudios/သဲင်ꩻလွဥ်ချာခမ်းမွိုင်.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:30 ,
    name: "ထွူလဲဥ်း",
    file: "assets/musics/hlhaudios/ထွူလဲဥ်း.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ကျော်စိုး",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:31 ,
    name:"ခံႏလွို့အသွုမ်",
    file:"assets/musics/hlhaudios/ခံႏလွို့အသွုမ်.mp3",
    singer:"ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.JPG",
    writer:"Composer - ခွန်အောင်သိုက်",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:32 ,
    name: "ထောင်လွေꩻထဲင်း",
    file: "assets/musics/hlhaudios/ထောင်လွေꩻထဲင်း.mp3",
    singer: "ခွန်တကီးတဘဲ",
    profile:"assets/images/mimgs/kkb.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:33 ,
    name: "ဆွိုးခန်းမွိုင်",
    file: "assets/musics/hlhaudios/ဆွိုးခန်းမွိုင်.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:34 ,
    name: "ယူးတွမ်ႏညော်ႏ",
    file: "assets/musics/hlhaudios/ယူးတွမ်ႏညော်ႏ.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:35 ,
    name: "နာꩻဖေႏကသေ",
    file: "assets/musics/hlhaudios/နာꩻဖေႏကသေ.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:36 ,
    name: "အွဥ်ႏဖိင်ꩻ",
    file: "assets/musics/hlhaudios/အွဥ်ႏဖိင်ꩻ.mp3",
    singer: "ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.JPG",
    writer:"Composer - ခွန်အောင်သိုက်",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:37 ,
    name: "နီမွိုးပနမ်",
    file: "assets/musics/hlhaudios/နီမွိုးပနမ်.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:38 ,
    name: "အတ္တ",
    file: "assets/musics/hlhaudios/အတ္တ.mp3",
    singer: "ခွန်တကီးတဘဲ",
    profile:"assets/images/mimgs/kkb.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },
  {
    id:39 ,
    name: "လောကတရာꩻ",
    file: "assets/musics/hlhaudios/လောကတရာꩻ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ကျော်ခမ်း",
    album:"Album - ထောင်လွေထဲင်း",
    albuml_url:"hlhmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2019",
    cover:"assets/images/mimgs/cover2.jpg",
  },

  {
    id:40 ,
    name: "ဗါး",
    file: "assets/musics/hnrtaudios/ဗါး.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:41 ,
    name: "ထွားနုဲင်းရုဲင်းတဝ်း",
    file: "assets/musics/hnrtaudios/ထွားနုဲင်းရုဲင်းတဝ်း.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်တင်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:42 ,
    name: "စွꩻခွင်ꩻဗဲင်းမွိုင်",
    file: "assets/musics/hnrtaudios/စွꩻခွင်ꩻဗဲင်းမွိုင်.mp3",
    singer: "ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.JPG",
    writer:"Composer - ခွန်ဇိုလ်",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:43 ,
    name: "အုံဟဝ်နေႏမွိုး",
    file: "assets/musics/hnrtaudios/အုံဟဝ်နေႏမွိုး.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:44 ,
    name: "နားဟွိုန်ꩻ",
    file: "assets/musics/hnrtaudios/နားဟွိုန်ꩻ.mp3",
    singer: "ခွန်တကီးတဘဲ",
    profile:"assets/images/mimgs/kkb.jpg",
    writer:"Composer - ခွန်တကီးတဘဲ",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:45 ,
    name: "နာꩻဒေါ့ꩻ",
    file: "assets/musics/hnrtaudios/နာꩻဒေါ့ꩻ.mp3",
    singer: "ခွန်စောနိုင်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:46 ,
    name: "အွဥ်ဝင်ꩻစွီꩻစူ",
    file: "assets/musics/hnrtaudios/အွဥ်ဝင်ꩻစွီꩻစူ.mp3",
    singer: "ခွန်ပျူ+နန်းမိုခမ်း",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:47 ,
    name: "အရက်ꩻသွတ်ꩻခွေꩻအလောင်း",
    file: "assets/musics/hnrtaudios/အရက်ꩻသွတ်ꩻခွေꩻအလောင်း.mp3",
    singer: "ခွန်အောင်သိုက်",
    profile:"assets/images/mimgs/kat.JPG",
    writer:"Composer - ခွန်အောင်သိုက်",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:48 ,
    name: "နွန်ႏ",
    file: "assets/musics/hnrtaudios/နွန်ႏ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:49 ,
    name: "ရက်ꩻမွေးမွေးလဲဥ်းနာꩻ",
    file: "assets/musics/hnrtaudios/ရက်ꩻမွေးမွေးလဲဥ်းနာꩻ.mp3",
    singer: "ခွန်စောနိုင်",
    profile:"assets/images/mimgs/logo.jpg",
    writer:"Composer - ခွန်ဇေလတ်",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:50 ,
    name: "တူနယ်တဲနယ်",
    file: "assets/musics/hnrtaudios/တူနယ်တဲနယ်.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:51 ,
    name: "အပဲစ်ꩻကင်ꩻထာꩻရက်ꩻ",
    file: "assets/musics/hnrtaudios/အပဲစ်ꩻကင်ꩻထာꩻရက်ꩻ.mp3",
    singer: "ခွန်ကျော်စိုး",
    profile:"assets/images/mimgs/kks.jpg",
    writer:"Composer - ခွန်ကျော်စိုး",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:52 ,
    name: "နီဖာဗွေႏ",
    file: "assets/musics/hnrtaudios/နီဖာဗွေႏ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },
  {
    id:53 ,
    name: "နာꩻထန်ႏထိုႏ",
    file: "assets/musics/hnrtaudios/နာꩻထန်ႏထိုႏ.mp3",
    singer: "ခွန်ဇော်ခက်",
    profile:"assets/images/mimgs/kzk.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - ထွားနုဲင်းရုဲင်းတဝ်း",
    albuml_url:"hnrtmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2022",
    cover:"assets/images/mimgs/cover1.jpg",
  },

  {
    id:54 ,
    name: "အရက်ꩻသွတ်ꩻ",
    file: "assets/musics/tdaudios/အရက်ꩻသွတ်ꩻ.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:55 ,
    name: "မွိုးသောက",
    file: "assets/musics/tdaudios/မွိုးသောက.mp3",
    singer: "ခွန်ချို",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:56 ,
    name: "ဆာႏပေႏ",
    file: "assets/musics/tdaudios/ဆာႏပေႏ.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:57 ,
    name: "နင်ႏလိင်ႏလဲဥ်",
    file: "assets/musics/tdaudios/နင်ႏလိင်ႏလဲဥ်.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ပဒဲကော",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:58 ,
    name: "ယူႏငါႏမွုန်းဒွုမ်",
    file: "assets/musics/tdaudios/ယူႏငါႏမွုန်းဒွုမ်.mp3",
    singer: "ခွန်ချို",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:59 ,
    name: "ဝါးပေꩻဗွါ",
    file: "assets/musics/tdaudios/ဝါးပေꩻဗွါ.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:60 ,
    name: "တဒွီ",
    file: "assets/musics/tdaudios/တဒွီ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:61 ,
    name: "သꩻရာႏတꩻခါꩻ",
    file: "assets/musics/tdaudios/သꩻရာႏတꩻခါꩻ.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:62 ,
    name: "သွꩻမူႏ",
    file: "assets/musics/tdaudios/သွꩻမူႏ.mp3",
    singer: "ခွန်ချိူ",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ပျူ ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:63 ,
    name: "ဒေါ့ꩻနွောဝ်ꩻမွုန်းခွေꩻ",
    file: "assets/musics/tdaudios/ဒေါ့ꩻနွောဝ်ꩻမွုန်းခွေꩻ.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:64 ,
    name: "ယူႏလꩻခွင်ꩻ",
    file: "assets/musics/tdaudios/ယူႏလꩻခွင်ꩻ.mp3",
    singer: "ခွန်ပဒဲကော",
    profile:"assets/images/mimgs/kpd.jpg",
    writer:"Composer - ခွန်တင်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:65 ,
    name: "ဝေးမူႏ",
    file: "assets/musics/tdaudios/ဝေးမူႏ.mp3",
    singer: "ခွန်ပျူ",
    profile:"assets/images/mimgs/kp.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },
  {
    id:66 ,
    name: "ဖေႏမွုန်းအသွုမ်ꩻ",
    file: "assets/musics/tdaudios/ဖေႏမွုန်းအသွုမ်ꩻ.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/kc.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး ",
    album:"Album - တဒွီ",
    albuml_url:"tdmusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2009",
    cover:"assets/images/mimgs/cover4.jpg",
  },

  {
    id:67 ,
    name: "ကာတွန်းစွိုꩻ",
    file: "assets/musics/katochock/ကာတွန်းစွိုꩻ.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/cover6.jpg",
    writer:"Composer - ကာတွန်းစွိုꩻ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:68 ,
    name: "မဲဉ်သေꩻငါႏ",
    file: "assets/musics/katochock/မဲဉ်သေꩻငါႏ.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:69 ,
    name: "လွꩻထီႏငါႏလဲဉ်းနာꩻ",
    file: "assets/musics/katochock/လွꩻထီႏငါႏလဲဉ်းနာꩻ.mp3",
    singer: "ခွန်ဂျိမ်း",
    profile:"assets/images/mimgs/kj.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:70 ,
    name: "မဲဉ်လꩻချာꩻငါႏ",
    file: "assets/musics/katochock/မဲဉ်လꩻချာꩻငါႏ.mp3",
    singer: "ခွန်ထင်အောင်လင်း+ခွန်ရှိန်း",
    profile:"assets/images/mimgs/khal.jpg",
    writer:"Composer - ခွန်ရှိန်း+ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:71 ,
    name: "ကꩻတွူႏဆွော့ꩻမွုန်းဒွုမ်နင်ꩻ",
    file: "assets/musics/katochock/ကတွူဆွော့မွုန်းဒွုမ်နင်.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/cover6.jpg",
    writer:"Composer - ခွန်ရှိန်း+ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်ꩻ",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:72 ,
    name: "ထာရုပ်ကော်ႏ",
    file: "assets/musics/katochock/ထာရုပ်ကော်.mp3",
    singer: "ကာတွန်းစွိုꩻ",
    profile:"assets/images/mimgs/cover6.jpg",
    writer:"Composer - ခွန်ရှိန်း+ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်ꩻ",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:73 ,
    name: "စွယ်ꩻငါႏလဲဉ်းနာꩻ",
    file: "assets/musics/katochock/စွယ်ငါလဲဉ်းနာ.mp3",
    singer: "ခွန်ရှိန်း",
    profile:"assets/images/mimgs/kck.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်ꩻ",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:74 ,
    name: "ခွေꩻအရက်ꩻသွတ်ꩻ နင်ꩻ",
    file: "assets/musics/katochock/ခွေအရက်သွတ် နင်.mp3",
    singer: "ခွန်ကော်လီ",
    profile:"assets/images/mimgs/kkl.jpg",
    writer:"Composer - ခွန်ကော်လီ",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်ꩻ",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:75 ,
    name: "ဖဗါႏလဲဉ်းဝင်ꩻ",
    file: "assets/musics/katochock/ဖဗါးလဲဉ်းဝင်.mp3",
    singer: "ခွန်ကျော်သိန်း",
    profile:"assets/images/mimgs/kkt.jpg",
    writer:"Composer - ခွန်ရှိန်း",
    album:"Album - ကတွူဆွော့ꩻမွုန်းဒွုမ်နင်ꩻ",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
  {
    id:76 ,
    name: "အခိန်ႏအဝ်ႏနေဒွုန်းက",
    file: "assets/musics/katochock/အခိန်ႏအဝ်ႏနေဒွုန်းက.mp3",
    singer: "ခွန်ခွန်ကျော်ဦး",
    profile:"assets/images/mimgs/kko.jpg",
    writer:"Composer - ခွန်ခွန်ကျော်ဦး",
    album:"Album - ကတွူဆွော့မွုန်းဒွုမ်နင်ꩻ",
    albuml_url:"katoomusiclist.html",
    band:"Band - ကာတွန်းစွိုꩻ",
    band_url:"cartoonTgi.html",
    date:"Released - 2005",
    cover:"assets/images/mimgs/cover6.jpg",
  },
];

for (var i = 0; i < listAudio.length; i++) {
  createTrackItem(i, listAudio[i].name, listAudio[i].singer);
}
var indexAudio = 0;

function loadNewTrack(index) {
  var player = document.querySelector("#source-audio");
  var Index = Math.floor(index)+ 1 + '.  '
  player.src = listAudio[index].file;
  document.querySelector(".titles").textContent = Index + listAudio[index].name;
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load();
  this.toggleAudio();
  this.updateStylePlaylist(this.indexAudio, index);
  this.indexAudio = index;
  subDetails()
}
var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
  currentSong.pause()
  document.querySelector('.cover-box').classList.remove('rotate')
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
const subDetails = ()=>{
      document.querySelector('.song-header').innerHTML = listAudio[indexAudio].name;
      document.querySelector('.writer-header').innerHTML = listAudio[indexAudio].writer;
      document.querySelector('.album-header').innerHTML = listAudio[indexAudio].album;
      document.querySelector('.album-url').href = listAudio[indexAudio].albuml_url;
      document.querySelector(' .band-header').innerHTML = listAudio[indexAudio].band
      document.querySelector('.band-url').href = listAudio[indexAudio].band_url;
      document.querySelector('.download').href = listAudio[indexAudio].file;
      document.querySelector('.download').download = listAudio[indexAudio].name;
      document.querySelector('.date-header').innerHTML = listAudio[indexAudio].date
      document.querySelector('.replace-imagebox').style.backgroundImage = "url("+listAudio[indexAudio].profile+")"
}

for(let i=0; i<barsBtn.length; i++){
    barsBtn[i].addEventListener('click',()=>{
      document.querySelector('.songs-mainctn').classList.add('inactive')
      document.querySelector('.replace-ctn').classList.remove('inactive')
      document.querySelector('.shullfe-box').classList.add('inactive')
      document.querySelector('.repeat-box').classList.remove('inactive')
      document.querySelector('.search-tabs').classList.add('inactive')
      document.querySelector('.tabs-ctn').classList.add('inactive')
      subDetails()
    })
  }

document.querySelector('.replace-arrow').addEventListener('click',()=>{
  document.querySelector('.search-tabs').classList.remove('inactive')
  document.querySelector('.tabs-ctn').classList.remove('inactive')
    document.querySelector('.replace-ctn').classList.add('inactive')
    document.querySelector('.songs-mainctn').classList.remove('inactive')
    document.querySelector('.shullfe-box').classList.remove('inactive')
        document.querySelector('.repeat-box').classList.add('inactive')
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

let isRandom = false
      function shullfe() {
        isRandom ? pauseRandom() : playRandom();
      }
      function playRandom() {
        isRandom = true;
        document.querySelector('.fa-shuffle').style.color = 'red'
      }
      function pauseRandom() {
        isRandom = false;
        document.querySelector('.fa-shuffle').style.color = 'white'
      }

function next() {
  if (this.indexAudio < listAudio.length - 1 && isRandom == false ) {
    var oldIndex = this.indexAudio;
    this.indexAudio++;
    updateStylePlaylist(oldIndex, this.indexAudio);
    this.loadNewTrack(this.indexAudio);
  }else if(this.indexAudio < listAudio.length - 1 && isRandom == true){
    let newIndex = this.indexAudio;
    let randomIndex = Number.parseInt(Math.random()*listAudio.length)
    this.indexAudio = randomIndex;
    updateStylePlaylist(newIndex,this.indexAudio)
    this.loadNewTrack(this.indexAudio);
  }else{
    this.indexAudio = 0;
  };
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
};

const songsArr = JSON.parse(localStorage.getItem('songs')) || [];
const displayCtn = document.querySelector('.library-div')
const showSongs = () => {
    let html = ''
    songsArr.forEach((song,index) => {
        html += "<div class='library-songbox')>"
        html += `<div class='library-details'onclick="libraryPlaybox(${index})" >
                  <div>${index+1}. ${song.name}</div>
                  <div>${song.singer}</div>
                 </div>`
        html +=`<div class='btns-box'>
                    <button class='remove-btn' onclick="Remove(${index})"><i class="fa-solid fa-trash-can"></i></button>
                </div>`
        html += "</div>"
     });
      displayCtn.innerHTML = html
  };


const addToLibrary = ()=>{

songsArr.push(
  listAudio[indexAudio]
)
localStorage.setItem('songs',JSON.stringify(songsArr))
showSongs()
};

let lBindexAudio;
let currentSong = document.getElementById("myAudio1"); 
let player1 = document.querySelector("#source-audio1");
const libraryPlaybox = (index)=>{
  pauseAudio()
  document.querySelector('.none-block').style.display = 'none'
  document.querySelector('.lb-none').style.display = 'block'
  document.querySelector('.lb-title').textContent = songsArr[index].name
  document.querySelector('.lbimg-box').style.backgroundImage = "url("+songsArr[index].profile+")"
  document.querySelector('.cover-box').style.backgroundImage = "url("+songsArr[index].cover+")"
  player1.src = songsArr[index].file;
  currentSong.load();
  currentSong.addEventListener('ended',()=>{
    player1.src = songsArr[index + 1].file;
    document.querySelector('.lb-title').textContent = songsArr[index + 1].name
    document.querySelector('.lbimg-box').style.backgroundImage = "url("+songsArr[index + 1].profile+")"
    document.querySelector('.cover-box').style.backgroundImage = "url("+songsArr[index + 1].cover+")"
    currentSong.load();
    currentSong.play()
      })
  lbToggle();
}
const Lbrepeat = ()=>{
  if (currentSong.loop != true && currentSong.play()) {
    currentSong.loop = true;
    currentSong.play();
    document.querySelector(".lb-repeat").style.color = "red";
  } else {
    currentSong.loop = false;
    document.querySelector(".lb-repeat").style.color = "white";
  }
}
const  Remove = ( index) =>{
  songsArr.splice( index,1)
  localStorage.setItem('songs',JSON.stringify(songsArr))
  showSongs()
}


function lbToggle() {
  pauseAudio()
  if (currentSong.paused) {
    document.querySelector("#lb-play").style.display = "none";
    document.querySelector("#lb-pause").style.display = "block";
    document.querySelector('.cover-box').classList.add('rotate')
    currentSong.play()
  } else {
    document.querySelector("#lb-play").style.display = "block";
    document.querySelector("#lb-pause").style.display = "none";
    document.querySelector('.cover-box').classList.remove('rotate')
    currentSong.pause()
  }
}

window.onload = showSongs()
