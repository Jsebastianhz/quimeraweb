$(function () {
    
$('.btn-mail').click(function(){
    var nombre = $('.nombre').val().trim();
    var email = $('.email').val().trim();
    var asunto = $('.asunto').val().trim();
    var mensaje = $('.mensaje').val().trim();


    if( email == "" ){

        alert('campos necesarios');
    }else{

        $.ajax({
            type : "POST",
            url  : "mail.php", 
            data : "nombre="+nombre+"&telefono="+telefono+"&email="+email+"&asunto="+asunto+"&mensaje="+mensaje,
            success:function(){
            swal("!Ok!", "Consulta enviada, recibiras una respuesta lo mas pronto posible", "success");
            alert('enviado');
            }
         })

    }




})

    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,         // offste (in px) for fixed top navigation
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });
	
	 var win = $(window);
           
  
     win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 100) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
	
	/* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
	
	$('.navbar .bars').click(function () {
        $(this).toggleClass('bars-rotate'); 
    });
	
	/* navbar-2 */
    $('.navbar-2 .bars').click(function () {
        $(this).toggleClass('bars-rotate'); 
        $('.navbar-2 .overlay-bg').toggleClass('overlay-bg-open');
    });

	
	 /* scroll-top-btn */
	var  scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {  
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
	
    /* Click On scroll-top-btn */ 
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop : 0 }, 1200);
    });
	
	/* wow */
	new WOW().init();

	/* counter */
	$('.count').counterUp({
        delay: 20,
        time: 1500
    });
	
	/* welcome-slider slider */
	$('.welcome-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
		nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
    });
	
	
	$(".work-area .grid .items").hover3d({
	selector: ".work-image",
	shine: true,
	sensitivity: 20,
    perspective: 2500
});
	
	$(".work-area-2 .grid .items").hover3d({
	selector: ".work-image",
	shine: false,
	sensitivity: 50,
    perspective: 2000
});
	
	$(".hover-box").hover3d({
	selector: ".hover-3d",
	shine: true,
	sensitivity: 20,
    perspective: 900
});
	
	$('.navbar-2 .drop-link').on('click', function(event){
		$(this).toggleClass('active');
		event.preventDefault();
		var hrefVal = $(this).attr('href');
		$('.navbar-2 .drop' + ' #' + hrefVal).slideToggle();
	});
	
	if( $('.navbar-2 .overlay-bg').hasClass('overlay-bg-open') ){
		
	   }else{
		   $('.navbar-2 .drop .drop-menue').slideDown();
	   }
	
	/* work-area-4 slider */
	$('.work-area-4 .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 650,
		dots: true,
		responsiveClass:true,
        responsive : {
            992 : {
                items: 3
            },
    
            576 : {
                items: 2
            },
            
            0 : {
                items: 1
            }
        }
    });
	
	/* testimonials slider */
	$('.testimonials .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
		mouseDrag: true,
		
    });
	
	 var swiperVertical = new Swiper('.swiper-vertical.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		slidesPerView: 1,
        direction: 'vertical',
		keyboardControl: true,
        spaceBetween: 0,
        mousewheelControl: true,
		allowTouchMove: true
    });
	
	/*  skills-area section  */
    win.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
	
	/* contact-area section */
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	 
	 
});



$(window).on("load",function (){
	
     $('.load-wrapp').fadeOut(100);
       
   /* isotope */
    $('.grid').isotope({
      // options
      itemSelector: '.items'
    });

    var $grid = $('.grid').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });
	

	 
});


 