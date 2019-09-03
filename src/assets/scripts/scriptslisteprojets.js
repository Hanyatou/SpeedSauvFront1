var url = "../assets/data/data.json";
var etape;
var valeur = 0;
var it = 0;
var couleur;
var version;
var LsScreen = screen.width;
var nombrediv = screen.height;
var modulo;


$(function(){
  if (1000 <= nombrediv && nombrediv <= 1400) {
    modulo = 12;
  }else{
    modulo = 9;
  }
  $.getJSON(url, function(data){
    idEltCourant = 0;
    while(idEltCourant < data.projets.length) {
      etape = data.projets[idEltCourant].avancement[0]. niveau;
      valeur = data.projets[idEltCourant].avancement[0].valeurniveau;
      couleur = data.projets[idEltCourant].tendance;
      version = data.projets[idEltCourant].versionPI;

      if(idEltCourant == 0){
        $('div.container').append('<div class=single-item-rtl> </div>');
      }else if(idEltCourant % modulo == 0 && idEltCourant != 0 && LsScreen > 600){
        $('div.single-item-rtl:last').after('<div class=single-item-rtl> </div>');
       }
       $('div.single-item-rtl:last').append('<div class=ligne> </div>');
       $('div.ligne:last').append('<div class=titreS> </div>');
       $('div.titreS:last').text(data.projets[idEltCourant].titre);

       $('div.ligne:last').append('<div class=version> </div>');
       $('div.version:last').text(version);

       $('div.ligne:last').append('<div class=ca1 > </div>');
       $('div.ligne:last div.ca1:last').append('<span class=progress-bar role=progressbar> </span>');

       if(couleur == "retard"){
        $('span.progress-bar:last').text(etape).css('width', valeur).css('background-color', 'rgb(233, 66, 0)').css('border-radius', '5px').css('border','1%').css('padding-left', '1%');
      }else{
        $('span.progress-bar:last').text(etape).css('width', valeur).css('background-color', 'darkgreen').css('border-radius', '5px').css('border','1%').css('padding-left', '1%');
      }
      idEltCourant++;
    }

    if(LsScreen > 600 && LsScreen<=750 ) {
      $('div.single-item-rtl').css('width', '100%').css('height', '100%').css('margin', '1%').css('display', 'inline-block').css('padding-right','2%');
      $('div.ligne').css('width', '100%').css('height', '8.5%').css('margin-right','3%');
      $('div.titreS').css('margin', '1%').css('font-size', '100%').css('font-weight', 'bold').css('text-align', 'right').css('float', 'left').css('width', '30%');
      $('div.version').css('margin', '1%').css('font-size', '100%').css('font-weight', 'bold').css('text-align', 'right').css('float', 'left').css('width', '4%');
      $('div.ca1').css('margin', '1%').css('float', 'right').css('background-color', 'rgb(199, 199, 199)').css('width', '60%').css('border-radius', '5px');
      $('span.progress-bar').css('float', 'left').css('font-weight', 'bold');

    }else if(750< LsScreen && LsScreen <=1100){
      $('div.single-item-rtl').css('width', '103%').css('height', '90%').css('margin', '1%').css('display', 'inline-block').css('padding-right','1%');
      $('div.ligne').css('width', '100%').css('height', '8.5%').css('margin-right','1.5%');
      $('div.titreS').css('margin', '1%').css('font-size', '95%').css('font-weight', 'bold').css('text-align', 'right').css('float', 'left').css('width', '45%');
      $('div.version').css('margin', '1%').css('font-size', '95%').css('font-weight', 'bold').css('text-align', 'right').css('float', 'left').css('width', '4%');
      $('div.ca1').css('margin', '1%').css('float', 'right').css('background-color', 'rgb(199, 199, 199)').css('width', '40%').css('border-radius', '5px');
      $('span.progress-bar').css('float', 'left').css('font-weight', 'bold').css('font-size', '90%');

    }else{
      $('div.single-item-rtl').css('width', '103%').css('height', '90%').css('margin-right', '1%').css('display', 'inline-block').css('padding-right','1%');
      $('div.ligne').css('width', '97%').css('height', '10%').css('margin-right','3.5%').css('padding-left', '-10%');
      $('div.titreS').css('margin', '1%').css('font-size', '90%').css('font-weight', 'bold').css('text-align', 'right').css('float', 'left').css('width', '45%');
      $('div.version').css('margin', '1%').css('font-size', '90%').css('font-weight', 'bold').css('text-align', 'right').css('float', 'left').css('width', '4%');
      $('div.ca1').css('margin', '1%').css('float', 'right').css('background-color', 'rgb(199, 199, 199)').css('width', '45%').css('border-radius', '5px');
      $('span.progress-bar').css('float', 'left').css('font-weight', 'bold').css('font-size', '80%');
    }
 
    if(LsScreen > 600) {
      var taille= ($('div.single-item-rtl').width );
   /*    var taille = ($('div.container').width() * 99.99998 /100); */
     
      var speed= 5000;
      var pause = 9000;

      startSlider();

      document.addEventListener("visibilitychange", function() {
        if(document.hidden == true) {
          pauseSlider();
        }else{
          startSlider();
        }
      });

      var $containerO =  $('div.container-outer'); 
      var $containerOContent= $containerO.find('div.container');

      function startSlider(){
        if(idEltCourant > modulo){
          interval = setInterval(function(){
            $containerOContent.animate({'margin-top' : '-='+taille}, speed, function(){
              $(this).css({marginTop: 0}).find('div.single-item-rtl:last').after($(this).find('div.single-item-rtl:first') );
            }) 
          }, pause);
        }
      }    
    }

      function pauseSlider(){
        clearInterval(interval);
      }

      var $containerF = $('div.formulaire');
      $containerF.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    });
  });