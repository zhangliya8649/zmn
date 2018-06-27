/**
 * Created by Guanzhenzhi on 2017/02/21.
 */
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
})
$(function(){
	/*课程*/
	$(".bk_kc").ontabs(".kczx_tit a",".con_kc","sel");
	zmn.rollBoxX($(".bk_qb_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".bk_sat_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".bk_act_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".bk_toefl_picbox"),".piclt","2",false);
	$(".yjs_kc").ontabs(".kczx_tit a",".con_kc","sel");
	zmn.rollBoxX($(".yjs_qb_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".yjs_gre_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".yjs_toefl_picbox"),".piclt","2",false);
	$(".gz_kc").ontabs(".kczx_tit a",".con_kc","sel");
	zmn.rollBoxX($(".gz_qb_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".gz_ssat_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".gz_toefl_picbox"),".piclt","2",false);
	$(".bz_kc").ontabs(".kczx_tit a",".con_kc","sel");
	zmn.rollBoxX($(".bz_qb_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".bz_gre_picbox"),".piclt","2",false);
	zmn.rollBoxX($(".bz_toefl_picbox"),".piclt","2",false);
})