


// x = 1;

// function blink(){

// $(".skil_html span").text(x + "%")

// 	if (x === 88) {

// 		clearInterval(stop)

// 	}
// 	x++;
// }
// var stop =  setInterval(blink,20);




$(document).on('scroll',function() {

var pos =  $(this).scrollTop();

    if (pos >1050) {

    	x = 0;

function html(){

$(".skil_html span").text(x + "%")

	if (x === 88) {

		clearInterval(stop)

	}
	x++;
}
var stop =  setInterval(html,25);
        $(document).off('scroll');
    } 
        
    
});






	





