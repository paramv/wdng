$(function(){
	var anchors = $('nav.main-nav a');
	$('nav.main-nav').on('click','a',function(e){
		anchors.removeClass('selected');
		$(this).addClass('selected');
	});
});