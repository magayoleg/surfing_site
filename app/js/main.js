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
    $(`.${'surf__popup-drop' + index}`).click((elem) => {
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

  

  // function repeatFunc(adressClass) {
  //   const quantity = ($(adressClass).length - 1) / 2;
    
  //   function sleepNigthGuest(idText, idSymbolMinus, idSymbolPlus) {
  //     for (let i = 1; i <= quantity; i++) {
  //       $('.sleep__slider-plusminus').click((elem) => {
  //         let sleepSelector = `#${idText}-${i} span`;
  //         $(sleepSelector).html((index, oldHtml) => (
  //           (elem.target.id === `${idSymbolMinus}-${i}` && oldHtml > 1) ? --oldHtml :
  //           (elem.target.id === `${idSymbolPlus}-${i}`) ? ++oldHtml : oldHtml
  //         ))
  //         totalPerNightText(`totalPerNight-${i}`, `sleepNights-${i}`, `sleepGuests-${i}`)
  //       })
  //     }
  //   }

  //   function totalPerNightText(totalPerNight, sumNight, sumGuest, priceOneNight = 100) {
  //     let total = $(`#${sumNight} span`).text() * $(`#${sumGuest} span`).text() * priceOneNight;
  //     console.log(total)
  //     // $(`#${totalPerNight}`).html(`$${total} USD`)
  //   }
      
  //   sleepNigthGuest('sleepNights', 'minusNight', 'plusNight')
  //   sleepNigthGuest('sleepGuests', 'minusGuest', 'plusGuest')
  // }

  
  function repeatFunc(adressClass) {
    const quantity = ($(adressClass).length - 1) / 2;
    
    for (let i = 1; i <= quantity; i++) {
      sleepNigthGuest(`#plusminusNight-${i}`, `#sleepNights-${i} span`, `#minusNight-${i}`, `#plusNight-${i}`, `#totalPerNight-${i}`);
      sleepNigthGuest(`#plusminusGuest-${i}`, `#sleepGuests-${i} span`, `#minusGuest-${i}`, `#plusGuest-${i}`, `#totalPerNight-${i}`);
    }

    function sleepNigthGuest(parentPlusMinus = '.sleep__slider-plusminus', idText, idSymbolMinus, idSymbolPlus, totalId) {
      $(parentPlusMinus).click((elem) => {
        $(idText).html((index, oldHtml) => {
          if (elem.target.id === idSymbolMinus.slice(1) && oldHtml > 1) {
            return --oldHtml
          } else if (elem.target.id === idSymbolPlus.slice(1)) {
            return ++oldHtml
          } else {
            return oldHtml
          }
        })
        totalPerNightText ()
      })
    }

    function totalPerNightText(priceOneNight = 100) {
      for (let a = 1; a <= quantity; a++) {
        let total = $(`#sleepNights-${a} span`).text() * $(`#sleepGuests-${a} span`).text() * priceOneNight;
        $(`#totalPerNight-${a}`).text(`$${total} USD`)
      }
    }
      
    
  }
  repeatFunc('.sleep__slider .slick-slide')

  


});