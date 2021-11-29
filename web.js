
$(document).ready(function(){
    $(".button_submit").click(function(){
        $("#intro_web").fadeOut("slow");
        $(".back_right").slideUp(500)
        $(".text_name").text($(".input_name").val());
        $(".prof_title").text($(".input_prof").val());
        $("p").empty(".ct");
        $(".CV_exper_informations li").remove()
        $(".ad_mail").text("Your mail")
        $(".ad_phone").text("Your phone number")
        $(".ad_dayOfBirth").text("Your day of birth")
        $(".ad_address").text("Your address")
        // addEX()
    })
})
