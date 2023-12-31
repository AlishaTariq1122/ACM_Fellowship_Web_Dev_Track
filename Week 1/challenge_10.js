const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 


/* myArray[0].price - evaluates to 100
   myArray[0].quantity - evaluates to 5
   myArray[1].price - evaluates to 150
   myArray[1].quantity - evaluates to 2 */

// So really, our expression is simply 100 * 5 > 150 * 2, which can be further simplified to 500 > 300, which equals true.