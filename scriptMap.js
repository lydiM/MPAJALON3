
var draw;
var value= 'Circle';
  //**** l'objet arcs
  var arcs = new ol.Feature({
         type: (value),
         geometryFunction: geometryFunction

        });
arcs.setStyle(newstyle);
//**  la carte
/*Déclaration d'une première couche raster pour l'affichage de la carte*/
var raster = new ol.layer.Tile({

    source: new ol.source.OSM()
});

/*Déclaration d'une deuxième couche vector pour l'affichage du du dessin*/
    var selectArc = new ol.interaction.Select({
      condition: ol.events.condition.pointerMove,
      //style : newstyle,
    });
    var selectArc1 = new ol.interaction.Select({
        style : newstyle,
        condition: ol.events.condition.click,

    });


    var  selectArc2= new ol.interaction.Select({
      style : newstyle,
      condition: ol.events.condition.click,

    });


    var source = new ol.source.Vector({
              //  features:selectArc.getFeatures(),

               features:[arcs],
               wrapX: false

             });

var opaite = document.getElementById('opacite');
    var vector1 = new ol.layer.Vector({
        opacity : opacite.value,
    style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          }),
          stroke: new ol.style.Stroke({
            color: 'Black',
            width: 2
          }),
        }),

      source: source
      //style: (typeSelect.onchange =changestyle())
        });


    var translate = new ol.interaction.Translate({
      features: selectArc.getFeatures()
    });

/*Ajout des deux couches au conteneur*/


var map = new ol.Map({

  //interactions: ol.interaction.defaults().extend([selectArc,selectArc1,selectArc2]),

  layers: [raster, vector1],

  target: 'map',
  view: new ol.View({
  center: ol.proj.transform([-4.49702, 48.39888], 'EPSG:4326', 'EPSG:3857'), //zoom sur l'UBO
  zoom:14
     })
   });

/*Fonction qui permet de créer le dessin */
//**
function addInteraction() {
  draw = new ol.interaction.Draw({
    source: source,
    type: (value),
    geometryFunction: geometryFunction
  });


  map.addInteraction(draw);
//  map.removeInteraction(selectArc)
map.addInteraction(selectArc2);


}// fin de la fonction addInteraction

function deplacer(){
  map.removeInteraction(draw);
  map.addInteraction(selectArc);
  map.addInteraction(translate);
}

function selectionner1(){
  map.removeInteraction(draw);
  map.removeInteraction(selectArc);
  map.addInteraction(selectArc1);

}
/*
function selectionner2(){
  map.addInteraction(selectArc2);

}
*/

function dessin() {
 addInteraction(draw);
 //addInteraction(draw2);

}


/*
function supp() {
  map.removeInteraction(draw);
  map.removeInteraction(selectArc);

}*/
//************
