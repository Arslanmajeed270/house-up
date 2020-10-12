<?php 

if (!defined('BASEPATH')) exit('No direct script access allowed');
// Load the Rest Controller library

require APPPATH.'/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Auth extends REST_Controller {
    public function __construct()
    { 
        parent::__construct();

        // Load the user model
        $this->load->model('api/REST_Modal');

    }

    public function test_post()

    {
    //	print_r($this->input->post());

        $users = $this->REST_Modal->getUsers();

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

	public function login_get()
    {
		//(isset($username) && !empty($username) ) && (isset($password) && !empty($password))

		$get = $this->input->post();

		// print_r($get);exit;
		$username = $this->input->post('user_name'); 

		$password = $this->input->post('password'); 

		if((isset($username) && !empty($username) ) && (isset($password) && !empty($password))){

		   $data =   array('user_name' =>  $this->input->post('user_name'),

						   'password' =>  $this->input->post('password') );
		//print_r($data);exit;

		   $r = $this->REST_Modal->login($data);

          // $this->response($r); 
			if($r)
			{
				// Set the response and exit
				$this->response([

					'status' => TRUE,

					'message' => 'User '.$r['first_name']." ".$r['last_name'].' logged in successfully.',

					'data' => array(

						'user_info' => array('first_name' => $r['first_name'],

											'last_name' => $r['last_name'])
						)

				], REST_Controller::HTTP_OK);

			}

			else
			{
				// Set the response and exit
				//BAD_REQUEST (400) beinglo the HTTP response code
				$this->response([

					'status' => false,

					'message' =>" Wrong Username or Password",

					'data' => []

				], REST_Controller::HTTP_BAD_REQUEST);

			}

		}else{

				$this->response([

					'status' => TRUE,

					'message' => 'Please submit username password.',

					'data' => []

				], REST_Controller::HTTP_OK);

		}

	}

}