function checkLeapYear(year) {
  return year%4 === 0 || year%400 === 0 || year%100 === 0 ? "Leap Year" : "Not Leap Year"
}
