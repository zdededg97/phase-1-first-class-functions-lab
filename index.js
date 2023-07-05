// Returns a new array containing the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
// Output: ['Antonia', 'Nuru']

// Returns a new array containing the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
// Output: ['Amari', 'Mo']

// Array containing the two previously defined functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a function to multiply a fare
const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

// Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

fareDoubler(10);
// Output: 20 (fare * 2)

// Function that triples the fare
const fareTripler = createFareMultiplier(3);

fareTripler(10);
// Output: 30 (fare * 3)

// Function that returns either the first two drivers or the last two drivers based on arguments
const selectDifferentDrivers = function(drivers, selectFunction) {
  return selectFunction(drivers);
};

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
// Output: ['Antonia', 'Nuru']

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
// Output: ['Amari', 'Mo']

