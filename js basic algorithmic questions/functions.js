// 50 JavaScript functions algorithmic questions

// 1. Write a function to add two numbers.

// function addTwoNum(a,b){
//     console.log(a+b)
// }
// addTwoNum(5,8);

// 2. Write a function to subtract two numbers.
// let subTwoNum = (a,b)=>{
//     console.log(a-b)
// }
// subTwoNum(66,1);


// 3. Write a function to multiply two numbers.

// let sumTwoNum = (a,b)=>{
//     console.log(a*b)
// }
// sumTwoNum(5,6)


// 4. Write a function to divide two numbers.

// function divideTwoNum(a,b){
//     console.log(a/b)
// }
// divideTwoNum(11,17)








// 5. Write a function to calculate the factorial of a given number.

// function factorial(num){
//     let fac = 1;
//     for(let i=1; i<=num; i++){
//         fac = fac*i 
        
//     }
//     console.log(fac)
// }
// factorial(-10)





// 6. Write a function to check if a number is prime.

function primeNo(num){
    let isPrime = true;
   for(let i=2; i<num; i++){
        if(num%i == 0){
           isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("it is prime no")
    }else{
        console.log("not prime no")
    }

}
primeNo(18)




// 7. Write a function to find the GCD (Greatest Common Divisor) of two numbers.
// 8. Write a function to find the LCM (Least Common Multiple) of two numbers.
// 9. Write a function to check if a number is even.
// 10. Write a function to check if a number is odd.
// 11. Write a function to check if a number is a perfect square.
// 12. Write a function to check if a number is a palindrome.
// 13. Write a function to check if a number is a power of 2.
// 14. Write a function to check if a number is a power of 10.
// 15. Write a function to calculate the sum of digits of a number.
// 16. Write a function to reverse the digits of a number.
// 17. Write a function to convert a number to its Roman numeral representation.
// 18. Write a function to convert a number from decimal to binary.
// 19. Write a function to convert a number from binary to decimal.
// 20. Write a function to find the n-th term in the Fibonacci sequence.
// 21. Write a function to generate the Pascal's triangle up to a specified number of rows.
// 22. Write a function to calculate the area of a circle given its radius.
// 23. Write a function to calculate the area of a triangle given its base and height.
// 24. Write a function to calculate the area of a rectangle given its length and width.
// 25. Write a function to calculate the perimeter of a rectangle given its length and width.
// 26. Write a function to check if a string is a palindrome.
// 27. Write a function to reverse a string.
// 28. Write a function to capitalize the first letter of each word in a string.
// 29. Write a function to count the number of vowels in a string.
// 30. Write a function to count the number of consonants in a string.
// 31. Write a function to remove all white spaces from a string.
// 32. Write a function to truncate a string and add "..." if it exceeds a specified length.
// 33. Write a function to check if a string contains only digits.
// 34. Write a function to check if a string is a valid email address.
// 35. Write a function to check if a string is a valid URL.
// 36. Write a function to find the first occurrence of a substring in a string.
// 37. Write a function to replace all occurrences of a substring with another string.
// 38. Write a function to convert a string to title case.
// 39. Write a function to find the longest word in a string.
// 40. Write a function to find the most common character in a string.
// 41. Write a function to check if two strings are anagrams.
// 42. Write a function to check if a string is a valid palindrome considering only alphanumeric characters and ignoring cases.
// 43. Write a function to check if a string consists of repeated substrings.
// 44. Write a function to remove duplicate characters from a string.
// 45. Write a function to reverse words in a sentence while preserving spaces and word order.
// 46. Write a function to find the longest palindrome substring in a string.
// 47. Write a function to remove all adjacent duplicate characters from a string.
// 48. Write a function to convert a string from camel case to snake case.
// 49. Write a function to find the lexicographically smallest and largest substring of a given length in a string.
// 50. Write a function to find the first non-repeated word in a string.
