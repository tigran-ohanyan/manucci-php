<?php 
include "header.php";

$brands = $system->db->get_data("brand", "*");
if(isset($_POST['add'])){


  $img1 = $system->upload('img1');
  $img2 = $system->upload('img2');
  $img3 = $system->upload('img3');
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
  if($_POST['new'] == 'on'){
    $new = 1;
  }
  else{
    $new = 0;
  }
  
  $product_add = $system->db->insert_data("product","`img1`,`img2`,`img3`,`name`,`price`,`description`,`gender`,`inner_material`,`outer_material`,`size`,`count`,`season`,`brand_id`,`new`,`created_at`,`updated_at`,`deleted`,`creator_id`","'".$img1."',"."'".$img2."',"."'".$img3."',"."'".$name."',"."'".$price."',"."'".$desc."',"."'".$category."',"."'".$inside."',"."'".$outside."',"."'".$size."',"."'".$count."',"."'".$season."',"."'".$brand_id."',"."'".$new."',"."'".date("Y-m-d")."',"."'0000-01-01','0000-01-01','".$system->data['user']['id']."'");
  if($product_add === true){
    echo "<script>window.location.href = 'product_list.php';</script>";
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
              <div class="form-group col-md-4">
                <label for="img2">
                  <img src="../img/upload.png" class="img-responsive rounded-circle" style="max-height: 145px;">
                </label>
                <input type="file" class="form-control" id="img2" style="display: none" name="img2">
              </div>
              <div class="form-group col-md-4">
                <label for="img3">
                  
                  <img src="../img/upload.png" class="img-responsive rounded-circle" style="max-height: 145px;">
                </label>
                <input type="file" class="form-control" id="img3" style="display: none" name="img3">
              </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Shoe name" name="name">
                </div>
                <div class="form-group col-md-6">
                  <label for="usd">$</label>
                  <input type="number" class="form-control" id="usd" placeholder="123456" name="price_usd">
                </div>
              </div>
              <div class="form-group">
                <label for="desceng">Description Eng</label>
                <textarea class="form-control" id="desceng" placeholder="Text..." name="description_eng"></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="Category">Category</label>
                  <select id="Category" class="form-control" name="category">
                    <option value="1">Mans</option>
                    <option value="2">Womans</option>
                    <option value="3">Kids</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="inside">Inside</label>
                  <select id="inside" class="form-control" name="inside">
                    <option value="leather">Leather</option>
                    <option value="wool">Wool</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="Outside">Outside</label>
                  <select id="Outside" class="form-control" name="outside">
                    <option value="leather">Leather</option>
                    <option value="wool">Wool</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="season">Season</label>
                  <select id="season" class="form-control" name="season">
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="brand_id">Brand</label>
                  <select id="brand_id" class="form-control" name="brand_id">
                    <?php for($i = 0; $i < count($brands); $i++){ ?>
                      <option value="<?php echo $brands[$i]['id'];?>"><?php echo $brands[$i]['name'];?></option>
                    <?php } ?>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="size">Sizes</label>
                  <input type="text" class="form-control" id="size" placeholder="xl,l,m" name="size">
                </div>
                <div class="form-group col-md-4">
                  <label for="sale">Sale</label>
                  <input type="number" name="sale" id="sale" value="0" class="form-control">
                </div>
                <div class="form-group col-md-2">
                  <label for="count">Count</label>
                  <input type="number" class="form-control" id="count" value="1" name="count">
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
              <input type="submit" name="add" class="btn btn-primary" style="float: right;margin-bottom: 50px" value="Add">
          </form>
        </div>
        <!-- /.container-fluid -->
      </div>



<?php include "footer.php"; ?>