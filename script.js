$(document).ready(function(){
    $('.carousel').slick({
        centerMode: true,
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        swipe: true,
        variableWidth: true,
        responsive: [
            {
            breakpoint: 750,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
            },
            {
            breakpoint: 400,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
            }
        ]
    });

    $('#carousel').hide();
    $('img').click(function(){
        $('#carousel').slideDown("slow");
        $('.carousel').slick('slickGoTo', "1");
    });
});