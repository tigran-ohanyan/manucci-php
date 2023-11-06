<?php 
include "header.php";


if(isset($_POST['add'])){


  $img1 = $system->upload('img1');
  $name = $_POST['name'];
  $description = $_POST['description'];
  $brand_add = $system->db->insert_data("brand","`img`,`name`,`description`","'".$img1."','".$name."','".$description."'");
  if($brand_add === true){
    echo "<script>window.location.href = 'brand_list.php';</script>";
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
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Brand name" name="name">
                </div>
              </div>
              <div class="form-group">
                <label for="desceng">Description</label>
                <textarea class="form-control" id="desceng" placeholder="Text..." name="description"></textarea>
              </div>
              
              <input type="submit" name="add" class="btn btn-primary" style="float: right;margin-bottom: 50px" value="Add">
          </form>
        </div>
        <!-- /.container-fluid -->
      </div>



<?php include "footer.php"; ?>