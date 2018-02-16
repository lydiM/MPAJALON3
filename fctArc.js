var geometryFunction = function(coordinate,  arc) {
 if ( !arc) {
// arc = new ol.geom.Polygon(0);
 arc = new ol.geom.Polygon(0);
}


  var point = coordinate[1]; //point de départ
  var radius = document.formu.distance.value*1852; //taille des segments
  var newCoordinates = []; //Tableau pour stoker les coordonnées des nouveaux points

  var nbr =50;
  var angle1=document.formu.angle1.value*(Math.PI/180); //conversion en Radian
  var offsetY = radius * Math.cos(angle1); //décalage de Y
  var offsetX = radius * Math.sin(angle1); //décalage de X
  for (var i =0; i<nbr;i++){

  /*Récupération des angles*/
  var angle2=(((document.formu.angle2.value*(Math.PI/180))-angle1)*i/nbr)+angle1; //conversion en Radian
  var ang = document.formu.angle2.value*(Math.PI/180);


 var offsetY2 =  radius*Math.cos(angle2); //décalage de Y

 var offsetX2 = radius*Math.sin(angle2); //décalage de X


 var offY2 = radius * Math.cos(ang); //décalage de Y

 var offX2 = radius * Math.sin(ang); //décalage de X

//le code finale réussi a 100% :)


if (i==0  ){
newCoordinates.push(  [point[0] + offsetX, point[1] + offsetY],  [point[0], point[1]],
                    [point[0] + offsetX2, point[1]+offsetY2]);

} else {newCoordinates.push([point[0] + offsetX2, point[1]+offsetY2]);

             } if (i ==nbr-1){
               newCoordinates.push([point[0] + offX2, point[1] + offY2], [point[0], point[1]]);
             }

}//fin de la boucle

  arc.setCoordinates([newCoordinates]);
  return  arc;

}; //End geometryFunction
