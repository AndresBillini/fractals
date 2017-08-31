function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function hexfill(){
  var hexH=document.getElementById('hexHolder');
  var chosen1=Math.round(rand(0,3));
  var chosen2=Math.round(rand(0,3));
  var chosen3=Math.round(rand(0,3));
  var chosen4=Math.round(rand(0,3));
  var chosen5=Math.round(rand(0,3));

  var rCh1;
  var rCh2;
  var rCh3;
  var rCh4;
  var rCh5;
  var rCh6=66;
  //var rCh7=54;
    

  switch (chosen1){case 0:rCh1=15;break;case 1:rCh1=41;break; case 2:rCh1=55;break; case 3:rCh1=67;break;}
  switch (chosen2){case 0:rCh2=17;break;case 1:rCh2=43;break; case 2:rCh2=57;break; case 3:rCh2=69;break;}
  switch (chosen3){case 0:rCh3=19;break;case 1:rCh3=45;break; case 2:rCh3=59;break; case 3:rCh3=71;break;}
  switch (chosen4){case 0:rCh4=21;break;case 1:rCh4=47;break; case 2:rCh4=61;break; case 3:rCh4=73;break;}
  switch (chosen5){case 0:rCh5=23;break;case 1:rCh5=49;break; case 2:rCh5=62;break; case 3:rCh5=75;break;}

  for (i=0;i<350;i++){
    if (i==13 || i==39 || i==65 || i==91 || i==117 || i==143 || i==169 || i==195 || i==221 || i==247 || i==273 || i==299 || i==325){
        hexH.innerHTML+="<div class='hex hex2R'>"+i+"</div>";
    }
    else{
      if (i==28){
        hexH.innerHTML+="<div class='hex logo'></div>";
      }else{
        if(i==rCh1 || i==rCh2 || i==rCh3 || i==rCh4 || i==rCh5 || i==rCh6 /*|| i==rCh7*/){
          var services = '"services.html"';
          var portfolio = '"portfolio.html"';
          var about='"about.html"';
          if(i==rCh1){
              hexH.innerHTML+="<a href="+services+"><div class='hex opt' onmouseover='optColor(this)' onmouseout='optColor2(this)'><p class='optTitle'>SERVICES</p></div></a>";
          }
          if(i==rCh2){
              hexH.innerHTML+="<a href="+portfolio+"><div class='hex opt' onmouseover='optColor(this)' onmouseout='optColor2(this)'><p class='optTitle'>PORTFOLIO</p></div></a>";
          }
          if(i==rCh3){
              hexH.innerHTML+="<a href="+about+"><div class='hex opt' onmouseover='optColor(this)' onmouseout='optColor2(this)'><p class='optTitle'>ABOUT US</p></div></a>";
          }
          if(i==rCh4){
              hexH.innerHTML+="<a href='experiments.html'><div class='hex opt' onmouseover='optColor(this)' onmouseout='optColor2(this)'><p class='optTitle'>EXPERIMENTS</p></div></a>";
          }
          if(i==rCh5){
              hexH.innerHTML+="<div class='hex opt' onmouseover='optColor(this)' onmouseout='optColor2(this)'  onclick='deployContact(0)'><p class='optTitle'>CONTACT US</p></div>";
          }
          if(i==rCh6){
              hexH.innerHTML+="<a href='http://es.fractals.studio/'><div class='hex sixtySix' onmouseover='optColor(this)' onmouseout='optColor3(this)' ><p class='optTitle'>EN ESPAÑOL</p></div></a>";
          }
         /* if(i==rCh7){
              hexH.innerHTML+="<div class='hex hexModel3' onclick='log()'><div id='login'><p class='optTitle'>LOGIN</p><div id='layer2'><fb:login-button id='face' scope='public_profile,email' onlogin='checkLoginState();'></fb:login-button></div></div></div>";
          }*/
        }else{
          if(i==29 || i==30 || i==31){
            hexH.innerHTML+="<div class='hex hexModel"+Math.round(rand(2,3))+"'></div>";
          }
          else{
            hexH.innerHTML+="<div class='hex hexModel"+Math.round(rand(0,15))+"'></div>";
          }
        }
      }
    }
  }

}

function optColor(element){
  element.childNodes[0].style.color="white";
}

function optColor2(element){
  element.childNodes[0].style.color="#333";
}

function optColor3(element){
  element.childNodes[0].style.color="#0f0";
}

function log(){
    var layer = document.getElementById('layer2');
    layer.style.display="block";
}