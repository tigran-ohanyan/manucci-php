<?php 
if(empty($_GET['id'])){
  header("location: product_list.php");
}
include "header.php";
$brands = $system->db->get_data("brand", "*");

$data = $system->db->get_data("product", "*", "`id`='".$_GET['id']."'");

if(isset($_POST['edit'])){

  if($_FILES['img1']['name'] !== ''){
     $img1 = $system->upload('img1');
  }else{
    $img1 = $data['0']['img1'];
  }
  if($_FILES['img2']['name'] != ''){
     $img2 = $system->upload('img2');
  }else{
    $img2 = $data['0']['img2'];
  }
  if($_FILES['img3']['name'] != ''){
     $img3 = $system->upload('img3');
  }else{
    $img3 = $data['0']['img3'];
  }
 
  $name = $_POST['name'];
  $price = $_POST['price_usd'];
  $desc = $_POST['description_eng'];
  $category = $_POST['category'];
  $inside = $_POST['inside'];
  $outside = $_POST['outside'];
  $size = $_POST['size'];
  $count = $_POST['count'];
  $season = $_POST['season'];
  $brand_id = $_POST['brand_id'];
  $status = $_POST['status'];
  if(@$_POST['new'] == 'on'){
    $new = 1;
  }
  else{
    $new = 0;
  }

  $product_edit = $system->db->update_data("product","`status`='".$status."',`img1`='".$img1."',"."`img2`='".$img2."',"."`img3`='".$img3."',"."`name`='".$name."',"."`price`='".$price."',"."`description`='".$desc."',"."`gender`='".$category."',"."`inner_material`='".$inside."',"."`outer_material`='".$outside."',"."`size`='".$size."',"."`count`='".$count."',"."`season`='".$season."',"."`brand_id`='".$brand_id."',"."`new`='".$new."',"."`updated_at`='".date("Y-m-d")."'", "`id`='".$_GET['id']."'");
    
  // $product_add = $system->db->update_data("product","`img1`,`img2`,`img3`,`name`,`price`,`description`,`gender`,`inner_material`,`outer_material`,`size`,`count`,`season`,`brand_id`,`new`,`created_at`,`updated_at`,`deleted`,`creator_id`","'".$img1."',"."'".$img2."',"."'".$img3."',"."'".$name."',"."'".$price."',"."'".$desc."',"."'".$category."',"."'".$inside."',"."'".$outside."',"."'".$size."',"."'".$count."',"."'".$season."',"."'".$brand_id."',"."'".$new."',"."'".date("Y-m-d")."',"."'0000-01-01','0000-01-01','".$system->data['user']['id']."'");
  if($product_edit === true){
    echo "<script>window.location.href = 'product_list.php';</script>";
  }
}
if(isset($_POST['delete'])){
  $product_edit = $system->db->update_data("product","`deleted`='".date("Y-m-d")."',`status`='deleted'","`id`='".$_GET['id']."'");
  if($product_edit === true){
    echo "<script>window.location.href = 'user_list.php';</script>";
  }
}

 ?>

       <!-- Begin Page Content -->
        <div class="container-fluid">

          <form method="post" action="#" enctype="multipart/form-data" >
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="img1"><img src="../<?=$data[0]['img1']?>" class="img-responsive rounded-circle" style="max-height: 145px;"></label>
                <input type="file" class="form-control" id="img1" style="display: none" name="img1">
              </div>
              <div class="form-group col-md-4">
                <label for="img2">
                  <img src="../<?=$data[0]['img2']?>" class="img-responsive rounded-circle" style="max-height: 145px;">
                </label>
                <input type="file" class="form-control" id="img2" style="display: none" name="img2">
              </div>
              <div class="form-group col-md-4">
                <label for="img3">
                  
                  <img src="../<?=$data[0]['img3']?>" class="img-responsive rounded-circle" style="max-height: 145px;">
                </label>
                <input type="file" class="form-control" id="img3" style="display: none" name="img3">
              </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" value="<?=$data[0]['name']?>" name="name">
                </div>
                <div class="form-group col-md-6">
                  <label for="usd">$</label>
                  <input type="number" class="form-control" id="usd" value="<?=$data[0]['price']?>" name="price_usd">
                </div>
              </div>
              <div class="form-group">
                <label for="desceng">Description Eng</label>
                <textarea class="form-control" id="desceng" value="<?=$data[0]['description']?>" name="description_eng"><?=$data[0]['description']?></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="Category">Category</label>
                  <select id="Category" class="form-control" name="category">
                    <option value="1" <?php if($data[0]['gender'] === "1") echo "selected"?>>Mans</option>
                    <option value="2" <?php if($data[0]['gender'] === "2") echo "selected"?>>Womans</option>
                    <option value="3" <?php if($data[0]['gender'] === "3") echo "selected"?>>Kids</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="Status">Status</label>
                  <select id="Status" class="form-control" name="status">
                    <option value="active" <?php if($data[0]['status'] === "active") echo "selected"?>>Active</option>
                    <option value="enactive" <?php if($data[0]['status'] === "enactive") echo "selected"?>>Enactive</option>
                    <option value="deleted" <?php if($data[0]['status'] === "deleted") echo "selected"?>>Deleted</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="inside">Inside</label>
                  <select id="inside" class="form-control" name="inside">
                    <option value="leather"  <?php if($data[0]['inner_material'] === "leather") echo "selected"?>>Leather</option>
                    <option value="wool"  <?php if($data[0]['inner_material'] === "wool") echo "selected"?>>Wool</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="Outside">Outside</label>
                  <select id="Outside" class="form-control" name="outside">
                    <option value="leather" <?php if($data[0]['outer_material'] === "leather") echo "selected"?>>Leather</option>
                    <option value="wool" <?php if($data[0]['outer_material'] === "wool") echo "selected"?>>Wool</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="season">Season</label>
                  <select id="season" class="form-control" name="season">
                    <option value="spring" <?php if($data[0]['season'] === "spring") echo "selected"?>>Spring</option>
                    <option value="summer" <?php if($data[0]['season'] === "summer") echo "selected"?>>Summer</option>
                    <option value="autumn" <?php if($data[0]['season'] === "autumn") echo "selected"?>>Autumn</option>
                    <option value="winter" <?php if($data[0]['season'] === "winter") echo "selected"?>>Winter</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="brand_id">Brand_id</label>
                  <select id="brand_id" class="form-control" name="brand_id">
                    <?php for($i = 0; $i < count($brands); $i++){ ?>
                      <option value="<?php echo $brands[$i]['id'];?>" <?php if($data[0]['brand_id'] === $brands[$i]['id']) echo "selected"; ?>><?php echo $brands[$i]['name'];?></option>
                    <?php } ?>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="size">Sizes</label>
                  <input type="text" class="form-control" id="size" value="<?=$data[0]['size']?>" name="size">
                </div>
                <div class="form-group col-md-4">
                  <label for="sale">Sale</label>
                  <input type="number" name="sale" id="sale" value="<?=$data[0]['discount']?>" class="form-control">
                </div>
                <div class="form-group col-md-2">
                  <label for="count">Count</label>
                  <input type="number" class="form-control" id="count" value="<?=$data[0]['count']?>" name="count">
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="new" name="new">
                  <label class="form-check-label" for="new">
                    New
                  </label>
                </div>
              </div>
              <input type="submit" name="edit" class="btn btn-primary" style="float: right;margin-bottom: 50px" value="Edit">
              <?php if($data[0]['status'] !== "deleted"){ ?><input type="submit" name="delete" class="btn btn-danger" style="float: right;margin-bottom: 50px" value="Delete"><?php } ?>

          </form>
        </div>
        <!-- /.container-fluid -->
      </div>



<?php include "footer.php"; ?>