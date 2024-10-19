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

  //Split the numbers by the defined delimiter(s)
  const numArray = numbers.split(delimiter);

  //Convert the strings to numbers and sum them
  const sum = numArray.reduce((total, num) => {
    return total + parseInt(num, 10); // Convert string to integer and sum
  }, 0);

  return sum;
}

module.exports = add;
