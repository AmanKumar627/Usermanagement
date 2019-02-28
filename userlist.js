$('#logout').click(function (e)
{
console.log('logout');

    localStorage.removeItem('token');
}
);

$(document).ready(function () {
   

    var table = $('#table').DataTable({
    "sAjaxSource": "http://localhost:8081/NoteApp/accountList",
    "sAjaxDataProp": "",
    "order": [[ 0, "asc" ]],
    "aoColumns": [

    { "mData": "userName" },
    { "mData": "email" },
    { "mData": "date_of_birth" },
    { "mData": "status" },
    { "mData": "role" },
    {render : editIcon}

    ]
    })

   

});

var editIcon=function(data,type,row){
if(type ==='display'){
    return '<a href="./EditProfile.html" class="fa fa-pencil"/>';
}
}