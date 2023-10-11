
// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     document.write(now + theHr );
//   }
  
//   tellTime();
  



//   function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "! Nice to meet you.");
//   }
  
//   // Example usage:
//   var userFirstName = "Muahmamd ";
//   var userLastName = "Saad";
//   greetUser(userFirstName, userLastName);





// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
  
//     if (isNaN(num1) || isNaN(num2)) {
//       alert("Please enter valid numbers.");
//       return null; // Return null to indicate an error or invalid input.
//     }
  
//     var sum = num1 + num2;
//     return sum;
//   }
  
//   // Example usage:
//   var result = addNumbers();
//   if (result !== null) {
//     alert("The sum of the two numbers is: " + result);
//   }
  





// function calculate(num1, num2, operator) {
//     var result;
  
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           alert("Division by zero is not allowed.");
//           return null;
//         }
//         break;
//       default:
//         alert("Invalid operator. Please use +, -, *, or /.");
//         return null;
//     }
  
//     alert("Result: " + result);
//     return result;
//   }
  
//   // Example usage:
//   var num1 = 10;
//   var num2 = 5;
//   var operator = "+";
  
//   var result = calculate(num1, num2, operator);






// function squareNumber(number) {
//     return number * number;
    
//   }
  
//   // Example usage:
//   var num = 5;
//   var squared = squareNumber(num);
//   document.write("The square of " + num + " is " + squared);










// function factorialIterative(number) {
//     if (number < 0) {
//       return "Factorial is not defined for negative numbers.";
//     }
    
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//       result *= i;
//     }
    
//     return result;
//   }
  
//   // Example usage:
//   var num = 5;
//   var factorial = factorialIterative(num);
//   document.write(`The factorial of ${num} is ${factorial}` + "<br>");

  
//   function factorialRecursive(number) {
//     if (number < 0) {
//       return "Factorial is not defined for negative numbers.";
//     }
    
//     if (number === 0 || number === 1) {
//       return 1;
//     }
    
//     return number * factorialRecursive(number - 1);
//   }
  
//   // Example usage:
//   var num = 5;
//   var factorial = factorialRecursive(num);
//   document.write(`The factorial of ${num} is ${factorial}`);
  



// function displayCounting(start, end) {
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         document.write(i + '<br>');
//       }
//     } else {
//       alert("Start number must be less than or equal to the end number.");
//     }
//   }
  
//   // Example usage:
//   var startNumber = 1;
//   var endNumber = 10;
//   displayCounting(startNumber, endNumber);



// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
  
//     const baseSquared = calculateSquare(base);
//     const perpendicularSquared = calculateSquare(perpendicular);
//     const hypotenuseSquared = baseSquared + perpendicularSquared;
//     const hypotenuse = Math.sqrt(hypotenuseSquared);
  
//     return hypotenuse;
//   }
  
//   // Example usage:
//   const baseLength = 3;
//   const perpendicularLength = 4;
//   const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
//   document.write(`The hypotenuse of the right-angle triangle is: ${hypotenuse}`);








// function calculateRectangleAreaUsingValues(width, height) {
//     const area = width * height;
//     return area;
//   }
  
//   // Example usage with arguments as values:
//   const areaWithValues = calculateRectangleAreaUsingValues(5, 7);
//   console.log(`Area of the rectangle with values: ${areaWithValues}`);


//   function calculateRectangleAreaUsingVariables() {
//     const width = 5; // Width stored in a variable
//     const height = 7; // Height stored in a variable
//     const area = width * height;
//     return area;
//   }
  
//   // Example usage with arguments as variables:
//   const areaWithVariables = calculateRectangleAreaUsingVariables();
//   console.log(`Area of the rectangle with variables: ${areaWithVariables}`);
  
  




// function isPalindrome(str) {
//     // Remove spaces and convert the string to lowercase for accurate comparison
//     str = str.replace(/\s/g, '').toLowerCase();
  
//     // Reverse the string
//     const reversedStr = str.split('').reverse().join('');
  
//     // Check if the original string is the same as the reversed string
//     return str === reversedStr;
//   }
  
//   // Example usage:
//   const testString = "madam";
//   if (isPalindrome(testString)) {
//     console.log(`"${testString}" is a palindrome.`);
//   } else {
//     console.log(`"${testString}" is not a palindrome.`);
//   }
  




// function capitalizeWords(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
//     return capitalizedWords.join(' ');
//   }
  
//   // Example usage:
//   const inputString = 'the quick brown fox';
//   const outputString = capitalizeWords(inputString);
//   console.log(`Original string: ${inputString}`);
//   console.log(`Capitalized string: ${outputString}`);








// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
    
//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
    
//     return longestWord;
//   }
  
//   // Example usage:
//   const inputString = 'Web Development Tutorial';
//   const longestWord = findLongestWord(inputString);
//   console.log(`Original string: ${inputString}`);
//   console.log(`Longest word: ${longestWord}`);




// function countOccurrences(str, letter) {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage:
//   const inputString = 'JSResourceS.com';
//   const targetLetter = 'o';
//   const occurrences = countOccurrences(inputString, targetLetter);
//   console.log(`Occurrences of "${targetLetter}" in the string: ${occurrences}`);






// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference}`);
//   }
  
//   function calcArea(radius) {
//     const area = Math.PI * radius * radius;
//     console.log(`The area is ${area}`);
//   }
  
//   // Example usage:
//   const circleRadius = 5;
//   calcCircumference(circleRadius);
//   calcArea(circleRadius);
  





  








  



  




  

  
  

  
  