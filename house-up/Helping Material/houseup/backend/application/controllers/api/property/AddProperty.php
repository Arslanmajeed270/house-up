<?php 

if (!defined('BASEPATH')) exit('No direct script access allowed');

// Load the Rest Controller library

require APPPATH.'/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;
class AddProperty extends REST_Controller {
  
    public function __construct()
    { 
        parent::__construct();                // Load the user model
        $this->load->model('api/Property/Property_Modal');
    }    


    public function test_post()

    {
    	print_r($this->input->post());

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

	public function Add_get()
    {
		$get = $this->input->get(NULL,true);
		$property_purpose = $this->input->get('property_purpose');
		$property_type = $this->input->get('property_type');
		$exclusive = $this->input->get('exclusive');
		$galleryid = $this->input->get('galleryid');
		$packageid = $this->input->get('packageid');
		$bedrooms = $this->input->get('bedrooms');
		$bathrooms = $this->input->get('bathrooms');
		$balconies = $this->input->get('balconies');
		$kitchen = $this->input->get('kitchen');  
		$livingroom = $this->input->get('livingroom');
		$furnished_status = $this->input->get('furnished_status');
		$plot_area = $this->input->get('plot_area');
		//bedrooms	bathrooms	balconies	kitchen	livingroom	furnished_status	plot_area
			//propertyid	property_purpose	property_type	property_location	exclusive	galleryid	packageid	bedrooms	bathrooms	balconies	kitchen	livingroom	furnished_status	plot_area

		if((isset($property_purpose) && !empty($property_type)) || (isset($exclusive) && !empty($exclusive)) || (isset($plot_area) && !empty($plot_area))){

		   $data =   array('property_purpose' => $this->input->get('property_purpose'),

						   'property_type' => $this->input->get('property_type'),

						   'exclusive' => $this->input->get('exclusive'),

						   'galleryid' => $this->input->get('galleryid'),

						   'packageid' => $this->input->get('packageid'),

						   'bedrooms' => $this->input->get('bedrooms'), 

						   'bathrooms' => $this->input->get('bathrooms'),

						   'balconies' => $this->input->get('balconies'),

						   'kitchen' => $this->input->get('kitchen'),

						   'livingroom' => $this->input->get('livingroom'),

						   'furnished_status' => $this->input->get('furnished_status'),

						   'plot_area' => $this->input->get('plot_area')
			);

		   $r = $this->Property_Modal->addProperty($data);
          // $this->response($r); 
        if($r)

        {
            // Set the response and exit
            $this->response([

                'status' => TRUE,

                'message' => 'Property Added successfully.',

                'data' => [$r]

            ], REST_Controller::HTTP_OK);
        }
        else
        {
            // Set the response and exit
            //BAD_REQUEST (400) being the HTTP response code
            $this->response("Something bad happened, Try again...", REST_Controller::HTTP_BAD_REQUEST);
        }
	  }else{

            $this->response(['message' =>"Please enter required parameters", 'status' => FALSE], REST_Controller::HTTP_BAD_REQUEST);
	  }
    }
	

}