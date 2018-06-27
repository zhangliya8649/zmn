/**
 * Created by Guanzhenzhi on 2017/02/22.
 */
$(function(){
    /*轮播图*/
    zmn.showPic(".picdemo1",".picdemo1 a");
	/*名师*/
	$(".box6").ontabs(".tit span",".box6_con","sel");
	/*活动*/
	zmn.rollBoxX($(".box5_1img"),".piclt","2",false);
	/*捷报*/	
    $('.box4 .con1').tinyscrollbar();
    $('.box4 .con2').tinyscrollbar();
    $('.box4 .con3').tinyscrollbar();
    $('.box4 .con4').tinyscrollbar();
	$(".box4").ontabs(".tit span",".con","sel");
	
	/*案例*/
	zmn.showPic(".box7_1",".box7_1img");
	
})
