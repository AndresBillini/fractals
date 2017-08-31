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
            
            high[0].innerHTML="Investigación mercado<br>Investigación de palabras clave<br>Investigación artística";
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
            
            high[0].innerHTML="Identidad corporativa<br><br>Diseño de interfaz<br><br>Experiencia de usuario<br><br>Adaptación de contenido";
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
            
            high[0].innerHTML="Búsqueda de dominio<br><br>Servicios de alojamiento<br><br>Sitio web<br><br>Versión movil<br><br>Responsividad<br><br>Bases de datos<br><br>Correo corporativo";
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
            
            high[0].innerHTML="Terminal de búsquedas<br><br>Selección de palabras clave<br><br>Formulación de descripción<br><br>Snippets y Google bots";
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
            
            high[0].innerHTML="Seguimiento de métrica<br><br>Reporte de comportamiento de audiencia<br><br>Reporte de desempeño de palabras clave<br><br>Reporte de desempeño de terminal de búsquedas";
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
            
            high[0].innerHTML="Integración de redes sociales<br><br>Gestión de contenido y manejo de comunidades<br><br>Reporte de métrica de redes sociales<br><br>Configuración de correo";
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
            logo.style.backgroundImage="url(http://www.fractals.studio//media/logos/gis.png)";
            screen.style.backgroundImage="url(http://www.fractals.studio//media/screen/gis.png)";
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
            
            high[1].innerHTML="<a href='http://orchidhousecleaning.com' target='_blank'><div id='portLogo'></div></a>Compañía de limpieza de hogar y oficinas a domicilio. Sus potenciales clientes pueden contactarlos a través del portal y revisar precios previamente a solicitar un servicio o realizar una reserva en línea.<div id='portScreen' onclick='enlarge(2)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio//media/logos/orchid.png)";
            screen.style.backgroundImage="url(http://www.fractals.studio//media/screen/orchid.png)";
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
             
            high[1].innerHTML="<a href='http://creativephase.com' target='_blank'><div id='portLogo' style='border-radius:15%;width:20vw;right:20vw;background-color:white;'></div></a>Sitio web hecho a la medida para nuestro aliado encargado del área de mercadeo digital. Compañías y negocios pueden contactar a la agencia a través del portal mientras navegan por el contenido relacionado con mercadeo digital en su seccion de Milestones. <div id='portScreen' onclick='enlarge(3)'></div>";
            var logo = document.getElementById('portLogo');
            var screen = document.getElementById('portScreen');
            logo.style.backgroundImage="url(http://www.fractals.studio/media/logos/cp.svg)";
            screen.style.backgroundImage="url(http://www.fractals.studio/media/screen/cp.png)";
            for(var i=6; i<10; i++){
                radio[i].style.backgroundColor="rgba(200,200,200,0.5)";
                radio[i].style.transform="scale(1)";
                if(i==8){
                    radio[10].style.backgroundColor="#00ff00";
                    radio[10].style.transform="scale(1.5)";
                }
            }
            current2 = 3;
            break;
        case 3:
            p4.style.background="linear-gradient(to right, rgba(0,0,0,0), rgba(2,2,2,0.5))";
            p2.style.background="none";
            //p3.style.background="none";
            p1.style.background="none";
            p5.style.background="none";
            
            high[1].innerHTML='<a href="http://verlasinc.com" target="_blank"><div id="portLogo" style="border-radius:5%;width:20vw;right:20vw;background-color:white;"></div></a>Verlas Inc. es una empresa especializada en relaciones públicas y productos publicitarios "below the line" que se encarga de organizar eventos corporativos. Permite conocer a través de imagenes la experiencia y especialidades de Verlas. <div id="portScreen" onclick="enlarge(4)"></div>';
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
            
            high[1].innerHTML="<a href='http://quintasamambaya.com' target='_blank'><div id='portLogo' style=''></div></a>Samambaya es una propiedad manejada por sus propietarios para eventos sociales y familiares. El portal incluye un tour en video y diagramas arquitectonicos interactivos para que los usuarios tengan vista de los espacios de su evento deseado. <div id='portScreen' onclick='enlarge(5)'></div>";
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
