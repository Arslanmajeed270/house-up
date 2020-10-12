<?php 
/**
* 
*/
class Rest extends CI_Controller
{
	 public function index()
	 {
	 	// API key
		$apiKey = 'jGTnyOPCWnR3gKPtuHrjoaQvcqnY4QVm';

		// API auth credentials
		$apiUser = "valid_house";
		$apiPass = "house_@!.";

		// API URL
		$url = 'http://houseup.ca/backend/index.php/api/users/Auth/test';

		// User account info
// 		$userData = array(
// 		    'email' => 'john@example.com',
// 		    'password' => '1234'
// 		);

		// Create a new cURL resource
		$ch = curl_init($url);

		curl_setopt($ch, CURLOPT_TIMEOUT, 30);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-API-KEY: " . $apiKey));
		curl_setopt($ch, CURLOPT_USERPWD, "$apiUser:$apiPass");
// 		curl_setopt($ch, CURLOPT_POST, 1);
// 		curl_setopt($ch, CURLOPT_POSTFIELDS, $userData);

		$result = curl_exec($ch);
// 		if(curl_errno($ch)){
            echo 'Request Error:' . curl_error($ch);
        // }
		echo '<pre>';
		print_r($result);
		echo '</pre>';

		// Close cURL resource
		curl_close($ch);

	 }
	 
}
