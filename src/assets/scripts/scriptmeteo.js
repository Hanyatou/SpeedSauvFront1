var url = "../assets/data/data.json";
var meteo;
var idEltCourant;
var nbr = 0;

//pparation du DOm pour eviter les erreurs de DOM dû au chargement de la page
function MaFonction(){

    //on charge le fichier json
    $.getJSON(url, function(data){

        //on parcours le fichier tant que la fin n'est pas atteinte
        while(nbr < data.projets.length){
            meteo = data.projets[nbr].risques[0].nbrisques + data.projets[nbr].attentes[0].nbattente;
            tendance = data.projets[nbr].tendance;
            if(nbr == 0){
                $('ul.tab').append('<li class=tab1></li>');
            }else{
                $('ul.tab li.tab1:last').after('<li class=tab1></li>');
            }

            $('li.tab1:last').append('<p></p>');
            $('p:last').text(data.projets[nbr].titre).css('float', 'left').css('margin', '0.5%').css('color', 'white').css('font-weight', 'bold').css('font-size', '80%').css('width', '60%');


            if(tendance == "retard"){
                $('li.tab1:last')
                .css('background-color', 'darkred')
                // .css('background-image','url(../../assets/images/orage.jpg)')
                ;
                $('p:last').after('<img class=tendance src="../../assets/images/tendance/retard.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '4.5%');
            }else if(tendance == "correcte"){
                $('li.tab1:last')
                .css('background-color', 'darkgoldenrod')
                // .css('background-image','url(../../assets/images/pluie.jpg)')
                ;
                $('p:last').after('<img class=tendance src="../../assets/images/tendance/correcte.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '4.5%');
            }else if(tendance == "en avance"){
                $('li.tab1:last')
                .css('background-color', 'darkgreen')
                // .css('background-image','url(../../assets/images/soleil.jpg)')
                ;
                $('p:last').after('<img class=tendance src="../../assets/images/tendance/en-avance.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '4.5%');
            }

            if(meteo > 2){
                $('p:last').after('<img class=meteo src="../../assets/images/meteo/rain.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '1.5%');
            }else if(meteo == 2){
                $('p:last').after('<img class=meteo src="../../assets/images/meteo/cloud.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '1.5%');
            }else if(meteo == 1){
                // $('li.tab1:last')
                // .css('background-color', 'olive')
                // // .css('background-image','url(../../assets/images/nuage.jpg)')
                // ;
                $('p:last').after('<img class=meteo src="../../assets/images/meteo/sun-cloud.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '1.5%');
            }else{
                $('p:last').after('<img class=meteo src="../../assets/images/meteo/sun.png"></img>');
                $('li.tab1:last img:last').css('margin-left', '1.5%');
            }
            nbr = nbr + 1;
        }
        $('li.tab1').css('list-style', 'none').css('width', '4.92%').css('float', 'left').css('text-align', 'left').css('box-shadow', '5px 5px 25px rgb(60, 60, 60)').css('border-radius', '5px').css('padding-left', '0.2%').css('margin-left', '0.5%').css('margin-right', '0.5%').css('margin-bottom', '0.5%').css('height', '70%');
        $('img.meteo').css('height', '30px').css('float', 'right').css('margin-top', '3px').css('margin-right', '3px').css('margin-left', '0px');
        $('img.tendance').css('height', '30px').css('float', 'right').css('margin-top', '3px').css('margin-right', '3px').css('margin-left', '10px');

        // if(LsScreen > 600) {
            taille2 = $('li.tab1').width()+(0.255*$('li.tab1').width());

            $(function(){
                setInterval(function(){
                    $(".slideshow ul").animate({marginLeft:-taille2},5000,function(){
                        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
                    })
                }, 0);
            });
        // }
    });
};