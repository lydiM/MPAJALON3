
//Recupération valeur menu contour
var strokeSelect = document.getElementById('menuC');

// Recupération valeur menu remplissage
var fillSelect= document.getElementById('menuR');


var newstyle=function changestyle(){

    var contour = strokeSelect.value;
    var remplissage=fillSelect.value;
    var arcStyle;
    if (remplissage != "trans"){
    arcStyle = [
        new ol.style.Style({
            fill:new ol.style.Fill({color: remplissage, width: 1}),
            stroke: new ol.style.Stroke({color: contour, width: 1})

        })
    ];}
    else {
    arcStyle = [
            new ol.style.Style({
                //fill:new ol.style.Stroke({color: remplissage, width: 1}),
                stroke: new ol.style.Stroke({color: contour, width: 1})
            })
    ];}

    return arcStyle;
}
