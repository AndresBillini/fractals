function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function soto(){
    var vw=window.innerWidth;
    var px="px";
    var cont=document.getElementById("container");
    
    for(i=0;i<vw/2;i++){
        cont.innerHTML+="<div class='underline u"+Math.round(rand(50,100))+" o"+Math.round(rand(1,5))+" c"+Math.round(rand(1,5))+"'></div>";
    }
    
    var und=document.getElementsByClassName('underline');
    
    for(i=0;i<vw/2;i++){
        und[i].style.left=i*2+"px";
    }
}

function convert(x){
    var sel=document.getElementsByClassName('selector');
    var sL=sel.length;
    
    var c1=document.getElementsByClassName('c1');
    var c2=document.getElementsByClassName('c2');
    var c3=document.getElementsByClassName('c3');
    var c4=document.getElementsByClassName('c4');
    var c5=document.getElementsByClassName('c5');
    
    var c1l=c1.length;
    var c2l=c2.length;
    var c3l=c3.length;
    var c4l=c4.length;
    var c5l=c5.length;
    
    switch (x){
        case 1:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#0B899F";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#19334E";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#0C4C65";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#0A667D";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#0B899F";}        
        break;        
            
        case 2:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#98000F";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#BF0C1D";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#e62739";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#F55060";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#F97884";}
        break;        
            
        case 3:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#3701E6";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#4C14FF";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#6534ff";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#835CFF";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#A286FE";}
        break;        
            
        case 4:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#A57201";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#D2950E";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#f2b632";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#FFCC59";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#FFD882";}
        break;        
            
        case 5:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#8A2E00";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#B24108";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#e05915";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#EF7D43";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#FFA06F";}
        break;        
            
        case 6:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#397100";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#4C9700";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#5DB801";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#7BDE17";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#97E647";}
        break;        

        case 7:
            for (i=0;i<c1l;i++){c1[i].style.backgroundColor="#00D78B";}        
            for (i=0;i<c2l;i++){c2[i].style.backgroundColor="#23E5A1";}        
            for (i=0;i<c3l;i++){c3[i].style.backgroundColor="#49EEB4";}        
            for (i=0;i<c4l;i++){c4[i].style.backgroundColor="#72F4C6";}        
            for (i=0;i<c5l;i++){c5[i].style.backgroundColor="#A7FADD";}
        break;            
    }
    
    for(i=0;i<sL;i++){sel[i].style.borderWidth="0";}
    sel[x-1].style.borderWidth="2px";
            
}