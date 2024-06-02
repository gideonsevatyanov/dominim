function sumNumbers(a: number, numbers: number[]): number {
  // Initialize the sum with the value of 'a'
  let sum: number = a;
  
  // Iterate through the array of numbers and add each to the sum
  for (let number of numbers) {
    sum += number;
  }
  
  // Return the total sum
  return sum;
}
