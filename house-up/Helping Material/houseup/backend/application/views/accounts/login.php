<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!--begin::Body-->
<body  id="kt_body"  class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading"  >

    	<!--begin::Main-->
	<div class="d-flex flex-column flex-root">
		<!--begin::Login-->
<div class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white" id="kt_login">
    <!--begin::Aside-->
    <div class="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10" style="background-image: url(assets/media/bg/bg-4.jpg);">
        <!--begin: Aside Container-->
        <div class="d-flex flex-row-fluid flex-column justify-content-between">
            <!--begin: Aside header-->
            <a href="#" class="flex-column-auto mt-5 pb-lg-0 pb-10">
				<img src="assets/media/logos/HouseUp-logo-wht.png" class="max-h-70px" alt=""/>
			</a>
            <!--end: Aside header-->

            <!--begin: Aside content-->
            <div class="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 class="font-size-h1 mb-5 text-white">Welcome to HouseUp!</h3>
                <p class="font-weight-lighter text-white opacity-80">
                    A digital platform to buy and sell your land/properties.
                </p>
            </div>
            <!--end: Aside content-->

            <!--begin: Aside footer for desktop-->
            <div class="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div class="opacity-70 font-weight-bold	text-white">
                    &copy; <?php echo date('Y');?> HouseUp
                </div>
                <div class="d-flex">
                    <a href="#" class="text-white">Privacy</a>
                    <a href="#" class="text-white ml-10">Legal</a>
                    <a href="#" class="text-white ml-10">Contact</a>
                </div>
            </div>
            <!--end: Aside footer for desktop-->
        </div>
        <!--end: Aside Container-->
    </div>
    <!--begin::Aside-->

    <!--begin::Content-->
    <div class="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
        <!--begin::Content header-->
        <!-- <div class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
            <span class="font-weight-bold text-dark-50">Dont have an account yet?</span>
            <a href="javascript:;" class="font-weight-bold ml-2" id="kt_login_signup">Sign Up!</a>
        </div> -->
        <!--end::Content header-->

        <!--begin::Content body-->
        <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
            <!--begin::Signin-->
            <div class="login-form login-signin">
                <div class="text-center mb-10 mb-lg-20">
                    <h3 class="font-size-h1">Sign In</h3>
                    <p class="text-muted font-weight-bold">Enter your username and password</p>
                </div>

                <!--begin::Form-->
                <form class="form" method="POST" action="<?php echo base_url('users/Auth/authenticate'); ?>" novalidate="novalidate" id="">
                    <div class="form-group">
                        <input class="form-control form-control-solid h-auto py-5 px-6" type="text" placeholder="Username" name="username" autocomplete="off" required />
                    </div>
                    <div class="form-group">
                        <input class="form-control form-control-solid h-auto py-5 px-6" type="password" placeholder="Password" name="password" autocomplete="off" required/>
                    </div>
                    <!--begin::Action-->
                    <div class="form-group d-flex flex-wrap justify-content-between align-items-center">
                        <!-- <a href="javascript:;" class="text-dark-50 text-hover-primary my-3 mr-2" id="kt_login_forgot">
    						Forgot Password ?
    					</a> -->
                        <!-- kt_login_signin_submit -->
                        <button type="submit" id="" class="btn btn-primary font-weight-bold px-9 py-4 my-3">Sign In</button>
                    </div>
                    <!--end::Action-->
                </form>
                <!--end::Form-->
            </div>
            <!--end::Signin-->
        </div>
        <!--end::Content body-->

		<!--begin::Content footer for mobile-->
		<div class="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
			<div class="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
				&copy; <?php echo date('Y');?> HouseUp
			</div>
			<div class="d-flex order-1 order-sm-2 my-2">
				<a href="#" class="text-dark-75 text-hover-primary">Privacy</a>
				<a href="#" class="text-dark-75 text-hover-primary ml-4">Legal</a>
				<a href="#" class="text-dark-75 text-hover-primary ml-4">Contact</a>
			</div>
		</div>
		<!--end::Content footer for mobile-->
    </div>
    <!--end::Content-->
</div>
<!--end::Login-->
	</div>
<!--end::Main-->
