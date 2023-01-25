import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  const discoveryYears = asteroids.map((element) => element.discoveryYear);
  const theBigYear = (arr) => {
    const countDiscoveryYear = arr.reduce(
      (accVal, val) => ((accVal[val] = (accVal[val] || 0) + 1), accVal),
      {}
    );
    const highestDuplicate = Math.max(...Object.values(countDiscoveryYear));
    return Number(
      Object.keys(countDiscoveryYear).find(
        (year) => countDiscoveryYear[year] === highestDuplicate
      )
    );
  };
  return theBigYear(discoveryYears);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function










