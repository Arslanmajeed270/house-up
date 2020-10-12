<?php
  
if (!defined('BASEPATH')) exit('No direct script access allowed');
 
class Users_Modal extends CI_Model {
    public function __construct()
    {
        parent::__construct();
        // Load the database library
        $this->load->database();
    }


    public function read(){
		$query = $this->db->query("select * from `hu_users`");
		return $query->result_array();
    }

    public function Signup($data){
		$this->userTbl = 'hu_users';
		$datauser['first_name']    = $data['first_name']; // please read the below note
		$datauser['last_name '] = $data['last_name'];
		$datauser['user_name']  = $data['user_name'];
		$datauser['password']  = $data['password'];
		$datauser['contact_no']  = $data['contact_no'];
		$datauser['account_type']  = 'User';
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
	 function getUsers($params = array())
    {
		$this->db->select('*');
		$this->db->from('hu_users');
		$this->db->where_not_in('account_type' , array('Bussiness'));
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
	function getUserByID($params = array())
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
		$this->db->where('account_type','User');
		
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
  function getUserByStatus($params = array())
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
	  function getUserByUsername($params = array())
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