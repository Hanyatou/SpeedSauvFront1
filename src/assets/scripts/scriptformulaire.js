var url = "../assets/data/data.json";
var etape;
var valeur = 0;
var it = 0;
var couleur;
var version;
var fiche;
var alerte;
var risque;
var attente;
var tendance;
var LsScreen = screen.width;

$(function(){
    // console.log("taille = ", LsScreen);
    $.getJSON(url, function(data){
        idEltCourant = 0;
        while(idEltCourant < data.projets.length) {
            fiche = data.projets[idEltCourant].categorie;
            titre = data.projets[idEltCourant].titre;
            version = data.projets[idEltCourant].versionPI;
            etape = data.projets[idEltCourant].avancement[0].niveau;
            valeur = data.projets[idEltCourant].avancement[0].valeurniveau;
            couleur = data.projets[idEltCourant].tendance;


            // console.log(fiche);
            if(idEltCourant == 0){
                $('div.formulaire').append('<div class=project-form> </div>');
            }
            $('div.project-form:last').append('<div class=ligne-form> </div>');

            $('div.ligne-form:last').append('<div class=fiche-div> </div>');
            $('div.fiche-div:last').text(fiche);

            $('div.ligne-form:last').append('<div class=titre-div> </div>');
            if(titre != fiche){
                $('div.titre-div:last').text(titre);
            }

            $('div.ligne-form:last').append('<input class=version-div> </input>');
            $('input.version-div:last').attr('placeholder', version);
            data.projets[idEltCourant].versionPI = $('input.version-div:last');

            $('div.ligne-form:last').append('<div class=alerte-div> </div>');
            $('div.alerte-div:last').append('<img class=plus src="../../assets/images/plus.png"></img>');
            $('img.plus:last').css('width', '20%').css('margin-left', '35%');

            $('div.ligne-form:last').append('<div class=risque-div> </div>');
            $('div.risque-div:last').append('<img class=plus src="../../assets/images/plus.png"></img>');
            $('img.plus:last').css('width', '20%').css('margin-left', '35%');

            $('div.ligne-form:last').append('<div class=attente-div> </div>');
            $('div.attente-div:last').append('<img class=plus src="../../assets/images/plus.png"></img>');
            $('img.plus:last').css('width', '20%').css('margin-left', '35%');

            $('div.ligne-form:last').append('<input class=tendance-div> </input>');
            $('input.tendance-div:last').attr('placeholder', couleur);

            $('div.ligne-form:last').append('<div class=niveau-div> </div>');
            $('div.niveau-div:last').append('<input class=pourcent-div> </input>');
            $('input.pourcent-div:last').attr('placeholder', valeur);
            $('input.pourcent-div:last').css('width', '100%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');

            $('div.niveau-div:last').append('<input class=etape-div> </input>');
            $('input.etape-div:last').attr('placeholder', etape);
            $('input.etape-div:last').css('width', '100%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');

            $('div.project-form div.ligne-form:last').after('<div class=barre> </div>');
            idEltCourant++;
        }
        while(idEltCourant != 50) {
            $('div.project-form:last').append('<div class=ligne-form> </div>');

            $('div.ligne-form:last').append('<input class=fiche-div> </input>');
            $('input.fiche-div:last').attr('placeholder', 'Fiche GPF');

            $('div.ligne-form:last').append('<input class=titre-div> </input>');
            $('input.titre-div:last').attr('placeholder', 'Projet');

            $('div.ligne-form:last').append('<input class=version-div> </input>');
            $('input.version-div:last').attr('placeholder', 'Livraison');

            $('div.ligne-form:last').append('<input class=alerte-div> </input>');
            $('input.alerte-div:last').attr('placeholder', 'Alerte');

            $('div.ligne-form:last').append('<input class=risque-div> </input>');
            $('input.risque-div:last').attr('placeholder', 'Risque');

            $('div.ligne-form:last').append('<input class=attente-div> </input>');
            $('input.attente-div:last').attr('placeholder', 'Attente');

            $('div.ligne-form:last').append('<input class=tendance-div> </input>');
            $('input.tendance-div:last').attr('placeholder', 'Tendance');

            $('div.ligne-form:last').append('<div class=niveau-div> </div>');
            $('div.niveau-div:last').append('<input class=pourcent-div> </input>');
            $('input.pourcent-div:last').attr('placeholder', 'Pourcentage');
            $('input.pourcent-div:last').css('width', '100%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('div.niveau-div:last').append('<input class=etape-div> </input>');
            $('input.etape-div:last').attr('placeholder', 'Etape');
            $('input.etape-div:last').css('width', '100%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');

            $('div.project-form div.ligne-form:last').after('<div class=barre> </div>');
            idEltCourant++;
        }



            $('div.project-form').css('width', '100%').css('height', '100%').css('display', 'inline-block').css('padding-right','2%');
            $('div.ligne-form').css('width', '100%').css('height', '8.5%').css('margin','1%');
            $('div.fiche-div').css('width', '12.5%').css('float', 'left').css('text-align', 'center').css('margin-top', '2px');
            $('div.titre-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('text-align', 'center').css('color', 'rgb(88, 88, 88)');
            $('input.version-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('div.alerte-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px');
            $('div.risque-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px');
            $('div.attente-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px');
            $('input.tendance-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('div.niveau-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px');

            $('div.barre').css('background-color', 'lightgrey').css('margin', '5%').css('height', '2px').css('border-radius', '5px').css('margin-top', '3%');


            $('input.fiche-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('text-align', 'center');
            $('input.titre-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('text-align', 'center');
            $('input.version-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('input.alerte-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('input.risque-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('input.attente-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('input.tendance-div').css('width', '12.5%').css('float', 'left').css('margin-top', '2px').css('color', 'rgb(88, 88, 88)').css('padding-left', '0.5%');
            $('input').css('background-color', '#fafafa').css('border', 'none');
    });
});


