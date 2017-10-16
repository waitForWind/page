$(function(){
	//自适应1024的屏幕
	var width = $(window).width();
	if(width<1200){
		// alert('hello');
		$('<link>').attr({
			rel:'stylesheet',
			type: 'text/css',
			href: '../css/smallScreen.css'
		}).appendTo("head");
	}

	//菜单高度控制
	$('.nav').height($('.main').height());
});
