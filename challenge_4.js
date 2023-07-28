/* const objectVariable = {
    property1: 'i am property 1';
    property2: 'i am property 2';
    property3: [20, 30, 40];
  };
  
  console.log(objectVariable.property3[2]); */

  // The code above is invalid because it contains semi-colons ; in the wrong places.
// When creating objects, you need to place a comma after each object, NOT a semi-colon.


// Correct way to creating objects.

const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
  };
  
  console.log(objectVariable.property3[2]);