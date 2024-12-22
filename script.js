// Blur nav on scroll
$(window).scroll(function(e) {
        
    var distanceScrolled = $(window).scrollTop();

    // $('nav').css('backdrop-filter', 'blur(' + distanceScrolled/100 + 'px)');  // property, value
    

    if(distanceScrolled > 100) {
        $('nav').css({
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderBottom: "1px solid rgba(55, 55, 55, 0.5)",
            background: "rgba(0, 0, 0, 0.1)" // This can be used to overlay a color, still dont know if kevin powell's method is better tho
        });
    }
    else {
        $('nav').css({
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            borderBottom: "none",
            background: "none"
        });
    }
    
});


// Close disclaimer and remove padding-top for body when closed
function closeDisclaimer() {
    document.getElementById('disclaimer').style.display = 'none';
    document.querySelector('nav').style.top = '0';
    $('body').css('padding-top', '0px');
    $('.ghostVid').css('padding-top', '0px');
}

document.body.scrollTop = document.documentElement.scrollTop = 0;