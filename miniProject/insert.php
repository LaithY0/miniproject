<?php

include_once("./conn.php");

if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);

    $fname = ($user['fname']);
    $mname = ($user['mname']);
    $lname = ($user['lname']);
    $fmname = ($user['fmname']);
    $age = ($user['date']);
    $email = ($user['email']);
    $password = ($user['password']);
    $phone = ($user['phone']);

}


$sql = "INSERT INTO users (firstname , middlename , lastname , Fname , age , email , passwordd , phone)
 VALUES ('$fname' , '$mname' , '$lname' , '$fmname' , '$age' , '$email' , '$password' , '$phone') ";


$conn->exec($sql);




















// print_r($user['fname']);
    // echo "<br>";
    // print_r( $mname);
    // echo "<br>";
    // print_r($lname);
    // echo "<br>";
    // print_r($fmname);
    // echo "<br>";
    // print_r($age);
    // echo "<br>";
    // print_r($password);
    // echo "<br>";
    // print_r($phone);
    // echo "<br>";
    
?>