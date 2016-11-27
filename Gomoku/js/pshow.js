// JavaScript Document

$(document).ready(function() {
    $("#hallperson li").click(function(e){
		var leftpos = e.pageX-307;
		var toppos = e.pageY-234;
		$("#personinthehall").css({left:leftpos,top:toppos});
		$("#personinthehall").show();
	})
});

$(document).ready(function() {
    $("#myfriends li").click(function(e){
		var leftpos = e.pageX-307;
		var toppos = e.pageY-234;
		$("#friendsinthehall").css({left:leftpos,top:toppos});
		$("#friendsinthehall").show();
	})
});

$(document).ready(function(){
	$("#btpsithc").click(function(){
		$("#personinthehall").css({"display":"none"});	
  });
});

$(document).ready(function(){
	$("#btfithc").click(function(){
		$("#friendsinthehall").css({"display":"none"});	
  });
});