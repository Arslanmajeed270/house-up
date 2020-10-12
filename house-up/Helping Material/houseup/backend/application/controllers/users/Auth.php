<?php

if (!defined('BASEPATH')) exit('No direct script access -allowed');

/**
* 
*/
require APPPATH . '/libraries/BaseController.php';
class Auth extends BaseController
{
	public function __construct()
    {
        parent::__construct();
        // Load the user model
        $this->load->model('users/Auth_Modal');

    }

	public function authenticate()
	{
		// pre_exit($this->input->post());
		if (!$this->input->post()) {
			$this->response(array('status' => false, 'message' => 'Insufficent arguments provided'));
		}
		else{

			$username = $this->input->post('username'); 
			$password = $this->input->post('password');
			
			if((isset($username) && !empty($username) ) && (isset($password) && !empty($password)))
			{
			   $user = array('username' =>  $username,
							   'password' =>  $password );

			   $user_exists = $this->Auth_Modal->doLogin($user);

			   if (!$user_exists['status']) {
			   	
			   }
			   else{
			   		$sessionArray = array('userId'=>$user_exists['data']['user_id'],                   
                            'role'=>$user_exists['data']['account_type'],
                            'roleText'=>$user_exists['data']['account_type'],
                            'name'=>$user_exists['data']['first_name'].' '.$user_exists['data']['last_name'],
                            'username'=>$user_exists['data']['user_name'],
                            'contact'=>$user_exists['data']['contact_no'],
                            'user_status'=>$user_exists['data']['status'],
                            'user_profession'=>$user_exists['data']['profession'],
                            'bussiness_id'=>$user_exists['data']['bussiness_registered_id'],
                            'userAccount'=>$user_exists['data']['account_type']
                        );
                                
                	$this->session->set_userdata($sessionArray);
			   		pre_exit($this->session->userdata());
			   }
			}
		}
	}
}

?>