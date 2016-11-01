<?php
	$data=$_POST["data"];
	$text=explode("#",$data);
	header("//op.juhe.cn/onebox/football/team?dtype=&".$text[0]."&".$text[1]);
	header("Access-Control-Allow-Method:GET");
	$url="//op.juhe.cn/onebox/football/team?dtype=&".$text[0]."&".$text[1];
	$html=file_get_contents($url);
	echo $html;
?>