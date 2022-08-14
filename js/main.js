$(document).ready(function() {

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            dots: true,
            margin: 10,
            responsive:{ //Адаптация в зависимости от разрешения экрана
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
      });

    console.log('hello');
    
    $('.dir_menu_list').mouseover(function() {
        $('.hide_links').removeClass('hide')
    })

    $('.dir_menu_list').click(function() {
        $('.hide_links').removeClass('hide')
    })

    $(document).mouseup( function(e){ // событие клика по веб-документу
		let menuWrap = $(".hide_links"); // тут указываем ID элемента
		if ( !menuWrap.is(e.target)) { // и не по его дочерним элементам
			menuWrap.addClass('hide') // скрываем его
		}
	});

    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.header_top__ul').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
        });
      });

});