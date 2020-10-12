<?php
  
if (!defined('BASEPATH')) exit('No direct script access allowed');
 
class Auth_Modal extends CI_Model {
    public function __construct()
    {
        parent::__construct();
        // Load the database library
    }

    public function doLogin($user)
    {
    	if (count($user) == 0) {
    		return array('status' => false, 'message' => 'Insufficent arguments provided');
    	}
    	else{
			$query_userLogin = $this->db->query("SELECT * FROM `hu_users` WHERE user_name='".$user['username']."'  AND password='".$user['password']."'");
			$result_login = ($query_userLogin->num_rows() > 0) ? $query_userLogin->row_array() : false;
			if ($result_login == false)
			{
				return array('status' => false, 'message' => 'User does not exists');
			}
			else
			{
				unset($result_login['password']);
				return array('status' => true, 'message' =>'User exists', 'data' => $result_login);
			}
		}
    }
}