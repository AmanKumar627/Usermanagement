$( document ).ready(function() {
    
    // SUBMIT FORM
    $("#login").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });
    
    
    function ajaxPost(){
        
        // PREPARE FORM DATA
        var formData = {
            firstname : $("#userName").val(),
            lastname :  $("#userPassword").val()
        }
        
        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "http://localhost:8080/NoteApp/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) {
                if(result.status == "Done"){
                    $("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" + 
                                                "Post Successfully! <br>" +
                                                "---> User Name = " + 
                                                result.data.userName + " ,Password = " + result.data.userPassword + "</p>");
                }else{
                    $("#postResultDiv").html("<strong>Error</strong>");
                }
                console.log(result);
            },
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });        
        // Reset FormData after Posting
        resetData(); 
    }
    
    function resetData(){
        $("#userName").val("");
        $("#userPassword").val("");
    }
})