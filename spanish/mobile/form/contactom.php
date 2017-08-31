<?php
if(isset($_GET['name']) && isset($_GET['mail']) && isset($_GET['message'])){
  $name = $_GET['name'];
  $subject = "Contactanos Movil";
  $email = $_GET['mail'];
  $message = $_GET['message'];
  $var = false;
  if(!empty($name) && $name!="Vacío" && !empty($subject) && !empty($email) && $email!="Vacío" && !empty($message) && $message!="No hay mensaje."){
      
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) $var = true;
    if($var){

      $header = "From: start@fractals.studio\r\n";
      $mailt = "start@fractals.studio";
      $body = "Contact info:\n\n Nombre: ".$name."\n\n Email: ".$email."\n\n Mensaje:".$message;
      $body2 = "¡Gracias! Te contactaremos en breve.";

        if(@mail($mailt, $subject, $body, $header)){
            @mail($email, $subject, $body2, $header);
            echo "<p id='thanks'>Gracias!<br> Te contactaremos<br> en breve</p>";
        }  

    }else{
        
       echo'<form id="form" name="contactForm">
           Nombre / Compañía:<br>'; 
        
         if(empty($name) || $name == "Vacío"){
            echo '<input class="formInput" name="name" id="fname" type="text" style="border-color: red;"
            value="Vacío" onclick="borron(1)">';
         }else{
             echo '<input class="formInput" name="name" type="text" style="border-color: none;" value='.$name.' onclick="borron(1)">';
         }
        
          
          echo '<br><br>
                Email:<br>
                <input class="formInput" name="mail" type="text"  style="border-color: red;" value="Email not valid" onclick="borron(2)"><br><br>
                Mensaje:<br>';
        if(empty($message) || $message=="No hay mensaje."){
            echo '<textarea class="formInput textarea" name="message" style="border-color: red;" type="text">No hay mensaje.</textarea>';
        }else{
            echo '<textarea class="formInput textarea" name="message" style="border-color: none;" type="text">'.$message.'</textarea>';
        }
        echo '<div class="submitButton" onclick="submit(2)">&nbsp Enviar &nbsp</div>
        </form>';
    }
  }else{
       echo'<form id="form" name="contactForm">
           Nombre / Compañía:<br>'; 
        
         if(empty($name) || $name == "Vacío"){
            echo '<input class="formInput" name="name" id="fname" type="text" style="border-color: red;"
            value="Vacío" onclick="borron(1)">';
         }else{
             echo '<input class="formInput" name="name" style="border-color: none;" type="text" value='.$name.'>';
         }
            echo '<br><br>
                Email:<br>';
         if(empty($email) || $email == "Vacío"){
            echo '<input class="formInput" name="mail" id="fmail" type="text"  style="border-color: red;" value="Vacío" onclick="borron(2)">';
         }else{
             echo '<input class="formInput" name="mail" style="border-color: none;" type="text" value='.$email.'>';
         }    
            echo '<br><br>
                Mensaje:<br>';
        if(empty($message) || $message=="No hay mensaje."){
            echo '<textarea class="formInput textarea" id="fmessage" name="message" style="border-color: red;" type="text" onclick="borron(3)">No hay mensaje.</textarea>';
        }else{
            echo '<textarea class="formInput textarea" name="message" style="border-color: none;" type="text">'.$message.'</textarea>';
        }
        echo '<div class="submitButton" onclick="submit(2)">&nbsp Enviar &nbsp</div>
        </form>';
  }
}else{
  echo "Wrong data";
}
?>