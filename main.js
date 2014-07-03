


$(document).on('ready', function() {
	
	for (var i = 0; i < 7; i++) {
		$('#content').append("<div class='day'><h2>" + moment().add('days', i).format('LL') + "</h2><button class='add-button'>Add appointment</button></div>")
		}

		$('.add-button').on('click', function(){
			$(this).closest('div').append("<h3> hi</h3>")
		});

});