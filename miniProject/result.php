<?php include_once("conn.php");


echo json_encode("1");

if($_SERVER['REQUEST_METHOD'] === 'POST'){


    $data = file_get_contents("php://input");

    $user = json_decode($data , true);
     var_dump($data);
 session_start();


$id = $user->id;

echo $id;

$_SESSION['user'] = $id;


var_dump($_SESSION['user']);

}

?>