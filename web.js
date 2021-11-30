
$(document).ready(function(){
    $(".button_submit").click(function(){
        $(".img_web_name").animate({top: '80px'}, 300);
        $(".img_web_name").animate({top: '-500px'}, 300);
        $(".img_web_name_CV").animate({top: '150px'}, 300);
        $(".img_web_name_CV").animate({top: '-500px'}, 300);
        $(".slogan_web").delay(300).animate({top: '240px'}, 300);
        $(".slogan_web").animate({top: '-500px'}, 300);
        $(".input_name").delay(600).animate({top: '300px'}, 300);
        $(".input_name").animate({top: '-500px'}, 300);
        $(".input_prof").delay(900).animate({top: '430px'}, 300);
        $(".input_prof").animate({top: '-500px'}, 300);
        $(".button_submit").attr("class", "bounce-out-top")
        $(".img_web_name").delay(1200).slideUp()
        $(".img_web_name_CV").delay(1200).slideUp()
        $(".slogan_web").delay(1200).slideUp()
        $(".input_name").delay(1200).slideUp()
        $(".input_prof").delay(1200).slideUp()
        $("#intro_web").delay(1800).fadeOut("slow", function(){
            $(".text_name").text($(".input_name").val());
            $(".prof_title").text($(".input_prof").val());
            $("p").empty(".ct");
            $(".CV_exper_informations li").remove()
            $(".ad_mail").text("Your mail")
            $(".ad_phone").text("Your phone number")
            $(".ad_dayOfBirth").text("Your day of birth")
            $(".ad_address").text("Your address")
            $("#CV").delay(500).animate({left: '250px'})
            $("#table_add_infor").delay(700).fadeIn()
        });
    })
})

var save = function(){
    $(".table_1").css("display", "block")
    $("html").css("zoom", "67%")
}

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.user_img')
          .attr('src', e.target.result)
          .width(90)
          .height(90)
          .css({
              "position" : 'absolute',
              "left" : "3px",
              "top" : "3px",
              "border-radius" : "301px"
          });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

$(document).ready(function(){
    $(".input_name_infor").focusin(function(){
        $(this).next().animate({
            height : '+=1.5px',
            width : '+=50px'
        }, 200)
    })
    $(".input_name_infor").focusout(function(){
        $(this).next().animate({
            height : '-=1.5px',
            width : '-=50px'
        }, 200)
    })
})

$(document).ready(function(){
    $(".input_contact_infor").focusin(function(){
        $(this).next().animate({
            height : '+=1px',
            width : '+=50px'
        }, 200)
    })
    $(".input_contact_infor").focusout(function(){
        $(this).next().animate({
            height : '-=1px',
            width : '-=50px'
        }, 200)
    })
})

$(document).ready(function(){
    $(".name").keyup(function(){
        $(".text_name").text($(".name").val())
    })
})

$(document).ready(function(){
    $(".position").keyup(function(){
        $(".prof_title").text($(".position").val())
    })
})

$(document).ready(function(){
    $(".intro").keyup(function(){
        $(".intro_user").text($(".intro").val())
    })
})

$(document).ready(function(){
    $(".email").keyup(function(){
        $(".ad_mail").text($(".email").val())
    })
})

$(document).ready(function(){
    $(".numberPhone").keyup(function(){
        $(".ad_phone").text("+84 " + $(".numberPhone").val())
    })
})

$(document).ready(function(){
    $(".DoB").keyup(function(){
        $(".ad_dayOfBirth").text($(".DoB").val())
    })
})

$(document).ready(function(){
    $(".addresss").keyup(function(){
        $(".ad_address").text($(".addresss").val())
    })
})





