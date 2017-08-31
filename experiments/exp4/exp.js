var parallaxScale=1;

function parallax(event){
    var c=document.getElementById('container');
    var t=document.getElementsByClassName('triangle');
    var tL=t.length;
    var px="px";
    
    var x=event.clientX;
    var y=event.clientY;
    
    var vW=window.innerWidth;
    var vH=window.innerHeight;
    
    var xProcessed=Math.round(x*100/vW)/100;
    var yProcessed=Math.round(y*100/vH)/100;
    
    var xPost=(xProcessed-0.5)*46.5;
    var yPost=(yProcessed-0.5)*45;
    
    for(i=0;i<tL;i++){
        t[i].style.marginTop =(-46.5)+yPost*parallaxScale+"%";
        t[i].style.marginLeft=(-45)+xPost*parallaxScale+"%";
    }   
}

function inside(){
    var c=document.getElementById('container');
    var t=document.getElementsByClassName('triangle');
    var tL=t.length;
    var px="px";
    
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    var vW=window.innerWidth/100;
    var vH=window.innerHeight/100;
    
    var sTProcessed=scrollTop/(vH*100);
    var sTProcessed2=sTProcessed+1;
    
    var vw40=vW*40;
    var vH6=Math.round(vH*600);
    
    c.style.width=vw40*sTProcessed2+"px";
    c.style.height=vw40*sTProcessed2+"px";
    c.style.marginTop=-vw40*sTProcessed2/2+((sTProcessed2-1)/7)*(vw40)+"px";
    c.style.marginLeft=-vw40*sTProcessed2/2+"px";
    
    parallaxScale=0.01+(vH6-scrollTop)/vH6;
    console.log(parallaxScale);
}