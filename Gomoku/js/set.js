// JavaScript Document
$(document).ready(function(){
	$("#shezhi").click(function(){
		$("#blanks").css({"display":"block"});
    	$("#sett").css({"display":"block"});	
  });
});
//关闭创建房间窗口
$(document).ready(function(){
	$("#btsett").click(function(){
		$("#blanks").css({"display":"none"});
    	$("#sett").css({"display":"none"});	
  });
});