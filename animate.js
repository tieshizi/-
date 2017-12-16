function animate(element,target,step){
  
  step = step || 40;


if(element.timer){
  clearInterval(element.timer);
}


element.timer=setInterval(function(){
  var zuo = element.offsetLeft;
   if(zuo>target){
      step=-Math.abs(step);
   }

if(Math.abs(target-zuo)>Math.abs(step)){
  zuo += step;
}else{
  zuo=target;
  clearInterval(element.timer);
}

element.style.left=zuo+"px";

},15);

}