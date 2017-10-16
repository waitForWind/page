//			一站式服务页面鼠标经过效果

function a() {
	$(document).ready(function() {
		$("div.yq_searve_one").addClass("yq_start_one");
		$("div.yq_searve_one").addClass("yq_right_border");
		$("div.yq_searve_two").removeClass("yq_start_two");
		$("div.yq_searve_three").removeClass("yq_start_three");
		$("div.yq_searve_four").removeClass("yq_start_four");
		// $(this).find(".server_hover").show();
	})
}

function b() {
	$(document).ready(function() {
		$("div.yq_searve_one").removeClass("yq_start_one");
		$("div.yq_searve_two").addClass("yq_right_border");
		$("div.yq_searve_two").addClass("yq_start_two");
		$("div.yq_searve_three").removeClass("yq_start_three");
		$("div.yq_searve_four").removeClass("yq_start_four");
	})
}

function c() {
	$(document).ready(function() {
		$("div.yq_searve_one").removeClass("yq_start_one");
		$("div.yq_searve_three").addClass("yq_right_border");

		$("div.yq_searve_two").removeClass("yq_start_two");
		$("div.yq_searve_three").addClass("yq_start_three");
		$("div.yq_searve_four").removeClass("yq_start_four");
	})
}

function d() {
	$(document).ready(function() {
		$("div.yq_searve_four").addClass("yq_right_border");

		$("div.yq_searve_one").removeClass("yq_start_one");
		$("div.yq_searve_two").removeClass("yq_start_two");
		$("div.yq_searve_three").removeClass("yq_start_three");
		$("div.yq_searve_four").addClass("yq_start_four");
	})
}

function e() {
	$(document).ready(function() {
		$("div.yq_right_img").removeClass("yq_right_border");
	})
}

/*			$(document).ready(function(){
		  $("#index").click(function(){
				$(".yq_index").addClass("vis_i");
				$(".yq_searve").removeClass("vis_s");
				$(".yq_order").removeClass("vis_o");
				$(".yq_com").removeClass("vis_c");
				$(".yq_right_index").addClass("block");
				$(".yq_right_seaver").removeClass("block");
				$(".yq_right_order").removeClass("block")
		  });
		  $("#seaver").click(function(){
		  		$("div.yq_searve_one").addClass("yq_start_one");
				$(".yq_searve").addClass("vis_s");
				$(".yq_index").removeClass("vis_i");
				$(".yq_order").removeClass("vis_o");
				$(".yq_com").removeClass("vis_c");
				$(".yq_right_index").removeClass("block");
				$(".yq_right_seaver").addClass("block");
				$(".yq_right_order").removeClass("block");
				
		  });
		  $("#order").click(function(){
				$(".yq_searve").removeClass("vis_s");
				$(".yq_index").removeClass("vis_i");
				$(".yq_order").addClass("vis_o");
				$(".yq_com").removeClass("vis_c");
				$(".yq_right_index").removeClass("block");
				$(".yq_right_seaver").removeClass("block");
				$(".yq_right_order").addClass("block");
		  });
		  $("#com").click(function(){
				$(".yq_searve").removeClass("vis_s");
				$(".yq_index").removeClass("vis_i");
				$(".yq_order").removeClass("vis_o");
				$(".yq_com").addClass("vis_c");
		  });*/
//			  流程页面切换
$("#login").click(function() {
	$(".yq_right_nav").addClass("yq_one");
	$(".yq_right_nav").removeClass("yq_two");
	$(".yq_right_nav").removeClass("yq_three");
	$(".yq_right_nav").removeClass("yq_four");
	$("#login").addClass("vis");
	$("#resource").removeClass("vis");
	$("#shuju").removeClass("vis");
	$("#kaifa").removeClass("vis");
	$(".yq_right_show_login").addClass("block");
	$(".yq_right_show_resource").removeClass("block");
	$(".yq_right_show_shuju").removeClass("block");
	$(".yq_right_show_kaifa").removeClass("block");

})
$("#resource").click(function() {
	$(".yq_right_nav").removeClass("yq_one");
	$(".yq_right_nav").addClass("yq_two");
	$(".yq_right_nav").removeClass("yq_three");
	$(".yq_right_nav").removeClass("yq_four");
	$("#resource").addClass("vis");
	$("#login").removeClass("vis");
	$("#shuju").removeClass("vis");
	$("#kaifa").removeClass("vis");
	$(".yq_right_show_login").removeClass("block");
	$(".yq_right_show_resource").addClass("block");
	$(".yq_right_show_shuju").removeClass("block");
	$(".yq_right_show_kaifa").removeClass("block");

})
$("#shuju").click(function() {
	$(".yq_right_nav").removeClass("yq_one");
	$(".yq_right_nav").removeClass("yq_two");
	$(".yq_right_nav").addClass("yq_three");
	$(".yq_right_nav").removeClass("yq_four");
	$("#resource").removeClass("vis");
	$("#login").removeClass("vis");
	$("#shuju").addClass("vis");
	$("#kaifa").removeClass("vis");
	$(".yq_right_show_login").removeClass("block");
	$(".yq_right_show_resource").removeClass("block");
	$(".yq_right_show_shuju").addClass("block");
	$(".yq_right_show_kaifa").removeClass("block");
})
$("#kaifa").click(function() {
	$(".yq_right_nav").removeClass("yq_one");
	$(".yq_right_nav").removeClass("yq_two");
	$(".yq_right_nav").removeClass("yq_three");
	$(".yq_right_nav").addClass("yq_four");
	$("#resource").removeClass("vis");
	$("#login").removeClass("vis");
	$("#shuju").removeClass("vis");
	$("#kaifa").addClass("vis");
	$(".yq_right_show_login").removeClass("block");
	$(".yq_right_show_resource").removeClass("block");
	$(".yq_right_show_shuju").removeClass("block");
	$(".yq_right_show_kaifa").addClass("block");
})

//   hongjin
$(function() {
	//动态加载css，当分辨率大于1366px加载
	var viewWidth = $(window).width();
	if(viewWidth > 1366){
		$("<link>")
		.attr({ rel: "stylesheet",
		type: "text/css",
		href: "../css/bigScreen.css"
		})
		.appendTo("head");
	}
	// 左侧导航切换
	jQuery(".slideTxtBox1").slide({
		effect: "leftLoop",
//		autoPlay: true
	});
	jQuery(".slideTxtBox1").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		pnLoop: true
	});

	$(".yq_right").hide();
	$(".yq_right").eq(0).show();
	$(".yq_left").on("click", ".tab", function() {
		$(".yq_right").hide();
		$(this).addClass("vis_i");
		$(this).siblings().removeClass("vis_i");

		var index = $(this).index();
		$(".yq_right").eq(index).show();
		if(index == 3) {
			jQuery(".slideTxtBox2").slide({
				effect: "leftLoop",
				autoPlay: true
			});
		}
	})

	// tab页面事件
	//模拟点击
 	var istest = location.href.indexOf("testindex");
 	if(istest !=-1){
 		$(".yq_left .tab").eq(1).addClass("vis_i").siblings(".tab").removeClass("vis_i");
 		$(".yq_right").eq(1).show().siblings(".yq_right").hide();
 	}

 	$('.server_hover').first().show();
 	$('.yq_right_seaver .yq_right_img').mouseover(function(){
 		$('.server_hover').hide();
 		$('.server_normal').show();
 		$(this).children('.server_normal').hide();
 		$(this).children('.server_hover').show();
 	});

})