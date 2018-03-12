
var draw;
var value= 'Circle';
  //**** ceration de l'objet arcs
var arcs = new ol.Feature({
    type: (value),
    dessinArc: dessinArc
                  });

//**  la carte
/*Déclaration d'une première couche raster pour l'affichage de la carte*/
var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
                              });

    var selectArc = new ol.interaction.Select({ // l'interaction de selection utilisé pour le déplacement
      condition: ol.events.condition.pointerMove,
    });
    var selectArc1 = new ol.interaction.Select(); //interaction de selection utilisé pour le changement de style
    var source = new ol.source.Vector({
             features:[arcs],
               wrapX: false
             });
   var opacite = document.getElementById('opacite'); //recuperation de la valeur de l'opacité
   /*Déclaration d'une deuxième couche vector pour l'affichage du du dessin*/
   var vector1 = new ol.layer.Vector({
        opacity : opacite.value,
       style : newstyle,
       source: source
                                    });

    var translate = new ol.interaction.Translate({
      features: selectArc.getFeatures()
    });

var map = new ol.Map({

  layers: [raster, vector1],   /*Ajout des deux couches au conteneur*/

  target: 'map',
  view: new ol.View({
  center: ol.proj.transform([-4.49702, 48.39888], 'EPSG:4326', 'EPSG:3857'), //zoom sur l'UBO
  zoom:14
     })
   });

function addInteraction() {
  draw = new ol.interaction.Draw({
    source: source,
    type: (value),
    geometryFunction: dessinArc,
                                });

  map.addInteraction(draw);

}// fin de la fonction addInteraction


// fonction du bouton de deplacement de l'objet
function deplacer(){
  map.removeInteraction(draw);  // on desactive d'abord l'interaction de dessin
  map.addInteraction(selectArc);  // ensuite on selectionne l'objet
  map.addInteraction(translate);  // l'objet sera deplacé avec l'interaction translate
}

// fonction du bouton de selection de l'objet pour lequel on veut modifier le style
function selec(){
  map.removeInteraction(draw);
  map.addInteraction(selectArc1);
}

//fonction du bouton appliquer, pour appliqer le style sur les objets
function appliquer(){
  map.removeInteraction(draw);
  map.removeInteraction(selectArc);
  arcs.setStyle(newstyle);
  vecror1.setOpacity(opacite);
}
//fonction du bouton de dessin
function dessin() {
 addInteraction(draw);
              }
