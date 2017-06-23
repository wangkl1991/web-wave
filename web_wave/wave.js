var step=0;
var lines=["rgba(0,222,255,0.2)", "rgba(157,192,249,0.2)", "rgba(0,168,255,0.2)"]

function main(){
	//canvas id="canvas" style="position:absolute; top: 0px; left:0px;z-index:1;"
	 canvas = document.getElementById('canvas');
	 ctx=canvas.getContext('2d');
	 canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
  
   loop();
}


window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
})();


function loop(){
	  ctx.clearRect(0, 0, canvas.width,canvas.height);
	  step++;
    for(var j=lines.length-1; j>=0; j--){
    ctx.fillStyle=lines[j];
	  var angle=(step+j*45) * Math.PI/180;
    var deltaHeight =Math.sin(angle)*50;
	  var deltaHeightRight =Math.cos(angle)*50;
    ctx.beginPath();

      ctx.moveTo(0,canvas.height/2+deltaHeight);
      //ctx.lineTo(canvas.width, canvas.height/2+deltaHeightRight);
      //bezierCurveTo(cpx1,cpy1,cpx2, cpy2, x,y) :(cpx1,cpy1), (cpx2,cpy2) are starting and ending constrains points (x,y) is end point
      ctx.bezierCurveTo(canvas.width /2, canvas.height/2+deltaHeight-50, canvas.width/2, canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight)
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0,canvas.height);
      ctx.lineTo(0,canvas.height/2+deltaHeight);
      ctx.closePath();
      ctx.fill();}

      requestAnimFrame(loop);

}
