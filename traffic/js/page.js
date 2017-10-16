$(function(){

	var pageSize = 12;    //每页显示的记录条数
	var curPage=1;        //当前页
	var lastPage;        //最后页
	var direct=0;        //方向
	var len;            //总行数
	var page;            //总页数
	var begin;
	var end;


	len = $(".tableMonitor tr").length - 1;
	page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
	$('.pageNum').html(page);
	$('.count').html(len);
	var html = "";
	//自动生成页码
	for(var i=0;i<page;i++){
		html+="<li>"+ (i+1) + "</li>" ;
	}
	$('.firstPage').after(html);
	$('.firstPage').next("li").addClass("active");
	displayPage();

	//点击页码的时候生成对应页数的数据
	$('.page li').click(function(){
		curPage = parseInt($(this).html());
		if(!isNaN(curPage)){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			displayPage();
		}
		
	});

	//点击第一页时触发
	$('.firstPage').click(function(){
		curPage = 1;
		$(this).siblings().removeClass('active');
		$('.firstPage').next("li").addClass("active");
		displayPage(); 
	});

	//点击最后一页时触发
	$('.lastPage').click(function(){
		curPage = page;
		$(this).siblings().removeClass('active');
		$('.lastPage').prev("li").addClass("active");
		displayPage(); 
	});
	//自动选取数据
	function displayPage(){
		if(curPage == 1){
			$('.firstPage').addClass('disable').removeClass('able');
		}
		if(curPage == page){
			$('.lastPage').addClass('disable').removeClass('able');
		}
		if(curPage != 1){
			$('.firstPage').addClass('able').removeClass('disable');
		}

		if(curPage != page){
			$('.lastPage').addClass('able').removeClass('disable');
		}
		// 修复当len=1时，curPage计算得0的bug
	    if (len > pageSize) {
	        curPage = ((curPage + direct + len) % len);
	    } else {
	        curPage = 1;
	    }
	    begin=(curPage-1)*pageSize + 1;// 起始记录号
        end = begin + 1*pageSize - 1;    // 末尾记录号 
        if(end > len ) end=len;
        $(".tableMonitor tr").hide();    // 首先，设置这行为隐藏
        $(".tableMonitor tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
            if((i>=begin && i<=end) || i==0 )//显示begin<=x<=end的记录
                $(this).show();
        });
   
	}
});

//页面初始化
$(function(){
	$('.table tr:last td,.tableDuty tr:last td,.tableD tr:last td').addClass('noBottomBorder');

	$('.modify').click(function(){
		$('.modWindow').show();
		$('.modWindow input:first').focus();
	});
	$('.modWindow .icoClose').click(function(){
		// alert("hello");
		$('.modWindow').hide();
	});
	$('.btnAdd').click(function(){
		$('.addWindow').show();
		$('.addWindow input:first').focus();

	});
	$('.addWindow .icoClose').click(function(){
		// alert("hello");
		$('.addWindow').hide();
	});
	$('.btnOut').click(function(){
		$('.dutyWindow').show();
		$('.dutyWindow input:first').focus();
	});
	$('.dutyWindow .icoClose').click(function(){
		// alert("hello");
		$('.dutyWindow').hide();
	});
	$('.nav').height($('.main').height());

});