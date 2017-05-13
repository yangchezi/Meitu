<?php
    //接受提交上来的数据
    header('content-type:text/html;charset="utf-8"');
    //1、接受用户提交的学生信息
    //【注】$_POST 包含了表单通过POST提交上来的所有数据
    //echo 相当于JS中的document.write()
    //print_r 相当于JS中的console.log
    // echo '<pre>';
    // print_r($_POST);
    //将提交上来的数据取出来
    $userName = $_POST['userName'];
    $password = $_POST['password'];
    //print_r($password);

    //2、链接数据库(mysql)
    /*
        mysql_connect('localhost', 'root', '123456');
        第一个参数表示:数据库所在的主机地址
        第二个参数表示:数据的用户名
        第三个参数表示:密码
        返回值: 是布尔值 true链接成功 false 链接失败
    */
    mysql_connect("localhost","root","123456");   //连接数据库
    mysql_select_db("hisense");  //选择数据库
    $sql = "select userName,password from user where userName = '$userName' and password = '$password'";
    $result = mysql_query($sql);
    $num = mysql_num_rows($result);
    if($num)
    {
        $row = mysql_fetch_array($result);  //将数据以索引方式储存在数组中
        // echo "<script>location.replace('http://localhost/hisense/html/index.html?user=$row[0]');</script>";
        // echo "<script>document.cookie='user=$row[0]';</script>";
        setcookie("user",$row[0],0,'/');
        echo "<script>location.replace('http://localhost/hisense/html/index.html');</script>";
        // echo $row[0];
    }
    else
    {
        echo "<script>alert('用户名或密码不正确！');history.go(-1);</script>";
    }
?>