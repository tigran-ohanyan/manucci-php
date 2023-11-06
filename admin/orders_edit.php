<?php 
if(empty($_GET['id'])){
  header("location: orders.php");
}
include "header.php";
$data = $system->db->get_data("orders", "*", "`id`='".$_GET['id']."'");
$data['user'] = $system->db->get_data("users", "*", "`id`='".$data[0]['user_id']."'");
$data['product'] = $system->db->get_data("product", "*", "`id`='".$data[0]['product_id']."'");
// echo "<pre>";var_dump($data);die();

if(isset($_POST['edit'])){
  if(empty($_POST['delivered'])){
    $delivered = $data[0]['delivered_at'];
  }else{
    $delivered = $_POST['delivered'];
  }
  if(empty($_POST['sent'])){
    $sent = $data[0]['sent_at'];
  }else{
    $sent = $_POST['sent'];
  }
  $status = $_POST['status'];
  $order_edit = $system->db->update_data("orders","`status`='".$status."',`updated_at`='".date("Y-m-d")."',`delivered_at`='".$delivered."',`sent_at`='".$sent."'", "`id`='".$_GET['id']."'");
    
  if($order_edit === true){
    echo "<script>window.location.href = 'orders.php';</script>";
  }
}
if(isset($_POST['delete'])){
  $order_edit = $system->db->update_data("orders","`deleted`='".date("Y-m-d")."',`status`='deleted'","`id`='".$_GET['id']."'");
  if($order_edit === true){
    echo "<script>window.location.href = 'orders.php';</script>";
  }
}

 ?>

       <!-- Begin Page Content -->
        <div class="container-fluid">

          <form method="post" action="#" enctype="multipart/form-data" >
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" value="<?=$data['user'][0]['email']?>" name="email" disabled>
                </div>
                <div class="form-group col-md-6">
                  <label for="full_name">Full Name</label>
                  <input type="text" class="form-control" id="full_name" value="<?=$data['user'][0]['first_name'].' '.$data['user'][0]['last_name']?>" name="full_name" disabled>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="product">Product name</label>
                  <input type="text" class="form-control" id="product" value="<?=$data['product'][0]['name']?>" name="product" disabled>
                </div>
                <div class="form-group col-md-6">
                  <label for="phone">Phone Number</label>
                  <input type="text" class="form-control" id="phone" value="<?=$data[0]['telephone']?>" name="phone" disabled>
                </div>
              </div>
             <div class="form-row">
               <div class="form-group col-md-6">
                  <label for="delivered">Delivered Date</label>
                  <input type="date" class="form-control" id="delivered" value="<?=$data[0]['delivered_at']?>"  name="delivered" <?php if($data[0]['status'] === 'deleted') echo "disabled" ?>>
                </div>
                <div class="form-group col-md-6">
                  <label for="sent">Sent Date</label>
                  <input type="date" class="form-control" id="sent" value="<?=$data[0]['sent_at']?>" name="sent" <?php if($data[0]['status'] === 'deleted') echo "disabled" ?>>
                </div>
             </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="Status">Status</label>
                  <select id="Status" class="form-control" name="status">
                    <option value="waiting" <?php if($data[0]['status'] === "waiting") echo "selected"?>>Waiting</option>
                    <option value="sent" <?php if($data[0]['status'] === "sent") echo "selected"?>>Sent</option>
                    <option value="delivered" <?php if($data[0]['status'] === "delivered") echo "selected"?>>Delivered</option>
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