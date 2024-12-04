import { puzzleInputOne, puzzleInputTwo, testInputOne, testInputTwo } from "../puzzle_inputs/day_one_input.js";

/* Part One */

function smallestToLargest(list){
  list.sort((a, b) => (a - b))
};

function compareLocations(locationA, locationB){
  return Math.abs(locationA - locationB)
};

function calculateDistance(listA, listB){
  smallestToLargest(listA);
  smallestToLargest(listB);
  let totalDistance = 0;
  for (let i = 0; i < listA.length; i++){
    totalDistance += compareLocations(listA[i], listB[i])
  };
  return totalDistance
};

console.log(calculateDistance(testInputOne, testInputTwo)); // should return 11
console.log(calculateDistance(puzzleInputOne, puzzleInputTwo));

/* Part Two */

function calculateSimilarityScore(listA, listB) {
  let similarityScore = 0;
    for (let i = 0; i < listA.length; i++){
    similarityScore += (listA[i] * (listB.filter((x) => (x === listA[i])).length));
  }
  return similarityScore;
};

console.log(calculateSimilarityScore(testInputOne, testInputTwo)); // should return 31
console.log(calculateSimilarityScore(puzzleInputOne, puzzleInputTwo));