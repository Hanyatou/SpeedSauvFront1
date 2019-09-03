var sujetCourant;
var projetCourant;
var url = "../assets/data/data.json";
var idEltCourant= 0;
var risques2= "Risques :";
var attentes2 = "Attentes :";
var alertecourant= 0;
var risquecourant= 0;
var attentecourant = 0;
var versionCourant;

/* var mesAlertesservi = this.authService.listeAlertes( listedesAlertes =>{
  console.log("********************************mes elements dans le fichier js ===== " , mesAlertesservi)
} ) */

//preparation du DOm pour eviter les erreurs de DOM dû au chargement de la page
$(document).ready(function(){
  //on charge le fichier json
  $.getJSON(url, function (data){
    var nbAlerteSujetCourant = 0;
    var nbRisqueSujetCourant = 0;
    var nbAttenteSujetCourant = 0;

    //on parcours le fichier tant que la fin n'est pas atteinte
    while(idEltCourant < data.projets.length){
      //recuperation du nom du sujet courant
      sujetCourant = data.projets[idEltCourant].titre;
      projetCourant = data.projets[idEltCourant].categorie;
      nbAlerteSujetCourant = data.projets[idEltCourant].alertes[0].nbalertes;
      //recuperation  du nombre d'attentes ou alertes du sujet courant
      nbAttenteSujetCourant = data.projets[idEltCourant].attentes[0].nbattente;
      //recuperation du nombres de risques du sujet courant;
      nbRisqueSujetCourant = data.projets[idEltCourant].risques[0].nbrisques;
      versionCourant = data.projets[idEltCourant].versionPI;

      $('div.scroll').append('<p class=projet> Fiche GPF : </p>');
      $('<span class=descriptif> </span>').text(projetCourant).appendTo('div.scroll p:last');
      $('div.scroll p:last').append('<p class=titre> Projet : </p>');
      $('<span class=descriptif> </span>').text(sujetCourant).appendTo('div.scroll p:last');
      $('div.scroll p:last').append('<p class=version> Livraison : </p>');
      $('<span class=descriptif> </span>').text(versionCourant).appendTo('div.scroll p:last');
      if(nbAlerteSujetCourant != 0){
        $('div.scroll p:last').append('<p class=titre> Alerte(s) : </p>');
        alertecourant = 0;
        while(alertecourant<nbAlerteSujetCourant){
          if(alertecourant == 0){
          $('<span class=descriptif> </span>').text(data.projets[idEltCourant].alertes[0].descriptif[alertecourant].index).appendTo('div.scroll p:last');
          }else{
            $('<div class=descriptif> </div>').text(data.projets[idEltCourant].alertes[0].descriptif[alertecourant].index).appendTo('div.scroll span:last').css('margin-left', '5%');
          }
          alertecourant++;
        }
      }else{
        $('div.scroll p:last').append('<p class=titre> Alerte(s) : </p>');
        $('<span class=descriptif> Rien à Signaler </span>').appendTo('div.scroll p:last');
      }

      if(nbRisqueSujetCourant != 0){
        $('div.scroll p:last').append('<p class=titre> Risque(s) : </p>');
        risquecourant = 0;
        while(risquecourant<nbRisqueSujetCourant){
          if(risquecourant == 0){
          $('<span class=descriptif> </span>').text(data.projets[idEltCourant].risques[0].descriptif[risquecourant].index).appendTo('div.scroll p:last');
          }else{
            $('<div class=descriptif> </div>').text(data.projets[idEltCourant].risques[0].descriptif[risquecourant].index).appendTo('div.scroll span:last').css('margin-left', '5%');
          }
          risquecourant++;
        }
      }else{
        $('div.scroll p:last').append('<p class=titre> Risque(s) : </p>');
        $('<span class=descriptif> Rien à Signaler </span>').appendTo('div.scroll p:last');
      }

      if(nbAttenteSujetCourant != 0){
        $("div.scroll p:last").append('<p class=titre> Attente(s) : </p>');
        attentecourant = 0;
        while(attentecourant<nbAttenteSujetCourant){
          if(attentecourant == 0){
            $('<span class=descriptif> </span>').text(data.projets[idEltCourant].attentes[0].descriptif[attentecourant].index).appendTo('div.scroll p:last');
          }else{
            $('<div class=descriptif> </div>').text(data.projets[idEltCourant].attentes[0].descriptif[attentecourant].index).appendTo('div.scroll span:last').css('margin-left', '5.5%');
          }
          attentecourant++;
        }
      }else{
        $('div.scroll p:last').append('<p class=titre> Arbitrage(s) : </p>');
        $('<span class=descriptif> Rien à Signaler </span>').appendTo('div.scroll p:last');
      }
      $('div.scroll p:last').append('<div class=barre> </div>');

      idEltCourant++;
      $('div.barre').css('background-color', 'lightgrey').css('margin-top', '0.5%').css('margin-left', '25%').css('margin-right', '25%').css('height', '4px').css('border-radius', '5px');
      $('span.descriptif').css('font-weight', 'normal');
      $('p.projet').css('margin-top', '4%').css('margin-right', '5%').css('font-size', '90%').css('font-weight', 'bold');
    }
  });
});


