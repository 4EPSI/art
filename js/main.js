// Mobile menu
$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');
    }
    e.stopPropagation();
});
