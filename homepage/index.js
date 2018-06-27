/**
 * Created by zhangliya on 2016/12/27.
 */
$(function(){
    //菜单栏效果
    $(".menu1").hover(function(){
        $(".menu_tip").show();
        $(".menu1_tip").show();
    },function(){
        $(".menu_tip").hide();
        $(".menu1_tip").hide();
    });

    //轮播图
    zmn.showPic(".picdemo1",".picdemo1 a");
    //大咖名师动画效果
	$(".content .ms .ms_list").each(function(index){//each变例，每一个ms_list标签
		$(this).hover(function(){//鼠标滑过ms_list的时候
			//上面动画
			$(".content .ms .ms_list .up .n-section:eq("+index+")").stop(true,true).animate({
				height:0,
				opacity:0
			},"normal");
			$(".content .ms .ms_list .up .teacher:eq("+index+")").stop(true,true).animate({
				height:102,
				width:102
			},"normal");
			$(".content .ms .ms_list .up .teacher img:eq("+index+")").stop(true,true).animate({
				height:102,
				width:102
			},"normal");
			$(".content .ms .ms_list .up .h-section:eq("+index+")").stop(true,true).animate({
				height:58,
				opacity:1,
				fontSize:14
			},"normal"); 
			//下面动画
			$(".content .ms .ms_list .bottom:eq("+index+")").stop(true,true).animate({
				height:"200px"
			},"normal");
			$(".content .ms .ms_list .bottom p.info:eq("+index+")").stop(true,true).animate({
				opacity:0
			},"normal");
			$(".content .ms .ms_list .bottom .school_logo:eq("+index+")").stop(true,true).animate({
				opacity:1
			},"normal")
		},function(){//鼠标移开
			//上面动画
			$(".content .ms .ms_list .up .n-section:eq("+index+")").stop(true,true).animate({
            	height:108,
            	opacity:1
			},"normal");
			$(".content .ms .ms_list .up .teacher:eq("+index+")").stop(true,true).animate({
				height:132,
				width:132
			},"normal");
			$(".content .ms .ms_list .up .teacher img:eq("+index+")").stop(true,true).animate({
				height:132,
				width:132
			},"normal");
			$(".content .ms .ms_list .up .h-section:eq("+index+")").stop(true,true).animate({
				height:0,
				opacity:0,
				fontSize:12
			},"normal"); 
			//下面动画
			$(".content .ms .ms_list .bottom:eq("+index+")").stop(true,true).animate({
				height:100
			},"normal");
			$(".content .ms .ms_list .bottom p.info:eq("+index+")").stop(true,true).animate({
				opacity:1
			},"normal");
			$(".content .ms .ms_list .bottom .school_logo:eq("+index+")").stop(true,true).animate({
				opacity:0
			},"normal")
		})
	})
    //侧内容栏切换
    $(".zx_jb").ontabs(".zx_jb_tit li",".zx_con","zx_sel");
})
