

var draw;
var value= 'Circle';

  //**** l'objet arcs
  var arcs = new ol.Feature({
         type: (value),
         geometryFunction: geometryFunction

        });

//**  la carte
/*Déclaration d'une première couche raster pour l'affichage de la carte*/
var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

/*Déclaration d'une deuxième couche vector pour l'affichage du du dessin*/
var source = new ol.source.Vector({
            features:[arcs],
           wrapX: false

                                });

/*Définition du style pour le dessin*/
var vector = new ol.layer.Vector({
  source: source,
  style: newstyle
    });

    var selectArc = new ol.interaction.Select({
      condition: ol.events.condition.pointerMove
    });

    var select = null;

    var translate = new ol.interaction.Translate({
      features: selectArc.getFeatures()
    });

/*Ajout des deux couches au conteneur*/

var map = new ol.Map({

  interactions: ol.interaction.defaults().extend([selectArc, translate]),

  layers: [raster, vector],
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
  map.removeInteraction(selectArc)



}// fin de la fonction addInteraction
function deplacer(vector){
  map.addInteraction(selectArc);
}

function dessin(vector) {
 addInteraction(draw);

}


function supp(vector) {
  map.removeInteraction(draw);
  map.removeInteraction(selectArc)
}
//************
