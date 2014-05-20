// Script for the Etch-a-Scetch!!

$(document).ready(function() {
	alert("Click on a button to choose what type of Etch-a-Scetch you want!")
	
	function black(){
		$("#black").click(function() {
			initializeGrid();
			$(".square").hover(function() {
				$(this).css('background-color', "black");
				$(this).css('border', "1px solid white");
			});
		});
	}

	function trail() {
		$("#trail").click(function () {
			initializeGrid();
			$(".square").hover(function() {
				$(this).fadeIn(300);
				$(this).fadeOut(300);
			});
		});
	}

	function reset() {
		$("#clear").click(function() {
			initializeGrid();
			$('.square').removeAttr('style');
		});
		alert("Please play again!  Click on an Etch-a-Sketch type again!")
	}

	function initializeGrid() {
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
		} else {
			alert("Please try again");
		};
	};
})
