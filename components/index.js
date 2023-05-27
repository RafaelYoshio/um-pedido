$(document).ready(function() {
    $('.custom__container').addClass('active')
})

if ($(window).width() > 991) {
    $('.custom__buttons--no').hover(function(){
        $(this).css({"left": Math.random() * (window.outerWidth - 200) , "top": Math.random() * (window.outerHeight - 200), "position": "fixed", "background": "red", "color": "#fff"})
    });
} else {
    $('.custom__buttons--no').click(function(){
        $(this).css({"display": "none"})
    });
}
