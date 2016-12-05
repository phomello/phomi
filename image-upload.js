$(document).ready(function() {

    $("#uploadimgs").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "uploadedimg.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#imagee").html(response); 
            //alert(response);
        }
		

    });
});
});