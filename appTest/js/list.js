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

	//查询按钮变色
	$('.btnQuery').hover(
		function(){
		$(this).addClass('queryHover');
		},
		function(){
			$(this).removeClass('queryHover');
		}
	);

	
	$('.subnav').click(function(){
		$('.subList').toggle();
		var arr = $('.icoToggle').attr('src').split('/');
		var src = arr[arr.length-1];
		if(src == "ico_toggle.png"){
			$('.icoToggle').attr({
				src:'../img/ico_toggle_down.png'
			});
		}else{
			$('.icoToggle').attr({
				src:'../img/ico_toggle.png'
			});
		}
		
	});

	

	//指标选择
	$('.condition').click(function(){
		$('.zblist').toggle();
	});

	$('.zblist li').click(function(){
		var zb = $(this).html();
		$('.zbText').html(zb);
		$('.zblist').hide();
	});

	//jz.html  菜单选择特效
	var slideW = $('.rivalItem:first').innerWidth();
	$('#rivalSlider').width(slideW);
	$('.rivalItem').hover(
		function(){
			var slideW = $(this).innerWidth();
			var  left=0;
			var index = $(this).index();
			// alert(index);
			for(var i=0; i<index;i++){
				left+=$('.rivalItem').eq(i).outerWidth();
			} 
			$('#rivalSlider').stop().animate({
				width: slideW,
				left: left
			},100);
		},
		function(){
			var index = $('.rivalNav .active').index();
			// console.log(index);
			var slideW = $('.rivalItem').eq(index).innerWidth();
			$('#rivalSlider').width(slideW);
			var  left=0;
			$('#rivalSlider').width(slideW);
			for(var i=0; i<index;i++){
				left+=$('.rivalItem').eq(i).outerWidth();
			} 
			$('#rivalSlider').stop().animate({
				width: slideW,
				left: left
			},100);
		}
	);


	//点击菜单
	$('.rivalItem').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var slideW = $(this).innerWidth();
		var  left=0;
		var index = $(this).index();
		// alert(index);
		for(var i=0; i<index;i++){
			left+=$('.rivalItem').eq(i).outerWidth();
		} 
		$('#rivalSlider').stop().animate({
			width: slideW,
			left: left
		},100);
	});

	//收起和展开
	$('#zhankai').hide();
	$('#shouqi').click(function(){
		$('#zhankai').show();
		$("#shouqi").hide();
		$('.mingxiTable,.pagePart,.showCount').hide();
	});

	$('#zhankai').click(function(){
		$('#zhankai').hide();
		$("#shouqi").show();
		$('.mingxiTable,.pagePart,.showCount').show();
	});

	//用户下拉选项
	$(document).click(function(){
		$('.users').hide();
		$('.allApp').hide();
	});
	$('.users').hide();
	$('.accountChange').click(function(e){
		e.stopPropagation();
		$('.users').toggle();
	});
	//点击用户选项的时候先改变文本框内的内容
	$('.userChoice').click(function(){
		var html = $(this).html();
		$('.xialaText').html(html);
		$('.users').hide();
	});

	//关闭欢迎
	$('.closeWel').click(function(){
		$(".welcomeU").hide();
	});

	//百分比和绝对值切换
	$('.structHead .absolute').click(function(){
		$(this).siblings('.percent').removeClass('blue');
		$(this).addClass('blue');
	});
	$('.structHead .percent').click(function(){
		$(this).siblings('.absolute').removeClass('blue');
		$(this).addClass('blue');
	});

	//app选择切换
	$('.allApp').hide();
	$('.appChoice .appLeftName,.appCart').click(function(e){
		// alert('hello');
		e.stopPropagation();
		$(this).siblings('.allApp').toggle();
	});

	$('.allApp li').click(function(){
		var text = $(this).html();
		// alert(text);
		$(this).parent('ul').siblings('.appLeftName').html(text);
	});
	
});

//表格分页
$(function(){
	var pageSize = 10;    //每页显示的记录条数
	var curPage=1;        //当前页
	var lastPage;        //最后页
	var direct=0;        //方向
	var len;            //总行数
	var page;            //总页数
	var begin;
	var end;

	len = $(".mingxiTable tr").length - 1;
	page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
	$('.pageNum').html(page);
	$('.count').html(len);
	var html = "";
	//自动生成页码
	for(var i=0;i<page;i++){
		html+="<li class='pageCode'>"+ (i+1) + "</li>" ;
	}
	$('.pre').after(html);
	$('.pre').next("li").addClass("blue");
	displayPage();

	//点击页码的时候生成对应页数的数据
	$('.pageCode').click(function(){
		curPage = parseInt($(this).html());
		if(!isNaN(curPage)){
			displayPage();
		}
		
	});
	//点击上一页时触发
	$('.pre').click(function(){
		curPage--;
		if(curPage < 1){
			curPage = 1;
		}
		displayPage();

	});

	$('.next').click(function(){
		curPage++;
		if(curPage > page){
			curPage = page;
		}
		displayPage();

	});
	//点击第一页时触发
	$('.firstPage').click(function(){
		curPage = 1;
		displayPage(); 
	});

	//点击最后一页时触发
	$('.lastPage').click(function(){
		curPage = page;
		displayPage(); 
	});
	//自动选取数据
	function displayPage(){
		if(curPage == 1){
			$('.firstPage').addClass('disable').removeClass('able');
			$('.pre').addClass('disable').removeClass('able');
		}else if(curPage == page){
			$('.lastPage').addClass('disable').removeClass('able');
			$('.next').addClass('disable').removeClass('able');
		}
		if(curPage != 1){
			$('.firstPage').addClass('able').removeClass('disable');
			$('.pre').addClass('able').removeClass('disable');
		}

		if(curPage != page){
			$('.lastPage').addClass('able').removeClass('disable');
			$('.next').addClass('able').removeClass('disable');
		}
		// 修复当len=1时，curPage计算得0的bug
	    if (len > pageSize) {
	        curPage = ((curPage + direct + len) % len);
	    } else {
	        curPage = 1;
	    }

	    $('.pageCode').removeClass('blue');
	    $('.pageCode').eq(curPage-1).addClass('blue');
	    begin=(curPage-1)*pageSize + 1;// 起始记录号
        end = begin + 1*pageSize - 1;    // 末尾记录号 
        if(end > len ) end=len;
        $(".mingxiTable tr").hide();    // 首先，设置这行为隐藏
        $(".mingxiTable tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
            if((i>=begin && i<=end) || i==0 )//显示begin<=x<=end的记录
                $(this).show();
        });
   
	}
});
