<?php

$executionStartTime = microtime(true) / 1000;

$url='http://api.geonames.org/weatherIcaoJSON?ICAO='.$_REQUEST['code'].'&username=mbrace1';

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);

$result=curl_exec($ch);

curl_close($ch);

$decode = json_decode($result,true);	

$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "code working";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data'] = $decode['weatherObservation'];

header('Content-Type: application/json; charset=UTF-8');


echo json_encode($output); 

?>