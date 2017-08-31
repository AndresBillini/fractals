function submit(x){

    if(x==1){
          if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
          }else{
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
          }

          xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState==4 && xmlhttp.status == 200){
              document.getElementById('cH1').innerHTML = xmlhttp.responseText;
                if(xmlhttp.responseText=="yes"){
                    thanks();
                }
            }
          }
            xmlhttp.open('GET','form/contacto.php?name='+document.contactForm.name.value+'&mail='+document.contactForm.mail.value+'&message='+document.contactForm.message.value,true);
            xmlhttp.send();  
    }
    
    if(x==2){
          if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
          }else{
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
          }

          xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState==4 && xmlhttp.status == 200){
              document.getElementById('form').innerHTML = xmlhttp.responseText;
                console.log(xmlhttp.responseText);
                if(xmlhttp.responseText=="yes"){
                    thanks();
                }
            }
          }
            xmlhttp.open('GET','contactom.php?name='+document.contactForm.name.value+'&mail='+document.contactForm.mail.value+'&message='+document.contactForm.message.value,true);
            xmlhttp.send();  
    }
    
}

function borron(x){
    switch(x){
        case 1: document.getElementById('fname').value='';
            break;
        case 2: document.getElementById('fmail').value='';
            break;
        case 3: document.getElementById('fmessage').innerHTML='';
            break;
    }
    
}

function thanks(){

    var l=document.getElementById('layer');
    var cH=document.getElementsByClassName('contactHex');
    var ty=document.getElementById('thankYou');
    var ty2=document.getElementById('thankYou2');
    
    ty.style.top="10%";
    ty2.style.bottom="5%";
    
        cH[0].style.top="50%";
        cH[0].style.left="50%";
        cH[0].innerHTML="";
        cH[0].style.zIndex="10000";

        cH[1].style.top="50%";
        cH[1].style.left="50%";
        cH[1].style.zIndex="10001";

        cH[2].style.top="50%";
        cH[2].style.left="50%";
        cH[2].style.zIndex="10010";

        cH[3].style.top="50%";
        cH[3].style.left="50%";
        cH[3].style.zIndex="10005";

        cH[4].style.top="50%";
        cH[4].style.left="50%";
        cH[4].style.zIndex="10000";

        cH[5].style.top="50%";
        cH[5].style.left="50%";
        cH[5].style.zIndex="10015";

}
