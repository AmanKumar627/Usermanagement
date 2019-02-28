$('#logout').click(function (e)
{
console.log('logout');

    localStorage.removeItem('token');
}
);
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

            $('#lastloginStamp').text(user.lastloginStamp);

        }
    });
});