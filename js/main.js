$(function () {
  $('.slider__items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    dots: false,
    prevArrow: '<button class="prev-arrow"><img src="images/arrows/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button class="next-arrow"><img src="images/arrows/next-arrow.svg" alt=""></button>'
  });
});   

const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.last__item, .articles__item').length;
let items = 6;

showMore.addEventListener('click', () => {
  items+=9;
  const array = Array.from(document.querySelector('.last__items, .articles__items').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === productsLength) {
    showMore.style.display = 'none';
  }
});

$(function () {
  
});   

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("active")
  })
});