function generateCity(citySpec){
  let h = citySpec.h;
  let w = citySpec.w;
  let nodesList = [];
  let edgeList = [];
  let tags = [];
  for (let i = 0; i <= w; i++) {
    for (let j = 0; j <= h; j++) {
      nodesList.push( [i,j] );

      nodeIndex = i + j*(w+1);
      if ((i < w) &&   (j < h)) {
        edgeList.push( [ nodeIndex, (nodeIndex+1)] );
        edgeList.push( [ nodeIndex, (nodeIndex+w+1)] );
      }
      if ((i = w) && (j < h)) {
        edgeList.push( [ nodeIndex, (nodeIndex+w+1)] );
      }
      if ((i < w) && (j = h)) {
        edgeList.push( [ nodeIndex, (nodeIndex+1)] );
      }

      tags.push( 'intersection' + nodeIndex.toString() )
    }
  }

  let hospitals = citySpec.hospitals;
  let schools = citySpec.schools;
  let malls = citySpec.malls;
  let totalStructures = hospitals + schools + malls;

  let duplicateEntries = true;
  while(duplicateEntries) {
    structureCoordinates = [];
    // distribute structures randomly
    for (let i=0; i < totalStructures; i++) {
      structureCoordinates.push( [getRandomInt(0,w/3),getRandomInt(0,h/3)].map( function(x) {return x*3} ) );
    }
    // check for duplicates
    let structureCoordinatesUnique = structureCoordinates.filter(function(item, index) {return structureCoordinates.indexOf(item) >= index;});
    if (structureCoordinatesUnique.length == structureCoordinates.length) {
      duplicateEntries = false;
    }
  }

  // Assign entrances and tags

  for (let i=0; i < hospitals; i++) {
    let coord = structureCoordinates.splice(0,1);
    let mapCoord = coord[0];
    let entranceCoord = mapCoord;

    let randAux = getRandomInt(0,3);
    switch (randAux) {
      case 1:
        entranceCoord[0] = entranceCoord[0] + 2;
        break;
      case 2:
        entranceCoord[1] = entranceCoord[1] + 3;
        break;
      case 3:
        entranceCoord[0] = entranceCoord[0] + 2;
        entranceCoord[1] = entranceCoord[1] + 3;
    }

    let nodeN = nodesList.indexOf(entranceCoord)

    nodesList.push(mapCoord);
    edgeList.push( [(nodesList.length - 1) ,nodeN] );
    tags.push( 'hospital' + i.toString() );
  }

  for (let i=0; i < schools; i++) {
    let coord = structureCoordinates.splice(0,1);
    let mapCoord = coord[0];
    let entranceCoord = mapCoord;

    let randAux = getRandomInt(0,3);
    switch (randAux) {
      case 1:
        entranceCoord[0] = entranceCoord[0] + 2;
        break;
      case 2:
        entranceCoord[1] = entranceCoord[1] + 2;
        break;
      case 3:
        entranceCoord[0] = entranceCoord[0] + 2;
        entranceCoord[1] = entranceCoord[1] + 2;
    }

    let nodeN = nodesList.indexOf(entranceCoord)

    nodesList.push( mapCoord );
    edgeList.push( [(nodesList.length - 1) , nodeN] );
    tags.push( 'school' + i.toString() );
  }

  for (let i=0; i < malls; i++) {
    let coord = structureCoordinates.splice(0,1);
    let mapCoord = coord[0];
    let entranceCoord = mapCoord;

    let randAux = getRandomInt(0,3);
    switch (randAux) {
      case 1:
        entranceCoord[0] = entranceCoord[0] + 3;
        break;
      case 2:
        entranceCoord[1] = entranceCoord[1] + 3;
        break;
      case 3:
        entranceCoord[0] = entranceCoord[0] + 3;
        entranceCoord[1] = entranceCoord[1] + 3;
    }

    let nodeN = nodesList.indexOf(entranceCoord)

    nodesList.push( mapCoord );
    edgeList.push( [(nodesList.length - 1) , nodeN] );
    tags.push( 'mall' + i.toString() );
  }

  // Clear edges overlapping with buildings




  // Assign houses and parks

}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
