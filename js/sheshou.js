window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}
var key=window.localStorage.team;
		var name="data=league="+key+"#key=5e152bb53d9d3f1817a701c660fe318a";
		$.ajax({
		type:"post",
		url:"ajax.php",
		async:true,
		data:name,
		success:function(data){
			var data=JSON.parse(data);
			console.log(data)
			for (var i=0;i<data.result.views.jifenbang.length;i++){
				var aaa='<p>'+
					'<span>'+data.result.views.sheshoubang[i].c1+'</span>'+
					'<span>'+data.result.views.sheshoubang[i].c2+'</span>'+
					'<span>'+data.result.views.sheshoubang[i].c3+'</span>'+
					'<span>'+data.result.views.sheshoubang[i].c4+'</span>'+
					'<span>'+data.result.views.sheshoubang[i].c5+'</span>'+
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