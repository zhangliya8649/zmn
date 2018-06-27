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
	
	/*名师*/
	 $(".teachers_list ul li:even").addClass("mr20")
	
})
$(function(){
  var surc=$("#surc").text();
  zmn.formINC({
	  "element": "#list_form1_wp", //占位ID
	  "formID": "5",
	  "sourceTit": surc+",免费留学评估", //表单来源
	  "showElement": ["zmn_name", "zmn_tel", "zmn_school", "zmn_zdschool1", "zmn_sqtime_sel", "zmn_orks_sel", "zmn_ksfs", "zmn_kstime"], //显示的表单项
	  "textElement": [],
	  "mustElement": ["zmn_name", "zmn_tel", "zmn_school", "zmn_zdschool1", "zmn_sqtime_sel", "zmn_orks_sel", "zmn_ksfs", "zmn_kstime"], //必填的表单项验证
	  "blurElement": ["zmn_tel"],
	  "formFn": function() { //表单生成后调用函数 

		  $("#list_form1_wp .form_btn").text("免费获取留学评估");
		  $("#zmn_orks_sel").click(function(){
			  $(".dd_zmn_ksfs,.dd_zmn_kstime").hide();
			  if($(this).val()!="已开始申请" && $(this).val()!="没参加过任何考试"){
				  $(".dd_zmn_ksfs").show();
			  }else if($(this).val()=="没参加过任何考试"){
				  $(".dd_zmn_kstime").show();
			  }
		  })
		  $("#zmn_name").val("您的称呼").attr("tit","您的称呼");
		  $("#zmn_tel").val("您的电话").attr("tit","您的电话");
		  $("#zmn_school").val("就读学校").attr("tit","就读学校");
		  $("#zmn_ksfs").val("考试分数").attr("tit","考试分数");
		  $("#one").text("在读年级");

		  $("#list_form1_wp input").focus(function() {
			  if($(this).attr("tit")==$(this).val()){
				  $(this).val("");
				  $(this).css({"color":"#000","border":"1px solid #fdca00"});
			  }

		  }).blur(function(event) {
			  if(!$.trim($(this).val())){
				  $(this).val($(this).attr("tit"));
				  $(this).css({"color":"#999","border":"1px solid #ddd"});
			  }else{
				  $(this).css({"color":"#323232","border":"1px solid #ddd"});
			  }
		  });
		  $("#list_form1_wp select").change(function(){
			  $(this).css({"color":"#323232","border":"1px solid #ddd"});
		  })

	  }
  })
})

