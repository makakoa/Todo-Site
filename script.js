$(document).ready(function () {
    $('#button').click(function () {
        var toAdd = $('input[name=task]').val();
        $('ol').append('<li>' + toAdd + '</li>');
        $('input[name=task]').val("");
    });
    $(document).on('click', 'li', function () {
        $(this).remove();
    });
});