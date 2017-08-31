function nav(x){
    var s=document.getElementsByClassName('section');
   /* 
    if(x==1){
        s[0].style.clipPath="polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";
        s[1].style.clipPath="polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
        console.log("2");
    }
    if(x==2){
        //s[0].style.clipPath="polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%)";
        s[0].style.clipPath="polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)";
        s[1].style.clipPath="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        console.log("1");
    }*/
}

function veil(event){
    var s=document.getElementsByClassName('section');
    var vw=window.innerWidth;
    var px="px";
    
    var x=event.clientX;
    
    var xP=(x/vw)*100;
    
    s[0].style.clipPath="polygon(0% 0%, 0% 100%, "+ xP +"% 100%, "+xP+"% 0%)";
    s[1].style.clipPath="polygon("+xP+"% 0%, 100% 0%, 100% 100%, "+xP+"% 100%)";
}