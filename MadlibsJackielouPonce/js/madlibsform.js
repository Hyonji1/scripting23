$(document).ready(function () {

    $('#submit').click(function (e) {
        e.preventDefault();
        $('#1').text('').text($('.c1:checked').val());
        for(var x = 2; x<=11; x++) {
            $('#'+x).text('').text($('#f'+x).val());
        }
        $('#story').removeClass('col-sm-12').addClass('col-sm-9');
        $('#generated-image').show();

    });

    $('#reset').click(function (e) {
        e.preventDefault();
        for(var x = 1; x<=11; x++) {
            $('#f'+x).val('');
            $('#'+x).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        }

        $('#story').removeClass('col-sm-9').addClass('col-sm-12');
        $('#generated-image').hide();
    });
});