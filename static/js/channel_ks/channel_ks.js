/**
 * Created by zhangliya on 2016/12/27.
 */
/*Guanzhenzhi webdebugging on 20170216*/
$(function(){
	//nav菜单栏下拉效果（跟首页中的相同，该段代码可封装写成一个）
	$(".menu1").hover(function(){
		$(".menu_tip").show();
		$(".menu1_tip").show();
	},function(){
		$(".menu_tip").hide();
		$(".menu1_tip").hide();
	});
    //轮播图
    zmn.showPic(".picdemo1",".picdemo1 a");
	//鼠标移上服务指南出现首页中的内容
	var timershow, timerhide;
	function itemover() {
		if (timerhide) { window.clearInterval(timerhide); }
		if (document.getElementById("aside_menu").style.display != "block") {
			timershow = window.setTimeout("document.getElementById('aside_menu').style.display = 'block';", 200)
		}
	}
	function subsover() {
		if (timerhide) { window.clearInterval(timerhide); }
	}
	function settimerhide() {
		timerhide = window.setTimeout("document.getElementById('aside_menu').style.display = 'none';", 200)
	}
	$(".nav ul li.zn").hover(function(){
		itemover();
	},function(){
		settimerhide();
	});
	$(".nav ul li.zn ul.aside_menu li.aside_menu_tit").hover(function(){
		subsover();
	},function(){
		settimerhide();
	})
	//啄木鸟教育提分案例
	zmn.rollBoxY($(".jsdemo1"),{speed: 500, line: 1, timer: 2000, way: "top"});
	//侧内容栏切换
	$(".zx_middle").ontabs(".zx_middle_tit li",".zx_middle_con","zx_middle_sel");
    //大咖名师动画效果
	$(".ks_content .ms .ms_list").each(function(index){//each变例，每一个ms_list标签
		$(this).hover(function(){//鼠标滑过ms_list的时候
			//上面动画
			$(".ks_content .ms .ms_list .up .n-section:eq("+index+")").stop(true,true).animate({
				height:0,
				opacity:0
			},"normal");
			$(".ks_content .ms .ms_list .up .teacher:eq("+index+")").stop(true,true).animate({
				height:102,
				width:102
			},"normal");
			$(".ks_content .ms .ms_list .up .teacher img:eq("+index+")").stop(true,true).animate({
				height:102,
				width:102
			},"normal");
			$(".ks_content .ms .ms_list .up .h-section:eq("+index+")").stop(true,true).animate({
				height:58,
				opacity:1,
				fontSize:14
			},"normal"); 
			//下面动画
			$(".ks_content .ms .ms_list .bottom:eq("+index+")").stop(true,true).animate({
				height:124
			},"normal");
			//$(".ks_content .ms .ms_list .bottom p.info:eq("+index+")").stop(true,true).animate({
			//	opacity:0
			//},"normal");
			$(".ks_content .ms .ms_list .bottom .school_logo:eq("+index+")").stop(true,true).animate({
				opacity:1
			},"normal")
		},function(){//鼠标移开
			//上面动画
			$(".ks_content .ms .ms_list .up .n-section:eq("+index+")").stop(true,true).animate({
            	height:108,
            	opacity:1
			},"normal");
			$(".ks_content .ms .ms_list .up .teacher:eq("+index+")").stop(true,true).animate({
				height:132,
				width:132
			},"normal");
			$(".ks_content .ms .ms_list .up .teacher img:eq("+index+")").stop(true,true).animate({
				height:132,
				width:132
			},"normal");
			$(".ks_content .ms .ms_list .up .h-section:eq("+index+")").stop(true,true).animate({
				height:0,
				opacity:0,
				fontSize:12
			},"normal"); 
			//下面动画
			$(".ks_content .ms .ms_list .bottom:eq("+index+")").stop(true,true).animate({
				height:60
			},"normal");
			//$(".ks_content .ms .ms_list .bottom p.info:eq("+index+")").stop(true,true).animate({
			//	opacity:1
			//},"normal");
			$(".ks_content .ms .ms_list .bottom .school_logo:eq("+index+")").stop(true,true).animate({
				opacity:0
			},"normal")
		})
	})
	$(".menu .menu1").each(function(index){//each变例，每一个a标签
		$(".menu .menu1:eq("+1+")").addClass("hover")
	})

})