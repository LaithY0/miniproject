<?php

$server = "localhost";
$user = "root";
$password = "";



try{

  $conn = new PDO ("mysql:host=$server;dbname=miniproject", $user, $password);

}
catch(PDOException $e){
  echo "Connection failed: " . $e->getMessage();
}


?>