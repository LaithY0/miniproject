
<?php 

include_once("conn.php");


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $query = "SELECT * FROM users";
    $ret = $conn->query($query);
    $data = $ret->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
    
}else{
    echo 'ff';
}
?>