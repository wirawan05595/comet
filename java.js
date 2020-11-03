$(document).ready(function () {
	var getProductHeight = $('.product.active').height();
	$('.products').css({height: getProductHeight});

	function calcProductHeight() {
		getProductHeight = $('.product.active').height();
		$('.products').css({height: getProductHeight});
	}

	var productItem = $('.product'),
	productCurrentItem = productItem.filter('.active');

	$('#next').on('click', function (e) {
		e.preventDefault();
		var nextItem = productCurrentItem.next();
		productCurrentItem.removeClass('active');
		if (nextItem.length) {
			productCurrentItem = nextItem.addClass('active');
		} else {
			productCurrentItem = productItem.first().addClass('active');
		}
		calcProductHeight();
		//animateContentColor();
	});

	$('#prev').on('click', function (e) {
		e.preventDefault();
		var prevItem = productCurrentItem.prev();
		productCurrentItem.removeClass('active');
		if (prevItem.length) {
			productCurrentItem = prevItem.addClass('active');
		} else {
			productCurrentItem = productItem.last().addClass('active');
		}
		calcProductHeight();
		//animateContentColor();
	});

});
