<?php 
if(empty($_GET['id'])){
  header("location: user_list.php");
}
include "header.php";

$data = $system->db->get_data("users", "*", "`id`='".$_GET['id']."'");

if(isset($_POST['edit'])){

  if($_FILES['img1']['name'] !== ''){
     $img1 = $system->upload('img1');
  }else{
    $img1 = $data['0']['img'];
  }
  $username = $_POST['username'];
  if(empty($_POST['password'])){
    $password = $data[0]['password'];
  }else{
    $password = md5($_POST['password']);
  }
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $level = $_POST['level'];
  $status = $_POST['status'];
  
  
  $user_edit = $system->db->update_data("users","`img`='".$img1."',`username`='".$username."',`password`='".$password."',`first_name`='".$first_name."',`last_name`='".$last_name."',`level`='".$level."',`status`='".$status."',`updated_at`='".date("Y-m-d")."'","`id`='".$_GET['id']."'");
  if($user_edit === true){
    echo "<script>window.location.href = 'user_list.php';</script>";
  }
}
if(isset($_POST['delete'])){
  $user_edit = $system->db->update_data("users","`deleted`='".date("Y-m-d")."',`status`='deleted'","`id`='".$_GET['id']."'");
  if($user_edit === true){
    echo "<script>window.location.href = 'user_list.php';</script>";
  }
}

 ?>

       <!-- Begin Page Content -->
        <div class="container-fluid">

          <form method="post" action="#" enctype="multipart/form-data" >
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="img1"><img src="../<?=$data[0]['img']?>" class="img-responsive rounded-circle" style="max-height: 145px;"></label>
                <input type="file" class="form-control" id="img1" style="display: none" name="img1">
              </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" value="<?=$data[0]['email'];?>" name="email" disabled>
                </div>
                <div class="form-group col-md-3">
                  <label for="first_name">First Name</label>
                  <input type="text" class="form-control" id="first_name" value="<?=$data[0]['first_name'];?>" name="first_name">
                </div>
                <div class="form-group col-md-3">
                  <label for="last_name">Last Name</label>
                  <input type="text" class="form-control" id="last_name" value="<?=$data[0]['last_name'];?>" name="last_name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" value="<?=$data[0]['username'];?>" name="username">
                </div>
                <div class="form-group col-md-6">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="********" name="password">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="level">Level</label>
                  <select id="level" class="form-control" name="level">
                    <option value="0" <?php if($data[0]['level'] === "0") echo "selected";?>>User</option>
                    <option value="1" <?php if($data[0]['level'] === "1") echo "selected";?>>Admin</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="status">Status</label>
                  <select id="status" class="form-control" name="status">
                    <option value="waiting"  <?php if($data[0]['status'] === "waiting") echo "selected";?>>Waiting</option>
                    <option value="active" <?php if($data[0]['status'] === "active") echo "selected";?>>Active</option>
                    <option value="deactive" <?php if($data[0]['status'] === "deactive") echo "selected";?>>Deactive</option>
                    <option value="deactive" <?php if($data[0]['status'] === "deleted") echo "selected";?>>Deleted</option>
                  </select>
                </div>
              </div>
              <input type="submit" name="edit" class="btn btn-primary" style="float: right;margin-bottom: 50px" value="Edit">
              <?php if($data[0]['status'] !== "deleted"){ ?><input type="submit" name="delete" class="btn btn-danger" style="float: right;margin-bottom: 50px" value="Delete"><?php } ?>
          </form>
        </div>
        <!-- /.container-fluid -->
      </div>



<?php include "footer.php"; ?>