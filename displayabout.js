 $(document).ready(function() {

    //$("#revelings").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "displayabout.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#letsoaloT").html(response); 
            //alert(response);
        }

    });
//});
});