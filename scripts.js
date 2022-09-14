/* LANDING PAGE SCRIPTS */
// SLIDER ELEMENTS
const carousel = document.querySelectorAll('.slider');
const loader = document.querySelector('.loader');
let slideIndex = 0

// setInterval(() => {
//   loader.classList.add('hidden');
//   carousel[slideIndex].classList.remove('show');
//   slideIndex = (slideIndex + 1) % carousel.length;
//   carousel[slideIndex].classList.add('show')
// }, 6000);

// ACCORDION ELEMENTS
const navBtn = document.querySelectorAll('.accordion__info-bar');
const panels = document.querySelectorAll('.info-bar-panel');

navBtn.forEach(btns => {
  btns.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('show');
    e.target.classList.toggle('act')
  })
})

panels.forEach(panel => {
  panel.addEventListener('click', (e) => {
    e.target.parentNode.classList.remove('show')
    navBtn.e.target.classList.remove("act");
  })
})

