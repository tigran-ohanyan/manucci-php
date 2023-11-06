<?php 

require_once "core/system.php";
$system = new core\SYSTEM;

if(isset($_POST['send'])){
	$email = $_POST['email'];
	$full_name = $_POST['full_name'];
	$subject = $_POST['subject'];
	$comment = $_POST['comment'];

	if(!empty($email) || !empty($full_name) || !empty($subject) || !empty($comment)){
		$in = $system->db->insert_data("contact", "`email`,`full_name`,`subject`,`comment`,`created_at`,`updated_at`,`deleted`,`status`", "'".$email."','".$full_name."','".$subject."','".$comment."','".date("Y-m-d")."',"."'0000-01-01','0000-01-01'".",'active'");
	}
	else{
		$_SESSION['error'] = "Please input all lines!";
	}
}
	if($in === true){
		echo "Success";
	}else{
		echo $in;
	}
?>

<form method="post" action="#">
			  <div class="form-row">
			    <div class="form-group col-md-6">
			        <label for="inputEmail4">Email</label>
			        <input type="email" class="form-control" id="inputEmail4" placeholder="johnsmith@gmail.com" name="email">
			    </div>
			    <div class="form-group col-md-6">
				    <label for="fname">Full name</label>
				    <input type="text" class="form-control" id="fname" placeholder="John Smith" name="full_name">
			    </div>
			   
			  </div>
			   <div class="form-group ">
			      <label for="Subject">Subject</label>
			      <input type="text" class="form-control" id="Subject" placeholder="I have a question" name="subject">
			    </div>
			 
			  <div class="form-group">
			    <label for="exampleFormControlTextarea1">Comment</label>
			    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="comment"></textarea>
			  </div>
			  <input type="submit" class="btn btn-primary" name="send" value="Send">
			</form>
