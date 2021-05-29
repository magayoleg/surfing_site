$(function () {
  
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left animate__animated animate__fadeInRight animate__repeat-3 animate__slow" src="img/arrows-left.svg" alt="arrows-left.svg"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right animate__animated animate__fadeInLeft animate__repeat-3 animate__slow" src="img/arrows-right.svg" alt="arrows-right.svg"></img>',
    asNavFor: '.slider-dots'
  });
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    arrows: false,  
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

  
});