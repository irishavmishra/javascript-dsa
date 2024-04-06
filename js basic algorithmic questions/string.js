//  50 JavaScript string algorithmic questions




// 1. Write a function to reverse a string.


// let string = "rishav"

// function reverse(str){
//    console.log(str.split("").reverse().join(""))
// }

// reverse(string)




// 2. Write a function to check if a string is a palindrome.


let string1 = "radar"
let string2 = "rishav"

function palindrome(str){
    let reverseString = str.split("").reverse().join("");
    if(str === reverseString){
        console.log(`${str} it is palindrome string`)
    }else{
        console.log(`${str} it is not a palindrome string`)
    }
}

palindrome(string1)
palindrome(string2)




// 3. Write a function to count the number of vowels in a string.


// 4. Write a function to count the number of consonants in a string.
// 5. Write a function to find the longest word in a string.
// 6. Write a function to capitalize the first letter of each word in a string.
// 7. Write a function to check if two strings are anagrams.
// 8. Write a function to remove all white spaces from a string.
// 9. Write a function to find the first non-repeated character in a string.
// 10. Write a function to check if a string contains only digits.
// 11. Write a function to remove duplicate characters from a string.
// 12. Write a function to check if a string is a valid email address.
// 13. Write a function to check if a string is a valid URL.
// 14. Write a function to truncate a string and add "..." if it exceeds a specified length.
// 15. Write a function to find the most common character in a string.
// 16. Write a function to check if a string is a valid palindrome considering only alphanumeric characters and ignoring cases.
// 17. Write a function to find the first occurrence of a substring in a string.
// 18. Write a function to replace all occurrences of a substring with another string.
// 19. Write a function to reverse the order of words in a string.
// 20. Write a function to check if a string is a pangram (contains every letter of the alphabet at least once).
// 21. Write a function to convert a string to title case (capitalize the first letter of each word, excluding certain words like "a," "an," "the," etc.).
// 22. Write a function to check if a string consists of repeated substrings.
// 23. Write a function to find the longest common prefix among an array of strings.
// 24. Write a function to count the number of occurrences of each character in a string and return the result as an object.
// 25. Write a function to perform a basic string compression using the counts of repeated characters. (Example: "aabcccccaaa" => "a2b1c5a3").
// 26. Write a function to check if a string contains only unique characters.
// 27. Write a function to check if a string is a valid ISBN-10 number.
// 28. Write a function to remove the specified characters from a string.
// 29. Write a function to check if a string is a valid IPv4 address.
// 30. Write a function to find the second most frequent character in a string.
// 31. Write a function to check if a string is a valid credit card number.
// 32. Write a function to find the index of the first unique character in a string.
// 33. Write a function to check if a string has balanced parentheses ((), [], {}).
// 34. Write a function to find the length of the last word in a string.
// 35. Write a function to check if a string is a valid time in the format "hh:mm am/pm."
// 36. Write a function to remove all occurrences of a specific word from a string.
// 37. Write a function to remove duplicate words from a string.
// 38. Write a function to find the longest palindrome substring in a string.
// 39. Write a function to reverse words in a sentence while preserving spaces and word order.
// 40. Write a function to find the minimum window substring in a given string containing all characters of another string.
// 41. Write a function to check if a string is a valid Roman numeral.
// 42. Write a function to remove all adjacent duplicate characters from a string.
// 43. Write a function to find the lexicographically smallest and largest substring of a given length in a string.
// 44. Write a function to find the shortest distance between two words in a string.
// 45. Write a function to check if a string is a valid hexadecimal color code.
// 46. Write a function to convert a string from camel case to snake case.
// 47. Write a function to check if a string can be formed by concatenating words from a dictionary.
// 48. Write a function to remove the nth occurrence of a substring from a string.
// 49. Write a function to find the longest substring without repeating characters.
// 50. Write a function to find the first non-repeated word in a string.
