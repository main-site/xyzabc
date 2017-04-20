;(function($) {
    "use strict";
    var count = 0;
    function afterReveal (el) {
        el.addEventListener('animationend', function () {
         
           count++;

         

           
            if(count === 3){
                

                    Typed.new('.element', {
                        strings: ["FINANCIAL"],
                        typeSpeed: 250,
                        showCursor: true,
                        loop: false,
               contentType: 'html',
               cursorChar: "",
                      });
                     setTimeout(function(){
       /* window.location.href = 'http://localhost:8080/BTMFinancial/index.php'*/
    }, 4500);

          

            }
           
        });
    }
  

    
    
    new WOW({ callback: afterReveal }).init();
    
    
    // preloader js
   /* $(window).load(function() { // makes sure the whole site is loaded
		
    })*/


            /*document.addEventListener('DOMContentLoaded', function(){
                      Typed.new('.element', {
                        strings: ["Financial"],
                        typeSpeed: 15
                      });
                  });*/
      
    
})(jQuery)
/*var c = document.getElementById("c");
var ctx = c.getContext("2d");


c.height = window.innerHeight;
c.width = window.innerWidth;


var textreq = "$1$2$3$4$5$6$7$8$9$" ;

textreq = textreq.split("");

var font_size = 20;
var columns = c.width/font_size; 
var drops = [];

for(var x = 0; x < columns; x++)
    drops[x] = 1; 

function draw()
{
    
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#17a215"; 
    ctx.font = font_size + "px arial";
    
    for(var i = 0; i < drops.length; i++)
    {
        

        var text = textreq[Math.floor(Math.random()*textreq.length)];
        
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        
        drops[i]++;
    }
}*/











/*var logDiv = document.getElementById("log");
var logDetailsDiv = document.getElementById("logDetails");


var divPloatje = document.getElementById('ploatje');


var mouse = {
    x: -100,
    y: -100
};

fixMask();


if ('ontouchstart' in document.documentElement) {
    
    divPloatje.addEventListener('touchmove', touchMove, false);
    divPloatje.addEventListener('touchstart', touchStart, false);
    divPloatje.addEventListener('touchend', touchEnd, false);
} else {
    
    divPloatje.addEventListener('mousemove', touchMove, false);
}


function touchStart(e) {
    console.debug("Touch Start! " + e.type + " event=" + inspect(e));
    
    e.preventDefault(); 
    return false;
}

function touchMove(e) {

    if (e.touches == null) {
    
        mouse = getMouse(e, divPloatje);
        console.debug("Mouse Move");
    } else {
    
        var targetEvent = e.touches.item(0);
    
    
        mouse.x = targetEvent.clientX;
        mouse.y = targetEvent.clientY;
    
    }

    

    
    e.preventDefault(); 
    return false;
}

function touchEnd(e) {
    console.debug("touchEnd (!)");
  
}




function fixMask() {
    webkitRequestAnimationFrame(fixMask);
  
    var strImage = '-webkit-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px,100px 100px, rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 1) 70%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0.1) 100%)';
    divPloatje.style.WebkitMaskImage = strImage;


  
}



function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

    
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    
    return {
        x: mx,
        y: my
    };
}

function log(text) {
    logDiv.innerHTML = text;
}

function inspect(obj) {
    if (typeof obj === "undefined") {
        return "undefined";
    }
    var _props = [];

    for (var i in obj) {
        _props.push(i + " : " + obj[i]);
    }
    return " {" + _props.join(",<br>") + "} ";
}*/



















/*setInterval(draw, 55);*/

