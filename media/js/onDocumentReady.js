$(document).ready(function() {

    /* smoothScrolling **************************/
    $('a[href^=#]').bind("click", smoothScrolling);
    /* END smoothScrolling **********************/

}); // end on document ready

//Anonymous function that is applied to all internal-links
var smoothScrolling = function(e) {
    //prevent the "normal" behaviour which would be a "hard" jump
    e.preventDefault();

    //Get the target
    var target = $(this).attr("href");

    //perform animated scrolling
    $('html,body').animate({
        //get top-position of target-element and set it as scroll target
        scrollTop: $(target).offset().top

        //scrolldelay
        },
        600,
        function() {
            //attach the hash (#jumptarget) to the pageurl
            location.hash = target;
    });
}
