// toggling navbar when hamburger icon clicked
$('document').ready(function() {
    $('.mobile__hamburger').click(function(){
        $(this).toggleClass('active');
        $('.navigation-menu').toggleClass('menuActive');
        if(!$('.side-icon').hasClass('hide')){
            $('.side-icon').addClass('hide');
        } else{
            $('.side-icon').removeClass('hide');
        }
    })
});

// $('document').ready(function() {
//     $('.navigation-menu .dropdown a').click(function(e) {
//         e.preventDefault();
//     })
// });

// scroll to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $(".scroll_to_top").css({ opacity: "1"}).fadeIn();
        $(".scroll_to_top").addClass('active');
    } else {
        $(".scroll_to_top").fadeOut();
        $(".scroll_to_top").removeClass('active');
    }
});

$(".scroll_to_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

// sticky-top header
// $(document).ready(function(){
//     $(".bottom-header").sticky({
//         topSpacing:0,
//         setHeight: false
//     });
// });

$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 

    // opening the one you clicked on and closing siblings that were already open
    $(this).parent().siblings().removeClass('open'); /* removes open class on dropdowns that are already open*/
    $(this).parent().toggleClass('open'); /* adds class open on the dropdown that is being clicked on*/
    //$('.dropdown-submenu').not($(this)).parent().removeClass('open');

    var menu = $(this).parent().find("ul");
    var menupos = menu.offset();
  
    if ((menupos.left + menu.width()) + 30 > $(window).width()) {
        var newpos = - menu.width();      
    } else {
        var newpos = $(this).parent().width();
    }
    menu.css({ left:newpos });

});

