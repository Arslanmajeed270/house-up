<?php 
/**
* 
*/
class Login extends CI_Controller
{
	 public function register()
	 {
	 	$this->load->view('default/header');
	 	$this->load->view('accounts/login');
	 	$this->load->view('default/footer');
	 }
}

?>