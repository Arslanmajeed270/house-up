<?php 

if (!defined('BASEPATH')) exit('No direct script access allowed');

// Load the Rest Controller library

require APPPATH.'/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;


class Signup extends REST_Controller {

    public function __construct()

    { 
        parent::__construct();
        // Load the user model

        $this->load->model('api/Users/App/Users_Modal');

    }


    public function test_post()

    {
    	//print_r($this->input->post());

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


		
    public function add_get()

    {

		$post = $this->input->get(NULL,true);

		$password = $this->input->get('password');

		$contact_no = $this->input->get('contact_no');
		$username = $this->input->get('username');

       	// $users = $this->REST_Modal->Signup();
    	  	//user_id	first_name	last_name	user_name	password	contact_no	ref_by	status

		if((isset($username) && !empty($username)) || (isset($password) && !empty($password)) || (isset($contact_no) && !empty($contact_no))){

		   $data =   array('first_name' => $this->input->get('first_name'),

						   'last_name' => $this->input->get('last_name'),

						   'user_name' => $this->input->get('user_name'),

						   'password' => $this->input->get('password'),

						   'contact_no' => $this->input->get('contact_no'),

						   'account_type' => 'User',

						   'ref_by' => $this->input->get('ref_by'),

						   'status' => 'inactive'

			);

		   $r = $this->Users_Modal->Signup($data);

          // $this->response($r); 

        if($r)

        {

            $this->response([

                'status' => TRUE,

                'message' => 'User registered successfully.',

                'data' => [$r]

            ], REST_Controller::HTTP_OK);

        }

        else

        {
            $this->response("Something bad happened, Try again...", REST_Controller::HTTP_BAD_REQUEST);

        }

	  }else{

            $this->response(['message' =>"Please enter required parameters", 'status' => FALSE], REST_Controller::HTTP_BAD_REQUEST);

	  }

    }


}