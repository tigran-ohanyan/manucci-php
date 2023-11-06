<?php include "header.php";
$brand = $system->db->get_data("brand","*");

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
          <h1 class="h3 mb-2 text-gray-800">Brand List</h1>
          

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Brands</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <?php for($i = 0; $i < count($brand); $i++){ ?>
                    <tr>
                      <td><a href="brand_edit.php?id=<?=$brand[$i]['id']?>"><?=$brand[$i]['id'];?></a></td>
                      <td><?=$brand[$i]['name'];?></td>
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