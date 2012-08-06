/* Ryan Koven, 2012. SMC CS 81 */




var moving = false;

var kills = 0;
var clicked = false;



function Spaceship(){
  this.dx = Math.floor(Math.random()*11);
  this.dy = Math.floor(Math.random()*11);
  this.alive = true;
  this.picsrc="img/ufo.jpg";
  this.starttop = Math.floor(Math.random()*screen.height-125)+300;
  this.startleft = Math.floor(Math.random()*1000);
  this.destroy = destroy;

  function destroy(){

   this.alive = false;
   
  }
  
}

function changepic(id, picid){

  if (picid)
    document.getElementById(id).src="img/explosion.jpg";
  else 
    document.getElementById(id).src="img/ufo.jpg";
}


var spaceships = new Array();


for (var i = 0; i<5; i++){
    spaceships[i] = new Spaceship;
   
    document.write("<img id=\"space"+i+"\"  src=\""+spaceships[i].picsrc +"\" style=\"left:"+spaceships[i].startleft+"px; top:"+spaceships[i].starttop+"px;\" onclick=\"if (moving && spaceships[" + i +"].alive) {changepic(&quot;space"+ i+ "&quot;, 1); kills++;  spaceships["+i+"].destroy(); } \" />");

          
}

function startgame(){
    
    if (kills%5 == 0){

      for (var k = 0; k < 5; k++){
          spaceships[k].alive = true;
          changepic("space" + k, 0);
}
  }

    if (moving){

    for (var j = 0; j<5; j++){
              

              var newleft;
              var newright;

              if (spaceships[j].alive){

              var spaceid = "space"+j;
               if (parseInt(document.getElementById(spaceid).style.left) > (screen.width -125) )
                  newleft = Math.floor(Math.random()*(screen.width-125));
               else
                  newleft = parseInt(document.getElementById(spaceid).style.left) + spaceships[j].dx;

               if ((parseInt(document.getElementById(spaceid).style.top) > (screen.height - 500)) || (parseInt(document.getElementById(spaceid).style.top) < (screen.height - 500)))
                  newtop = Math.floor(Math.random()*(screen.height)+200);
                else 
                     newtop = parseInt(document.getElementById(spaceid).style.top) + spaceships[j].dy;
                
                  document.getElementById(spaceid).style.left = newleft +"px";
                  document.getElementById(spaceid).style.top = newtop +"px";
            }     
                             
}

}

}
