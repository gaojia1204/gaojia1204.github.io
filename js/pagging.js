window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}
var key=window.localStorage.team;
var name="data=league="+key+"#key=5e152bb53d9d3f1817a701c660fe318a";
var title="<span>"+decodeURI(key)+"</span>";
$("#Title").append(title)
$.ajax({
	type:"post",
	url:"ajax.php",
	async:true,
	data:name,
	success:function(data){
		var data=JSON.parse(data);
		console.log(data.result)
		var st="<p class='ji'>"+data.result.tabs.jifenbang+"</p>"+
				"<p class='she'>"+data.result.tabs.sheshoubang+"</p>"+
				"<p class='sai'>"+data.result.tabs.saicheng1+"</p>"+
				"<p class='sai'>"+data.result.tabs.saicheng2+"</p>";
		$("#sectionOne").append(st);
		for (var i=0;i<data.result.views.jifenbang.length;i++){
			var aaa='<li class="animated rubberBand"><img src="img/images/'+i+'.png"/><a href="">'+data.result.views.jifenbang[i].c2+'</a></li>';
			$("#Team").append(aaa);
		}
		for (var j=0;j<data.result.views.jifenbang.length;j++){
			var bbb='<dl><dt><img src="img/images/'+j+'.png"/></dt><dd>暗示健康的风格很久的股份合计</dd><dd class="ddO">暗示健康的风格很久的股份合计</dd></dl>'
			$("#dddd").append(bbb);
		}
		$(".sai").on("touchstart",function(){
			$c=$(this).index()-1;
			window.location.href="saicheng.html?aaa="+$c;
			
		})
		$(".ji").on("touchstart",function(){
			window.location.href="jifenbang.html"
		})
		$(".she").on("touchstart",function(){
			window.location.href="sheshou.html"
		})
	}
});
$("#footOne").click(function(){
	window.location.href="index1.html"
})
$("#footTwo").click(function(){
		window.location.href="map.html"
	})
$("#logo").on("touchstart",function(){
		window.location.href="index1.html"
	})
$("#Team").on("touchstart",'li',function(){
	window.location.href="people.html?"+$(this).children('a').html()
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