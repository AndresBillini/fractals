<?php
if(isset($_GET['name']) && isset($_GET['mail']) && isset($_GET['message'])){
  $name = $_GET['name'];
  $subject = "Contact Us Mobile";
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
          echo "<p id='thanks'>Thank you!<br> We'll contact<br> you briefly</p>";   
        } 

    }else{
        
       echo'<form id="form" name="contactForm">
           Name / Company:<br>'; 
        
         if(empty($name) || $name == "Empty"){
            echo '<input class="formInput" name="name" id="fname" type="text" style="border-color: red;"
            value="Empty" onclick="borron(1)">';
         }else{
             echo '<input class="formInput" name="name" type="text" style="border-color: none;" value='.$name.' onclick="borron(1)">';
         }
        
          
          echo '<br><br>
                Email:<br>
                <input class="formInput" name="mail" type="text"  style="border-color: red;" value="Email not valid" onclick="borron(2)"><br><br>
                Message:<br>';
        if(empty($message) || $message=="No message."){
            echo '<textarea class="formInput textarea" name="message" style="border-color: red;" type="text">No message.</textarea>';
        }else{
            echo '<textarea class="formInput textarea" name="message" style="border-color: none;" type="text">'.$message.'</textarea>';
        }
        echo '<div class="submitButton" onclick="submit(2)">&nbsp Submit &nbsp</div>
        </form>';
    }
  }else{
       echo'<form id="form" name="contactForm">
           Name / Company:<br>'; 
        
         if(empty($name) || $name == "Empty"){
            echo '<input class="formInput" name="name" id="fname" type="text" style="border-color: red;"
            value="Empty" onclick="borron(1)">';
         }else{
             echo '<input class="formInput" name="name" style="border-color: none;" type="text" value='.$name.'>';
         }
            echo '<br><br>
                Email:<br>';
         if(empty($email) || $email == "Empty"){
            echo '<input class="formInput" name="mail" id="fmail" type="text"  style="border-color: red;" value="Empty" onclick="borron(2)">';
         }else{
             echo '<input class="formInput" name="mail" style="border-color: none;" type="text" value='.$email.'>';
         }    
            echo '<br><br>
                Message:<br>';
        if(empty($message) || $message=="No message."){
            echo '<textarea class="formInput textarea" id="fmessage" name="message" style="border-color: red;" type="text" onclick="borron(3)">No message.</textarea>';
        }else{
            echo '<textarea class="formInput textarea" name="message" style="border-color: none;" type="text">'.$message.'</textarea>';
        }
        echo '<div class="submitButton" onclick="submit(2)">&nbsp Submit &nbsp</div>
        </form>';
  }
}else{
  echo "Wrong data";
}
?>