 $(document).ready(function() {

    $("#userdisplayd").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "showsong.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#respondz").html(response); 
            //alert(response);
        }

    });
});
});