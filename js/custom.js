$(document).ready(function () {
    // $(document).find(".icon__logo").animate({
    //     // opacity: 1
    //     height: 100
    // }, 3000 );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // navText: ["<img src='assets/img/left.png'>", "<img src='assets/img/right.png'>"],
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsiveClass:true,
        dots: false,
        nav:true,
        autoWidth:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            768:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
    $(".open").on("click", function(){
        $(".popup-overlay, .popup-content").addClass("active");
    });

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
    $(".close, .popup-overlay").on("click", function(){
        $(".popup-overlay, .popup-content").removeClass("active");
    });





});
