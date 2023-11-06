<?php 
if(empty($_GET['id'])){
  header("location: contact.php");
}
include "header.php";
$data = $system->db->get_data("contact", "*", "`id`='".$_GET['id']."'");

if(isset($_POST['edit'])){
 
  $status = $_POST['status'];
  
  $cotact_edit = $system->db->update_data("contact","`status`='".$status."',`updated_at`='".date("Y-m-d")."'", "`id`='".$_GET['id']."'");
    
  if($cotact_edit === true){
    echo "<script>window.location.href = 'contact.php';</script>";
  }
}
if(isset($_POST['delete'])){
  $cotact_edit = $system->db->update_data("contact","`deleted`='".date("Y-m-d")."',`status`='deleted'","`id`='".$_GET['id']."'");
  if($cotact_edit === true){
    echo "<script>window.location.href = 'contact.php';</script>";
  }
}

 ?>

       <!-- Begin Page Content -->
        <div class="container-fluid">

          <form method="post" action="#" enctype="multipart/form-data" >
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" value="<?=$data[0]['email']?>" name="email" disabled>
                </div>
                <div class="form-group col-md-6">
                  <label for="full_name">Full Name</label>
                  <input type="text" class="form-control" id="full_name" value="<?=$data[0]['full_name']?>" name="full_name" disabled>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="subject">Subject</label>
                  <input type="text" class="form-control" id="subject" value="<?=$data[0]['subject']?>" name="subject" disabled>
                </div>
              </div>
              <div class="form-group">
                <label for="comment">Comment</label>
                <textarea class="form-control" id="comment" value="<?=$data[0]['comment']?>" name="comment" disabled><?=$data[0]['comment']?></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="Status">Status</label>
                  <select id="Status" class="form-control" name="status">
                    <option value="active" <?php if($data[0]['status'] === "active") echo "selected"?>>Active</option>
                    <option value="enactive" <?php if($data[0]['status'] === "enactive") echo "selected"?>>Enactive</option>
                    <option value="deleted" <?php if($data[0]['status'] === "deleted") echo "selected"?>>Deleted</option>
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