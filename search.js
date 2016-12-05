$(document).ready(function() {

    $("#goforit").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "search.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#responsible").html(response); 
            //alert(response);
        }
		

    });
});
});

