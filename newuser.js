$('#contact-form').bootstrapValidator({
    //        live: 'disabled',
    message: 'This value is not valid',

    fields: {
        userName: {
            validators: {
                notEmpty: {
                    message: 'The username is required'
                },
                notEmpty: {
                    message: 'The username is required'
                }
            }
        }, password: {
            validators: {
                notEmpty: {
                    message: 'The password is required'
                },

            }
        },
    }
});