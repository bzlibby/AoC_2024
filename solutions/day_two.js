import { puzzleInput, testInput } from "../puzzle_inputs/day_two_input.js";

/* Part One */

function checkDirection(report){
  let ascending = true;
  let descending = true;
	let safe = false;
  for(let i = 1; i < report.length; i++){
    if(report[i] < report[i-1]){
      descending = false
		}
    if(report[i] > report[i-1]){
			ascending = false
		}
  }
	if((ascending && !descending) || (!ascending && descending)){
		safe = true; 
	}
	return safe;
}

function checkChange(report){
	let safe = true;
	for(let i = 1; i < report.length; i++){
		let diff = Math.abs(report[i] - report[i-1]);
    if ((diff === 0) || (diff > 3)){
			safe = false
		}
	}
	return safe
}

function findSafeReports(allReports){
	let totalSafeReports = 0;
  for(let i = 0; i < allReports.length; i++){
		if(checkDirection(allReports[i]) && checkChange(allReports[i])){
			totalSafeReports += 1
		}
	}
	return totalSafeReports
}

console.log(findSafeReports(testInput)) // should return 2
console.log(findSafeReports(puzzleInput))

/* Part Two */

function saveDirection(report){
	let saveable = false;
  for (let i = 0; i < report.length; i++){
		let newReport = report.slice();
		newReport.splice(i, 1)
		if(checkDirection(newReport)){
			if(checkChange(newReport)) {
				saveable = true
				report.splice(i, 1)
				break
			}
		}
	}
	return saveable
}

function saveChange(report){
  let saveable = false;
	for (let i = 0; i < report.length; i++){
		let newReport = report.slice();
		newReport.splice(i, 1)
		if(checkChange(newReport)){
			if(checkDirection(report)){
				saveable = true
				report.splice(i, 1)
				break
			}
		}
	}
	return saveable
}

function findLessSafeReports(allReports){
	let totalLessSafeReports = 0;
  for (const report of allReports){
		if(checkDirection(report) && checkChange(report)){
			totalLessSafeReports += 1
		}
		if(!checkDirection(report)){
      if(saveDirection(report)){
				totalLessSafeReports += 1
			}
		}
    if(!checkChange(report)){
			if(saveChange(report)){
				totalLessSafeReports += 1
			}
		}		
	}
	return totalLessSafeReports
}

console.log(findLessSafeReports(testInput)) // should return 4
console.log(findLessSafeReports(puzzleInput))