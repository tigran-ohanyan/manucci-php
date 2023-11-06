<?php 

require_once "core/system.php";
$system = new core\SYSTEM;

if(empty($_SESSION['user_id'])){
	header('location: index.php');
}
echo "<pre>";
var_dump($system->data);

 ?>