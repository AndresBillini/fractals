function parallax(event){
  var sh=window.innerHeight/2;
  var sw=window.innerWidth/2;
  var vh=window.innerHeight/100;
  var vw=window.innerWidth/100;
  var px="px";
  var deg="deg";
  var x=event.clientX;
  var y=event.clientY;
  var pH=document.getElementById('parent').offsetHeight;
  var pW=document.getElementById('parent').offsetWidth;

  var child=document.getElementById('child');
  var parent=document.getElementById('parent');

  child.style.transform="rotateX("+(-y+sh)*0.05+deg+") rotateY("+(x-sw)*0.05+deg+")";
  //parent.style.perspective=Math.sqrt((sh-y)*(sh-y)+(sw-x)*(sw-x))+px;
}

function op(){
  var cube=document.getElementsByClassName('cube');

  cube[0].style.marginLeft="-20vw";
  cube[1].style.marginLeft="10vw";
}

function cl(){
  var cube=document.getElementsByClassName('cube');

  cube[0].style.marginLeft="-5vw";
  cube[1].style.marginLeft="-5vw";
  console.log("merwebo");
}
