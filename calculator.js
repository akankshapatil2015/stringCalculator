function add(numbers) {
  //Check if the input is an empty string
  if (numbers === "") {
    return 0;
  }

  // Split the numbers by comma
  const numArray = numbers.split(",");

  //Convert the strings to numbers and sum them
  const sum = numArray.reduce((total, num) => {
    return total + parseInt(num, 10); // Convert string to integer and sum
  }, 0);

  return sum;
}

module.exports = add;
