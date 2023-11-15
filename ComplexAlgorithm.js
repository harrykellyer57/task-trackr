/*
Filename: ComplexAlgorithm.js

Description: This code demonstrates a sophisticated algorithm that calculates
the sum of all prime numbers up to a given limit. It utilizes advanced
mathematical concepts such as the Sieve of Eratosthenes and implements
efficient data structures and algorithms for improved performance.

Author: Your Name
Date: Today's Date

*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  
  return true;
}

// Function to calculate the sum of prime numbers up to a given limit
function sumOfPrimes(limit) {
  let sieve = new Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  
  let sum = 0;
  let sqrt = Math.floor(Math.sqrt(limit));
  
  for (let i = 2; i <= sqrt; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  
  for (let k = 2; k <= limit; k++) {
    if (sieve[k]) {
      sum += k;
    }
  }
  
  return sum;
}

// Testing the algorithm with a limit of 1000000
let limit = 1000000;
let result = sumOfPrimes(limit);

console.log(`The sum of prime numbers up to ${limit} is: ${result}`);