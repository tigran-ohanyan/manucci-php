<?php include "header.php";
$orders = $system->db->get_data("orders","*");
for($i = 0; $i < count($orders); $i++){
  $orders[$i]['user'] = $system->db->get_data("users", "*", "`id`='".$orders[$i]['user_id']."'");
  $orders[$i]['product'] = $system->db->get_data("product", "*", "`id`='".$orders[$i]['product_id']."'");
}
 ?>
<style type="text/css">
  #dataTable_filter{
    float: right;
  }
</style>
<!-- Begin Page Content -->
        <div class="container-fluid">
        <br><br>
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">Orders List</h1>
          

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Orders</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Email</th>
                      <th>User Full Name</th>
                      <th>Product Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Email</th>
                      <th>User Full Name</th>
                      <th>Product Name</th>
                      <th>Status</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <?php for($i = 0; $i < count($orders); $i++){ ?>
                    <tr>
                      <td><a href="orders_edit.php?id=<?=$orders[$i]['id']?>"><?=$orders[$i]['id'];?></a></td>
                      <td><a href="user_edit.php?id=<?=$orders[$i]['user'][0]['id'];?>"><?=$orders[$i]['user'][0]['email'];?></a></td>
                      <td><?=$orders[$i]['user'][0]['first_name']." ".$orders[$i]['user'][0]['last_name'];?></td>
                      <td><a href="product_edit.php?id=<?=$orders[$i]['product'][0]['id'];?>"><?=$orders[$i]['product'][0]['name']?></a></td>
                      <td><?=$orders[$i]['status']?></td>
                    </tr>
                    <?php } ?>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

<?php include "footer.php"; ?>