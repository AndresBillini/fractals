function widgets(x){
    var test = x;
        
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
          }else{
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
          }
          

          xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState==4 && xmlhttp.status == 200){
              myObj = JSON.parse(this.responseText);
              document.getElementById("fs-menu").innerHTML = myObj.menu;
              document.getElementById("fs-footer").innerHTML = myObj.footer;
              document.getElementById("fs-contact").innerHTML = myObj.contactos;
            }
          }
          xmlhttp.open('GET','../../widgets/wdg.php?name='+test,true);
          xmlhttp.send();
}

function juguetos(x){
    var test = x;
        
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
          }else{
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
          }
          

          xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState==4 && xmlhttp.status == 200){
              myObj = JSON.parse(this.responseText);
              document.getElementById("fs-menu").innerHTML = myObj.menu;
              document.getElementById("fs-footer").innerHTML = myObj.footer;
              document.getElementById("fs-contact").innerHTML = myObj.contactos;
            }
          }
          xmlhttp.open('GET','widgets/jgt.php?name='+test,true);
          xmlhttp.send();
}