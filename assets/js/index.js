jQuery(document).ready(function () {
    jQuery('.navigation-section > nav.closed > ul').hide();
    jQuery('.navigation-section nav h2').click(function () {
        jQuery(this).next().slideToggle();
        jQuery(this).find('i').toggleClass('fas fa-chevron-down');
        jQuery(this).find('i').toggleClass('fas fa-chevron-up');
        jQuery(this).parent().toggleClass('closed');
    });
});