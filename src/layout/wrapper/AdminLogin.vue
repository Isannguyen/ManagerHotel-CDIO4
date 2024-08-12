<template class="bg-login">
    <div class="wrapper">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    <div class="col mx-auto">
                        <div class="mb-4 text-center">
                            <img src="../../assets/assets_rocker/images/logo-img.png" width="180" alt="" />
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="text-center">
                                        <h3 class="mb-5">Đăng Nhập</h3>
                                        
                                    </div>
                                    
                                    <div class="form-body">
                                        <form class="row g-3">
                                            <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" id="inputEmailAddress"
                                                    placeholder="Email Address">
                                            </div>
                                            <div class="col-12">
                                                <label for="inputChoosePassword" class="form-label">Enter
                                                    Password</label>
                                                <div class="input-group" id="show_hide_password">
                                                    <input type="password" class="form-control border-end-0"
                                                        id="inputChoosePassword" value="12345678" placeholder="Enter Password"> <a
                                                        href="javascript:;" class="input-group-text bg-transparent"><i
                                                            class='bx bx-hide'></i></a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                                        checked>
                                                    <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-end"> 
                                                <router-link to="/lost-password">
                                                    <a href="authentication-forgot-password.html">Forgot Password ?</a>
                                                </router-link>
                                                
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <router-link to="/admin/phong">
                                                        <button type="button" class="btn btn-primary w-100"><i
                                                            class="bx bxs-lock-open"></i>Sign in</button>
                                                    </router-link>
                                                    
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end row-->
            </div>
		</div>
	</div>
 </template>
 <script>
 import '../../assets/js/bootstrap.bundle.min.js';
 import '../../assets/js/jquery.min.js';
 import '../../assets/plugins/simplebar/js/simplebar.min.js';
 import '../../assets/plugins/metismenu/js/metisMenu.min.js';
 import '../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js';
 import '../../assets/js/index.js';
 import '../../assets/js/app.js';
 export default {
   name  : 'app',
   components : {
   },
 }
 </script>
 <style>
     @import "../../assets/plugins/simplebar/css/simplebar.css";
     @import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
     @import "../../assets/css/bootstrap.min.css";
     @import "../../assets/css/bootstrap-extended.css";
     @import "../../assets/css/app.css";
     @import "../../assets/css/icons.css";
     @import "../../assets/css/dark-theme.css";
     @import "../../assets/css/semi-dark.css";
     @import "../../assets/css/header-colors.css";
     @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
 
 </style>