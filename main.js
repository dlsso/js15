


$(document).on('ready', function() {
	
	for (var i = 0; i < 7; i++) {
		$('#content').append("<h2 class='day'>" + moment().add('days', i).format('LL') + "</h2>")
	};
});