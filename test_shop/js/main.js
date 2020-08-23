jQuery(document).ready(function(){
	$('main').on('click','.main__tabs-nav a',function(){
		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.tab-pane').removeClass('active').removeClass('in');
		var id = $(href).addClass('active');
		setTimeout(function(){
			$(href).addClass('in');
		}, 200);
		return false;
	});
});