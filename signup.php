<?php 

require_once "core/system.php";
$system = new core\SYSTEM;

if(!empty($_SESSION['user_id'])){
	header("location: user.php");
}

if(isset($_POST['signup'])){
	$email = $_POST['email'];
	$username = $_POST['username'];
	$password = md5($_POST['password']);
	$address = $_POST['address'];
	$city = $_POST['city'];
	$state = $_POST['state'];
	$zip = $_POST['zip'];




	if(empty($email) || empty($username) || empty($password) || empty($address) || empty($city) || empty($state) || empty($zip) || @$_POST['license'] == false){
		$_SESSION['error'] = "Please input all lines";
	}else{
		$insert = $system->db->insert_data("users", "`email`,`username`,`password`,`address`,`city`,`state`,`zip`,`created`,`last_update`,`unic_key`","'".$email."',"."'".$username."',"."'".$password."',"."'".$address."',"."'".$city."',"."'".$state."',"."'".$zip."','".date("Y-m-d")."',"."'0000-01-01'".",'".$system->RandomString(70)."'");
		if($insert !== true){
			$_SESSION['error'] = "duplicate email, please enter other email";
		}else{
			header("location: signin.php");
		}
	}
}

 ?>



 <form action="#" method="post">
				  <div class="form-row">
				    <div class="form-group col-md-6">
				      <label for="inputEmail4">Email<i style="color: red">*</i></label>
				      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required minlength="8" maxlength="25" name="email">
				    </div>
				    <div class="form-group col-md-6">
				      <label for="inputPassword4">Password<i style="color: red">*</i></label>
				      <input type="password" name="password" class="form-control" id="inputPassword4" placeholder="Password" required minlength="8" maxlength="20">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputUsername">Username<i style="color: red">*</i></label>
				    <input type="text" class="form-control" name="username" id="inputUsername" placeholder="mathsmith" required minlength="8" maxlength="20">
				  </div>
				  <div class="form-group">
				    <label for="inputAddress">Address<i style="color: red">*</i></label>
				    <input type="text" class="form-control" name="address" id="inputAddress" placeholder="1234 Main St" required minlength="4" maxlength="30" name="address">
				  </div>
				  <div class="form-row">
				    <div class="form-group col-md-6">
				      <label for="inputCity">City<i style="color: red">*</i></label>
				      <input type="text" class="form-control" id="inputCity" required name="city">
				    </div>
				    <div class="form-group col-md-4">
				      <label for="inputState">State</label>
				      <select id="inputState" class="form-control" name="state">
				        <option selected value="arm">Armenia</option>
				        <option value="us">U.S.</option>
				        <option value="ru">Russia</option>
				      </select>
				    </div>
				    <div class="form-group col-md-2">
				      <label for="inputZip">Zip<i style="color: red">*</i></label>
				      <input type="text" class="form-control" id="inputZip" required name="zip">
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="form-check">
				      <input class="form-check-input" type="checkbox" id="gridCheck" name="license">
				      <label class="form-check-label" for="gridCheck">
				        <a href="license.html" target="_blank">license<i style="color: red">*</i></a>
				      </label>
				    </div>
				  </div>
				  <input type="submit" class="btn btn-primary" value="Sign up" name="signup">
				</form>