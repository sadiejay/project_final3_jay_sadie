//Custom jQuery
$(document).ready(function () {
    $(':header').css('opacity', 1.0);
    $(':header').hover(function () {
        $(this).animate({opacity: 0.5}, 500);
    }, function () {
        $(this).animate({opacity: 1.0}, 500);
    });
});

// backstretch plugin
$('.backstretch').backstretch();

// SVGMagic plugin
$(document).ready(function () {
    $('img').svgmagic();
});
