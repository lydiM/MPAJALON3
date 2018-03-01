
//Recupération de valeur du menu contour
var strokeSelect = document.getElementById('menuC');
// Recupération de valeur du menu remplissage
var fillSelect= document.getElementById('menuR');
// Recupération de valeur de l'epaisseur
var largeur = document.getElementById('epaisseur');
//la fonction de style des dessin sur la carte
var newstyle=function changestyle(arcStyle){
    var contour = strokeSelect.value;
    var remplissage=fillSelect.value;

    var arcStyle;

    arcStyle = [
        new ol.style.Style({
            fill:new ol.style.Fill({color: remplissage}),
            stroke: new ol.style.Stroke({color: contour, width: largeur.value}),

                        })
              ];

    return arcStyle;
   }
