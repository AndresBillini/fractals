<?php
if(isset($_GET['name']) && isset($_GET['mail']) && isset($_GET['message'])){
  $name = $_GET['name'];
  $subject = "Contact Us";
  $email = $_GET['mail'];
  $message = $_GET['message'];
  $var = false;
  if(!empty($name) && $name!="Empty" && !empty($subject) && !empty($email) && $email!="Empty" && !empty($message) && $message!="No message."){
      
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) $var = true;
    if($var){

      $header = "From: start@fractals.studio\r\n";
      $mailt = "start@fractals.studio";
      $body = "Contact info:\n\n Name: ".$name."\n\n Email: ".$email."\n\n Message:".$message;
      $body2 = "Thank you! We'll contact you briefly.";
        if(@mail($mailt, $subject, $body, $header)){
          @mail($email, $subject, $body2, $header);
          echo "yes";  
        }  

    }else{
        
       echo'<form name="contactForm">
           <p class="inputLabel">Name / Company</p>'; 
        
         if(empty($name) || $name == "Empty"){
            echo '<input class="hexInput" name="name" id="fname" type="text" style="border-color: red;"
            value="Empty" onclick="borron(1)">';
         }else{
             echo '<input class="hexInput" name="name" type="text" style="border-color: none;" value='.$name.' onclick="borron(1)">';
         }
        
          
          echo '<p class="inputLabel">Email</p>
                <input class="hexInput" name="mail" type="text"  style="border-color: red;" value="Email not valid" onclick="borron(2)">
                <p class="inputLabel">Message</p>';
        if(empty($message) || $message=="No message."){
            echo '<textarea class="hexInput2" name="message" style="border-color: red;" type="text">No message.</textarea>';
        }else{
            echo '<textarea class="hexInput2" name="message" style="border-color: none;" type="text">'.$message.'</textarea>';
        }
        echo '</form>';
    }
  }else{
       echo'<form name="contactForm">
           <p class="inputLabel">Name / Company</p>'; 
        
         if(empty($name) || $name == "Empty"){
            echo '<input class="hexInput" name="name" id="fname" type="text" style="border-color: red;"
            value="Empty" onclick="borron(1)">';
         }else{
             echo '<input class="hexInput" name="name" style="border-color: none;" type="text" value='.$name.'>';
         }
            echo '<p class="inputLabel">Email</p>';
         if(empty($email) || $email == "Empty"){
            echo '<input class="hexInput" name="mail" id="fmail" type="text"  style="border-color: red;" value="Empty" onclick="borron(2)">';
         }else{
             echo '<input class="hexInput" name="mail" style="border-color: none;" type="text" value='.$email.'>';
         }    
            echo '<p class="inputLabel">Message</p>';
        if(empty($message) || $message=="No message."){
            echo '<textarea class="hexInput2" id="fmessage" name="message" style="border-color: red;" type="text" onclick="borron(3)">No message.</textarea>';
        }else{
            echo '<textarea class="hexInput2" name="message" style="border-color: none;" type="text">'.$message.'</textarea>';
        }
        echo '</form>';
  }
}else{
  echo "Wrong data";
}
?>