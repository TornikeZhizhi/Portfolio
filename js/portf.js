


//     	x = 0;

// // function html(){

// // $(".skil_html span").text(x + "%")

// // 	// if (x === 88) {

// // 	// 	clearInterval(stop)

// // 	// }
// // 	x++;
// // }
// var stop =  setInterval(html,15);
//         $(document).off('scroll');


//navbar

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



$(".overlay-content a").click(function(){

	$("#myNav").css("width","0%")


})


// navbar


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 98
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }  // End if
  });
});















var clasArr = ["skil_html","skil_css","skil_bootstrap","skil_javascript","skil_jquery"];


$(document).on('scroll',function() {

var pos =  $(this).scrollTop();

console.log(pos)

    if (pos >955 && $(document).width() > 992 ) {


		$('.skil_progress_bar').each(function(index,current){
			$(this).addClass(clasArr[index]);

			});



    		setInterval(function(){

		$(".skil_progress_bar").each(function(){
		var child= $(this).width();
		var parent=$(this).parent().width();
		var proc = Math.floor(((child / parent) * 100) +1);
		$(this).text(proc + "%");

		})



	},30);


    };


    if (pos > 850 && $(document).width() < 992 && $(document).width() > 576 ) {


		$('.skil_progress_bar').each(function(index,current){
			$(this).addClass(clasArr[index]);

			});



    		setInterval(function(){

		$(".skil_progress_bar").each(function(){
		var child= $(this).width();
		var parent=$(this).parent().width();
		var proc = Math.floor(((child / parent) * 100) +1);
		$(this).text(proc + "%");

		})



	},30);


    }

    if (pos > 1035 && $(document).width() < 576 ) {


		$('.skil_progress_bar').each(function(index,current){
			$(this).addClass(clasArr[index]);

			});



    		setInterval(function(){

		$(".skil_progress_bar").each(function(){
		var child= $(this).width();
		var parent=$(this).parent().width();
		var proc = Math.floor(((child / parent) * 100) +1);
		$(this).text(proc + "%");

		})



	},30);


    }


});


// about animaciebis

$(document).on('scroll',function() {

var pos =  $(this).scrollTop();

console.log(pos)

    if (pos >285 && $(document).width() > 992 ){

    	$(".img_box").addClass("bounceInLeft");
    	$(".img_row .about_text").addClass("bounceInRight");


    }else if (pos >225 && $(document).width() < 992 && $(document).width() > 576 ) {

    		$(".img_box").addClass("bounceInLeft");
    	$(".img_row .about_text").addClass("bounceInRight");


    }else if (pos >20 && $(document).width() < 576) {

    	$(".img_box").addClass("bounceInLeft");
    	$(".img_row .about_text").addClass("bounceInRight");
    }

// experience animation

if (pos >1550 && $(document).width() > 992 ){

    	$(".time_col").addClass("rollIn");
    	$(".exp_info").addClass("rollIn");


    }else if (pos >1530 && $(document).width() > 576 ) {


    	$(".time_col").addClass("rollIn");
    	$(".exp_info").addClass("rollIn");

    }else if (pos >1690 && $(document).width() < 576 ) {

    		$(".time_col").addClass("rollIn");
    	$(".exp_info").addClass("rollIn");
    }

    
//portf animace




if (pos >2251 && $(document).width() > 992 ){

    	$(".port_box").addClass("zoomInDown");
    	
    }else if (pos >2441 && $(document).width() < 992 && $(document).width() > 576) {

    	$(".port_box").addClass("zoomInDown");
    }else if (pos >2750 && $(document).width() < 576) {

    	$(".port_box").addClass("zoomInDown");

    }



if (pos >3268 && $(document).width() > 992 ){

    	$(".contact_mail").addClass("bounceInLeft");
    	$(".contact_right").addClass("bounceInRight");


    }else if (pos >5664 && $(document).width() < 992 && $(document).width() > 576 ) {

		$(".contact_mail").addClass("bounceInLeft");
    	$(".contact_right").addClass("bounceInRight");


    }else if (pos >4808 && $(document).width() < 576) {

    		$(".contact_mail").addClass("bounceInLeft");
    	$(".contact_right").addClass("bounceInRight");
    }



    if (pos >100 ) {

    	$(".logo img").css("width","40px")
    }else if (pos < 100) {

    	$(".logo img").css("width","60px")
    }


})


// $('.skil_progress_bar').addClass("skil_html")
			

		









	





