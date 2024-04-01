const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const productWeekButton = document.querySelector('.product-week__button');
const modal = document.querySelector('.modal');


nav.classList.add('nav--closed');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});

productWeekButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--close');
});

modal.addEventListener('click', () => {
  modal.classList.add('modal--close')
});
