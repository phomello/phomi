$(document).ready(function() {

    $("#displaycommun").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "displaycomm.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#comms").html(response); 
            //alert(response);
        }
		

    });
});
});

