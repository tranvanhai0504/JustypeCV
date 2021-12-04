var langCode = $("langCode").var() || "en";
var jsonUrl = "../Content/lang/" + langCode + ".json";

var translate = function (jsdata) {
    $("[langKey]").each(function (index) {
        var strTr = jsdata[$(this).attr("langKey")];
        $(this).html(strTr);
        $(this).attr("placeholder", strTr);
    });
}

$.ajax ({
    url: jsonUrl,
    dataType: "json",
    async: false,
    success: translate
});