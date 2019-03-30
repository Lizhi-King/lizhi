$(function(){
	$(".anniu").click(function(){
		$(this).next(".niubox").show();
		$("body").css("overflow-y","hidden");
	})
	
	$(".cha").click(function(){
		$(this).parent(".niubox").hide();
		console.log("000");
		console.log($(this).parents(".niubox").css("display"));
		$("body").css("overflow-y","");
	})
//	$(".navbar").mouseenter(function(){
//		$(this).css("background-color","#fff");
//		$(".wbiao>li>a").css("color","#000");
//		$(".sousuo>li>a").css("color","#000");
//		$(".anniu>div").css("background-color","#000");
//		$(".anniu>p").css("color","#000");
//	})
//	$(".navbar").mouseleave(function(){
//		$(this).css("background-color","");
//		$(".wbiao>li>a").css("color","#fff");
//		$(".sousuo>li>a").css("color","#fff");
//		$(".anniu>div").css("background-color","#fff");
//		$(".anniu>p").css("color","#fff");
//	})
//	弹出框
	$(".jt_left").click(function(){
		$(".tubox").css("left","-210px");
		$(".carousel>ol>i:nth-child(1)").css("background-color","#ccc");
		$(".carousel>ol>i:nth-child(2)").css("background-color","#999");
		
	})
	$(".jt_right").click(function(){
		$(".tubox").css("left","0");
		$(".carousel>ol>i:nth-child(2)").css("background-color","#ccc");
		$(".carousel>ol>i:nth-child(1)").css("background-color","#999");
	})
	//2019新款
	$(".new_tubox").mouseenter(function(){
		$(".jt_left").show();
		$(".jt_right").show();
	})
	$(".new_tubox").mouseleave(function(){
		$(".jt_left").hide();
		$(".jt_right").hide();
	})
	$(".more_tubox").mouseenter(function(){
		$(".more_left").show();
		$(".more_right").show();
	})
	$(".more_tubox").mouseleave(function(){
		$(".more_left").hide();
		$(".more_right").hide();
	})
//	返回顶部
	$(".shang").click(function() {
            $('body,html').animate({
                scrollTop: 0
            },
            500);
            return false;
        });





//*****************************
})
