<?php
	$data=$_POST["data"];
	$text=explode("#",$data);
	header("http://op.juhe.cn/onebox/football/league?dtype=&".$text[0]."&".$text[1]);
	header("Access-Control-Allow-Method:GET");
	$url="http://op.juhe.cn/onebox/football/league?dtype=&".$text[0]."&".$text[1];
	$html=file_get_contents($url);
	echo $html;
?>