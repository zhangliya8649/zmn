// JavaScript Document




$(function(){
	var ad = $(".arc_sider"); //声明对象
	var ad_f = $(".list_yc ");//对象父元素
	var ad_l = $(".teacher_cer_left");//对象父元素
	var ad_gf = $(".teacher_cer");//对象父元素的父元素
	var offset = ad.offset();
	var box_h = ad.outerHeight(true);
	var h=ad_gf.offset().top+ad_gf.outerHeight()-box_h; //计算触发ad停止fixed的临界点
	var hf=ad_gf.offset().top+ad_gf.outerHeight();//计算触发ad停止absolute的临界点
	var hh=ad_gf.height()-ad.outerHeight(true);//计算adabsolute的top值
	ad_f.css({"position":"relative"});//给定ad的父元素position relative
	
	if(ad_f.outerHeight()<ad_l.outerHeight()){
		$(window).scroll(function(){
		if($(window).scrollTop()>=offset.top&&$(window).scrollTop()<h){
			ad.css({"position":"fixed","top":"0px"});
		}
		 else {
			ad.css({"position":"absolute","top":"621px"});
		}
		});
	}
})
$(document).ready(function(){
	var move=$('#arc_sider');
		
	var window_w = $(window).width();
	
	if(window_w>1000){move.show();}

	$('.teacther_floor1').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_01').offset().top-20 + 'px'},'slow');});
	$('.teacther_floor2').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_02').offset().top-20 + 'px'},'slow');});
	$('.teacther_floor3').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_03').offset().top-20 + 'px'},'slow');});
	$('.teacther_floor4').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_04').offset().top-20 + 'px'},'slow');});
	$('.teacther_floor5').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_05').offset().top-20 + 'px'},'slow');});
	$('.teacther_floor6').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_06').offset().top-20 + 'px'},'slow');});
	$('.teacther_floor7').click( function () {$('html,body').animate({scrollTop: $('.teachers_text_07').offset().top-20 + 'px'},'slow');});
		
});


$(document).ready(function(e) {		
	t1 = $(".teachers_text_01").offset().top-100;	
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t1){
            $("#arc_sider ul .mao").removeClass("hover");
            $("#arc_sider ul .teacther_floor1").addClass("hover");
		}else{
		}
	})	
	if($(".teachers_text_02").length>0){t2 = $(".teachers_text_02").offset().top-100;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t2){
            $("#arc_sider ul .mao").removeClass("hover");
            $("#arc_sider ul .teacther_floor2").addClass("hover");
		}else{
		}
	})	
	}else{}
	if($(".teachers_text_03").length>0){t3 = $(".teachers_text_03").offset().top-100;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t3){
            $("#arc_sider ul .mao").removeClass("hover");
            $("#arc_sider ul .teacther_floor3").addClass("hover");
		}else{
		}
	})	
	}else{}
	if($(".teachers_text_04").length>0){t4 = $(".teachers_text_04").offset().top-100;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t4){
            $("#arc_sider ul .mao").removeClass("hover");
            $("#arc_sider ul .teacther_floor4").addClass("hover");
		}else{
		}
	})
	}else{}
	if($(".teachers_text_05").length>0){t5 = $(".teachers_text_05").offset().top-100;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t5){
            $("#arc_sider ul .mao").removeClass("hover");
            $("#arc_sider ul .teacther_floor5").addClass("hover");
		}else{
		}
	})}else{}
	if($(".teachers_text_06").length>0){t6 = $(".teachers_text_06").offset().top-100;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t6){
            $("#arc_sider ul .mao").removeClass("hover");
            $("#arc_sider ul .teacther_floor6").addClass("hover");
		}else{
		}
	})}else{}
	if($(".teachers_text_07").length>0){
		t7 = $(".teachers_text_07").offset().top-600;
		$(window).scroll(function(e){
		  s = $(document).scrollTop();	
		  if(s > t7){
			  $("#arc_sider ul .mao").removeClass("hover");
			  $("#arc_sider ul .teacther_floor7").addClass("hover");
		  }else{
		  }
		})
	}else{}
});