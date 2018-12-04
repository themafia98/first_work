$(document).ready(function() {

    //  title h1,h5
    var title_one = $('h5,h1');
    for(var i=0;i<=2;i++) {
        title_one[i].classList.add('zoomIn', 'animated','wow');
    }
    // remove animation
    var title_home = $(".general");
    title_home.toggleClass('zoomIn animated wow',false);


});



