window.sr = new ScrollReveal();

sr.reveal(".logoAlanDiv, .logoYaziAlan",{
    // delay:400,
    distance:"400px",
    origin:"right",
    duration:1000
    // scale:0.8,
    // opacity:1
});

sr.reveal(".btn-group > button, .sosyalMedyaAnaDiv > div",{
    opacity:0,
    interval:500,
    rotate:{x:40,y:40}
});

sr.reveal(".yaziAlan",{
    delay:1000,
    rotate:{x:40, y:40, z:300}
});


sr.reveal(".logoAlanDiv, .logoYaziAlan, .btn-group > button, .yaziAlan, .sosyalMedyaAnaDiv > div",{ 
    reset: true 
});