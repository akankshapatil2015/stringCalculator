function calculate() {
  const numbers = document.getElementById("numbersInput").value;
  try {
    const result = add(numbers); // Calls the add function from calculator.js
    document.getElementById("result").innerText = "Sum: " + result;
  } catch (error) {
    document.getElementById("result").innerText = error.message;
  }
}

function add(numbers) {
  //Check if the input is an empty string
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/; // Default delimiters: comma and newline

  //Check if the string starts with a custom delimiter definition
  if (numbers.startsWith("//")) {
    // Extract the custom delimiter by parsing the string
    const delimiterEndIndex = numbers.indexOf("\n");
    let customDelimiter = numbers.substring(2, delimiterEndIndex);

    // Escape special characters in the custom delimiter
    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    delimiter = new RegExp(customDelimiter); // Create a regex for the custom delimiter
    numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter definition from the input string
  }

  // Split the numbers by the defined delimiter(s)
  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

  // Find negative numbers
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  // Sum the numbers and return the result
  const sum = numArray.reduce((total, num) => total + num, 0);
  return sum;
}

//No need for module.exports in the browser environment, Uses only when testing with jest
// module.exports = add;
