/* ---code--- */
function betterThanAverage(classPoints, yourPoints) {
    let scores, score_sum, avarage, i;
    scores = score_sum = avarage = i = 0;
    scores = classPoints.length;

    for (i = 0; i < scores - 1; i++) {
        score_sum += classPoints[i];
    }

    avarage = score_sum / scores;
    if (yourPoints > avarage) { return true }
    return false;
}

/* ---test cases--- */
console.log(betterThanAverage([2, 3], 5));//True
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));//True
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));//False
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));//False
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));//False
console.log(betterThanAverage(91, 39, 87, 51, 12, 99, 53, 97, 3, 95, 29, 0, 30, 13, 91, 83, 0, 98, 94, 18, 7, 19, 66, 96, 26, 54, 27, 82, 48, 73, 60, 84, 98, 4, 50, 42, 86, 25, 87, 59, 88, 93, 15, 38, 61, 54, 99, 14, 62, 76, 55));//False