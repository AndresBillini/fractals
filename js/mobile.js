current = 1;
current2 = 1;

function deployMenu(){
    var deployed = document.getElementById('deployed');
    var verification = window.getComputedStyle(deployed, null).getPropertyValue("display");
    if(verification=="none"){
        deployed.style.display="block";
    }else{
        deployed.style.display="none";
    }
}

function services(x){
    var high = document.getElementsByClassName('halfHighlight');
    var radio = document.getElementsByClassName('radio');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
    var s5 = document.getElementById('s5');
    var s6 = document.getElementById('s6');
    
    
    switch(x){
        case 1:
            s1.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            s2.style.background="none";
            s3.style.background="none";
            s4.style.background="none";
            s5.style.background="none";
            s6.style.background="none";
            
            high[0].innerHTML="Market research<br><br>Keywords research<br><br>Artistic research";
            for(var i=0; i<6; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==0){
                    radio[0].style.backgroundColor="#00ff00";
                    radio[0].style.transform="scale(1.5)";
                }
            }
            current = 1; 
            break;
        case 2:
            s2.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            s1.style.background="none";
            s3.style.background="none";
            s4.style.background="none";
            s5.style.background="none";
            s6.style.background="none";
            
            high[0].innerHTML="Corporate ID<br><br>UI/UX design<br><br>Content adaptation";
            for(var i=0; i<6; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==1){
                    radio[1].style.backgroundColor="#00ff00";
                    radio[1].style.transform="scale(1.5)";
                }
            }
            current = 2;
            break;
        case 3:
            s3.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            s2.style.background="none";
            s1.style.background="none";
            s4.style.background="none";
            s5.style.background="none";
            s6.style.background="none";
            
            high[0].innerHTML="Domain Search<br><br>Hosting Services<br><br>Website<br><br>Mobile website<br><br>Responsiveness<br><br>Databases<br><br>Webmail";
            for(var i=0; i<6; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==2){
                    radio[2].style.backgroundColor="#00ff00";
                    radio[2].style.transform="scale(1.5)";
                }
            }
            current = 3;
            break;
        case 4:
            s4.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            s2.style.background="none";
            s3.style.background="none";
            s1.style.background="none";
            s5.style.background="none";
            s6.style.background="none";
            
            high[0].innerHTML="Search Console<br><br>Keywords selection<br><br>Description formulation<br><br>Snippets & Google bots";
            for(var i=0; i<6; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==3){
                    radio[3].style.backgroundColor="#00ff00";
                    radio[3].style.transform="scale(1.5)";
                }
            }
            current = 4;
            break;
        case 5:
            s5.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            s2.style.background="none";
            s3.style.background="none";
            s4.style.background="none";
            s1.style.background="none";
            s6.style.background="none";
            
            high[0].innerHTML="Metrics monotoring<br><br>Audience behaviour report<br><br>Keywords performance report<br><br>Search Console report";
            for(var i=0; i<6; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==4){
                    radio[4].style.backgroundColor="#00ff00";
                    radio[4].style.transform="scale(1.5)";
                }
            }
            current = 5;
            break;
        case 6:
            s6.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            s2.style.background="none";
            s3.style.background="none";
            s4.style.background="none";
            s5.style.background="none";
            s1.style.background="none";
            
            high[0].innerHTML="Website Community integration<br><br>Content and Community Manager<br><br>Social Media Metrics<br><br>Email Setup";
            for(var i=0; i<6; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==5){
                    radio[5].style.backgroundColor="#00ff00";
                    radio[5].style.transform="scale(1.5)";
                }
            }
            current = 6;
            break;
    }
}

function SArrow(x,current){
    if(x==0){
        if(current>1){
            current--;
            services(current);
        }
    }else{
       if(current<6){
            current++;
            services(current);
        } 
    }
}

function portfolio(x){
    var high = document.getElementsByClassName('halfHighlight');
    var radio = document.getElementsByClassName('radio');
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');
    var p5 = document.getElementById('p5');
    
    switch(x){
        case 1:
            p1.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            p2.style.background="none";
            //p3.style.background="none";
            p4.style.background="none";
            p5.style.background="none";
            
            high[1].innerHTML="<a href='http://gis-power.com' target='_blank'><div id='portLogo'></div></a>Gis-power.com is a website made for a procurement services enterprise. A special feature was added into the site so it could detect the origin of the visitors. In order to make it look trendy, we also included a curtain effect to the homepage that is driven by a random generation pattern.<div id='portScreen' onclick='enlarge(1)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio/media/logos/gis.png)";
            screen.style.backgroundImage="url(http://www.fractals.studio/media/screen/gis.png)";
            for(var i=6; i<10; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==6){
                    radio[6].style.backgroundColor="#00ff00";
                    radio[6].style.transform="scale(1.5)";
                }
            }
            current2 = 1; 
            break;
        case 2:
            p2.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            p1.style.background="none";
            //p3.style.background="none";
            p4.style.background="none";
            p5.style.background="none";
            
            high[1].innerHTML="<a href='http://orchidhousecleaning.com' target='_blank'><div id='portLogo'></div></a>Website made for a house and office cleaning company. Potential customers can contact them through the portal and check prices before prompting a service and execute reservations online.<div id='portScreen' onclick='enlarge(2)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio/media/logos/orchid.png)";
            screen.style.backgroundImage="url(http://www.fractals.studio/media/screen/orchid.png)";
            for(var i=6; i<10; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==7){
                    radio[7].style.backgroundColor="#00ff00";
                    radio[7].style.transform="scale(1.5)";
                }
            }
            current2 = 2;
            break;
        case 0:
            p3.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            p2.style.background="none";
            p1.style.background="none";
            p4.style.background="none";
            p5.style.background="none";
             
            high[1].innerHTML="<a href='http://creativephase.com' target='_blank'><div id='portLogo' style='border-radius:15%;width:20vw;right:20vw;background-color:white;'></div></a>A customised website made for our digital marketing ally. The Agency provided Concept and Graphic Design to our web development team. Businesses can contact the agency through their portal while checking interesting content related to Digital Marketing in the Milestones section.<div id='portScreen' onclick='enlarge(3)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio/media/logos/cp.svg)";
            screen.style.backgroundImage="url(http://www.fractals.studio/media/screen/cp.png)";
            for(var i=6; i<11; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==8){
                    radio[10].style.backgroundColor="#00ff00";
                    radio[10].style.transform="scale(1.5)";
                }
            }
            current2 = 5;
            break;
        case 3:
            p4.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            p2.style.background="none";
            //p3.style.background="none";
            p1.style.background="none";
            p5.style.background="none";
            
            high[1].innerHTML="<a href='http://verlasinc.com' target='_blank'><div id='portLogo' style='border-radius:5%;width:20vw;right:20vw;background-color:white;'></div></a>Verlas Inc is a PR & BTL communication company that takes care of Corporate Events. Complete website development HTML, CCS & JAVASCRIPT to provide a singular user experience allowing space for images to best describe their expertise.<div id='portScreen' onclick='enlarge(4)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio/media/logos/verlas.png)";
            screen.style.backgroundImage="url(http://www.fractals.studio/media/screen/verlas.png)";
            for(var i=6; i<10; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==8){
                    radio[8].style.backgroundColor="#00ff00";
                    radio[8].style.transform="scale(1.5)";
                }
            }
            current2 = 3;
            break;
        case 4:
            p5.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            p2.style.background="none";
            //p3.style.background="none";
            p4.style.background="none";
            p1.style.background="none";
            
            high[1].innerHTML="<a href='http://quintasamambaya.com' target='_blank'><div id='portLogo' style=''></div></a>Full website development to enhance digital marketing strategy and outstrip local competitors. Samambaya is a property managed by owners for social, corporative and family events. The portal includes video tour and interactive architectonic diagrams to let users estimate their desired event.<div id='portScreen' onclick='enlarge(5)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio/media/logos/quinta.png)";
            screen.style.backgroundImage="url(http://www.fractals.studio/media/screen/samambaya.png)";
            for(var i=6; i<10; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==9){
                    radio[9].style.backgroundColor="#00ff00";
                    radio[9].style.transform="scale(1.5)";
                }
            }
            current2 = 4;
            break;
    }
}

function PArrow(x,current2){
    if(x==0){
        if(current2>1){
            current2--;
            portfolio(current2);
        }
    }else{
       if(current2<4){
            current2++;
            portfolio(current2);
        } 
    }
    console.log(current2);
}

function enlarge(x){
    layer = document.getElementById('layer');
    var verification = window.getComputedStyle(layer, null).getPropertyValue("display");
    if(verification=="none"){
       layer.style.display="block"; 
    }else{
        layer.style.display="none";
    }
    
    switch (x){
        case 1: layer.style.backgroundImage="url(http://www.fractals.studio/media/screen/gis.png)";
            break;
        case 2: layer.style.backgroundImage="url(http://www.fractals.studio/media/screen/orchid.png)";
            break;
        case 0: layer.style.backgroundImage="url(http://www.fractals.studio/media/screen/cp.png)";
            break;
        case 3: layer.style.backgroundImage="url(http://www.fractals.studio/media/screen/verlas.png)";
            break;
        case 4: layer.style.backgroundImage="url(http://www.fractals.studio/media/screen/samambaya.png)";
            break;
        
    }
}
