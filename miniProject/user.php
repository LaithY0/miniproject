<?php
include_once("conn.php");


if(isset($_GET)){

    session_start();

    $id = $_SESSION['user'];

    echo json_encode("strinf id == " . $id);

    $query = "SELECT * FROM users  ";
    $ret = $conn->query($query);
    $data = $ret->fetchAll(PDO::FETCH_ASSOC);
    // echo json_encode($data);




}


?>