window.state = {
  downloadLinks: {
    android: "./android",
    ios: "./ios"
  },
  sosicalLinks:{
    instagram:"https://www.instagram.com/reminantbaku/",
    facebook:"https://www.facebook.com/profile.php?id=100076146334062"
  }
}

window.__proto__.getOS = function () {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac_s';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
}
const sualItem = document.querySelectorAll('.sual-item');
const sIcon = document.querySelectorAll('.s-icon');
const sualContent = document.querySelectorAll('.sual-content')

for (let i = 0; i < sualItem.length; i++) {
  sualItem[i].addEventListener('click', () => {
    sualContent[i].classList.toggle('active');
    sualItem[i].classList.toggle('active')
  })
}

const acardion = document.querySelectorAll('.right-flex');
const leftimgitem = document.querySelectorAll('.left-img-item');

acardion.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".right-flex.active").classList.remove("active");
    item.classList.add("active");
  });
});

for (let i = 0; i < acardion.length; i++) {
  acardion[i].addEventListener('click', () => {
    document.querySelector('.left-img-item.active').classList.remove('active')
    leftimgitem[i].classList.add('active')
  })
}

const open_bar = document.querySelector('.open-btn');
const mobil_list = document.querySelector('.listMobil');
const Body = document.querySelector('#body');
open_bar.addEventListener('click', () => {
  mobil_list.classList.toggle('active');
  Body.classList.toggle('active');
});

const navLink = document.querySelectorAll('.nav-link');

function deleteNavLink() {
  mobil_list.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", deleteNavLink));
