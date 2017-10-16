$(function(){
	
	//自适应1024的屏幕
	var width = $(window).width();
	if(width<1100){
		// alert('hello');
		$('<link>').attr({
			rel:'stylesheet',
			type: 'text/css',
			href: '../css/smallScreen.css'
		}).appendTo("head");
	}

	

	//1920适应
	if(width>1400){
		// alert('hello');
		$('<link>').attr({
			rel:'stylesheet',
			type: 'text/css',
			href: '../css/bigScreen.css'
		}).appendTo("head");
	}
	$('.gaikuang').click(function(){
		$(this).next('.subList').toggle();
		var arr = $(this).find('.icoToggle').attr('src').split('/');
		var src = arr[arr.length-1];
		if(src == "ico_toggle.png"){
			$(this).find('.icoToggle').eq(0).attr({
				src:'../img/ico_toggle_on.png'
			});
		}else{
			$(this).find('.icoToggle').attr({
				src:'../img/ico_toggle.png'
			});
		}
	});

	//一级目录展开
	$('.nav>li').not('.gaikuang').click(function(){
		var subList = $(this).next('.subList2')
		subList.toggle();
		if(subList.is(":hidden")){
			subList.find('.subList3').hide();
			subList.find('li .icoToggle').attr({
				src:''
			});
		}
		var arr = $(this).find('.icoToggle').attr('src').split('/');
		var src = arr[arr.length-1];
		if(src == "ico_toggle.png"){
			$(this).find('.icoToggle').eq(0).attr({
				src:'../img/ico_toggle_on.png'
			});
		}else{
			$(this).find('.icoToggle').attr({
				src:'../img/ico_toggle.png'
			});
		}
	});

	//二级目录展开
	$('.subList2>li').click(function(){
		$(this).siblings().next('.subList3').hide();//隐藏其他兄弟节点的子菜单
		$(this).siblings().find('.icoToggle').attr({'src':''});
		var subList = $(this).next('.subList3');   
		subList.toggle();
		if(subList.is(":hidden")){
			$(this).find('.icoToggle').attr({
				src:''
			});
		}else{
			$(this).find('.icoToggle').attr({
				src:'../img/ico_toggle_on.png'
			});
		}
	});

	//先将两个框隐藏
	$(document).click(function(){
		$('.selectList').hide();
	});

	//当点击年条件的时候才出现选项
	$('.selectYear .toggleBox').click(function(e){
		e.stopPropagation();
		$('.selectListMonth').hide();
		$(this).siblings('.selectListYear').toggle();
	});

	//点击月条件的时候才出现选项
	$('.selectMonth .toggleBox').click(function(e){
		e.stopPropagation();
		$('.selectListYear').hide();
		$(this).siblings('.selectListMonth').toggle();
	});

	//选择年月的时候改变文本框内的文字
	$('.selectList .item').click(function(){
		var value = $(this).html();
		$(this).parents('.select').find('.selectText').html(value);
	});

	//子菜单选择特效
	var slideW = $('.Item:first').innerWidth();
	$('#Slider').width(slideW);
	$('.Item').hover(
		function(){
			var slideW = $(this).innerWidth();
			var  left=0;
			var index = $(this).index();
			// alert(index);
			for(var i=0; i<index;i++){
				left+=$('.Item').eq(i).outerWidth();
			} 
			$('#Slider').stop().animate({
				width: slideW,
				left: left
			},100);
		},
		function(){
			var index = $('.subNav .active').index();
			// console.log(index);
			var slideW = $('.Item').eq(index).innerWidth();
			$('#Slider').width(slideW);
			var  left=0;
			$('#Slider').width(slideW);
			for(var i=0; i<index;i++){
				left+=$('.Item').eq(i).outerWidth();
			} 
			$('#Slider').stop().animate({
				width: slideW,
				left: left
			},100);
		}
	);

	//点击菜单
	$('.Item').click(function(){

		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var slideW = $(this).innerWidth();
		var  left=0;
		var index = $(this).index();
		// alert(index);
		for(var i=0; i<index;i++){
			left+=$('.Item').eq(i).outerWidth();
		} 
		$('#Slider').stop().animate({
			width: slideW,
			left: left
		},100);
		
	});

	//游客来源菜单点击切换
	$('.sourceMenu li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	//内容切换
	$('#receptShow').click(function(){
		$('#recept').show();
		$('#province,#analyze').hide();
		// $('.nav').height(1562);
		$('.nav').height($('.content').height());

	});
	$('#provinceShow').click(function(){
		$('#province').show();
		$('#recept,#analyze').hide();
		$('.nav').height($('.content').height());
		// $('.nav').height(1929);
	});
	$('#analyzeShow').click(function(){
		$('#analyze').show();
		$('#province,#recept').hide();
		$('.nav').height($('.content').height());
		// $('.nav').height(1562);
	});
	$('.nav').height($('.main').height());

	//首页内容选择动画特效
	$('.introList>li').hover(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.introList>li').eq(0).hover(
		function(){
			$(this).find('img').attr('src','../img/ico_manage_active.png');
			$('.introList>li').eq(1).find('img').attr('src','../img/ico_yx_normal.png');
			$('.introList>li').eq(2).find('img').attr('src','../img/ico_fw_normal.png');
		}
	);
	$('.introList>li').eq(1).hover(
		function(){
			$(this).find('img').attr('src','../img/ico_yx_active.png');
			$('.introList>li').eq(0).find('img').attr('src','../img/ico_manage_normal.png');
			$('.introList>li').eq(2).find('img').attr('src','../img/ico_fw_normal.png');
		}
	);
	$('.introList>li').eq(2).hover(
		function(){
			$(this).find('img').attr('src','../img/ico_fw_active.png');
			$('.introList>li').eq(0).find('img').attr('src','../img/ico_manage_normal.png');
			$('.introList>li').eq(1).find('img').attr('src','../img/ico_yx_normal.png');
		}
	);

	//首页鼠标放上变化
	$('#dingzhi,#all-side,#visable').hover(
		function(){
			$(this).addClass('active');
		},

		function(){
			$(this).removeClass('active');
		}
	);
});


//轮播图
$(function(){
	var auto;
	var curIndex = 0;
	$('.next').click(function(){
		autoPlay();

	});

	$('.pre').click(function(){

		curIndex--;
		if(curIndex < 0){
			curIndex = 3;
			var left = -curIndex*825
			$('#show .imgBox').animate({
				left:left
			},0);
			curIndex--;
			left = -825*curIndex;
			$('#show .imgBox').stop().animate({
				left:left
			},500);
		}else{
			var left = -825*curIndex;
			$('#show .imgBox').stop().animate({
				left:left
			},500);
		}	
		$('.radio').attr('src','../img/radio.png');
		$('.radio').eq(curIndex).attr('src','../img/radio_active.png');
	});


	function autoPlay(){
		curIndex = (curIndex +1)%4;
		var left = -825*curIndex;
		$('#show .imgBox').stop().animate({
			left:left
		},500);
		
		if(curIndex == 3){
			curIndex = 0;
			$('#show .imgBox').animate({
				left:0
			},0);

		}
		$('.radio').attr('src','../img/radio.png');
		$('.radio').eq(curIndex).attr('src','../img/radio_active.png');
	}

	auto = setInterval(autoPlay,2000);
	$('.next,.pre').click(function(){
		clearInterval(auto);
		auto = setInterval(autoPlay,8000);
	})
});