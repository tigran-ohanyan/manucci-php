<?php 
if(empty($_GET['id'])){
  header("location: product_list.php");
}
include "header.php";
$data = $system->db->get_data("brand", "*", "`id`='".$_GET['id']."'");

if(isset($_POST['edit'])){

  if($_FILES['img1']['name'] !== ''){
     $img1 = $system->upload('img1');
  }else{
    $img1 = $data['0']['img1'];
  }
  
 
  $name = $_POST['name'];
  $desc = $_POST['description_eng'];

  $brand_edit = $system->db->update_data("brand","`img`='".$img1."',"."`name`='".$name."',`description`='".$desc."'", "`id`='".$_GET['id']."'");
    
  if($brand_edit === true){
    echo "<script>window.location.href = 'brand_list.php';</script>";
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
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" value="<?=$data[0]['name']?>" name="name">
                </div>
              </div>
              <div class="form-group">
                <label for="desceng">Description</label>
                <textarea class="form-control" id="desceng" value="<?=$data[0]['description']?>" name="description_eng"><?=$data[0]['description']?></textarea>
              </div>
               
              <input type="submit" name="edit" class="btn btn-primary" style="float: right;margin-bottom: 50px" value="Edit">

          </form>
        </div>
        <!-- /.container-fluid -->
      </div>



<?php include "footer.php"; ?>