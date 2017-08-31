function relocate(x){
    var mL=document.getElementById('menuLogo');
    var t=document.getElementById('title');
    var car=document.getElementById('carousel');
    
    if(x==0){
        mL.style.marginLeft="6.25vw";
        t.style.left="20vw";
        car.style.left="20vw";
        mL.style.transform="scale(1.5)";
    }
    
    if(x==1){
        mL.style.marginLeft="0.75vw";
        t.style.left="10vw";
        car.style.left="9.8vw";
        mL.style.transform="scale(1)";
    }
}

function highlight(element,x){
    var cN=element.childNodes;
    if (x==0){
        element.style.backgroundSize="auto 120%";
        cN[0].childNodes[1].style.width="0%";
        cN[0].childNodes[3].style.width="0%";
        cN[0].childNodes[5].style.backgroundColor="rgba(0,150,0,0.3)";
        cN[0].childNodes[7].style.fontSize="2.5vw";
    }
    if (x==1){
        element.style.backgroundSize="auto 100%";
        cN[0].childNodes[1].style.width="75%";
        cN[0].childNodes[3].style.width="75%";
        cN[0].childNodes[5].style.backgroundColor="rgba(0,150,0,0)";
        cN[0].childNodes[7].style.fontSize="2vw";
    }
}

function carousel(){
    var car=document.getElementById('carousel');
    car.style.marginLeft=-window.scrollY+"px";
}
