function deployContact(x){
    var l=document.getElementById('layer');
    var cH=document.getElementsByClassName('contactHex');
    var ty=document.getElementById('thankYou');
    var ty2=document.getElementById('thankYou2');
    
    if(x==0){
        l.style.opacity="0.7";
        l.style.top="0%";

        cH[0].style.top="50%";
        cH[0].style.left="50%";
        cH[0].innerHTML='<form name="contactForm">           <p class="inputLabel">Nombre / Compañía</p>            <input class="hexInput" name="name" type="text">            <p class="inputLabel">Email</p>            <input class="hexInput" name="mail" type="text">            <p class="inputLabel">Mensaje</p>           <textarea class="hexInput2" name="message" type="text"></textarea>        </form>';
        cH[0].style.zIndex="10000";

        cH[1].style.top="43%";
        cH[1].style.left="35%";

        cH[2].style.top="70%";
        cH[2].style.left="43%";
        cH[2].style.zIndex="10005";

        cH[3].style.top="75%";
        cH[3].style.left="58%";
        cH[3].style.zIndex="10005";

        cH[4].style.top="40%";
        cH[4].style.left="60%";
        

        cH[5].style.top="77%";
        cH[5].style.left="40%";
        cH[5].style.zIndex="10005";
    }
    else{
        
        ty.style.top="-50%";
        ty2.style.bottom="-10vw";
        
        l.style.opacity="0";
        l.style.top="-100%";

        cH[0].style.top="-50%";

        cH[1].style.top="-50%";

        cH[2].style.top="-50%";

        cH[3].style.top="-50%";

        cH[4].style.top="-50%";

        cH[5].style.top="-50%";
    }
    

}

function space(){
    var cH=document.getElementsByClassName('contactHex');
    
    cH[2].style.left="37%";
    cH[3].style.left="63%";
    cH[5].style.left="33%";
}
