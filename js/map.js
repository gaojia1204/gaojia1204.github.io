window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}
// 百度地图API功能
	//初始化地图	
	var map = new BMap.Map("allmap");
	var point = new BMap.Point();
	map.centerAndZoom(point,12);
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){

			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			console.log('您的位置：'+r.point.lng+','+r.point.lat);
			localStorage.jingdu=r.point.lng;
			localStorage.weidu=r.point.lat;
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})	
	
	//地图放大
	setTimeout(function(){	
		var map = new BMap.Map("allmap");
		console.log(localStorage.jingdu)
		var point = new BMap.Point(localStorage.jingdu, localStorage.weidu);
		map.centerAndZoom(point, 15);
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);               // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		
		
		// 添加带有定位的导航控件
		var navigationControl = new BMap.NavigationControl({
		    // 靠左上角位置
		    anchor: BMAP_ANCHOR_TOP_LEFT,
		    // LARGE类型
		    type: BMAP_NAVIGATION_CONTROL_LARGE,
		    // 启用显示定位
		    enableGeolocation: true
		});
		map.addControl(navigationControl);
		// 添加定位控件
		var geolocationControl = new BMap.GeolocationControl();
		geolocationControl.addEventListener("locationSuccess", function(e){
	    	// 定位成功事件
		    var address = '';
		    address += e.addressComponent.province;
		    address += e.addressComponent.city;
		    address += e.addressComponent.district;
		    address += e.addressComponent.street;
		    address += e.addressComponent.streetNumber;
		    alert("当前定位地址为：" + address);
		});
		geolocationControl.addEventListener("locationError",function(e){
		    // 定位失败事件
		    alert(e.message);
		});
		map.addControl(geolocationControl);
		//搜索体育场	
		var local = new BMap.LocalSearch(map, {
				renderOptions:{map: map}
			});
			local.search("体育场");	
	},3000)
	// 地图-------------------------------------------
	var f1=document.getElementById("footOne");
	var f2=document.getElementById("footTwo");
	f1.onclick=function(){
		window.location.href="index1.html"
	}
	f2.onclick=function(){
		window.location.href="map.html"
	}
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