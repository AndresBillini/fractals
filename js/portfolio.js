var deployed=0;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 30);
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


function relocate(x){
    var ttl=document.getElementById('title');
    var mL=document.getElementById('menuLogo');
    var pH=document.getElementById("portfolioHolder");
    
    if(x==0){
        ttl.style.left="21.6vw";
        mL.style.marginLeft="6.25vw";
        mL.style.transform="scale(1.5)";
        pH.style.marginLeft="3vw";
    }
    
    if(x==1){
        ttl.style.left="12.5vw";
        mL.style.marginLeft="0.75vw";
        mL.style.transform="scale(1)";
        pH.style.marginLeft="0vw";
    }
}

function showlink(x){
    var lI1=document.getElementsByClassName('linkIcon1');
    var l=lI1.length;
    
    for (i=0;i<l;i++){
        if(x==0){
            lI1[i].style.opacity="1";
        }
        else{
            lI1[i].style.opacity="0";
        }
    }
}

function maskParallax(){
    var pS=document.getElementsByClassName('projectScreen');
    var vw=window.innerWidth/100;
    var vh=window.innerHeight/100;    
    var x=event.clientX;
    var y=event.clientY;
    
    
        /*pS[0].style.backgroundPosition="50% 50%, "+ x/vw + "% " + y/vh + "%";    
    
        pS[1].style.backgroundPosition="50% 50%, "+ x/vw + "% " + y/-vh + "%";    
    
        pS[2].style.backgroundPosition="50% 50%, "+ x/vw + "% " + y/vh + "%";    
    
        pS[3].style.backgroundPosition="50% 50%, "+ x/vw + "% " + y/vh + "%";  */  
    
        //pS[4].style.backgroundPosition="50% 50%, "+ x/vw + "% " + y/vh + "%";    
    
}

function crossScroll(){
    var pH=document.getElementById('portfolioHolder');
    var pH2=document.getElementById('portfolioHolder2');
    var y=window.pageYOffset;
    var vh=window.innerHeight;
    
    if(y<4*vh){
        pH2.style.bottom=-y+"px";
        pH.style.top=-y+"px";
    }
}

/*
    l  t
1   50 50
2   35 43
3   43 70
4   75 58
5   60 40
6   77 40
*/