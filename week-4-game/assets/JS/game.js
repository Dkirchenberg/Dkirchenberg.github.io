

 var random_result;
 var lost;
 var win; 

var random_result = Math.floor(Math.random() * 69) + 30;

 $("#result").html("Your result is: " + random_result);


 for (var i = 0; i < 4; i++) {
 var random = Math.floor(Math.random() * 11) +1;

 var crystal =$("<div>");
  crystal.attr({
    "class":'crystal',
    "data-random": random
  });

    $(".crystals").append(crystal);
    
    

    $(".crystals").on("click", function() {

  } 

 )};

  

 
  





