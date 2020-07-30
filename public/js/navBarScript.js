// Navbar Script
// Function used to shrink nav bar removing paddings and adding black background

$(window).scroll(function() {
    if ($(document).scrollTop() > 35) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});