const acardion = document.querySelectorAll('.right-flex');
const acardionLeft = document.querySelectorAll('.img');
const ac = document.querySelector('.ac')[0];

acardion.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".right-flex.active").classList.remove("active");
      item.classList.add("active");
    });
  });

  const open_bar = document.querySelector('.open-btn');
  const mobil_list = document.querySelector('.listMobil');
  const Body = document.querySelector('#body');
  open_bar.addEventListener('click', () => {
    mobil_list.classList.toggle('active');
    Body.classList.toggle('active');
});
  

window.sr = new ScrollReveal()
ScrollReveal({
  reset: false
});

sr.reveal('.banner-left', {
  origin: "top",
  distance: "-300px",
  delay: 400
})

sr.reveal('.banner-right', {
  origin: "bottom",
  distance: "-300px",
  delay: 400
})

sr.reveal('.logo', {
  scale: 0.8,
  interval: 200
})

sr.reveal('.app-top-img', {
  origin: "left",
  distance: "300px",
  delay: 400
})

sr.reveal('.span', {
  origin: "top",
  distance: "200px",
  delay: 400
})

sr.reveal('.anime', {
  origin: "top",
  distance: "200px",
  delay: 400
})

sr.reveal('.right-item', {
  origin: "left",
  distance: "200px",
  delay: 400
})

sr.reveal('.emer-left', {
  duration: 1500
})

sr.reveal('.emer-right', {
  duration:1500
})

sr.reveal('.card-flex', {
  scale: 0.8,
  interval: 200
})

sr.reveal('.coment', {
  origin:"top",
  distance: "100px",
  interval: 200
})

sr.reveal('.last-item', {
  origin:"top",
  distance: "100px",
  interval: 200
})