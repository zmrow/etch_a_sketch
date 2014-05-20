
$(document).ready(function() {
	var $size = prompt("How large should one side of the grid be? (1-128)");
	
	if($size >= 1 && $size <= 128 ){ //Make sure the size is within parameters
		var gridSquareSize = $('#grid').width() / $size-2;
		console.log(gridSquareSize)

		for(var i = 1; i < ($size * $size); i++ ) {
			$('#grid').append('<div class="square"></div>');
		};
		$(".square").css('width', gridSquareSize);
		$(".square").css('height', gridSquareSize);
		$(".square").css('display', 'inline-block')
	}
	
	$(".square").hover(function() {
		$(this).css('background-color', "black");
		$(this).css('border', "1px solid white");
	});

	$("button").click(function() {
		$('.square').removeAttr('style');
		$size;
	});
})
