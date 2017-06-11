// Attach a submit handler to the form
$("#register_form").submit(function( event ) {
	var data;
    var myJSON = {"user_name" : $('#username').val(), "user_password" :  $('#password_1').val(), "user_fname":  $('#first_name').val(), "user_lname": $('#last_name').val(), "user_email": $('#email_address').val()}

    data = "txn=2"+"&first_name"+ $('#first_name').val()+"&last_name"+ $('#last_name').val()+"&user_name="+ $('#email_address').val() +"&user_password=" + $('#password_1').val();
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this );  

    // We want to customize what we post, therefore we format our data
    
    // For debugging purposes... see your console:
    // Prints out for example: login=myLoginName&passwordHash=a011a78a0c8d9e4f0038a5032d7668ab
    console.log(data);
    console.log(myJSON);

    // The actual from POST method
    $.ajax({
        type: $form.attr('method'),
        url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com:8080/idea/idea.jsp?",//$form.attr('action'),
        dataType: "jsonp",
        data: myJSON,
        success: function (data) {
            console.log("Hey, we got reply form java side, with following data: ");
            console.log(myJSON);
            // redirecting example..
            if(data === "SUCCESS") {
              window.location.replace("action");
            }
	    },

        error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
    });
});