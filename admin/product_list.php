<?php include "header.php";
$products = $system->db->get_data("product","*");
for($i = 0; $i < count($products); $i++){
  $products[$i]['brand_name'] = $system->db->get_data('brand', "`name`", "`id`='".$products[$i]['brand_id']."'");
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
          <h1 class="h3 mb-2 text-gray-800">Products List</h1>
          

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Products</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Brand</th>
                      <th>Inner Material</th>
                      <th>Outer Material</th>
                      <th>Status</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Brand</th>
                      <th>Inner Material</th>
                      <th>Outer Material</th>
                      <th>Status</th>
                      <th>Price</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <?php for($i = 0; $i < count($products); $i++){ ?>
                    <tr>
                      <td><a href="product_edit.php?id=<?=$products[$i]['id']?>"><?=$products[$i]['name'];?></a></td>
                      <td><?=$products[$i]['gender'];?></td>
                      <td><?=$products[$i]['brand_name']['0']['name'];?></td>
                      <td><?=$products[$i]['inner_material']?></td>
                      <td><?=$products[$i]['outer_material']?></td>
                      <td><?=$products[$i]['status']?></td>
                      <td>$<?=$products[$i]['price']?></td>
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