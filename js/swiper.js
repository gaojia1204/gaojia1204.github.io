window.onload=function(){
	var html=document.getElementsByTagName("html")[0];
	html.style.fontSize=(window.offsetWidth/600*20)+"px";
}
var mySwiper = new Swiper('.swiper-container', {
			pagination : '.swiper-pagination',
		})
		var btn=document.getElementById("btn");
		btn.onclick=function(){
			window.location="index1.html"
		}