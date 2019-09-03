function nWin() {
//   var w = window.open();
//   var html = $('#toNewWindow').html();

alert("Le tableau de mise à jour des projets n'est pas disponible pour le moment. Nous nous tenons à votre disposition pour remplir les informations de vos projets en attendant.");
// $(w.document.body).html(html);
}

function seeAPI() {
    jQuery(document).ready(function(){
        $('.second').hide(0);
        $('.troisieme').hide(0);
        $('.principal').show(0);
    });
}

function seeVersion() {
    jQuery(document).ready(function(){
        $('.principal').hide(0);
        $('.troisieme').hide(0);
        $('.second').show(0);
    });
}

function seeFormulaire() {
    jQuery(document).ready(function(){
        $('.principal').hide(0);
        $('.second').hide(0);
        $('.troisieme').show(0);
    });
}

$(function() {
    $('a#formulaire').click(nWin);
    $('a#versionning').click(seeVersion);
    $('a#retour').click(seeAPI);
});