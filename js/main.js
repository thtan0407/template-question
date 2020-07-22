
$(window).bind('load', function () {
    $('.toggle-sub').click(function () {
        $(this).parents('.menu-item').stop().toggleClass('active');
        $(this).siblings('.sub-menu').stop().slideToggle();
    });
    $('#menu-mobile').mmenu({
        extensions: ["position-right", "position-front"]
    });
    $('#menu-sidebar').mmenu({
        extensions: ["position-left", "position-front"]
    });
});