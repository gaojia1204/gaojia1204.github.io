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
			var num=location.search;
			
			var num=num.split("=")[1] 
			if(num==1){
				var add=data.result.views.saicheng1
				var addd=data.result.tabs.saicheng1
			}else{
				var add=data.result.views.saicheng2
				var addd=data.result.tabs.saicheng2
			}
			$("#Title").append(addd)
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