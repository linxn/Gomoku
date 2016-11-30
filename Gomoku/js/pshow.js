// JavaScript Document

$(document).ready(function() {
    $("#hallperson li").click(function(e){
		var leftpos = e.pageX-307;
		var toppos = e.pageY-234;
		$("#personinthehall").css({left:leftpos,top:toppos});
		$("#personinthehall").show();
		$("#friendadds").show();
		$("#cheatpersonnal").hide();
		$("#frienddelete").hide();
	})
});

$(document).ready(function() {
    $("#myfriends li").click(function(e){
		var leftpos = e.pageX-307;
		var toppos = e.pageY-234;
		$("#personinthehall").css({left:leftpos,top:toppos});
		$("#personinthehall").show();
		$("#friendadds").hide();
		$("#cheatpersonnal").show();
		$("#frienddelete").show();
		
	})
});

$(document).ready(function(){
	$("#btpsithc").click(function(){
		$("#personinthehall").css({"display":"none"});	
  });
});

$(document).ready(function() {
    $("#friendadds").click(function(){
		$("#tianjia").fadeIn();
		$("#friendadds").hide();
		$("#cheatpersonnal").show();
		$("#frienddelete").show();
		setTimeout(function(){$("#personinthehall").hide();$("#tianjia").fadeOut();}, 1000);
	});
	$("#frienddelete").click(function(){
		$("#shanchu").fadeIn();
		$("#friendadds").show();
		$("#cheatpersonnal").hide();
		$("#frienddelete").hide();
		setTimeout(function(){$("#personinthehall").hide();$("#shanchu").fadeOut();}, 1000);
	});
});