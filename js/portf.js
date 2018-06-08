


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




var clasArr = ["skil_html","skil_css","skil_bootstrap","skil_javascript","skil_jquery"];


$(document).on('scroll',function() {

var pos =  $(this).scrollTop();

console.log(pos)

    if (pos >1000 && $(document).width() > 992 ) {


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



// $('.skil_progress_bar').addClass("skil_html")
			

		









	





