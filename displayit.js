 $(document).ready(function() {

    $("#headers").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "show_song.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#respondent").html(response); 
            //alert(response);
        }

    });
});
});