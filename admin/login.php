<?php 

require_once "../core/system.php";
$system = new core\SYSTEM;
echo $system->data['user']['level'];
if(!empty($_SESSION['user_id']) && $system->data['user']['level'] === "1"){
  header("location: index.php");
}
if(isset($_POST['signin'])){
  $email = $_POST['email'];
  $password = $_POST['password'];

  if(empty($email) || empty($password)){
    $_SESSION['error'] = "Please input all lines";
  }else{
    $data = $system->db->get_data("users","*","`email`='".$email."' && `password`='".md5($password)."'");

    if(!empty($data['0']['id'])){
      if($data['0']['status'] === "active" && $data['0']['level'] === "1"){
        $_SESSION['user_id'] = $data['0']['id'];
        header("location: index.php");
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

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>SB Admin 2 - Login</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" action="#" method="post">
                    <div class="form-group">
                      <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <input type="submit" class="btn btn-primary" name="signin" value="Sign In">
                    
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>

</body>

</html>
