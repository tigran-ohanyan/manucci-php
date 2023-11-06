<?php 

require_once "core/system.php";
$system = new core\SYSTEM;
if(!empty($_SESSION['user_id'])){
	header("location: user.php");
}
if(isset($_POST['signin'])){
	$email = $_POST['email'];
	$password = $_POST['password'];

	if(empty($email) || empty($password)){
		$_SESSION['error'] = "Please input all lines";
	}else{
		$data = $system->db->get_data("users","*","`email`='".$email."' && `password`='".md5($password)."'");

		if(!empty($data['0']['id'])){
			if($data['0']['status'] === "active"){
				$_SESSION['user_id'] = $data['0']['id'];
				header("location: user.php");
			}else if($data['0']['status'] === 'waiting'){
				$_SESSION['error'] = "Please check you email for verification your accout";
			}else if($data['0']['status'] === 'deactive'){
				$_SESSION['error'] = "Your account is deactivate, please contact tech support";
			}else if($data['0']['status'] === 'deleted'){
				$_SESSION['error'] = "Your account is deleted, please contact tech support";
			}else{
				$_SESSION['error'] = "Login or password incorect";
			}
		}
	}
}


 ?>

 <form action="#" method="post">
				  <div class="form-group">
				    <label for="exampleInputEmail1">Email Address/Username</label>
				    <input type="text" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email/username">
				    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				     <small id="emailHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>
				  </div>
				  <div class="form-group form-check">
				    <input type="checkbox" class="form-check-input" id="exampleCheck1">
				    <label class="form-check-label" for="exampleCheck1">Check me out</label>
				  </div>
				  <input type="submit" name="signin" class="btn btn-primary" value="Sign In">
				</form>