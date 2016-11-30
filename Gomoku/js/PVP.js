// JavaScript Document
//房间好友选项卡
$(document).ready(function(){
	$("#room").click(function(){
		$("#roommessage").css({"display":"block"});
		$("#room").addClass("menuclick");
		$("#friends").removeClass("menuclick");
    	$("#friendsmessage").css({"display":"none"});	
  });
});

$(document).ready(function(){
	$("#friends").click(function(){
		$("#roommessage").css({"display":"none"});
		$("#room").removeClass("menuclick");
		$("#friends").addClass("menuclick");
    	$("#friendsmessage").css({"display":"block"});	
  });
});

//时钟
$(document).ready(function(e) {
    
});
