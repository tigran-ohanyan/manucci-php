<?php 
include "header.php";


if(isset($_POST['add'])){


  $img1 = $system->upload('img1');
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = md5($_POST['password']);
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $level = $_POST['level'];
  $status = $_POST['status'];
  
  
  $user_add = $system->db->insert_data("users","`img`,`username`,`email`,`password`,`first_name`,`last_name`,`level`,`status`,`created_at`,`updated_at`,`deleted`","'".$img1."',"."'".$username."',"."'".$email."',"."'".$password."',"."'".$first_name."',"."'".$last_name."',"."'".$level."',"."'".$status."','".date("Y-m-d")."',"."'0000-01-01','0000-01-01'");
  if($user_add === true){
    echo "<script>window.location.href = 'user_list.php';</script>";
  }
}

 ?>

       <!-- Begin Page Content -->
        <div class="container-fluid">

          <form method="post" action="#" enctype="multipart/form-data" >
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="img1"><img src="../img/upload.png" class="img-responsive rounded-circle" style="max-height: 145px;"></label>
                <input type="file" class="form-control" id="img1" style="display: none" name="img1">
              </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="johnsmith@gmail.com" name="email">
                </div>
                <div class="form-group col-md-3">
                  <label for="first_name">First Name</label>
                  <input type="text" class="form-control" id="first_name" placeholder="John" name="first_name">
                </div>
                <div class="form-group col-md-3">
                  <label for="last_name">Last Name</label>
                  <input type="text" class="form-control" id="last_name" placeholder="Smith" name="last_name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="johnsmith" name="username">
                </div>
                <div class="form-group col-md-6">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="*******" name="password">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="level">Level</label>
                  <select id="level" class="form-control" name="level">
                    <option value="0" selected>User</option>
                    <option value="1">Admin</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="status">Status</label>
                  <select id="status" class="form-control" name="status">
                    <option value="waiting" selected>Waiting</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                  </select>
                </div>
              </div>
              <input type="submit" name="add" class="btn btn-primary" style="float: right;margin-bottom: 50px" value="Add">
          </form>
        </div>
        <!-- /.container-fluid -->
      </div>



<?php include "footer.php"; ?>