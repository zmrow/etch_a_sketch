$(document).ready(function() {
	for(var i = 1; i < 257; i++ ) {
		$('#grid').append('<div class="square"></div>');
	};
	
	$(".square").hover(function() {
		$(this).css('background-color', "black");
		$(this).css('border', "1px solid white");
	});
})
