var daktilo = new Audio('/anasayfa/anasayfa_ses/daktilo2.mp3');
daktilo.loop=true;
var sesKontrolAudio = 0;

$(".sesSpan").click(function(){

  if(sesKontrolAudio == 0){
    
    $(this).find("i").removeClass("bi bi-volume-mute-fill");
    $(this).find("i").addClass("bi bi-volume-up-fill");
    sesKontrolAudio = 1;
  }else if(sesKontrolAudio == 1){
    daktilo.pause();
    $(this).find("i").removeClass("bi bi-volume-up-fill");
    $(this).find("i").addClass("bi bi-volume-mute-fill");
    sesKontrolAudio = 0;
  }

});

var Text = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

var kontrol = 0;

  Text.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      if(kontrol != 2){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        daktilo.pause();
      }
      daktilo.pause();
    } else {
      if(sesKontrolAudio == 1){
        daktilo.play(); 
      }
     this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      kontrol++;
      setTimeout(function() {
        daktilo.pause();
      }, 250);
     
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
   
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-words');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new Text(elements[i], JSON.parse(toRotate), period);
      }
      
    }
  };