
;(function($) {
    "use strict";
    var count = 0;
    function afterReveal (el) {
        el.addEventListener('animationend', function () {
         
           count++;

         

           
           
        });
    }
  

    new WOW({ callback: afterReveal }).init();
    
   
    
    
  
      
    
})(jQuery)


