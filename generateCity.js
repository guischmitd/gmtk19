function generateCity(citySpec){
  let h = citySpec.h;
  let w = citySpec.w;
  let nodesList = [];
  let edgeList = [];
  let tags = [];
  for (i = 0; i <= w; i++) {
    for (j = 0; j <= h; j++) {
      nodesList.push = [i,j];

      nodeIndex = i + j*(w+1);
      if (i < w) &&   (j < h) {
        edgeList.push = [ nodeIndex, (nodeIndex+1)];
        edgeList.push = [ nodeIndex, (nodeIndex+w+1)];
      }
      if (i = w) && (j < h) {
        edgeList.push = [ nodeIndex, (nodeIndex+w+1)];
      }
      if (i < w) && (j = h) {
        edgeList.push = [ nodeIndex, (nodeIndex+1)];
      }

      tags.push = 'interesection' + nodeIndex.toString()
    }
  }

  let hospitals = citySpec.hospitals; // 2x3
  let schools = citySpec.schools; // 2x2
  let malls = citySpec.malls; // 3x3
  let totalStructures = hospitals + schools + malls;

  let duplicateEntries = true;
  while(duplicateEntries) {
    structureCoordinates = [];
    // distribute structures randomly
    for (i=0, i < totalStructures, i++) {
      structureCoordinates.push = [getRandomInt(0,w/3),getRandomInt(0,h/3)].map( function(x) {return x*3} )
    }
    // check for duplicates
    let structureCoordinatesUnique = structureCoordinates.filter(function(item, index) {return structure.indexOf(item) >= index;});
    if (structureCoordinatesUnique.length == structureCoordinates.length) {
      duplicateEntries = false;
    }  
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
