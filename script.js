//your JS code here. If required.
function daysOfAYear(year) {
    // Check if the year is divisible by 4
    const isLeapYear = (year % 4 === 0);
    
    // If divisible by 100, also check if divisible by 400 to be a leap year
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    }
    
    // Return 366 for leap years, 365 otherwise
    return isLeapYear ? 366 : 365;
}

// Test cases
console.log(daysOfAYear(2022));  // 365
console.log(daysOfAYear(2024));  // 366
console.log(daysOfAYear(1900));  // 365
console.log(daysOfAYear(2000));  // 366