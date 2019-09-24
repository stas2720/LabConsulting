$(function () {

   $('.menu-btn').click(function () {
   		$('.menu-btn').toggleClass('menu-btn-active');
        $('.menu-colapse').toggleClass('d-none').css('order', '1');
   		$('.menu').toggleClass('menu-opened');
   });

	// $('#exampleModal').arcticmodal();

   	$('.phone').click(function(e){
   		e.preventDefault();
   		$('#exampleModal').arcticmodal();
   });
   
//    var $page = $('html, body');
// $('.go-to').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 800);
//     return false;
// });
   
  $('.go-to').click(function(){
//Сохраняем значение атрибута href в переменной:
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
      return false;
    });

});