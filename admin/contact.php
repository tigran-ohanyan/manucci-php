<?php include "header.php";
$contact = $system->db->get_data("contact","*");

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
          <h1 class="h3 mb-2 text-gray-800">Contact List</h1>
          

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Contacts</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Subject</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <?php for($i = 0; $i < count($contact); $i++){ ?>
                    <tr>
                      <td><a href="contact_edit.php?id=<?=$contact[$i]['id']?>"><?=$contact[$i]['subject'];?></a></td>
                      <td><?=$contact[$i]['full_name'];?></td>
                      <td><?=$contact[$i]['email'];?></td>
                      <td><?=$contact[$i]['status']?></td>
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