$(".logoYaziBaslik").mouseenter(function(){
    $(".anasayfaLogo").css({
        "box-shadow":"0 0 10px 0.25rem rgb(157, 163, 173)",
    });
});

$(".logoYaziBaslik").mouseleave(function(){
    $(".anasayfaLogo").css({
        "box-shadow":"unset",
    });
});