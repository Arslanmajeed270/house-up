<?php
  
if (!defined('BASEPATH')) exit('No direct script access allowed');
 
class BussinessUsers_Modal extends CI_Model {
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
    public function read(){
		$query = $this->db->query("select * from `hu_users`");
		return $query->result_array();
    }

    public function SignupBussiness($data){
		$this->userTbl = 'hu_users';
		$datauser['first_name']    = $data['first_name']; // please read the below note
		$datauser['last_name '] = $data['last_name'];
		$datauser['user_name']  = $data['user_name'];
		$datauser['password']  = $data['password'];
		$datauser['contact_no']  = $data['contact_no'];
		$datauser['profession']  = $data['profession'];
		$datauser['bussiness_registered_id']  = $data['bussiness_registered_id'];
		$datauser['account_type']  = 'Bussiness';
		$datauser['ref_by']  = $data['ref_by'];
		$datauser['status'] = $data['status'];
		if($this->db->insert('hu_users',$datauser))        {     // $insert_id = $this->db->insert_id();
		// return $insert_id;
			return $datauser;
		}
		else
		{
			return false;
		}
    }
	 function getBussinessUsers($params = array())
    {
		$this->db->select('*');
		$this->db->from('hu_users');
		$this->db->where('account_type','Bussiness');
    //fetch data by conditions
    if(array_key_exists("conditions",$params))
    {
		foreach($params['conditions'] as $key => $value)
		{
			$this->db->where($key,$value);
		}
    }
    if(array_key_exists("id",$params))
    {
		$this->db->where('id',$params['id']);
		$query = $this->db->get();
		$result = $query->row_array();
    }
    else
    {
    //set start and limit
    if(array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit'],$params['start']);
    }
    elseif(!array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit']);
    }
    if(array_key_exists("returnType",$params) && $params['returnType'] == 'count')
    {
		$result = $this->db->count_all_results();    }
    elseif(array_key_exists("returnType",$params) && $params['returnType'] == 'single')
    {
		$query = $this->db->get();
		$result = ($query->num_rows() > 0)?$query->row_array():false;
    }
		else
		{
			$query = $this->db->get();
			$result = ($query->num_rows() > 0)?$query->result_array():false;
		}
    }
    //return fetched data
    return $result;
    // echo $this->db->last_query();
    // print_r($result);
    // exit;
    }	
	function getBussinessUserByID($params = array())
    {
		$this->db->select('*');
		$this->db->from('hu_users');
    if(array_key_exists("conditions",$params))
    {
		foreach($params['conditions'] as $key => $value)
		{
			$this->db->where($key,$value);
		}
    }
    if(array_key_exists("id",$params))
    {
		$this->db->where('user_id',$params['id']);
		$query = $this->db->get();
		$result = $query->row_array();
    }
    else
    {
    //set start and limit
    if(array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit'],$params['start']);
    }
    elseif(!array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit']);
    }
    if(array_key_exists("returnType",$params) && $params['returnType'] == 'count')
    {
		$result = $this->db->count_all_results();    }
    elseif(array_key_exists("returnType",$params) && $params['returnType'] == 'single')
    {
		$query = $this->db->get();
		$result = ($query->num_rows() > 0)?$query->row_array():false;
    }
		else
		{
			$query = $this->db->get();
			$result = ($query->num_rows() > 0)?$query->result_array():false;
		}
    }
    //return fetched data
    return $result;
    // echo $this->db->last_query();
    // print_r($result);
    // exit;
    }	
  function getBussinessUserByProfession($params = array())
    {
		$this->db->select('*');
		$this->db->from('hu_users');
    if(array_key_exists("conditions",$params))
    {
		foreach($params['conditions'] as $key => $value)
		{
			$this->db->where($key,$value);
		}
    }
    if(array_key_exists("id",$params))
    {
		$this->db->where('user_id',$params['id']);
		$query = $this->db->get();
		$result = $query->row_array();
    }
    else
    {
    //set start and limit
    if(array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit'],$params['start']);
    }
    elseif(!array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit']);
    }
    if(array_key_exists("returnType",$params) && $params['returnType'] == 'count')
    {
		$result = $this->db->count_all_results();    }
    elseif(array_key_exists("returnType",$params) && $params['returnType'] == 'single')
    {
		$query = $this->db->get();
		$result = ($query->num_rows() > 0)?$query->row_array():false;
    }
		else
		{
			$query = $this->db->get();
			$result = ($query->num_rows() > 0)?$query->result_array():false;
		}
    }
    //return fetched data
    return $result;
    // echo $this->db->last_query();
    // print_r($result);
    // exit;
    }	
	  function getBussinessUserByUsername($params = array())
    {
		$this->db->select('*');
		$this->db->from('hu_users');
    if(array_key_exists("conditions",$params))
    {
		foreach($params['conditions'] as $key => $value)
		{
			$this->db->where($key,$value);
		}
    }
    if(array_key_exists("id",$params))
    {
		$this->db->where('user_id',$params['id']);
		$query = $this->db->get();
		$result = $query->row_array();
    }
    else
    {
    //set start and limit
    if(array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit'],$params['start']);
    }
    elseif(!array_key_exists("start",$params) && array_key_exists("limit",$params))
    {
		$this->db->limit($params['limit']);
    }
    if(array_key_exists("returnType",$params) && $params['returnType'] == 'count')
    {
		$result = $this->db->count_all_results();    }
    elseif(array_key_exists("returnType",$params) && $params['returnType'] == 'single')
    {
		$query = $this->db->get();
		$result = ($query->num_rows() > 0)?$query->row_array():false;
    }
		else
		{
			$query = $this->db->get();
			$result = ($query->num_rows() > 0)?$query->result_array():false;
		}
    }
    //return fetched data
    return $result;
    // echo $this->db->last_query();
    // print_r($result);
    // exit;
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