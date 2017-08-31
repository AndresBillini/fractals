var parallaxScale=1;

function parallax(){
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    var vW=window.innerWidth/100;
    var vH=window.innerHeight/100;
    
    var px="px";
    
    var layer=document.getElementsByClassName('layer');
    var lL=layer.length;
    
    var starting=[-25,-25,-25,-25,-45,-60,-59];
    
    var sTProcessed=scrollTop/vH/100;
    var sTP=(10*sTProcessed)/6;
    
    for(i=0;i<lL;i++){
        if(i==3){
            layer[i].style.top=((starting[i]+sTP*-i)*vW)+px;    
        }
        else{
            layer[i].style.top=((starting[i]+sTP*i)*vW)+px;   
        }
    }
    
    console.log(sTProcessed);
    
}
