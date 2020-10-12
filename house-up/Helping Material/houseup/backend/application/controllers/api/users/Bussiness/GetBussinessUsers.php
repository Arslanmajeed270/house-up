<?php 

if (!defined('BASEPATH')) exit('No direct script access allowed');
// Load the Rest Controller library

require APPPATH.'/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;
class GetBussinessUsers extends REST_Controller {

    public function __construct()

    { 

        parent::__construct();
        // Load the user model

        $this->load->model('api/Users/Bussiness/BussinessUsers_Modal');

    }
     
	public function all_get()
	
		{
	
			$users = $this->BussinessUsers_Modal->getBussinessUsers();
	
			if($users)
	
			{
	
				// Set the response and exit
	
				$this->response([
	
					'status' => TRUE,
	
					'message' => 'Bussiness Users got successfully.',
	
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
	
			$users = $this->BussinessUsers_Modal->getBussinessUserByID($params);
	
				if($users)
				{
					$this->response([
		
						'status' => TRUE,
		
						'message' => 'Bussiness User got successfully.',
		
						'data' => $users
		
					], REST_Controller::HTTP_OK);
		
				}
				else
		
				{
					$this->response("Something bad happens, Try again...", REST_Controller::HTTP_BAD_REQUEST);
		
				}
			
			}else{
			$this->response("Please enter Bussiness User ID", REST_Controller::HTTP_BAD_REQUEST);
			}
	
		}		
		
	public function GetByProfession_get($Profession)
	
		{
	
			if(isset($Profession) && !empty($Profession)){
			$params = array(); 
			$params['conditions']['profession'] = $Profession;
	
			$users = $this->BussinessUsers_Modal->getBussinessUserByProfession($params);
	
			if($users)
	
			{
				$this->response([
	
					'status' => TRUE,
	
					'message' => 'Bussiness User got successfully.',
	
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
			$users = $this->BussinessUsers_Modal->getBussinessUserByUsername($params);
	
			if($users)
	
			{
				$this->response([
	
					'status' => TRUE,
	
					'message' => 'Bussiness User got successfully.',
	
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