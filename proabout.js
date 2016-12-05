 $(document).ready(function() {

    //$("#revelpropicss").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "proabout.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#tebogoletz").html(response); 
            //alert(response);
        }

    });
//});
});