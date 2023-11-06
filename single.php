<?php 

require_once "core/system.php";
$system = new core\SYSTEM;


if(!empty($_GET['id'])){
	$data = $system->db->get_data("product", "*","id='".$_GET['id']."'");
	if($data === "0 records"){
		header('location: list.php');
	}
}else{
	header('location: list.php');
}

?>
