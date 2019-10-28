$("#login").on('click', function() {
    console.log('click');
    var user = $("#inputEmail").val();
    var pass = $("#inputPassword").val();
    console.log(user, pass);
    $.ajax({
        type: 'POST',
        url: './login',
        data: {
            username: user,
            password: pass
        },
        success: function() {
            window.location.replace("motorizados");
        }
    });
});