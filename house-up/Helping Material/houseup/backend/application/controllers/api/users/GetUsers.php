<?php 

if (!defined('BASEPATH')) exit('No direct script access allowed');
// Load the Rest Controller library

require APPPATH.'/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;
class GetUsers extends REST_Controller {

    public function __construct()

    { 

        parent::__construct();
        // Load the user model

        $this->load->model('api/Users/App/Users_Modal');

    }
     
	public function all_get()
	
		{
	
			$users = $this->Users_Modal->getUsers();
	
			if($users)
	
			{
	
				// Set the response and exit
	
				$this->response([
	
					'status' => TRUE,
	
					'message' => 'Users got successfully.',
	
					'data' => $users
	
				], REST_Controller::HTTP_OK);
	
			}
			else
	
			{
				// Set the response and exit
	
				//BAD_REQUEST (400) being the HTTP response code
	
				$this->response("Something bad happens, Try again...", REST_Controller::HTTP_BAD_REQUEST);
	
			}
	
		}
		
		
	public function GetByID_get($id)
	
		{
		if(isset($id) && !empty($id)){
			$params = array(); 
			$params['id'] = $id;
			$users = $this->Users_Modal->getUserByID($params);
	
				if($users)
				{
					$this->response([
		
						'status' => TRUE,
		
						'message' => 'User got successfully.',
		
						'data' => $users
		
					], REST_Controller::HTTP_OK);
		
				}
				else
		
				{
					$this->response("Something bad happens, Try again...", REST_Controller::HTTP_BAD_REQUEST);
		
				}
			
			}else{
			$this->response("Please enter User ID", REST_Controller::HTTP_BAD_REQUEST);
			}
	
		}		
		
	public function GetByStatus_get($Status)
	
		{
	
			if(isset($Status) && !empty($Status)){
			$params = array(); 
			$params['conditions']['status'] = $Status;
	
			$users = $this->Users_Modal->getUserByStatus($params);
	
			if($users)
	
			{
				$this->response([
	
					'status' => TRUE,
	
					'message' => 'User/s got successfully.',
	
					'data' => $users
	
				], REST_Controller::HTTP_OK);
	
			}
			else
	
			{
				// Set the response and exit
				//BAD_REQUEST (400) being the HTTP response code
	
				$this->response("Something bad happens, Try again...", REST_Controller::HTTP_BAD_REQUEST);
	
			}
		  }
		}

	public function GetByUsername_get($Username)
	 {
		if(isset($Username) && !empty($Username)){
			$params = array(); 
			$params['conditions']['user_name'] = $Username;
			$params['conditions']['account_type'] = 'User';
			$users = $this->Users_Modal->getUserByUsername($params);
	
			if($users)
	
			{
				$this->response([
	
					'status' => TRUE,
	
					'message' => 'User got successfully.',
	
					'data' => $users
	
				], REST_Controller::HTTP_OK);
	
			}
			else
	
			{
				$this->response("Something bad happens, Try again...", REST_Controller::HTTP_BAD_REQUEST);
	
			}
		  }
		}
	}	