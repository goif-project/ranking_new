const $ = require("jquery");

function Main(){
  //inview1
  $('.mv_1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv_2');
		}
	});
  //inview2
  $('.under_line_1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('under_line_view');
		}
	});
  //inview3
  $('.under_line_2').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('under_line_view');
		}
	});
}

export {Main}
