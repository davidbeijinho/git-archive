<?php
/*
require 'vendor/autoload.php';
$sendgrid = new SendGrid('app31980293@heroku.com', 'yd0ibbkp');

$message = new SendGrid\Email();
$message->addTo('davidbeijinho@gmail.com')->
          setFrom('me@bar.com')->
          setSubject('Subject goes here')->
          setText('Hello World!')->
          setHtml('<strong>Hello World!</strong>');
$response = $sendgrid->send($message);
*/



$url = 'https://api.sendgrid.com/';
$user = 'app31980293@heroku.com';
$pass = 'yd0ibbkp';

$params = array(
    'api_user'  => $user,
    'api_key'   => $pass,
    'to'        => 'davidbeijinho@gmail.com',
    'subject'   => $_POST['subject'],
    'html'      => $_POST['name'] . $_POST['message'],
    'text'      => $_POST['name'] . $_POST['message'],
    'from'      => $_POST['email'],
  );


$request =  $url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
// Tell PHP not to use SSLv3 (instead opting for TLS)
curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

// print everything out

//print_r($params);



print_r($response);



?>

