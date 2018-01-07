$("thumb-containet").hover(() => {
    
});

function resize() {
    $(".thumb-container").each(function( index ) {
        $(this).css("height", $(this).css("width"));
    });
}

$(document).ready(() => {
    resize();
});

$(window).resize(() => {
    resize();
});
