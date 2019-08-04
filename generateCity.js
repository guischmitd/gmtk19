const uniquePairs = pairs => [...new Set(pairs.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair))

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
      structureCoordinates.push( [getRandomInt(0,w/3-1),getRandomInt(0,h/3-1)].map( function(x) {return x*3} ) );
    }
    // check for duplicates
    let structureCoordinatesUnique = structureCoordinates.filter(function(item, index) {return structureCoordinates.indexOf(item) <= index;});
    if (structureCoordinatesUnique.length == structureCoordinates.length) {
      duplicateEntries = false;
    }
    console.log(structureCoordinates)

  }

  // Assign entrances and tags
let buildings = [];
let gameConfig = new GameConfig();

  for (let i=0; i < hospitals; i++) {
    let coord = structureCoordinates.splice(0,1);
    let mapCoord = coord[0];
    let entranceCoord = [];
    entranceCoord.push(mapCoord[0]);
    entranceCoord.push(mapCoord[1]);

    let randAux = getRandomInt(0,3);
    switch (randAux) {
      case 1:
        entranceCoord[0] = entranceCoord[0] + gameConfig.hospitalSize[0];
        break;
      case 2:
        entranceCoord[1] = entranceCoord[1] + gameConfig.hospitalSize[1];
        break;
      case 3:
        entranceCoord[0] = entranceCoord[0] + gameConfig.hospitalSize[0];
        entranceCoord[1] = entranceCoord[1] + gameConfig.hospitalSize[1];
    }

    let nodeN = nodesList.indexOf(entranceCoord)

    nodesList.push(mapCoord);
    edgeList.push( [(nodesList.length - 1) ,nodeN] );
    let tag = 'hospital_' + i.toString();
    tags.push( tag );

    // Buildings array
    buildings.push( new Building( tag, mapCoord, gameConfig.hospitalSize, entranceCoord) );
  }

  for (let i=0; i < schools; i++) {
    let coord = structureCoordinates.splice(0,1);
    let mapCoord = coord[0];
    let entranceCoord = [];
    entranceCoord.push(mapCoord[0]);
    entranceCoord.push(mapCoord[1]);

    let randAux = getRandomInt(0,3);
    switch (randAux) {
      case 1:
        entranceCoord[0] = entranceCoord[0] + gameConfig.schoolSize[0];
        break;
      case 2:
        entranceCoord[1] = entranceCoord[1] + gameConfig.schoolSize[1];
        break;
      case 3:
        entranceCoord[0] = entranceCoord[0] + gameConfig.schoolSize[0];
        entranceCoord[1] = entranceCoord[1] + gameConfig.schoolSize[1];
    }

    let nodeN = nodesList.indexOf(entranceCoord)

    nodesList.push( mapCoord );
    edgeList.push( [(nodesList.length - 1) , nodeN] );
    tag = 'school_' + i.toString();
    tags.push( tag );

    // Buildings array
    buildings.push( new Building( tag, mapCoord, gameConfig.schoolSize, entranceCoord) )
  }

  for (let i=0; i < malls; i++) {
    let coord = structureCoordinates.splice(0,1);
    let mapCoord = coord[0];
    let entranceCoord = [];
    entranceCoord.push(mapCoord[0]);
    entranceCoord.push(mapCoord[1]);

    let randAux = getRandomInt(0,3);
    switch (randAux) {
      case 1:
        entranceCoord[0] = entranceCoord[0] + gameConfig.mallSize[0];
        break;
      case 2:
        entranceCoord[1] = entranceCoord[1] + gameConfig.mallSize[1];
        break;
      case 3:
        entranceCoord[0] = entranceCoord[0] + gameConfig.mallSize[0];
        entranceCoord[1] = entranceCoord[1] + gameConfig.mallSize[1];
    }

    let nodeN = nodesList.indexOf(entranceCoord)

    nodesList.push( mapCoord );
    edgeList.push( [(nodesList.length - 1) , nodeN] );
    tag = 'mall_' + i.toString();
    tags.push( tag );


    // Buildings array
    buildings.push( new Building( tag, mapCoord, gameConfig.mallSize, entranceCoord) )
  }


  // Clear edges overlapping with buildings




  // Assign houses and parks

  let city = new City(w,h)
  city.edgeList = edgeList;
  city.nodeList = nodesList;
  city.graphTags = tags;

  city.buildings = buildings;
  return city;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
