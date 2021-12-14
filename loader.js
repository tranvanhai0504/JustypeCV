$(window).on('load',function(){
    if ($('#loader').length) {
        $('#loader').delay(1500).fadeOut('slow', function () {
            $(this).remove();
        });
    }
})