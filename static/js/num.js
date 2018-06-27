/**
 * Created by guanzhenzhi on 2016/01/04.
 */
/*Guanzhenzhi webdebugging on 20170216*/
$(function(){
	NumbersAnimate.Target=$(".textC");
	NumbersAnimate.Numbers=13286;
	NumbersAnimate.Duration=1500;
	NumbersAnimate.Animate();
});
var NumbersAnimate={
	Target:null,
	Numbers:0,
	Duration:500,
	Animate:function(){
		var array=NumbersAnimate.Numbers.toString().split("");
		//遍历数组
		for(var i=0;i<array.length;i++){
			var currentN=array[i];
			//数字append进容器
			var t=$("<span></span>");
			$(t).append("<span class=\"childNumber\">"+array[i]+"</span>");
			$(t).css("margin-left",16*i+"px");
			$(NumbersAnimate.Target).append(t);
			//生成滚动数字,根据当前数字大小来定
			for(var j=0;j<=currentN;j++){
				var tt;
				if(j==currentN){
				 tt=$("<span class=\"main\"><span>"+j+"</span></span>");
				 }else{
					 tt=$("<span class=\"childNumber\">"+j+"</span>");
				}
				$(t).append(tt);
				$(tt).css("margin-top",(j+1)*25+"px");
			}
			$(t).animate({marginTop:-((parseInt(currentN)+1)*25)+"px"},NumbersAnimate.Duration,function(){
				$(this).find(".childNumber").remove();
			});
		}
	},
	ChangeNumber:function(numbers){
		var oldArray=NumbersAnimate.Numbers.toString().split("");
		var newArray=numbers.toString().split("");
		for(var i=0;i<oldArray.length;i++){
			var o=oldArray[i];
			var n=newArray[i];
			if(o!=n){
			   var c=$($(".main")[i]);
               var num=parseInt($(c).html());
			   var top=parseInt($($(c).find("span")[0]).css("marginTop").replace('px', '')); 
			   
			   for(var j=0;j<=n;j++){
				   var nn=$("<span>"+j+"</span>");
				   if(j==n){
					   nn=$("<span>"+j+"</span>");
				   }else{
					   nn=$("<span class=\"yy\">"+j+"</span>");
				   }
				   $(c).append(nn);
				   $(nn).css("margin-top",(j+1)*25+top+"px");
			   }
			  var margintop=parseInt($(c).css("marginTop").replace('px', ''));  
			   $(c).animate({marginTop:-((parseInt(n)+1)*25)+margintop+"px"},NumbersAnimate.Duration,function(){
				   $($(this).find("span")[0]).remove();
				   $(".yy").remove();
				  });
			}
		}
		NumbersAnimate.Numbers=numbers;
	},
	
	RandomNum:function(m,a){
		var Range = a - m;   
        var Rand = Math.random();   
        return(m + Math.round(Rand * Range));   
	}
}
