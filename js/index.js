window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}
$("#allteams>ul>li").on("click",function(){
	$val=$(this).children('span').html();
	var name="data=league="+$val+"#key=5e152bb53d9d3f1817a701c660fe318a";
	$.ajax({
		type:"post",
		url:"ajax.php",
		async:true,
		data:name,
		success:function(data){
			console.log(JSON.parse(data))
		}
	});
	window.location="pagging.html?league="+$val;
	window.localStorage.team=$val;
})
$("#footTwo").click(function(){
	window.location.href="map.html"
})
$("#footOne").click(function(){
window.location.href="index1.html"
})
var off=true;

$("#footThree").on("touchstart",function(){
	if(off){
		if($(".footF")){
			$("#footFour").removeClass('footF')
		}
		$("#footFour").addClass('footFo')
	}else{
		if($(".footFo")){
			$("#footFour").removeClass('footFo')
		}
		$("#footFour").addClass('footF')
	}
	off=!off;
	$(".footFo").animate({
		"right":0
	},500);
	$(".footF").animate({
		"right":'-50vw',
	},500)
})
var offf=true;
$("#next").on("touchstart",function(){
	if(offf){
		$("#app").fadeIn()
	}else{
		$("#app").fadeOut()
	}
	offf=!offf;
})