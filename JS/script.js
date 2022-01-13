$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navber').addClass("sticky")
        }else{
            $('.navber').removeClass("sticky")
        }
    });
    // hamburger menu

    $('.menu-btn').click(function(){
        $('.navber .menu').toggleClass("active");
    });

})