var currentZTranslation=[];
var currentXRotation=[];
var currentYRotation=[];
var currentZRotation=[];

function hexFill(){
    var y2=window.scrollY;
    var vY=window.innerHeight;
    var c=document.getElementById('canvas');
    
    for (i=0;i<42;i++){
        c.innerHTML+="<div class='hex'></div>";
    }
    
    var cC=c.childNodes;
    var cCL=cC.length;
    //var buffer=1;
    //var buffer=1.61803398875;
    var buffer=3.2360679775*1.1;
    
    for (i=1;i<cCL;i++){
        cC[i].style.width= buffer*i+"vw";
        cC[i].style.marginLeft= -(buffer/2)*i+"vw";
        cC[i].style.height=buffer*i+"vw";
        cC[i].style.marginTop= -(buffer/2)*i+"vw";
        cC[i].style.backgroundColor="rgba(0,"+(255-i*6)+",0,1)";
        cC[i].style.zIndex=cCL-i;
        //cC[i].style.opacity=y2/vY+0.02;
        cC[i].style.transform="translateZ("+20*(cCL-i)+"px)";
        currentZTranslation[i]=cC[i].style.transform;
        currentXRotation[i]="rotateX(0deg)";
        currentYRotation[i]="rotateY(0deg)";
        currentZRotation[i]="rotateZ(0deg)";
        //document.getElementById('fractals').innerHTML=currentZTranslation[i-1];
        //buffer=(buffer*1.61803398875)/1.45;
    }
    
    console.log();
    
    setTimeout(function(){ 
        
    }, 500);
}

function parallax(e){
    
    var c=document.getElementById('canvas');
    var f=document.getElementById('fractals');
    var x=e.clientX;
    var x2=window.scrollX;
    var y=e.clientY;
    var y2=window.scrollY;
    
    var cC=c.childNodes;
    var cCL=cC.length;
    
    var vW=window.innerWidth;
    var vY=window.innerHeight;
    
    var yProc=(y2/vY)/3;
    
    for (i=1;i<cCL;i++){
        currentZRotation[i]="rotateZ("+((((cCL-i)*137.5))*(yProc))%60+"deg)";
        cC[i].style.transform=currentZTranslation[i]+" "+currentXRotation[i]+" "+currentYRotation[i]+" "+currentZRotation[i];
        //document.getElementById('fractals').innerHTML=currentZTranslation[i]+" "+currentXRotation[i]+" "+currentYRotation[i]+" "+currentZRotation[i];
        cC[i].style.opacity=yProc+0.01;
    }
}

function amaze(e){
    var x=e.clientX;
    var y=e.clientY;
    var vW=window.innerWidth;
    var vY=window.innerHeight;
    var c=document.getElementById('canvas');
    var f=document.getElementById('fractals');
    var xProc=(x/vW)-0.5;
    var yProc=(y/vY)-0.5;
    
    var cC=c.childNodes;
    var cCL=cC.length;
    
    for (i=1;i<cCL;i++){
        currentXRotation[i]="rotateX("+-yProc*30+"deg)";
        currentYRotation[i]="rotateY("+ xProc*30+"deg)";
        cC[i].style.transform=currentZTranslation[i]+" "+currentXRotation[i]+" "+currentYRotation[i]+" "+currentZRotation[i];
        //document.getElementById('fractals').innerHTML=currentZTranslation[i]+" "+currentXRotation[i]+" "+currentYRotation[i]+" "+currentZRotation[i];
    }
}