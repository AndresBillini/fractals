<?php


$x = $_GET['name'];

$myObj = new stdClass();
$window = 'window.location.href=';

$test = "<div id='menu' onmouseover='relocate(0)' onmouseout='relocate(1)'>
      <div id='menuLogo'></div>
      <div id='optionsHolder'>
         <a href='index.html'>
          <div class='menuOpt' id='mO1' >
              <p class='optTitle'>HOME</p>
              <div class='mOD' id='mOD1'></div>
          </div>
          </a>";

if($x==1){
   $test1 = "<a href='portfolio.html'>
          <div class='menuOpt' id='mO2' >
              <p class='optTitle'>PORTFOLIO</p>
              <div class='mOD2' id='mOD2'></div>

          </div>
          </a>

          <a href='about.html'>
          <div class='menuOpt' id='mO3' >
              <p class='optTitle'>ABOUT US</p>
              <div class='mOD' id='mOD4'></div>

          </div>
          </a>

          <a href='experiments.html'>
          <div class='menuOpt' id='mO4' >
              <p class='optTitle'>EXPERIMENTS</p>
              <div class='mOD2' id='mOD5'></div>
          </div>
          </a>"; 
   $page="'http://es.fractals.studio/servicios.html'";
}  

if($x==2){
   $test1 = "<a href='services.html'>
          <div class='menuOpt' id='mO2'>
              <p class='optTitle'>SERVICES</p>
              <div class='mOD2' id='mOD3'></div>

          </div>
          </a>

          <a href='about.html'>
          <div class='menuOpt' id='mO3'>
              <p class='optTitle'>ABOUT US</p>
              <div class='mOD' id='mOD4'></div>

          </div>
          </a>

          <a href='experiments.html'>
          <div class='menuOpt' id='mO4'>
              <p class='optTitle'>EXPERIMENTS</p>
              <div class='mOD2' id='mOD5'></div>
          </div>
          </a>"; 
   $page="'http://es.fractals.studio/portafolio.html'";
}  

if($x==3){
   $test1 = "
          <a href='services.html'>
          <div class='menuOpt' id='mO6'>
              <p class='optTitle'>SERVICES</p>
              <div class='mOD2' id='mOD3'></div>

          </div>
          </a>
   
          <a href='portfolio.html'>
          <div class='menuOpt' id='mO2'>
              <p class='optTitle'>PORTFOLIO</p>
              <div class='mOD' id='mOD2'></div>

          </div>
          </a>
          
          

          <a href='experiments.html'>
              <div class='menuOpt' id='mO4'>
                  <p class='optTitle'>EXPERIMENTS</p>
                  <div class='mOD2' id='mOD5'></div>
              </div>
          </a>"; 
   $page="'http://es.fractals.studio/nosotros.html'";
}  

if($x==4){
   $test1 = "<a href='services.html'>
          <div class='menuOpt' id='mO2'>
              <p class='optTitle'>SERVICES</p>
              <div class='mOD2' id='mOD3'></div>

          </div>
          </a>
          
          <a href='portfolio.html'>
          <div class='menuOpt' id='mO4'>
              <p class='optTitle'>PORTFOLIO</p>
              <div class='mOD' id='mOD2'></div>

          </div>
         </a>
         
          <a href='about.html'>
          <div class='menuOpt' id='mO3'>
              <p class='optTitle'>ABOUT US</p>
              <div class='mOD2' id='mOD4'></div>

          </div>
          </a>
         "; 
   $page="'http://es.fractals.studio/experimentos.html'";
}          


$test2 = "<div class='menuOpt' id='mO5' onclick='deployContact(0)'>
              <p class='optTitle'>CONTACT</p>
              <div class='mOD' id='mOD6'></div>
          </div>
        
      </div>
      <div id='login'></div>
      <div id='currentLanguage'>English</div>
      <div id='langButton' onclick=".$window.$page.">
          EN / SP
      </div>
  </div>";

$myObj->menu = $test.$test1.$test2;
$myObj->footer = "<a href='https://www.facebook.com/fractals.studio/?ref=bookmarks' target='_blank'>
      <div class='socM' id='fcb'><div class='sMI' id='fbi'></div></div>
  </a>
  <a href='https://twitter.com/FractalsStudio' target='_blank'>
    <div class='socM' id='twt'><div class='sMI' id='twi'></div></div>
  </a>
  <a href='https://www.instagram.com/fractals.studio/' target='_blank'>
      <div class='socM' id='ins'><div class='sMI' id='ini'></div></div>
  </a>
  <a href='https://www.linkedin.com/company/16174517?trk=tyah&trkInfo=clickedVertical%3Acompany%2CentityType%3AentityHistoryName%2CclickedEntityId%3Acompany_16174517%2Cidx%3A0' target='_blank'>
      <div class='socM' id='lnk'><div class='sMI' id='lii'></div></div>
  </a>";

$myObj->contactos = "<div id='layer'></div>
    <p id='thankYou'>Thank you!</p><p id='thankYou2'>We'll  contact<br> you briefly</p>
    <div class='contactHex' id='cH1' onclick='space()'>
       <form name='contactForm'>
           <p class='inputLabel'>Name / Company</p>
            <input class='hexInput' name='name' type='text'>
            <p class='inputLabel'>Email</p>
            <input class='hexInput' name='mail' type='text'>
            <p class='inputLabel'>Message</p>
           <textarea class='hexInput2' name='message' type='text'></textarea>
        </form>
    </div>
    <div class='contactHex' id='cH2'></div>
    <div class='contactHex' id='cH3'></div>
    
    <div class='contactHex' id='cH4'>
        <div id='submitButton' onclick='submit(1)'>SUBMIT</div>    
    </div>
    
    <div class='contactHex' id='cH5'></div>
    <div class='contactHex' id='cH6' onclick='deployContact(1)'></div>";

$myJSON = json_encode($myObj);

echo $myJSON;

?>