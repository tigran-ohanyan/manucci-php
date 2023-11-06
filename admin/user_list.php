<?php include "header.php";
$users = $system->db->get_data("users","*");


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
          <h1 class="h3 mb-2 text-gray-800">Users List</h1>
          

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Users</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Full Name</th>
                      <th>Status</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Full Name</th>
                      <th>Status</th>
                      <th>Address</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <?php for($i = 0; $i < count($users); $i++){ ?>
                    <tr>
                      <td><a href="user_edit.php?id=<?=$users[$i]['id']?>"><?=$users[$i]['email'];?></a></td>
                      <td><?=$users[$i]['username'];?></td>
                      <td><?=$users[$i]['first_name']." ".$users[$i]['last_name'];?></td>
                      <td><?=$users[$i]['status']?></td>
                      <td><?=$users[$i]['address']?></td>
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