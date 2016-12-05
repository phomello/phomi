 $(document).ready(function() {

    $("#userdisplay").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "displaytwo.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#respond").html(response); 
            //alert(response);
        }

    });
});
});