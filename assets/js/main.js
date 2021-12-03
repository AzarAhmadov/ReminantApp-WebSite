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
    mobil_list.classList.toggle('active')
    Body.classList.toggle('active')
  })
  
