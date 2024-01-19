$(document).ready(function() {
    $('.button--1').click(function() {
        $('.grid--two').fadeOut(3000, function() {
            $('.grid--three').css('background-color', 'yellow');
        });
    });

    $('.button--serious, .button--success').click(function() {
        $('.grid').each(function() {
            $(this).find('img, h2, p').toggle();
        });
    });
});
