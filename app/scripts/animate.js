$(window).load(function(){
	$('.middle img').fadeIn(30000,function(){
		$('.maintitle').fadeIn(30000,function(){
			$(".subtitle").fadeIn(30000)
		})
	}).animate({bottom:-30px},30000);
})