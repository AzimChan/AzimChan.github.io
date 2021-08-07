//progress bar
var bar=document.querySelector("#br");
//canvas
var canvas=document.querySelector("canvas");
var width=canvas.clientWidth;
var height=canvas.clientHeight;
var ctx=canvas.getContext("2d");

//how many circles
var chunk=20;
var rad=20;
//seconds per chunk
var spc=2;

//instruments
function rnd(min, max) {
  return Math.random() * (max - min) + min;
}
function dRad(degrees) { return degrees * Math.PI / 180; };

//value of sand chunks
var Sand=rnd(1,10);
//for loop animation
var i=0;
var h=0;
var w=0;
function Gen() 
{
				if(i===0)
				{
								radx=(width/100)*rad;
								h=rnd(radx,height - radx);
								w=rnd(radx,width - radx);
				}
				
				i=i+1;
				ctx.fillStyle="rgb(0,255,0)";
				ctx.beginPath();
				ctx.arc(w,h,radx,dRad(0),dRad(360),false);
				ctx.fill();
				if(!(i>=255))
				{
								requestAnimationFrame(Gen);			
				}
				else
				{
								i=0;
								console.log("gened");
				}
}
Gen();
var j=0;
function pr() {
				bar.style.width=j+"%";	
				j+=0.1;
				if (j<101) 
				{
				console.log(j);
								requestAnimationFrame(pr);
				}
				else
				{
								var b=document.createElement("button");
								var a=document.createElement("a");
								var l=document.querySelector("#load");
								a.href="https://youtu.be/dQw4w9WgXcQ";
								l.appendChild(a);
								b.textContent="View generation";
								a.appendChild(b);
								
				}
}
pr();



