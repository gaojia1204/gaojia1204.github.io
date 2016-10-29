window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}

	$("#btn1").on("touchstart",function(){
		var key=$("#txt1").val();
		console.log(key)
		var name="data=team="+key+"#key=5e152bb53d9d3f1817a701c660fe318a";
		$.ajax({
		type:"post",
		url:"ajax1.php",
		async:true,
		data:name,
		success:function(data){
			var data=JSON.parse(data);
			console.log(data)
			var add=data.result.list;
			for (var i=0;i<add.length;i++){
				var aaa='<p><span>'+add[i].c2+'</span> <span>'+add[i].c3+'</span></p>'+
				'<div class="one">'+
					'<p>'+add[i].c4T1+'</p>'+
					'<img src="img/images/'+(i+2)+'.png" />'+
				'</div>'+
				'<div class="two">'+
					'<p>'+add[i].c1+'</p>'+
					'<p>'+add[i].c4R+'</p>'+
					'<p>'+add[i].c51+'</p>'+
					'<p><a href='+add[i].c51Link+'>地址</a></p>'+
					'<p>'+add[i].c52+'</p>'+
					'<p><a href="'+add[i].c52Link+'">地址</a></p>'+
				'</div>'+
				'<div class="one">'+
					'<p>'+add[i].c4T2+'</p>'+
					'<img src="img/images/'+(i+1)+'.png" />'+
				'</div>';
				$("#box").append(aaa);
			}
		}
	});
	})
	$("#btn2").on("touchstart",function(){
		var key=$("#txt2").val();
		var key2=$("#txt3").val();
		console.log(key)
		var name="data=hteam="+key+"#vteam="+key2+"#key=5e152bb53d9d3f1817a701c660fe318a";
		$.ajax({
		type:"post",
		url:"ajax2.php",
		async:true,
		data:name,
		success:function(data){
			var data=JSON.parse(data);
			console.log(data)
			var add=data.result.list;
			for (var i=0;i<add.length;i++){
				var aaa='<p><span>'+add[i].date+'</span></p>'+
				'<div class="one">'+
					'<p>'+add[i].team1+'</p>'+
					'<img src="img/images/'+(i+2)+'.png" />'+
				'</div>'+
				'<div class="two">'+
					'<p>'+add[i].time+'</p>'+
					'<p>'+add[i].score+'</p>'+
					'<p>'+add[i].link1content+'</p>'+
					'<p><a href='+add[i].Link1url+'>地址</a></p>'+
					'<p>'+add[i].link2content+'</p>'+
					'<p><a href="'+add[i].Link2url+'">地址</a></p>'+
				'</div>'+
				'<div class="one">'+
					'<p>'+add[i].team2+'</p>'+
					'<img src="img/images/'+(i+1)+'.png" />'+
				'</div>';
				$("#box").append(aaa);
			}
		}
	});
	})	
	
	
	
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