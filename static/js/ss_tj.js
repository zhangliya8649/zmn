/**
 * Created by guanzhenzhi on 2017/05/15.
 */
$(function(){
	
		$(".hot_ci span").click(function(){
			$("#soso").val($(this).text());
            $("#ss_tj").submit();	
		})
		$("#ss_key span").click(function(){
			$("#soso").val($(this).text());
            $("#ss_tj").submit();
		})
		$("#soso").focus(function(){
			$(".hot_ci").fadeOut();
			$("#ss_key").fadeIn();
		})
		$("#soso").blur(function(){
			$(".hot_ci").fadeIn();
			$("#ss_key").fadeOut();
		})
})