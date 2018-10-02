import {backEnd} from './../src/romanNumerals.js';

describe('backEnd', function() {

    it('should return a string', function(){
    var answer = backEnd(5);
    expect(typeof answer).toEqual("string");
  });

  it('should recognize a single number and return the roman numeral', function(){
  var answer = backEnd(5);
  expect(answer).toEqual("V");
});
  it('should return a roman numerla', function(){
  var answer = backEnd(5);
  expect(answer).toEqual("V");
  });

  it('should return a string', function(){
  var answer = backEnd(5);
  expect(answer).toEqual("V");
  });



  });


//https://jasmine.github.io/tutorials/your_first_suite
