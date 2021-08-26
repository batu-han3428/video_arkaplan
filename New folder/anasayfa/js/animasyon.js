var animasyonKontrol = 0;

setInterval(function(){
    if(animasyonKontrol == 0){
        $(".sesSpan").addClass("animasyon");
        animasyonKontrol = 1;
    }else if(animasyonKontrol == 1){
        $(".sesSpan").removeClass("animasyon");
        animasyonKontrol = 0;
    }
},4000);

$(".sesSpan").hover(i,o); 

function i(){
    $(".sesSpan").removeClass("animasyon");
    animasyonKontrol = 2;
}

function o(){
    $(".sesSpan").addClass("animasyon");
    animasyonKontrol = 1;
}