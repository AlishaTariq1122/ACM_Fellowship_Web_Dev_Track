/* const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5); */

// What does expression5 evaluate to?

// In order to evaluate expression 5, we have to go through line by line code.


// Expression 1
const expression1 = 100 % 50; // 0

/* This should evaluate to 0. The % operator is the "modulus" operator, which is basically asking whether 50 goes into 100 evenly.
 We know that 100 / 50 is equal to 2 with no remainder, so this will evaluate to 0. */

 // Expression 2
 const expression2 = 100 / 50; // 2

 // This one is easier. 100 / 50 is 2.

  // Expression 3
  const expression3 = expression1 < expression2; // true

// So in this case, we compairing previous two expressions i.e 0 < 2 evaluates to, which should be true (because 0 is less than 2);

// Expression 4
const expression4 = expression3 && 300 + 5 === 305;

/* We are using our previous expressions value of true and combining it with another expression 300 + 5 === 305 using the && "and" operator.

First, we need to figure out what 300 + 5 is. This should equal 305.

Now, we compare that result in the following expression: 305 === 305, which evalutes to true.

Finally, we combine the two values: true && true. Since we have true on both sides of &&, this evaluates to true.*/

// Expression 5
const expression5 = !expression4; // false

//  Expression4 evaluated to true, and ! just reverses the value of what it precedes. So this just reverses true to false.

// Combining it in one expression

const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(result);

