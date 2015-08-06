$(function() {
	setTimeout(function(){
		$('.main-banner').addClass('animate');
	},500);
	

	var anchors = $('nav.main-nav a');
	anchors.on('click', function(e) {
		anchors.removeClass('selected');
		$(this).addClass('selected');
	});

	$('.title').on('click', '.event-child-icon', function() {
		var $el = $(this);
		if ($el.hasClass('expand')) {
			$el.parents('.event-child').removeClass('closed');
		} else {
			$el.parents('.event-child').addClass('closed');
		}
	});

	// Smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	var reception_btns = $('.reception-rsvp .btn');

	reception_btns.on('click',function(e){
		e.preventDefault();
		reception_btns.removeClass('btn-success').removeClass('selected');
		$(this).addClass('selected').addClass('btn-success');
	});

	var wedding_btns = $('.wedding-rsvp .btn');

	wedding_btns.on('click',function(e){
		e.preventDefault();
		wedding_btns.removeClass('btn-success').removeClass('selected');
		$(this).addClass('selected').addClass('btn-success');
	});

	$('#rsvp-form').on('submit',function(e){
		e.preventDefault();
		var name,
			message,
			weddingStatus,
			receptionStatus,
			payload;

		name = $('#name').val();
		if(!name){
			return false;
		}
		message = $('#message').val();
		weddingStatus = $('.wedding-rsvp .selected').attr('data-value');
		receptionStatus = $('.reception-rsvp .selected').attr('data-value');

		payload = {
			name:name,
			message:message,
			weddingStatus:weddingStatus,
			receptionStatus:receptionStatus
		};

		console.log(payload);
		$('.rsvp-form').hide();
		$('.thank-you').show();

	});

});