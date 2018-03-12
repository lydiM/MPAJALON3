//fonction de dessin de l'arc de cercle, c'est la fonction à integrer dans le code du portail du shom
var dessinArc = function(coordinate,  arc) {
 if ( !arc) {
 arc = new ol.geom.Polygon(0);
            }

  var point = coordinate[1]; //point de départ
  var radius = document.formu.distance.value*1852; //taille des segments en miles marin
  var newCoordinates = []; //Tableau pour stoker les coordonnées des nouveaux points

  var nbr =50; //nombre utilisé pour la boucle de dessin de l'arc
  var angle1=document.formu.angle1.value*(Math.PI/180); // valeur del'angle1 en Radian
  var offsetY = radius * Math.cos(angle1); //décalage de Y selon la valeur de l'angle 1
  var offsetX = radius * Math.sin(angle1); //décalage de X selon la valeur de l'angle 1
  for (var i =0; i<nbr;i++){

  var angle2=(((document.formu.angle2.value*(Math.PI/180))-angle1)*i/nbr)+angle1; // valeur de l'ange2 en radian
  var ang = document.formu.angle2.value*(Math.PI/180);  // valeur de l'angle utilisé pour dessiner la derniere valeur de la boucle


 var offsetY2 =  radius*Math.cos(angle2); //décalage de Y selon la valeur de l'angle 2 et de la valeur de la boucle

 var offsetX2 = radius*Math.sin(angle2); //décalage de X selon la valeur de l'angle1


 var offY2 = radius * Math.cos(ang); //décalage de Y pour le dernier point de la boucle

 var offX2 = radius * Math.sin(ang); //décalage de X pour le dernier point de la boucle
 //les variables offX2 et offY2 sont utilisés pour le dessin de la 2eme ligne selon la valeur du 2eme angle (ang).

//condition sur les coordonnées selon la valeur de i dans la boucle
if (i==0  ){  // au debut de la boucle on dessine le premier angle par rapport au nord (angle1)
newCoordinates.push(  [point[0] + offsetX, point[1] + offsetY],  [point[0], point[1]],
                    [point[0] + offsetX2, point[1]+offsetY2]);

} else {newCoordinates.push([point[0] + offsetX2, point[1]+offsetY2]);  // pour dessiner l'arc

             } if (i ==nbr-1){
               newCoordinates.push([point[0] + offX2, point[1] + offY2], [point[0], point[1]]);  //dessin de la derniere ligne selon la valeur de angle2
             }

}//fin de la boucle

  arc.setCoordinates([newCoordinates]);

  return  arc;

}; //fin de la fonction dessinArc
