
$(document).ready(function(){
    $(".back_right").delay(2000).fadeIn(1000)
})

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


$(document).ready(function(){
    $(".Experience").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Education").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Project").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Certificates").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Achiements").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Skills").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

var i = 0;
var j = 0;
var l = 0;
var k = 0;
var h = 0;
var g = 0;

function append1(){
    var val1 = 'l-' + i;
    let tx1 = $("<li></li>").attr("id", val1)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_exper").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_exper").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val1)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_exper").val())
    if($("#add_infor_input_title_exper").val() != ""){
        $("#CV_exper .CV_exper_informations").append(tx1)
        $("#CV_exper .CV_exper_informations li:last-child").append(tx2)
        $(".Experience").after(tx4)
        $(".Experience+div").append(tx6, tx5)
        $(".form_add_element_exper").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_exper").val("")
        if($("#add_infor_input_exper").val() != ""){
            $("#CV_exper .CV_exper_informations li:last-child").append(tx3)
            $("#add_infor_input_exper").val("")
        }
    }
    i +=1;
}

function append2(){
    var val2 = 'm-' + j;
    let tx1 = $("<li></li>").attr("id", val2)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_edu").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_edu").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val2)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_edu").val())
    if($("#add_infor_input_title_edu").val() != ""){
        $("#CV_edu").append(tx1)
        $("#CV_edu li:last-child").append(tx2)
        $(".Education").after(tx4)
        $(".Education+div").append(tx6, tx5)
        $(".form_add_element_edu").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_edu").val("")
        if($("#add_infor_input_edu").val() != ""){
            $("#CV_edu li:last-child").append(tx3)
            $("#add_infor_input_edu").val("")
        }
    }
    j++;
}

function append3(){
    var val3 = 'n-' + l;
    let tx1 = $("<li></li>").attr("id", val3)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_pro").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_pro").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val3)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_pro").val())
    if($("#add_infor_input_title_pro").val() != ""){
        $("#CV_pro").append(tx1)
        $("#CV_pro li:last-child").append(tx2)
        $(".Project").after(tx4)
        $(".Project+div").append(tx6, tx5)
        $(".form_add_element_pro").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_pro").val("")
        if($("#add_infor_input_pro").val() != ""){
            $("#CV_pro li:last-child").append(tx3)
            $("#add_infor_input_pro").val("")
        }
    }
    l++;
}

function append4(){
    var val4 = 'k-'+k;
    let tx1 = $("<li></li>").attr("id", val4)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_cert").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_cert").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val4)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_cert").val())
    if($("#add_infor_input_title_cert").val() != ""){
        $("#CV_cert").append(tx1)
        $("#CV_cert li:last-child").append(tx2)
        $(".Certificates").after(tx4)
        $(".Certificates+div").append(tx6, tx5)
        $(".form_add_element_cert").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_cert").val("")
        if($("#add_infor_input_cert").val() != ""){
            $("#CV_cert li:last-child").append(tx3)
            $("#add_infor_input_cert").val("")
        }
    }
    k++;
}


function append5(){
    var val5 = 'o-'+h;
    let tx1 = $("<li></li>").attr("id", val5)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_achi").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_achi").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val5)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_achi").val())
    if($("#add_infor_input_title_achi").val() != ""){
        $("#CV_achi").append(tx1)
        $("#CV_achi li:last-child").append(tx2)
        $(".Achiements").after(tx4)
        $(".Achiements+div").append(tx6, tx5)
        $(".form_add_element_achi").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_achi").val("")
        if($("#add_infor_input_achi").val() != ""){
            $("#CV_achi li:last-child").append(tx3)
            $("#add_infor_input_achi").val("")
        }
    }
    h++;
}

function append6(){
    var val6 = 'p-'+g;
    let tx1 = $("<li></li>").attr("id", val6)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_ski").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_ski").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val6)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_ski").val())
    if($("#add_infor_input_title_ski").val() != ""){
        $("#CV_ski").append(tx1)
        $("#CV_ski li:last-child").append(tx2)
        $(".Skills").after(tx4)
        $(".Skills+div").append(tx6, tx5)
        $(".form_add_element_ski").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_ski").val("")
        if($("#add_infor_input_ski").val() != ""){
            $("#CV_ski li:last-child").append(tx3)
            $("#add_infor_input_ski").val("")
        }
    }
    g++;
}

$(document).ready(function(){
    $(".review_cv").click(function(){
        $("#CV").removeClass("scale-up-center")
        $("#table_add_infor").animate({left : "-2000px"}, 300)
        $("#CV").delay(400).animate({left: "0"}, 500, function(){
            $("#CV").addClass("scale-down-center")
            window.scrollTo({top:235,behavior:'smooth'});
            $(".button_turnback").css("display", "flex")
            $(".button_turnback_real").css("display", "block")
        })
    })
})

$(document).ready(function(){
    $(".button_turnback_real").mouseenter(function(){
        $(".button_turnback").animate({left : "0"})
    })
    $(".button_turnback").mouseenter(function(){
        $(".button_turnback").css("left", "0")
    })
    $(".button_turnback").mouseleave(function(){
        $(".button_turnback").animate({left : "-25%"})
    })
})

$(document).ready(function(){
    $(".button_turnback").click(function(){
        $(".button_turnback").css("display", "none")
        $(".button_turnback_real").css("display", "none")
        $("#CV").addClass("scale-up-center")
        $("#CV").removeClass("scale-down-center")
        $("#CV").delay(400).animate({left: "250px"}, 500, function(){
            window.scrollTo({top:0,behavior:'smooth'});
            $("#table_add_infor").animate({left : "0"}, 500)
        })
    })
})


$(document).on("click", ".dataid",function(){
    var a = $(this).attr("data")
    var b = document.getElementById(a)
    b.remove()
    $(this).parent().remove()
});


// $(document).ready(function(){
//     var areaCV = document.getElementById('CV');
//     var buttonDownl = document.querySelector('.print_cv');
//     console.log(areaCV)
//     console.log(buttonDownl)

//     let opt = {
//         margin:       0,
//         filename:     'JusTypeCV.pdf',
//         image:        { type: 'jpeg', quality: 1 },
//         html2canvas:  { scale: 2 },
//         jsPDF:        { unit: 'px', format: 'a4', orientation: 'portrait' }
//       };

//     function taoCV(){
//         html2pdf(areaCV, opt)
//     }
    
//     function themClass(){
//         $("#CV").addClass("class_in")
//     }

//     function xoaClass(){
//         $("#CV").remove("class_in")
//     }

//     buttonDownl.addEventListener('click', function(){
//         themClass()
//         taoCV()
//         xoaClass()
//     })
// })



$(document).on("click", ".print_cv", function(){
    window.print().save()

    // function loadPrint() {
    //     window.print();
    //     setTimeout(function () { window.close(); }, 100);
    // }

    // loadPrint()
})
