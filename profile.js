


$(document).ready(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8081/NoteApp/getUser",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("token", localStorage.getItem('token'));
        },
        success: function (user) {

            console.log(user);

            console.log("hello");
            //var firstname=result.firstName;

            console.log(firstname);
            $('#lastloginStamp').text(user.lastloginStamp); 



            if (user.firstName == null) {
                $('#firstname').text('-');

            } else {
                $('#firstname').text(user.firstName);
            }
            if (user.middleName == null) {
                $('#middleName').text('-');
            } else {
                $('#middleName').text(user.middleName);
            }
            if (user.lastName == null) {
                $('#lastName').text('-');
            } else {
                $('#lastName').text(user.lastName);
            }
            if (user.dateOfBirth == null) {
                $('#dob').text('-');

            } else {
                $('#dob').text(user.date);

            }
            if (user.gender == null) {
                $('#gender').text('-');

            } else {
                $('#gender').text(user.gender);

            } if (user.country == null) {
                $('#country').text('-');
            } else {
                $('#country').text(user.country);

            } if (user.phone == null) {
                $('#phone').text('-');
            } else {
                $('#phone').text(user.phone);

            } if (user.phone_Ext == null) {
                $('#phoneExt').text('-');
            } else {
                $('#phoneExt').text(user.phone_Ext);

            } if (user.address == null) {
                $('#address').text('-');

            } else {
                $('#address').text(user.address);
            } if (user.email == null) {
                $('#email').text('-');
            } else {
                $('#email').text(user.email);
            } if (user.userName == null) {
                $('#userName').text('-');

            } else {
                $('#userName').text(user.userName);
            }
        }
    });

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8081/NoteApp/getUser",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("token", localStorage.getItem('token'));
        },
        success: function (user) {

            console.log(user);

            console.log("hello");
            //var firstname=result.firstName;

            console.log(firstname);
            $('#lastloginStamp').text(user.lastloginStamp); 



            if (user.firstName == null) {
                $('#firstname').text('-');

            } else {
                $('#firstname').text(user.firstName);
            }
           
        }
    });
    });



    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8081/NoteApp/logInTime",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("token", localStorage.getItem('token'));
        },
        success: function (logTime) {
            var i;
            var time='>';
            for (i = 0; i < logTime.length; i++) {
           $("#result").append('>'+logTime[i].lastloginStamp+'<br>');
            }


        }
    });
