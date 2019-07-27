(function(){
    'use strict';

    $('body').scrollspy({ target: '#main-nav' });
//add smooth scrolling
$('#main-nav a').on('click', function(e) {
	// check for # value
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		//animate smooth scroll

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			900,
			function() {
				window.location.hash = hash;
			}
		);
	}
});


    // $(".log-in").click(function(){
    //     $(".signIn").addClass("active-dx");
    //     $(".signUp").addClass("inactive-sx");
    //     $(".signUp").removeClass("active-sx");
    //     $(".signIn").removeClass("inactive-dx");
    // });
    
    // $(".back").click(function(){
    //     $(".signUp").addClass("active-sx");
    //     $(".signIn").addClass("inactive-dx");
    //     $(".signIn").removeClass("active-dx");
    //     $(".signUp").removeClass("inactive-sx");
    // });
  
    class Menu {
      constructor(settings) {
        this.menuNode = settings.menuNode;
      }
      
      toggleMenuState(className) {      
        if (typeof className !== 'string' || className.length === 0) {
          return console.log('you did not give the class for toggleState function');
        } 
        return  this.menuNode.classList.toggle(className);
      }
    }
  
    const jsMenuNode = document.querySelector('.menu');
    const demoMenu = new Menu ({
      menuNode: jsMenuNode
    });
    
    function callMenuToggle(event) {
      demoMenu.toggleMenuState('menu_activated');
    }
    
    jsMenuNode.querySelector('.menu__hamburger').addEventListener('click', callMenuToggle);
  })();













var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //poster transform
  $menu.css('transform', transformPoster);

  //parallax for each layer
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});



