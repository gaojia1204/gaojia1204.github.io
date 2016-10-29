window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}
$.ajax({
		type:"get",
		url:"people.json",
		async:true,
		data:name,
		success:function(data){
			var add=data.ln;
			
			for (var i=0;i<add.length;i++){
				var aaa='<p>'+
					'<span>'+add[i].name+'</span>'+
					'<span>'+add[i].num+'</span>'+
					'<span>'+add[i].height+'</span>'+
					'<span>'+add[i].widht+'</span>'+
					'<span>'+add[i].add+'</span>'+
					'<span>'+add[i].address+'</span>'+	
				'</p>';
				$("#sort").append(aaa);
			}
		}
	});
	$("#logo").on("touchstart",function(){
		window.location.href="pagging.html"
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