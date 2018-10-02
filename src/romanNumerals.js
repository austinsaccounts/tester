export function backEnd(currentValue) {
  var outputValue="";
  var numerals = ([["I",1],["IV",4],["V",5],["IX",9],["X",10],["XL",40],["L",50],["IC",90],["C",100],["CD",400],["D",500],["CM",900],["M",1000]]).reverse();

  numerals.forEach(function(numeral) {
    while ( currentValue >= numeral[1] ) {
      currentValue -= numeral[1];
      outputValue = outputValue.concat( numeral[0] );
      outputValue = outputValue.toString();
    }
  });
  return outputValue;
}
