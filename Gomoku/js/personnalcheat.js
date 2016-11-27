// JavaScript Document

//创建聊天LI菜单及显示内容框
$(document).ready(function() {
    $("#cheatpersonnal").click(function(){
		var id = "n"+$("#nm1").text();
		var n = "<li id=n"+$("#nm1").text()+">"+$("#nm1").text()+"</li>";
		$("#blanks").css({"display":"block"});
    	$("#personnalcheat").css({"display":"block"});
		if($("#"+id).size()==false){
			$("#psn").append(n);
			$("#textout").append("<div id='dn"+$("#nm1").text()+"'></div>");
			
			$("#personnalname li").removeClass("plclick");
			$("#"+id).addClass("plclick");
			$("#textout div").removeClass("block");
			$("#textout div").addClass("none");
			$("#dn"+$("#nm1").text()).removeClass("none");
			$("#dn"+$("#nm1").text()).addClass("block");
			}
		else{
		}
	})
});

//实现聊天功能
$(document).ready(function() {
	$(document).on("click","#sent",function(){			
				var myDate = new Date();
				var intext = $("#intext").val();
				function fix(num, length) {
		  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
		 }//使数字保持两位；
				var Y = myDate.getFullYear();
				var M = fix(myDate.getMonth(),2);
				var D = fix(myDate.getDate(),2);
				var H = fix(myDate.getHours(),2);
				var m = fix(myDate.getMinutes(),2);
				var s = fix(myDate.getSeconds(),2);
				var txt = "<em>"+Y+"-"+M+"-"+D+" "+H+":"+m+":"+s+"</em>"+" "+"0-0:"+intext+"<p>"+"</p>";
				
				var name = $(".block").eq(0).attr('id');
				if(intext == ""){
					alert('请输入需要发送的内容！');
				}
				else{
					$("#"+name).append(txt);
					$("#intext").val("");
				}
				
			})
			
    $(document).on("click","#personnalname li",function(e){
		$("#personnalname li").removeClass("plclick");
		$(this).addClass("plclick");
		$("#textout div").removeClass("block");
		$("#textout div").addClass("none");
		$("#d"+$(e.target).attr('id')).removeClass("none");
		$("#d"+$(e.target).attr('id')).addClass("block");
	
			
	})
});

//关闭私聊窗口
$(document).ready(function(){
	$("#closeimg").click(function(){
		$("#blanks").css({"display":"none"});
    	$("#personnalcheat").css({"display":"none"});	
  });
});

//消息提示
$(document).ready(function(){
	var bk ;
	function blk() {
		$("#friendsmy").toggleClass("blink");
		$("#one").toggleClass("blink");
	}	
	$("#bttuon").click(function(){
		 bk = setInterval(blk,600);
  });
  	$("#cheatpersonnal").click(function(){
		clearInterval(bk);	
		$("#friendsmy").removeClass("blink");
		$("#one").removeClass("blink");
  });
});
