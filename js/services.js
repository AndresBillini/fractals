var deployed=0;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            //console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }

    tick();
}


function hexRotate() {
    var hex = document.getElementById('rotatorHex');
    var hT = document.getElementById('hexText');
    var hO= document.getElementsByClassName('hexOpt');
    var hOL= hO.length;
    var hTt= document.getElementById('hexTitle');
    var hTx= document.getElementById('hexText');
    var rH2=document.getElementById('rotHex2');

    var s=document.getElementById('s');
    var vH=window.innerWidth/100*53;
    var f=s.scrollTop/vH;
    var g=document.documentElement.scrollTop/vH;
    var pro=document.getElementsByClassName('progress');
    
    

    if (navigator.userAgent.indexOf("Firefox") > 0) {//FIREFOX
        hex.style.transform=" rotateZ("+g*-60+"deg)";
        for (i=0;i<hOL;i++){
            hO[i].style.backgroundColor="rgba(0,0,0,0)";
            hO[i].style.color="rgba(34,34,34,1)";
            
        }

        g=Math.round(g);
        switch (g){
            case 0:
                hTt.innerHTML="RESEARCH";
                hTx.innerHTML="Market research<br>Keywords research<br>Artistic research";
                hO[0].style.backgroundColor="#000";
                hO[0].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/hexBG1.jpg)";
                
            break;

            case 1:
                hTt.innerHTML="DESIGN";
                hTx.innerHTML="Corporate ID<br>UI/UX design<br>Content adaptation";
                hO[1].style.backgroundColor="#000";
                hO[1].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/design2.jpg)";
            break;

            case 2:
                hTt.innerHTML="WEB DEVELOPMENT";
                hTx.innerHTML="Domain search<br>Hosting services<br>Website<br>Mobile website<br>Responsiveness<br>Databases<br>Webmail";
                hO[2].style.backgroundColor="#000";
                hO[2].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/dev2.jpg)";
            break;

            case 3:
                hTt.innerHTML="SEARCH ENGINE OPTIMIZATION";
                hTx.innerHTML="Search console<br>Keywords selection<br>Description formulation<br>Snippets & Google bots";
                hO[3].style.backgroundColor="#000";
                hO[3].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/seo2.jpg)";
            break;

            case 4:
                hTt.innerHTML="ANALYTICS";
                hTx.innerHTML="Metrics monitoring<br>Audience behaviour report<br>Keywords performance report<br>Search Console report";
                hO[4].style.backgroundColor="#000";
                hO[4].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/analytics2.jpg)";
            break;

            case 5:
                hTt.innerHTML="COMMUNITIES";
                hTx.innerHTML="Website Community integration<br>Content and Community Management<br>Social Media Metrics<br>Email Setup";
                hO[5].style.backgroundColor="#000";        
                hO[5].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/community2.jpg)";
            break;
            
            
        }
    }
    else{//CHROME AND OTHERS
        hex.style.transform=" rotateZ("+f*-60+"deg)";
        for (i=0;i<hOL;i++){
            hO[i].style.backgroundColor="transparent";
            hO[i].style.color="#000";
            hO[i].style.fontSize="1vw";
            
        }
        
        f=Math.round(f);
        switch (f){
            case 0:
                hTt.innerHTML="RESEARCH";
                hTx.innerHTML="Market research<br>Keywords research<br>Artistic research";
                hO[0].style.backgroundColor="#000";
                hO[0].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/hexBG1.jpg)";
                
            break;

            case 1:
                hTt.innerHTML="DESIGN";
                hTx.innerHTML="Corporate ID<br>UI/UX design<br>Content adaptation";
                hO[1].style.backgroundColor="#000";
                hO[1].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/design2.jpg)";
            break;

            case 2:
                hTt.innerHTML="WEB DEVELOPMENT";
                hTx.innerHTML="Domain search<br>Hosting services<br>Website<br>Mobile website<br>Responsiveness<br>Databases<br>Webmail";
                hO[2].style.backgroundColor="#000";
                hO[2].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/dev2.jpg)";
            break;

            case 3:
                hTt.innerHTML="SEARCH ENGINE OPTIMIZATION";
                hTx.innerHTML="Search console<br>Keywords selection<br>Description formulation<br>Snippets & Google bots";
                hO[3].style.backgroundColor="#000";
                hO[3].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/seo2.jpg)";
            break;

            case 4:
                hTt.innerHTML="ANALYTICS";
                hTx.innerHTML="Metrics monitoring<br>Audience behaviour report<br>Keywords performance report<br>Search Console report";
                hO[4].style.backgroundColor="#000";
                hO[4].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/analytics2.jpg)";
            break;

            case 5:
                hTt.innerHTML="COMMUNITIES";
                hTx.innerHTML="Website Community integration<br>Content and Community Management<br>Social Media Metrics<br>Email Setup";
                hO[5].style.backgroundColor="#000";        
                hO[5].style.color="#fff";
                rH2.style.backgroundImage="url(http://www.fractals.studio/media/community2.jpg)";
            break;

        }
    }
    
}

function rotateTo(x){
    var vH=window.innerWidth/100*53;
    var pro=document.getElementsByClassName('progress');
    var pL=pro.length;
    scrollToY(x*vH,300,'easeInOutQuint');
    
    for(i=0;i<pL;i++){
        pro[i].style.transform="scale(1)";
        pro[i].style.backgroundColor="#aaa";
        pro[i].style.opacity="0.5";
    }
    
    pro[x].style.transform="scale(1.7)";
    pro[x].style.backgroundColor="#0f0";
    pro[x].style.opacity="1";
}

function prev(){
    var yPos=window.scrollY;
    var vH=window.innerWidth/100*53;
    
    var gg=Math.round(yPos/vH);
    
    if(gg>0){
        rotateTo(gg-1);    
    }
    console.log(gg-1);
    
}

function next(){
    var yPos=window.scrollY;
    var vH=window.innerWidth/100*53;
    
    var gg=Math.round(yPos/vH);
    
    if(gg<5){
        rotateTo(gg+1);
    }
    console.log(gg+1);
    
}

function menuDeploy(){
    var mMsk=document.getElementById('menuMask');
    var mT=document.getElementById('menuTitle');
    var mOC=document.getElementById('menuOptContainer');
    var rH=document.getElementById('rotatorHex');
    var hC=document.getElementById('hexContent');
    var mL=document.getElementById("menuLogo");
    console.log(deployed);

    if(deployed==0){
        mMsk.style.opacity="1";
        mT.style.opacity="1";
        mOC.style.opacity="1";
        rH.style.marginLeft="00vw";
        hC.style.right="13vw";
        mL.style.width="8vw";
        mL.style.height="8vw";
        mL.style.left="5vw";
        mL.style.top="5vw";
        deployed=1;
    }
    else{
        mMsk.style.opacity="0";
        mT.style.opacity="0";
        mOC.style.opacity="0";
        rH.style.marginLeft="00vw";
        hC.style.right="13vw";
        mL.style.width="8vw";
        mL.style.height="8vw";
        mL.style.left="5vw";
        mL.style.top="5vw";
        deployed=0;
    }


}

function relocate(x){
    var rH=document.getElementById('rotatorHex');
    var hC=document.getElementById('hexContent');
    var ttl=document.getElementById('titleS');
    var mL=document.getElementById('menuLogo');
    
    if(x==0){
        rH.style.right="41vw";
        hC.style.right="24vw";
        ttl.style.left="21.6vw";
        mL.style.marginLeft="6.25vw";
        mL.style.transform="scale(1.5)";
    }
    
    if(x==1){
        rH.style.right="46.5vw";
        hC.style.right="29.3vw";
        ttl.style.left="12.5vw";
        mL.style.marginLeft="0.75vw";
        mL.style.transform="scale(1)";
    }
}