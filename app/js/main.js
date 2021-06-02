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

  $('.surf__popup svg').map((index, elem) => {
    ++index;
    $(`.${'surf__popup-drop' + index}`).click(function (elem) {
      $('.surf__popup-container-all, .slider-item__popup-text').css({
        'opacity' : '0'
      })
      if ($(`.${'surf__popup-container' + index}`).css('opacity') === '0') {
        $(`.${'surf__popup-container'+index}, .${'slider-item__info-text'+index}`).css({
          'opacity' : '1'
        })
      }
    })
  })

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left animate__animated animate__fadeInRight animate__repeat-3 animate__slow" src="img/arrows-left.svg" alt="arrows-left.svg"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right animate__animated animate__fadeInLeft animate__repeat-3 animate__slow" src="img/arrows-right.svg" alt="arrows-right.svg"></img>',
  })

  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left animate__animated animate__fadeInRight animate__repeat-3 animate__slow" src="img/arrows-left.svg" alt="arrows-left.svg"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right animate__animated animate__fadeInLeft animate__repeat-3 animate__slow" src="img/arrows-right.svg" alt="arrows-right.svg"></img>',
  })

  $('.sleep__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left animate__animated animate__fadeInRight animate__repeat-3 animate__slow" src="img/arrows-left.svg" alt="arrows-left.svg"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right animate__animated animate__fadeInLeft animate__repeat-3 animate__slow" src="img/arrows-right.svg" alt="arrows-right.svg"></img>',
  })
});