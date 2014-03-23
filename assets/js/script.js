;(function($, window, undefined) {
	var timeArr = $('.makeblog-posttags');

	timeArr.each(function(index, item) {
		$item = $(item);
		switch( $item.data("tag") ) {
			case "Make Newsmail":
				$item.addClass('makenewsmail');
				break;
			case "Advent Calendar":
				$item.addClass('advent-calendar');
				break;
			case "Easter Quiz":
				$item.addClass('easter-quiz');
				break;
			case "Make Mobile":
				$item.addClass('makemobile');
				break;
			case "Make AS":
				$item.addClass('makeas');
				break;
			default:
				$item.css('background', '#ccc');
		}
	});
})(jQuery, window, undefined);