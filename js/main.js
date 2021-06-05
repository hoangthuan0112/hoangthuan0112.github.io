$(function(){

  $('#fullpage').fullpage({
    anchors:['home', 'portfolio', 'services', 'contacts'],
    menu:'#menu',
    //navigation : true , 
    //navigationPosition : 'left' ,
	});

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // open menu mobile
  $(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $("#overlay").toggleClass('open');
    });
  });
  // close when click outside
  $(document).click(function(event){
    if($('#nav-icon').hasClass('open') && $(event.target).closest("#nav-icon").length == 0) {
        $('#overlay').toggleClass('open');
        $('#nav-icon').toggleClass('open');
    }
  });
    
});
