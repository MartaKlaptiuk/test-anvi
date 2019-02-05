$(document).ready(function () {
    //SLIDER IN HEADER START
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
    //SLIDER IN HEADER END


    //MODAL WINDOW START
    $('a#modal-form').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({ opacity: 1 }, 200);
            });
    });

    $('#close, #overlay').click(function () {
        $('#modal_form')
            .animate({ opacity: 0 }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    //MODAL WINDOW END
});