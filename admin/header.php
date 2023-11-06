<?php 
require_once "../core/system.php";
$system = new core\System;
if(empty($_SESSION['user_id'])){
  header("location: login.php");
}else if($system->data['user']['level'] === '0'){
  header("location: ../index.php");
}
 ?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Admin Panel</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Online Shop </div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item ">
        <a class="nav-link" href="index.php">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        Products
      </div>
      <li class="nav-item">
        <a class="nav-link" href="product_list.php">
          <i class="fas fa-fw fa-list"></i>
          <span>Product List</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="product_add.php">
          <i class="fas fa-fw fa-plus"></i>
          <span>Product Add</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="orders.php">
          <i class="fas fa-fw fa-list"></i>
          <span>Orders List</span></a>
      </li>
      <div class="sidebar-heading">
        Users
      </div>
      <li class="nav-item">
        <a class="nav-link" href="user_list.php">
          <i class="fas fa-fw fa-user"></i>
          <span>User List</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="user_add.php">
          <i class="fas fa-fw fa-plus"></i>
          <span>User Add</span></a>
      </li> 
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        Site
      </div>
      <li class="nav-item">
        <a class="nav-link" href="contact.php">
          <i class="fas fa-file-contract"></i>
          <span>Contact Us</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="brand.php">
          <i class="fas fa-fw fa-plus"></i>
          <span>Brand Add</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="brand_list.php">
          <i class="fas fa-fw fa-list"></i>
          <span>Brand List</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="translatelist.php">
          <i class="fas fa-fw fa-globe"></i>
          <span>Translate List</span></a>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->


        <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

      

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

       



            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?php echo $system->data['user']['first_name']." ".$system->data['user']['last_name']; ?></span>
                <img class="img-profile rounded-circle" src="../<?php echo $system->data['user']['img']; ?>" style="width: 40px;height: 40px;">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="../user.php">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="user_edit.php?id=<?=$_SESSION['user_id']?>">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="../logout.php" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->
