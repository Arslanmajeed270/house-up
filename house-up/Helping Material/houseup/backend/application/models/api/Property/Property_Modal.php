<?php
  
if (!defined('BASEPATH')) exit('No direct script access allowed');
 
class Property_Modal extends CI_Model {
    public function __construct()
    {
        parent::__construct();
        // Load the database library
        $this->load->database();
    }
   
    public function addProperty($data){
		$property_purpose  =  isset($data['property_purpose'])?$data['property_purpose']:NULL;
		$property_type  = isset($data['property_type'])?$data['property_type']:NULL;
		$property_location  = isset($data['property_location'])?$data['property_location']:NULL;
		$exclusive  =   isset($data['exclusive'])?$data['exclusive']:NULL;
		$galleryid  =   isset($data['galleryid'])?$data['galleryid']:NULL;
		$packageid  =   isset($data['packageid'])?$data['packageid']:NULL;
		$bedrooms   =   isset($data['bedrooms'])?$data['bedrooms']:NULL; 
		$bathrooms  =   isset($data['bathrooms'])?$data['bathrooms']:NULL;
		$balconies  =   isset($data['balconies'])?$data['balconies']:NULL;
		$kitchen    =   isset($data['kitchen'])?$data['kitchen']:NULL;
		$livingroom  =   isset($data['livingroom'])?$data['livingroom']:NULL;
		$furnished_status  =  isset($data['furnished_status'])?$data['furnished_status']:NULL;
		$plot_area  =  isset($data['plot_area'])?$data['plot_area']:NULL;

				$sql = "INSERT INTO `property` (`propertyid`, `property_purpose`, `property_type`, `property_location`,
				`exclusive`, `galleryid`, `packageid`, `bedrooms`, `bathrooms`, `balconies`, 
				`kitchen`, `livingroom`, `furnished_status`, `plot_area`) 
				VALUES		(NULL, '".$property_purpose."', '".$property_type."', '".$property_location."', '".$exclusive."', 
				'".$galleryid."', '".$packageid."', '".$bedrooms."', '".$bathrooms."', 
				'".$balconies."', '".$kitchen."', '".$livingroom."', '".$furnished_status."', '".$plot_area."')";
		if($this->db->query($sql)){
			return $this->db->insert_id();
		}else{
				return false;
		}
    }	
 
    public function update($id,$data){
		$this->first_name    = $data['first_name']; // please read the below note
		$this->last_name  = $data['last_name'];
		$this->user_name  = $data['user_name'];
		$this->password  = $data['password'];
		$this->contact_no  = $data['contact_no'];
		$this->ref_by  = $data['ref_by'];
		$this->last_name  = $data['last_name'];
		$this->status = $data['status'];
		$result = $this->db->update('hu_users',$this,array('user_id' => $id));
		if($result)
		{
			return $id;
		}
		else
		{
			return false;
		}
    }
    public function delete($id){
		$result = $this->db->query("delete from `hu_users` where user_id = $id");
		if($result)
		{
			return "Data is deleted successfully";
		}
		else
		{
			return "Error has occurred";
		}
     }
   }