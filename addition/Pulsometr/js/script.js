$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow_left_icon.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow_right_icon.png"></button></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 1200,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

/* Функция */
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__link_back');

  /* Модальные окна */
  /* Открытие окна */
  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, .window, #consultation').fadeIn('slow');
  });
  /* Закрытие окна нажатием на крест */
  $('.modal__close').on('click', function(){
    $('.overlay, .window, #consultation, #order, #thanks').fadeOut('slow');
  });
  /* Открытие окна с изменением имени товара */
  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__deacr').text($(".catalog-item__subtitle").eq(i).text());
      $('.overlay, .window, #order').fadeIn('slow');
    });
  });

  /* Валидация форм */
  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите свое имя",
          minlength: jQuery.validator.format("Введите не меньше {0} символов")
        },
        phone: "Введите номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };
  
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  /* Маска ввода номера */
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  /* Отправка формы */
  $('form').submit(function(e){
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, .window, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  /* Page scroll */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  /* Плавный скролл */
  $("a [href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTOp: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
});