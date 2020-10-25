const objectsToCsv = require('objects-to-csv');

const patternYear1 = [
    { month: 1, day: 1 },
    { month: 1, day: 2 },
    { month: 1, day: 3 },
    { month: 1, day: 4 },
    { month: 1, day: 5 },
    { month: 1, day: 6 },
    { month: 1, day: 7 },
    { month: 1, day: 8 },
    { month: 1, day: 9 },
    { month: 1, day: 10 },
    { month: 1, day: 11 },
    { month: 1, day: 12 },
    { month: 1, day: 13 },
    { month: 1, day: 14 },
    { month: 1, day: 15 },
    { month: 1, day: 16 },
    { month: 1, day: 17 },
    { month: 1, day: 18 },
    { month: 1, day: 19 },
    { month: 1, day: 20 },
    { month: 1, day: 21 },
    { month: 1, day: 22 },
    { month: 1, day: 23 },
    { month: 1, day: 24 },
    { month: 1, day: 25 },
    { month: 1, day: 26 },
    { month: 1, day: 27 },
    { month: 1, day: 28 },
    { month: 1, day: 29 },
    { month: 1, day: 30 },
    { month: 1, day: 31 },
    { month: 2, day: 1 },
    { month: 2, day: 2 },
    { month: 2, day: 3 },
    { month: 2, day: 4 },
    { month: 2, day: 5 },
    { month: 2, day: 6 },
    { month: 2, day: 7 },
    { month: 2, day: 8 },
    { month: 2, day: 9 },
    { month: 2, day: 10 },
    { month: 2, day: 11 },
    { month: 2, day: 12 },
    { month: 2, day: 13 },
    { month: 2, day: 14 },
    { month: 2, day: 15 },
    { month: 2, day: 16 },
    { month: 2, day: 17 },
    { month: 2, day: 18 },
    { month: 2, day: 19 },
    { month: 2, day: 20 },
    { month: 2, day: 21 },
    { month: 2, day: 22 },
    { month: 2, day: 23 },
    { month: 2, day: 24 },
    { month: 2, day: 25 },
    { month: 2, day: 26 },
    { month: 2, day: 27 },
    { month: 2, day: 28 },
    { month: 2, day: 29 },
    { month: 2, day: 30 },
    { month: 3, day: 1 },
    { month: 3, day: 2 },
    { month: 3, day: 3 },
    { month: 3, day: 4 },
    { month: 3, day: 5 },
    { month: 3, day: 6 },
    { month: 3, day: 7 },
    { month: 3, day: 8 },
    { month: 3, day: 9 },
    { month: 3, day: 10 },
    { month: 3, day: 11 },
    { month: 3, day: 12 },
    { month: 3, day: 13 },
    { month: 3, day: 14 },
    { month: 3, day: 15 },
    { month: 3, day: 16 },
    { month: 3, day: 17 },
    { month: 3, day: 18 },
    { month: 3, day: 19 },
    { month: 3, day: 20 },
    { month: 3, day: 21 },
    { month: 3, day: 22 },
    { month: 3, day: 23 },
    { month: 3, day: 24 },
    { month: 3, day: 25 },
    { month: 3, day: 26 },
    { month: 3, day: 27 },
    { month: 3, day: 28 },
    { month: 3, day: 29 },
    { month: 3, day: 30 },
    { month: 4, day: 1 },
    { month: 4, day: 2 },
    { month: 4, day: 3 },
    { month: 4, day: 4 },
    { month: 4, day: 5 },
    { month: 4, day: 6 },
    { month: 4, day: 7 },
    { month: 4, day: 8 },
    { month: 4, day: 9 },
    { month: 4, day: 10 },
    { month: 4, day: 11 },
    { month: 4, day: 12 },
    { month: 4, day: 13 },
    { month: 4, day: 14 },
    { month: 4, day: 15 },
    { month: 4, day: 16 },
    { month: 4, day: 17 },
    { month: 4, day: 18 },
    { month: 4, day: 19 },
    { month: 4, day: 20 },
    { month: 4, day: 21 },
    { month: 4, day: 22 },
    { month: 4, day: 23 },
    { month: 4, day: 24 },
    { month: 4, day: 25 },
    { month: 4, day: 26 },
    { month: 4, day: 27 },
    { month: 4, day: 28 },
    { month: 4, day: 29 },
    { month: 4, day: 30 },
    { month: 4, day: 31 },
    { month: 5, day: 1 },
    { month: 5, day: 2 },
    { month: 5, day: 3 },
    { month: 5, day: 4 },
    { month: 5, day: 5 },
    { month: 5, day: 6 },
    { month: 5, day: 7 },
    { month: 5, day: 8 },
    { month: 5, day: 9 },
    { month: 5, day: 10 },
    { month: 5, day: 11 },
    { month: 5, day: 12 },
    { month: 5, day: 13 },
    { month: 5, day: 14 },
    { month: 5, day: 15 },
    { month: 5, day: 16 },
    { month: 5, day: 17 },
    { month: 5, day: 18 },
    { month: 5, day: 19 },
    { month: 5, day: 20 },
    { month: 5, day: 21 },
    { month: 5, day: 22 },
    { month: 5, day: 23 },
    { month: 5, day: 24 },
    { month: 5, day: 25 },
    { month: 5, day: 26 },
    { month: 5, day: 27 },
    { month: 5, day: 28 },
    { month: 5, day: 29 },
    { month: 5, day: 30 },
    { month: 6, day: 1 },
    { month: 6, day: 2 },
    { month: 6, day: 3 },
    { month: 6, day: 4 },
    { month: 6, day: 5 },
    { month: 6, day: 6 },
    { month: 6, day: 7 },
    { month: 6, day: 8 },
    { month: 6, day: 9 },
    { month: 6, day: 10 },
    { month: 6, day: 11 },
    { month: 6, day: 12 },
    { month: 6, day: 13 },
    { month: 6, day: 14 },
    { month: 6, day: 15 },
    { month: 6, day: 16 },
    { month: 6, day: 17 },
    { month: 6, day: 18 },
    { month: 6, day: 19 },
    { month: 6, day: 20 },
    { month: 6, day: 21 },
    { month: 6, day: 22 },
    { month: 6, day: 23 },
    { month: 6, day: 24 },
    { month: 6, day: 25 },
    { month: 6, day: 26 },
    { month: 6, day: 27 },
    { month: 6, day: 28 },
    { month: 6, day: 29 },
    { month: 6, day: 30 },
    { month: 7, day: 1 },
    { month: 7, day: 2 },
    { month: 7, day: 3 },
    { month: 7, day: 4 },
    { month: 7, day: 5 },
    { month: 7, day: 6 },
    { month: 7, day: 7 },
    { month: 7, day: 8 },
    { month: 7, day: 9 },
    { month: 7, day: 10 },
    { month: 7, day: 11 },
    { month: 7, day: 12 },
    { month: 7, day: 13 },
    { month: 7, day: 14 },
    { month: 7, day: 15 },
    { month: 7, day: 16 },
    { month: 7, day: 17 },
    { month: 7, day: 18 },
    { month: 7, day: 19 },
    { month: 7, day: 20 },
    { month: 7, day: 21 },
    { month: 7, day: 22 },
    { month: 7, day: 23 },
    { month: 7, day: 24 },
    { month: 7, day: 25 },
    { month: 7, day: 26 },
    { month: 7, day: 27 },
    { month: 7, day: 28 },
    { month: 7, day: 29 },
    { month: 7, day: 30 },
    { month: 7, day: 31 },
    { month: 8, day: 1 },
    { month: 8, day: 2 },
    { month: 8, day: 3 },
    { month: 8, day: 4 },
    { month: 8, day: 5 },
    { month: 8, day: 6 },
    { month: 8, day: 7 },
    { month: 8, day: 8 },
    { month: 8, day: 9 },
    { month: 8, day: 10 },
    { month: 8, day: 11 },
    { month: 8, day: 12 },
    { month: 8, day: 13 },
    { month: 8, day: 14 },
    { month: 8, day: 15 },
    { month: 8, day: 16 },
    { month: 8, day: 17 },
    { month: 8, day: 18 },
    { month: 8, day: 19 },
    { month: 8, day: 20 },
    { month: 8, day: 21 },
    { month: 8, day: 22 },
    { month: 8, day: 23 },
    { month: 8, day: 24 },
    { month: 8, day: 25 },
    { month: 8, day: 26 },
    { month: 8, day: 27 },
    { month: 8, day: 28 },
    { month: 8, day: 29 },
    { month: 8, day: 30 },
    { month: 9, day: 1 },
    { month: 9, day: 2 },
    { month: 9, day: 3 },
    { month: 9, day: 4 },
    { month: 9, day: 5 },
    { month: 9, day: 6 },
    { month: 9, day: 7 },
    { month: 9, day: 8 },
    { month: 9, day: 9 },
    { month: 9, day: 10 },
    { month: 9, day: 11 },
    { month: 9, day: 12 },
    { month: 9, day: 13 },
    { month: 9, day: 14 },
    { month: 9, day: 15 },
    { month: 9, day: 16 },
    { month: 9, day: 17 },
    { month: 9, day: 18 },
    { month: 9, day: 19 },
    { month: 9, day: 20 },
    { month: 9, day: 21 },
    { month: 9, day: 22 },
    { month: 9, day: 23 },
    { month: 9, day: 24 },
    { month: 9, day: 25 },
    { month: 9, day: 26 },
    { month: 9, day: 27 },
    { month: 9, day: 28 },
    { month: 9, day: 29 },
    { month: 9, day: 30 },
    { month: 9, day: 31 },
    { month: 10, day: 1 },
    { month: 10, day: 2 },
    { month: 10, day: 3 },
    { month: 10, day: 4 },
    { month: 10, day: 5 },
    { month: 10, day: 6 },
    { month: 10, day: 7 },
    { month: 10, day: 8 },
    { month: 10, day: 9 },
    { month: 10, day: 10 },
    { month: 10, day: 11 },
    { month: 10, day: 12 },
    { month: 10, day: 13 },
    { month: 10, day: 14 },
    { month: 10, day: 15 },
    { month: 10, day: 16 },
    { month: 10, day: 17 },
    { month: 10, day: 18 },
    { month: 10, day: 19 },
    { month: 10, day: 20 },
    { month: 10, day: 21 },
    { month: 10, day: 22 },
    { month: 10, day: 23 },
    { month: 10, day: 24 },
    { month: 10, day: 25 },
    { month: 10, day: 26 },
    { month: 10, day: 27 },
    { month: 10, day: 28 },
    { month: 10, day: 29 },
    { month: 10, day: 30 },
    { month: 11, day: 1 },
    { month: 11, day: 2 },
    { month: 11, day: 3 },
    { month: 11, day: 4 },
    { month: 11, day: 5 },
    { month: 11, day: 6 },
    { month: 11, day: 7 },
    { month: 11, day: 8 },
    { month: 11, day: 9 },
    { month: 11, day: 10 },
    { month: 11, day: 11 },
    { month: 11, day: 12 },
    { month: 11, day: 13 },
    { month: 11, day: 14 },
    { month: 11, day: 15 },
    { month: 11, day: 16 },
    { month: 11, day: 17 },
    { month: 11, day: 18 },
    { month: 11, day: 19 },
    { month: 11, day: 20 },
    { month: 11, day: 21 },
    { month: 11, day: 22 },
    { month: 11, day: 23 },
    { month: 11, day: 24 },
    { month: 11, day: 25 },
    { month: 11, day: 26 },
    { month: 11, day: 27 },
    { month: 11, day: 28 },
    { month: 11, day: 29 },
    { month: 11, day: 30 },
    { month: 11, day: 31 },
    { month: 12, day: 1 },
    { month: 12, day: 2 },
    { month: 12, day: 3 },
    { month: 12, day: 4 },
    { month: 12, day: 5 },
    { month: 12, day: 6 },
    { month: 12, day: 7 },
    { month: 12, day: 8 },
    { month: 12, day: 9 },
    { month: 12, day: 10 },
    { month: 12, day: 11 },
    { month: 12, day: 12 },
    { month: 12, day: 13 },
    { month: 12, day: 14 },
    { month: 12, day: 15 },
    { month: 12, day: 16 },
    { month: 12, day: 17 },
    { month: 12, day: 18 },
    { month: 12, day: 19 },
    { month: 12, day: 20 },
    { month: 12, day: 21 },
    { month: 12, day: 22 },
    { month: 12, day: 23 },
    { month: 12, day: 24 },
    { month: 12, day: 25 },
    { month: 12, day: 26 },
    { month: 12, day: 27 },
    { month: 12, day: 28 },
    { month: 12, day: 29 },
    { month: 12, day: 30 },
];

const patternYear2 = [
    { month: 1, day: 1 },
    { month: 1, day: 2 },
    { month: 1, day: 3 },
    { month: 1, day: 4 },
    { month: 1, day: 5 },
    { month: 1, day: 6 },
    { month: 1, day: 7 },
    { month: 1, day: 8 },
    { month: 1, day: 9 },
    { month: 1, day: 10 },
    { month: 1, day: 11 },
    { month: 1, day: 12 },
    { month: 1, day: 13 },
    { month: 1, day: 14 },
    { month: 1, day: 15 },
    { month: 1, day: 16 },
    { month: 1, day: 17 },
    { month: 1, day: 18 },
    { month: 1, day: 19 },
    { month: 1, day: 20 },
    { month: 1, day: 21 },
    { month: 1, day: 22 },
    { month: 1, day: 23 },
    { month: 1, day: 24 },
    { month: 1, day: 25 },
    { month: 1, day: 26 },
    { month: 1, day: 27 },
    { month: 1, day: 28 },
    { month: 1, day: 29 },
    { month: 1, day: 30 },
    { month: 1, day: 31 },
    { month: 2, day: 1 },
    { month: 2, day: 2 },
    { month: 2, day: 3 },
    { month: 2, day: 4 },
    { month: 2, day: 5 },
    { month: 2, day: 6 },
    { month: 2, day: 7 },
    { month: 2, day: 8 },
    { month: 2, day: 9 },
    { month: 2, day: 10 },
    { month: 2, day: 11 },
    { month: 2, day: 12 },
    { month: 2, day: 13 },
    { month: 2, day: 14 },
    { month: 2, day: 15 },
    { month: 2, day: 16 },
    { month: 2, day: 17 },
    { month: 2, day: 18 },
    { month: 2, day: 19 },
    { month: 2, day: 20 },
    { month: 2, day: 21 },
    { month: 2, day: 22 },
    { month: 2, day: 23 },
    { month: 2, day: 24 },
    { month: 2, day: 25 },
    { month: 2, day: 26 },
    { month: 2, day: 27 },
    { month: 2, day: 28 },
    { month: 2, day: 29 },
    { month: 2, day: 30 },
    { month: 3, day: 1 },
    { month: 3, day: 2 },
    { month: 3, day: 3 },
    { month: 3, day: 4 },
    { month: 3, day: 5 },
    { month: 3, day: 6 },
    { month: 3, day: 7 },
    { month: 3, day: 8 },
    { month: 3, day: 9 },
    { month: 3, day: 10 },
    { month: 3, day: 11 },
    { month: 3, day: 12 },
    { month: 3, day: 13 },
    { month: 3, day: 14 },
    { month: 3, day: 15 },
    { month: 3, day: 16 },
    { month: 3, day: 17 },
    { month: 3, day: 18 },
    { month: 3, day: 19 },
    { month: 3, day: 20 },
    { month: 3, day: 21 },
    { month: 3, day: 22 },
    { month: 3, day: 23 },
    { month: 3, day: 24 },
    { month: 3, day: 25 },
    { month: 3, day: 26 },
    { month: 3, day: 27 },
    { month: 3, day: 28 },
    { month: 3, day: 29 },
    { month: 3, day: 30 },
    { month: 4, day: 1 },
    { month: 4, day: 2 },
    { month: 4, day: 3 },
    { month: 4, day: 4 },
    { month: 4, day: 5 },
    { month: 4, day: 6 },
    { month: 4, day: 7 },
    { month: 4, day: 8 },
    { month: 4, day: 9 },
    { month: 4, day: 10 },
    { month: 4, day: 11 },
    { month: 4, day: 12 },
    { month: 4, day: 13 },
    { month: 4, day: 14 },
    { month: 4, day: 15 },
    { month: 4, day: 16 },
    { month: 4, day: 17 },
    { month: 4, day: 18 },
    { month: 4, day: 19 },
    { month: 4, day: 20 },
    { month: 4, day: 21 },
    { month: 4, day: 22 },
    { month: 4, day: 23 },
    { month: 4, day: 24 },
    { month: 4, day: 25 },
    { month: 4, day: 26 },
    { month: 4, day: 27 },
    { month: 4, day: 28 },
    { month: 4, day: 29 },
    { month: 4, day: 30 },
    { month: 4, day: 31 },
    { month: 5, day: 1 },
    { month: 5, day: 2 },
    { month: 5, day: 3 },
    { month: 5, day: 4 },
    { month: 5, day: 5 },
    { month: 5, day: 6 },
    { month: 5, day: 7 },
    { month: 5, day: 8 },
    { month: 5, day: 9 },
    { month: 5, day: 10 },
    { month: 5, day: 11 },
    { month: 5, day: 12 },
    { month: 5, day: 13 },
    { month: 5, day: 14 },
    { month: 5, day: 15 },
    { month: 5, day: 16 },
    { month: 5, day: 17 },
    { month: 5, day: 18 },
    { month: 5, day: 19 },
    { month: 5, day: 20 },
    { month: 5, day: 21 },
    { month: 5, day: 22 },
    { month: 5, day: 23 },
    { month: 5, day: 24 },
    { month: 5, day: 25 },
    { month: 5, day: 26 },
    { month: 5, day: 27 },
    { month: 5, day: 28 },
    { month: 5, day: 29 },
    { month: 5, day: 30 },
    { month: 6, day: 1 },
    { month: 6, day: 2 },
    { month: 6, day: 3 },
    { month: 6, day: 4 },
    { month: 6, day: 5 },
    { month: 6, day: 6 },
    { month: 6, day: 7 },
    { month: 6, day: 8 },
    { month: 6, day: 9 },
    { month: 6, day: 10 },
    { month: 6, day: 11 },
    { month: 6, day: 12 },
    { month: 6, day: 13 },
    { month: 6, day: 14 },
    { month: 6, day: 15 },
    { month: 6, day: 16 },
    { month: 6, day: 17 },
    { month: 6, day: 18 },
    { month: 6, day: 19 },
    { month: 6, day: 20 },
    { month: 6, day: 21 },
    { month: 6, day: 22 },
    { month: 6, day: 23 },
    { month: 6, day: 24 },
    { month: 6, day: 25 },
    { month: 6, day: 26 },
    { month: 6, day: 27 },
    { month: 6, day: 28 },
    { month: 6, day: 29 },
    { month: 6, day: 30 },
    { month: 7, day: 1 },
    { month: 7, day: 2 },
    { month: 7, day: 3 },
    { month: 7, day: 4 },
    { month: 7, day: 5 },
    { month: 7, day: 6 },
    { month: 7, day: 7 },
    { month: 7, day: 8 },
    { month: 7, day: 9 },
    { month: 7, day: 10 },
    { month: 7, day: 11 },
    { month: 7, day: 12 },
    { month: 7, day: 13 },
    { month: 7, day: 14 },
    { month: 7, day: 15 },
    { month: 7, day: 16 },
    { month: 7, day: 17 },
    { month: 7, day: 18 },
    { month: 7, day: 19 },
    { month: 7, day: 20 },
    { month: 7, day: 21 },
    { month: 7, day: 22 },
    { month: 7, day: 23 },
    { month: 7, day: 24 },
    { month: 7, day: 25 },
    { month: 7, day: 26 },
    { month: 7, day: 27 },
    { month: 7, day: 28 },
    { month: 7, day: 29 },
    { month: 7, day: 30 },
    { month: 7, day: 31 },
    { month: 8, day: 1 },
    { month: 8, day: 2 },
    { month: 8, day: 3 },
    { month: 8, day: 4 },
    { month: 8, day: 5 },
    { month: 8, day: 6 },
    { month: 8, day: 7 },
    { month: 8, day: 8 },
    { month: 8, day: 9 },
    { month: 8, day: 10 },
    { month: 8, day: 11 },
    { month: 8, day: 12 },
    { month: 8, day: 13 },
    { month: 8, day: 14 },
    { month: 8, day: 15 },
    { month: 8, day: 16 },
    { month: 8, day: 17 },
    { month: 8, day: 18 },
    { month: 8, day: 19 },
    { month: 8, day: 20 },
    { month: 8, day: 21 },
    { month: 8, day: 22 },
    { month: 8, day: 23 },
    { month: 8, day: 24 },
    { month: 8, day: 25 },
    { month: 8, day: 26 },
    { month: 8, day: 27 },
    { month: 8, day: 28 },
    { month: 8, day: 29 },
    { month: 8, day: 30 },
    { month: 9, day: 1 },
    { month: 9, day: 2 },
    { month: 9, day: 3 },
    { month: 9, day: 4 },
    { month: 9, day: 5 },
    { month: 9, day: 6 },
    { month: 9, day: 7 },
    { month: 9, day: 8 },
    { month: 9, day: 9 },
    { month: 9, day: 10 },
    { month: 9, day: 11 },
    { month: 9, day: 12 },
    { month: 9, day: 13 },
    { month: 9, day: 14 },
    { month: 9, day: 15 },
    { month: 9, day: 16 },
    { month: 9, day: 17 },
    { month: 9, day: 18 },
    { month: 9, day: 19 },
    { month: 9, day: 20 },
    { month: 9, day: 21 },
    { month: 9, day: 22 },
    { month: 9, day: 23 },
    { month: 9, day: 24 },
    { month: 9, day: 25 },
    { month: 9, day: 26 },
    { month: 9, day: 27 },
    { month: 9, day: 28 },
    { month: 9, day: 29 },
    { month: 9, day: 30 },
    { month: 9, day: 31 },
    { month: 10, day: 1 },
    { month: 10, day: 2 },
    { month: 10, day: 3 },
    { month: 10, day: 4 },
    { month: 10, day: 5 },
    { month: 10, day: 6 },
    { month: 10, day: 7 },
    { month: 10, day: 8 },
    { month: 10, day: 9 },
    { month: 10, day: 10 },
    { month: 10, day: 11 },
    { month: 10, day: 12 },
    { month: 10, day: 13 },
    { month: 10, day: 14 },
    { month: 10, day: 15 },
    { month: 10, day: 16 },
    { month: 10, day: 17 },
    { month: 10, day: 18 },
    { month: 10, day: 19 },
    { month: 10, day: 20 },
    { month: 10, day: 21 },
    { month: 10, day: 22 },
    { month: 10, day: 23 },
    { month: 10, day: 24 },
    { month: 10, day: 25 },
    { month: 10, day: 26 },
    { month: 10, day: 27 },
    { month: 10, day: 28 },
    { month: 10, day: 29 },
    { month: 10, day: 30 },
    { month: 11, day: 1 },
    { month: 11, day: 2 },
    { month: 11, day: 3 },
    { month: 11, day: 4 },
    { month: 11, day: 5 },
    { month: 11, day: 6 },
    { month: 11, day: 7 },
    { month: 11, day: 8 },
    { month: 11, day: 9 },
    { month: 11, day: 10 },
    { month: 11, day: 11 },
    { month: 11, day: 12 },
    { month: 11, day: 13 },
    { month: 11, day: 14 },
    { month: 11, day: 15 },
    { month: 11, day: 16 },
    { month: 11, day: 17 },
    { month: 11, day: 18 },
    { month: 11, day: 19 },
    { month: 11, day: 20 },
    { month: 11, day: 21 },
    { month: 11, day: 22 },
    { month: 11, day: 23 },
    { month: 11, day: 24 },
    { month: 11, day: 25 },
    { month: 11, day: 26 },
    { month: 11, day: 27 },
    { month: 11, day: 28 },
    { month: 11, day: 29 },
    { month: 11, day: 30 },
    { month: 11, day: 31 },
    { month: 12, day: 1 },
    { month: 12, day: 2 },
    { month: 12, day: 3 },
    { month: 12, day: 4 },
    { month: 12, day: 5 },
    { month: 12, day: 6 },
    { month: 12, day: 7 },
    { month: 12, day: 8 },
    { month: 12, day: 9 },
    { month: 12, day: 10 },
    { month: 12, day: 11 },
    { month: 12, day: 12 },
    { month: 12, day: 13 },
    { month: 12, day: 14 },
    { month: 12, day: 15 },
    { month: 12, day: 16 },
    { month: 12, day: 17 },
    { month: 12, day: 18 },
    { month: 12, day: 19 },
    { month: 12, day: 20 },
    { month: 12, day: 21 },
    { month: 12, day: 22 },
    { month: 12, day: 23 },
    { month: 12, day: 24 },
    { month: 12, day: 25 },
    { month: 12, day: 26 },
    { month: 12, day: 27 },
    { month: 12, day: 28 },
    { month: 12, day: 29 },
    { month: 12, day: 30 },
];

const patternYear3 = [
    { month: 1, day: 1 },
    { month: 1, day: 2 },
    { month: 1, day: 3 },
    { month: 1, day: 4 },
    { month: 1, day: 5 },
    { month: 1, day: 6 },
    { month: 1, day: 7 },
    { month: 1, day: 8 },
    { month: 1, day: 9 },
    { month: 1, day: 10 },
    { month: 1, day: 11 },
    { month: 1, day: 12 },
    { month: 1, day: 13 },
    { month: 1, day: 14 },
    { month: 1, day: 15 },
    { month: 1, day: 16 },
    { month: 1, day: 17 },
    { month: 1, day: 18 },
    { month: 1, day: 19 },
    { month: 1, day: 20 },
    { month: 1, day: 21 },
    { month: 1, day: 22 },
    { month: 1, day: 23 },
    { month: 1, day: 24 },
    { month: 1, day: 25 },
    { month: 1, day: 26 },
    { month: 1, day: 27 },
    { month: 1, day: 28 },
    { month: 1, day: 29 },
    { month: 1, day: 30 },
    { month: 1, day: 31 },
    { month: 2, day: 1 },
    { month: 2, day: 2 },
    { month: 2, day: 3 },
    { month: 2, day: 4 },
    { month: 2, day: 5 },
    { month: 2, day: 6 },
    { month: 2, day: 7 },
    { month: 2, day: 8 },
    { month: 2, day: 9 },
    { month: 2, day: 10 },
    { month: 2, day: 11 },
    { month: 2, day: 12 },
    { month: 2, day: 13 },
    { month: 2, day: 14 },
    { month: 2, day: 15 },
    { month: 2, day: 16 },
    { month: 2, day: 17 },
    { month: 2, day: 18 },
    { month: 2, day: 19 },
    { month: 2, day: 20 },
    { month: 2, day: 21 },
    { month: 2, day: 22 },
    { month: 2, day: 23 },
    { month: 2, day: 24 },
    { month: 2, day: 25 },
    { month: 2, day: 26 },
    { month: 2, day: 27 },
    { month: 2, day: 28 },
    { month: 2, day: 29 },
    { month: 2, day: 30 },
    { month: 3, day: 1 },
    { month: 3, day: 2 },
    { month: 3, day: 3 },
    { month: 3, day: 4 },
    { month: 3, day: 5 },
    { month: 3, day: 6 },
    { month: 3, day: 7 },
    { month: 3, day: 8 },
    { month: 3, day: 9 },
    { month: 3, day: 10 },
    { month: 3, day: 11 },
    { month: 3, day: 12 },
    { month: 3, day: 13 },
    { month: 3, day: 14 },
    { month: 3, day: 15 },
    { month: 3, day: 16 },
    { month: 3, day: 17 },
    { month: 3, day: 18 },
    { month: 3, day: 19 },
    { month: 3, day: 20 },
    { month: 3, day: 21 },
    { month: 3, day: 22 },
    { month: 3, day: 23 },
    { month: 3, day: 24 },
    { month: 3, day: 25 },
    { month: 3, day: 26 },
    { month: 3, day: 27 },
    { month: 3, day: 28 },
    { month: 3, day: 29 },
    { month: 3, day: 30 },
    { month: 4, day: 1 },
    { month: 4, day: 2 },
    { month: 4, day: 3 },
    { month: 4, day: 4 },
    { month: 4, day: 5 },
    { month: 4, day: 6 },
    { month: 4, day: 7 },
    { month: 4, day: 8 },
    { month: 4, day: 9 },
    { month: 4, day: 10 },
    { month: 4, day: 11 },
    { month: 4, day: 12 },
    { month: 4, day: 13 },
    { month: 4, day: 14 },
    { month: 4, day: 15 },
    { month: 4, day: 16 },
    { month: 4, day: 17 },
    { month: 4, day: 18 },
    { month: 4, day: 19 },
    { month: 4, day: 20 },
    { month: 4, day: 21 },
    { month: 4, day: 22 },
    { month: 4, day: 23 },
    { month: 4, day: 24 },
    { month: 4, day: 25 },
    { month: 4, day: 26 },
    { month: 4, day: 27 },
    { month: 4, day: 28 },
    { month: 4, day: 29 },
    { month: 4, day: 30 },
    { month: 4, day: 31 },
    { month: 5, day: 1 },
    { month: 5, day: 2 },
    { month: 5, day: 3 },
    { month: 5, day: 4 },
    { month: 5, day: 5 },
    { month: 5, day: 6 },
    { month: 5, day: 7 },
    { month: 5, day: 8 },
    { month: 5, day: 9 },
    { month: 5, day: 10 },
    { month: 5, day: 11 },
    { month: 5, day: 12 },
    { month: 5, day: 13 },
    { month: 5, day: 14 },
    { month: 5, day: 15 },
    { month: 5, day: 16 },
    { month: 5, day: 17 },
    { month: 5, day: 18 },
    { month: 5, day: 19 },
    { month: 5, day: 20 },
    { month: 5, day: 21 },
    { month: 5, day: 22 },
    { month: 5, day: 23 },
    { month: 5, day: 24 },
    { month: 5, day: 25 },
    { month: 5, day: 26 },
    { month: 5, day: 27 },
    { month: 5, day: 28 },
    { month: 5, day: 29 },
    { month: 5, day: 30 },
    { month: 6, day: 1 },
    { month: 6, day: 2 },
    { month: 6, day: 3 },
    { month: 6, day: 4 },
    { month: 6, day: 5 },
    { month: 6, day: 6 },
    { month: 6, day: 7 },
    { month: 6, day: 8 },
    { month: 6, day: 9 },
    { month: 6, day: 10 },
    { month: 6, day: 11 },
    { month: 6, day: 12 },
    { month: 6, day: 13 },
    { month: 6, day: 14 },
    { month: 6, day: 15 },
    { month: 6, day: 16 },
    { month: 6, day: 17 },
    { month: 6, day: 18 },
    { month: 6, day: 19 },
    { month: 6, day: 20 },
    { month: 6, day: 21 },
    { month: 6, day: 22 },
    { month: 6, day: 23 },
    { month: 6, day: 24 },
    { month: 6, day: 25 },
    { month: 6, day: 26 },
    { month: 6, day: 27 },
    { month: 6, day: 28 },
    { month: 6, day: 29 },
    { month: 6, day: 30 },
    { month: 7, day: 1 },
    { month: 7, day: 2 },
    { month: 7, day: 3 },
    { month: 7, day: 4 },
    { month: 7, day: 5 },
    { month: 7, day: 6 },
    { month: 7, day: 7 },
    { month: 7, day: 8 },
    { month: 7, day: 9 },
    { month: 7, day: 10 },
    { month: 7, day: 11 },
    { month: 7, day: 12 },
    { month: 7, day: 13 },
    { month: 7, day: 14 },
    { month: 7, day: 15 },
    { month: 7, day: 16 },
    { month: 7, day: 17 },
    { month: 7, day: 18 },
    { month: 7, day: 19 },
    { month: 7, day: 20 },
    { month: 7, day: 21 },
    { month: 7, day: 22 },
    { month: 7, day: 23 },
    { month: 7, day: 24 },
    { month: 7, day: 25 },
    { month: 7, day: 26 },
    { month: 7, day: 27 },
    { month: 7, day: 28 },
    { month: 7, day: 29 },
    { month: 7, day: 30 },
    { month: 7, day: 31 },
    { month: 8, day: 1 },
    { month: 8, day: 2 },
    { month: 8, day: 3 },
    { month: 8, day: 4 },
    { month: 8, day: 5 },
    { month: 8, day: 6 },
    { month: 8, day: 7 },
    { month: 8, day: 8 },
    { month: 8, day: 9 },
    { month: 8, day: 10 },
    { month: 8, day: 11 },
    { month: 8, day: 12 },
    { month: 8, day: 13 },
    { month: 8, day: 14 },
    { month: 8, day: 15 },
    { month: 8, day: 16 },
    { month: 8, day: 17 },
    { month: 8, day: 18 },
    { month: 8, day: 19 },
    { month: 8, day: 20 },
    { month: 8, day: 21 },
    { month: 8, day: 22 },
    { month: 8, day: 23 },
    { month: 8, day: 24 },
    { month: 8, day: 25 },
    { month: 8, day: 26 },
    { month: 8, day: 27 },
    { month: 8, day: 28 },
    { month: 8, day: 29 },
    { month: 8, day: 30 },
    { month: 9, day: 1 },
    { month: 9, day: 2 },
    { month: 9, day: 3 },
    { month: 9, day: 4 },
    { month: 9, day: 5 },
    { month: 9, day: 6 },
    { month: 9, day: 7 },
    { month: 9, day: 8 },
    { month: 9, day: 9 },
    { month: 9, day: 10 },
    { month: 9, day: 11 },
    { month: 9, day: 12 },
    { month: 9, day: 13 },
    { month: 9, day: 14 },
    { month: 9, day: 15 },
    { month: 9, day: 16 },
    { month: 9, day: 17 },
    { month: 9, day: 18 },
    { month: 9, day: 19 },
    { month: 9, day: 20 },
    { month: 9, day: 21 },
    { month: 9, day: 22 },
    { month: 9, day: 23 },
    { month: 9, day: 24 },
    { month: 9, day: 25 },
    { month: 9, day: 26 },
    { month: 9, day: 27 },
    { month: 9, day: 28 },
    { month: 9, day: 29 },
    { month: 9, day: 30 },
    { month: 9, day: 31 },
    { month: 10, day: 1 },
    { month: 10, day: 2 },
    { month: 10, day: 3 },
    { month: 10, day: 4 },
    { month: 10, day: 5 },
    { month: 10, day: 6 },
    { month: 10, day: 7 },
    { month: 10, day: 8 },
    { month: 10, day: 9 },
    { month: 10, day: 10 },
    { month: 10, day: 11 },
    { month: 10, day: 12 },
    { month: 10, day: 13 },
    { month: 10, day: 14 },
    { month: 10, day: 15 },
    { month: 10, day: 16 },
    { month: 10, day: 17 },
    { month: 10, day: 18 },
    { month: 10, day: 19 },
    { month: 10, day: 20 },
    { month: 10, day: 21 },
    { month: 10, day: 22 },
    { month: 10, day: 23 },
    { month: 10, day: 24 },
    { month: 10, day: 25 },
    { month: 10, day: 26 },
    { month: 10, day: 27 },
    { month: 10, day: 28 },
    { month: 10, day: 29 },
    { month: 10, day: 30 },
    { month: 11, day: 1 },
    { month: 11, day: 2 },
    { month: 11, day: 3 },
    { month: 11, day: 4 },
    { month: 11, day: 5 },
    { month: 11, day: 6 },
    { month: 11, day: 7 },
    { month: 11, day: 8 },
    { month: 11, day: 9 },
    { month: 11, day: 10 },
    { month: 11, day: 11 },
    { month: 11, day: 12 },
    { month: 11, day: 13 },
    { month: 11, day: 14 },
    { month: 11, day: 15 },
    { month: 11, day: 16 },
    { month: 11, day: 17 },
    { month: 11, day: 18 },
    { month: 11, day: 19 },
    { month: 11, day: 20 },
    { month: 11, day: 21 },
    { month: 11, day: 22 },
    { month: 11, day: 23 },
    { month: 11, day: 24 },
    { month: 11, day: 25 },
    { month: 11, day: 26 },
    { month: 11, day: 27 },
    { month: 11, day: 28 },
    { month: 11, day: 29 },
    { month: 11, day: 30 },
    { month: 11, day: 31 },
    { month: 12, day: 1 },
    { month: 12, day: 2 },
    { month: 12, day: 3 },
    { month: 12, day: 4 },
    { month: 12, day: 5 },
    { month: 12, day: 6 },
    { month: 12, day: 7 },
    { month: 12, day: 8 },
    { month: 12, day: 9 },
    { month: 12, day: 10 },
    { month: 12, day: 11 },
    { month: 12, day: 12 },
    { month: 12, day: 13 },
    { month: 12, day: 14 },
    { month: 12, day: 15 },
    { month: 12, day: 16 },
    { month: 12, day: 17 },
    { month: 12, day: 18 },
    { month: 12, day: 19 },
    { month: 12, day: 20 },
    { month: 12, day: 21 },
    { month: 12, day: 22 },
    { month: 12, day: 23 },
    { month: 12, day: 24 },
    { month: 12, day: 25 },
    { month: 12, day: 26 },
    { month: 12, day: 27 },
    { month: 12, day: 28 },
    { month: 12, day: 29 },
    { month: 12, day: 30 },
];

const patternYear4 = [
    { month: 1, day: 1 },
    { month: 1, day: 2 },
    { month: 1, day: 3 },
    { month: 1, day: 4 },
    { month: 1, day: 5 },
    { month: 1, day: 6 },
    { month: 1, day: 7 },
    { month: 1, day: 8 },
    { month: 1, day: 9 },
    { month: 1, day: 10 },
    { month: 1, day: 11 },
    { month: 1, day: 12 },
    { month: 1, day: 13 },
    { month: 1, day: 14 },
    { month: 1, day: 15 },
    { month: 1, day: 16 },
    { month: 1, day: 17 },
    { month: 1, day: 18 },
    { month: 1, day: 19 },
    { month: 1, day: 20 },
    { month: 1, day: 21 },
    { month: 1, day: 22 },
    { month: 1, day: 23 },
    { month: 1, day: 24 },
    { month: 1, day: 25 },
    { month: 1, day: 26 },
    { month: 1, day: 27 },
    { month: 1, day: 28 },
    { month: 1, day: 29 },
    { month: 1, day: 30 },
    { month: 1, day: 31 },
    { month: 2, day: 1 },
    { month: 2, day: 2 },
    { month: 2, day: 3 },
    { month: 2, day: 4 },
    { month: 2, day: 5 },
    { month: 2, day: 6 },
    { month: 2, day: 7 },
    { month: 2, day: 8 },
    { month: 2, day: 9 },
    { month: 2, day: 10 },
    { month: 2, day: 11 },
    { month: 2, day: 12 },
    { month: 2, day: 13 },
    { month: 2, day: 14 },
    { month: 2, day: 15 },
    { month: 2, day: 16 },
    { month: 2, day: 17 },
    { month: 2, day: 18 },
    { month: 2, day: 19 },
    { month: 2, day: 20 },
    { month: 2, day: 21 },
    { month: 2, day: 22 },
    { month: 2, day: 23 },
    { month: 2, day: 24 },
    { month: 2, day: 25 },
    { month: 2, day: 26 },
    { month: 2, day: 27 },
    { month: 2, day: 28 },
    { month: 2, day: 29 },
    { month: 2, day: 30 },
    { month: 3, day: 1 },
    { month: 3, day: 2 },
    { month: 3, day: 3 },
    { month: 3, day: 4 },
    { month: 3, day: 5 },
    { month: 3, day: 6 },
    { month: 3, day: 7 },
    { month: 3, day: 8 },
    { month: 3, day: 9 },
    { month: 3, day: 10 },
    { month: 3, day: 11 },
    { month: 3, day: 12 },
    { month: 3, day: 13 },
    { month: 3, day: 14 },
    { month: 3, day: 15 },
    { month: 3, day: 16 },
    { month: 3, day: 17 },
    { month: 3, day: 18 },
    { month: 3, day: 19 },
    { month: 3, day: 20 },
    { month: 3, day: 21 },
    { month: 3, day: 22 },
    { month: 3, day: 23 },
    { month: 3, day: 24 },
    { month: 3, day: 25 },
    { month: 3, day: 26 },
    { month: 3, day: 27 },
    { month: 3, day: 28 },
    { month: 3, day: 29 },
    { month: 3, day: 30 },
    { month: 4, day: 1 },
    { month: 4, day: 2 },
    { month: 4, day: 3 },
    { month: 4, day: 4 },
    { month: 4, day: 5 },
    { month: 4, day: 6 },
    { month: 4, day: 7 },
    { month: 4, day: 8 },
    { month: 4, day: 9 },
    { month: 4, day: 10 },
    { month: 4, day: 11 },
    { month: 4, day: 12 },
    { month: 4, day: 13 },
    { month: 4, day: 14 },
    { month: 4, day: 15 },
    { month: 4, day: 16 },
    { month: 4, day: 17 },
    { month: 4, day: 18 },
    { month: 4, day: 19 },
    { month: 4, day: 20 },
    { month: 4, day: 21 },
    { month: 4, day: 22 },
    { month: 4, day: 23 },
    { month: 4, day: 24 },
    { month: 4, day: 25 },
    { month: 4, day: 26 },
    { month: 4, day: 27 },
    { month: 4, day: 28 },
    { month: 4, day: 29 },
    { month: 4, day: 30 },
    { month: 4, day: 31 },
    { month: 5, day: 1 },
    { month: 5, day: 2 },
    { month: 5, day: 3 },
    { month: 5, day: 4 },
    { month: 5, day: 5 },
    { month: 5, day: 6 },
    { month: 5, day: 7 },
    { month: 5, day: 8 },
    { month: 5, day: 9 },
    { month: 5, day: 10 },
    { month: 5, day: 11 },
    { month: 5, day: 12 },
    { month: 5, day: 13 },
    { month: 5, day: 14 },
    { month: 5, day: 15 },
    { month: 5, day: 16 },
    { month: 5, day: 17 },
    { month: 5, day: 18 },
    { month: 5, day: 19 },
    { month: 5, day: 20 },
    { month: 5, day: 21 },
    { month: 5, day: 22 },
    { month: 5, day: 23 },
    { month: 5, day: 24 },
    { month: 5, day: 25 },
    { month: 5, day: 26 },
    { month: 5, day: 27 },
    { month: 5, day: 28 },
    { month: 5, day: 29 },
    { month: 5, day: 30 },
    { month: 6, day: 1 },
    { month: 6, day: 2 },
    { month: 6, day: 3 },
    { month: 6, day: 4 },
    { month: 6, day: 5 },
    { month: 6, day: 6 },
    { month: 6, day: 7 },
    { month: 6, day: 8 },
    { month: 6, day: 9 },
    { month: 6, day: 10 },
    { month: 6, day: 11 },
    { month: 6, day: 12 },
    { month: 6, day: 13 },
    { month: 6, day: 14 },
    { month: 6, day: 15 },
    { month: 6, day: 16 },
    { month: 6, day: 17 },
    { month: 6, day: 18 },
    { month: 6, day: 19 },
    { month: 6, day: 20 },
    { month: 6, day: 21 },
    { month: 6, day: 22 },
    { month: 6, day: 23 },
    { month: 6, day: 24 },
    { month: 6, day: 25 },
    { month: 6, day: 26 },
    { month: 6, day: 27 },
    { month: 6, day: 28 },
    { month: 6, day: 29 },
    { month: 6, day: 30 },
    { month: 7, day: 1 },
    { month: 7, day: 2 },
    { month: 7, day: 3 },
    { month: 7, day: 4 },
    { month: 7, day: 5 },
    { month: 7, day: 6 },
    { month: 7, day: 7 },
    { month: 7, day: 8 },
    { month: 7, day: 9 },
    { month: 7, day: 10 },
    { month: 7, day: 11 },
    { month: 7, day: 12 },
    { month: 7, day: 13 },
    { month: 7, day: 14 },
    { month: 7, day: 15 },
    { month: 7, day: 16 },
    { month: 7, day: 17 },
    { month: 7, day: 18 },
    { month: 7, day: 19 },
    { month: 7, day: 20 },
    { month: 7, day: 21 },
    { month: 7, day: 22 },
    { month: 7, day: 23 },
    { month: 7, day: 24 },
    { month: 7, day: 25 },
    { month: 7, day: 26 },
    { month: 7, day: 27 },
    { month: 7, day: 28 },
    { month: 7, day: 29 },
    { month: 7, day: 30 },
    { month: 7, day: 31 },
    { month: 7, day: 32 },
    { month: 8, day: 1 },
    { month: 8, day: 2 },
    { month: 8, day: 3 },
    { month: 8, day: 4 },
    { month: 8, day: 5 },
    { month: 8, day: 6 },
    { month: 8, day: 7 },
    { month: 8, day: 8 },
    { month: 8, day: 9 },
    { month: 8, day: 10 },
    { month: 8, day: 11 },
    { month: 8, day: 12 },
    { month: 8, day: 13 },
    { month: 8, day: 14 },
    { month: 8, day: 15 },
    { month: 8, day: 16 },
    { month: 8, day: 17 },
    { month: 8, day: 18 },
    { month: 8, day: 19 },
    { month: 8, day: 20 },
    { month: 8, day: 21 },
    { month: 8, day: 22 },
    { month: 8, day: 23 },
    { month: 8, day: 24 },
    { month: 8, day: 25 },
    { month: 8, day: 26 },
    { month: 8, day: 27 },
    { month: 8, day: 28 },
    { month: 8, day: 29 },
    { month: 8, day: 30 },
    { month: 9, day: 1 },
    { month: 9, day: 2 },
    { month: 9, day: 3 },
    { month: 9, day: 4 },
    { month: 9, day: 5 },
    { month: 9, day: 6 },
    { month: 9, day: 7 },
    { month: 9, day: 8 },
    { month: 9, day: 9 },
    { month: 9, day: 10 },
    { month: 9, day: 11 },
    { month: 9, day: 12 },
    { month: 9, day: 13 },
    { month: 9, day: 14 },
    { month: 9, day: 15 },
    { month: 9, day: 16 },
    { month: 9, day: 17 },
    { month: 9, day: 18 },
    { month: 9, day: 19 },
    { month: 9, day: 20 },
    { month: 9, day: 21 },
    { month: 9, day: 22 },
    { month: 9, day: 23 },
    { month: 9, day: 24 },
    { month: 9, day: 25 },
    { month: 9, day: 26 },
    { month: 9, day: 27 },
    { month: 9, day: 28 },
    { month: 9, day: 29 },
    { month: 9, day: 30 },
    { month: 9, day: 31 },
    { month: 10, day: 1 },
    { month: 10, day: 2 },
    { month: 10, day: 3 },
    { month: 10, day: 4 },
    { month: 10, day: 5 },
    { month: 10, day: 6 },
    { month: 10, day: 7 },
    { month: 10, day: 8 },
    { month: 10, day: 9 },
    { month: 10, day: 10 },
    { month: 10, day: 11 },
    { month: 10, day: 12 },
    { month: 10, day: 13 },
    { month: 10, day: 14 },
    { month: 10, day: 15 },
    { month: 10, day: 16 },
    { month: 10, day: 17 },
    { month: 10, day: 18 },
    { month: 10, day: 19 },
    { month: 10, day: 20 },
    { month: 10, day: 21 },
    { month: 10, day: 22 },
    { month: 10, day: 23 },
    { month: 10, day: 24 },
    { month: 10, day: 25 },
    { month: 10, day: 26 },
    { month: 10, day: 27 },
    { month: 10, day: 28 },
    { month: 10, day: 29 },
    { month: 10, day: 30 },
    { month: 11, day: 1 },
    { month: 11, day: 2 },
    { month: 11, day: 3 },
    { month: 11, day: 4 },
    { month: 11, day: 5 },
    { month: 11, day: 6 },
    { month: 11, day: 7 },
    { month: 11, day: 8 },
    { month: 11, day: 9 },
    { month: 11, day: 10 },
    { month: 11, day: 11 },
    { month: 11, day: 12 },
    { month: 11, day: 13 },
    { month: 11, day: 14 },
    { month: 11, day: 15 },
    { month: 11, day: 16 },
    { month: 11, day: 17 },
    { month: 11, day: 18 },
    { month: 11, day: 19 },
    { month: 11, day: 20 },
    { month: 11, day: 21 },
    { month: 11, day: 22 },
    { month: 11, day: 23 },
    { month: 11, day: 24 },
    { month: 11, day: 25 },
    { month: 11, day: 26 },
    { month: 11, day: 27 },
    { month: 11, day: 28 },
    { month: 11, day: 29 },
    { month: 11, day: 30 },
    { month: 11, day: 31 },
    { month: 12, day: 1 },
    { month: 12, day: 2 },
    { month: 12, day: 3 },
    { month: 12, day: 4 },
    { month: 12, day: 5 },
    { month: 12, day: 6 },
    { month: 12, day: 7 },
    { month: 12, day: 8 },
    { month: 12, day: 9 },
    { month: 12, day: 10 },
    { month: 12, day: 11 },
    { month: 12, day: 12 },
    { month: 12, day: 13 },
    { month: 12, day: 14 },
    { month: 12, day: 15 },
    { month: 12, day: 16 },
    { month: 12, day: 17 },
    { month: 12, day: 18 },
    { month: 12, day: 19 },
    { month: 12, day: 20 },
    { month: 12, day: 21 },
    { month: 12, day: 22 },
    { month: 12, day: 23 },
    { month: 12, day: 24 },
    { month: 12, day: 25 },
    { month: 12, day: 26 },
    { month: 12, day: 27 },
    { month: 12, day: 28 },
    { month: 12, day: 29 },
    { month: 12, day: 30 },
];

pad = (n, width, z) => {
    z = z || '0';
    n = n + '';

    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const sampleRate = 2000;

let count = 0;

class StandardTranslator
{
    get monthNames() {
        return {
            MM: 'Ham_Alt_Che_Tar_Mir_Kyt_Fla_Els_Elt_Mar_Ukt_Nig'.split('_'),
            MMM: 'Ham_Alt_Che_Tar_Mir_Kyt_Fla_Els_Elt_Mar_Ukt_Nig'.split('_'),
            MMMM: 'Hammer_Alturiak_Ches_Tarsakh_Mirtul_Kythorn_Flamerule_Eleasis_Eleint_Marpenoth_Uktar_Nightal'.split('_'),
        }
    }

    get nths() {
        return '1st_2nd_3rd_4th_5th_6th_7th_8th_9th_10th_11th_12th_13th_14th_15th_16th_17th_18th_19th_20th_21st_22nd_23rd_24th_25th_26th_27th_28th_29th_30th_31st_32nd'.split('_');
    }

    description(day, month, year) {
        return this.LLL(day, month, year);
    }

    locale(day, month, year) {
        return 'harptos_gb';
    }

    day(year, month, day)
    {
        return day;
    }

    month(year, month, day)
    {
        return month;
    }

    year(year, month, day)
    {
        return year;
    }

    D(year, month, day)
    {
        return day > 30 ? '' : day + '';
    }

    Do(year, month, day)
    {
        if (day > 30) {
            return '';
        }

        return this.nths[day - 1];
    }

    DD(year, month, day)
    {
        if (day > 30) {
            return '';
        }

        return pad(day, 2);
    }

    y(year, month, day)
    {
        return year + '';
    }

    YYYY(year, month, day)
    {
        return pad(year, 4);
    }

    daystamp(year, month, day)
    {
        return ++count;
    }

    N(year, month, day)
    {
        return 'DR';
    }

    NN(year, month, day)
    {
        return 'DR';
    }

    NNN(year, month, day)
    {
        return 'Dale Reckoning';
    }

    M(year, month, day)
    {
        return month + '';
    }

    MM(year, month, day)
    {
        return pad(month, 2);
    }

    MMM(year, month, day)
    {
        return this.monthNames.MMM[month - 1];
    }

    MMMM(year, month, day)
    {
        return this.monthNames.MMMM[month - 1];
    }

    L(year, month, day)
    {
        return `${this.DD(year, month, day)}/${this.MM(year, month, day)}/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `${this.D(year, month, day)} ${this.MMMM(year, month, day)} ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `${this.D(year, month, day)} ${this.MMMM(year, month, day)} ${this.YYYY(year, month, day)} DR`;
    }

    static factory(month, day) {
        switch (`${month}${day}`) {
            case '131': return new Translate0131();
            case '431': return new Translate0431();
            case '731': return new Translate0731();
            case '732': return new Translate0732();
            case '931': return new Translate0931();
            case '1131': return new Translate1131();
            default: return new StandardTranslator();
        }
    }
}

class Translate0131 extends StandardTranslator
{
    M(year, month, day)
    {
        return 'MW';
    }

    MM(year, month, day)
    {
        return 'MW';
    }

    MMM(year, month, day)
    {
        return 'MW';
    }

    MMMM(year, month, day)
    {
        return 'Midwinter';
    }

    L(year, month, day)
    {
        return `MW/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `Midwinter ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `Midwinter ${this.YYYY(year, month, day)} DR`;
    }
}

class Translate0431 extends StandardTranslator
{
    M(year, month, day)
    {
        return 'GG';
    }

    MM(year, month, day)
    {
        return 'GG';
    }

    MMM(year, month, day)
    {
        return 'GG';
    }

    MMMM(year, month, day)
    {
        return 'Greengrass';
    }

    L(year, month, day)
    {
        return `GG/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `Greengrass ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `Greengrass ${this.YYYY(year, month, day)} DR`;
    }
}

class Translate0731 extends StandardTranslator
{
    M(year, month, day)
    {
        return 'MS';
    }

    MM(year, month, day)
    {
        return 'MS';
    }

    MMM(year, month, day)
    {
        return 'MS';
    }

    MMMM(year, month, day)
    {
        return 'Midsummer';
    }

    L(year, month, day)
    {
        return `MS/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `Midsummer ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `Midsummer ${this.YYYY(year, month, day)} DR`;
    }
}

class Translate0732 extends StandardTranslator
{
    M(year, month, day)
    {
        return 'SM';
    }

    MM(year, month, day)
    {
        return 'SM';
    }

    MMM(year, month, day)
    {
        return 'SM';
    }

    MMMM(year, month, day)
    {
        return 'Shieldmeet';
    }

    L(year, month, day)
    {
        return `SM/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `Shieldmeet ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `Shieldmeet ${this.YYYY(year, month, day)} DR`;
    }
}

class Translate0931 extends StandardTranslator
{
    M(year, month, day)
    {
        return 'HH';
    }

    MM(year, month, day)
    {
        return 'HH';
    }

    MMM(year, month, day)
    {
        return 'HH';
    }

    MMMM(year, month, day)
    {
        return 'Highharvestide';
    }

    L(year, month, day)
    {
        return `HH/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `Highharvestide ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `Highharvestide ${this.YYYY(year, month, day)} DR`;
    }
}

class Translate1131 extends StandardTranslator
{
    M(year, month, day)
    {
        return 'FM';
    }

    MM(year, month, day)
    {
        return 'FM';
    }

    MMM(year, month, day)
    {
        return 'FM';
    }

    MMMM(year, month, day)
    {
        return 'Feast of the Moon';
    }

    L(year, month, day)
    {
        return `FM/${this.YYYY(year, month, day)}`;
    }

    LL(year, month, day)
    {
        return `Feast of the Moon ${this.YYYY(year, month, day)}`;
    }

    LLL(year, month, day)
    {
        return `Feast of the Moon ${this.YYYY(year, month, day)} DR`;
    }
}

const data = [];

const columns = ['description', 'daystamp', 'locale', 'day', 'month', 'year', 'y', 'YYYY', 'M', 'MM', 'MMM', 'MMMM', 'D', 'Do', 'DD', 'N', 'NN', 'NNN', 'L', 'LL', 'LLL'];

const addRow = (year, month, day) => {
    const translator = StandardTranslator.factory(month, day);

    const row = {};

    columns.forEach((type) => row[type] = translator[type](year, month, day));

    const rate = translator.constructor.name === 'StandardTranslator' ? sampleRate : sampleRate / 10;

    const rand = Math.random() * rate;

    if (Math.floor(rand) === 1) {
        data.push(row);
    }
};

let currentYear = 1;

while (currentYear < 2000) {
    patternYear1.forEach(({ month, day }) => addRow(currentYear, month, day));
    currentYear++;

    patternYear2.forEach(({ month, day }) => addRow(currentYear, month, day));
    currentYear++;

    patternYear3.forEach(({ month, day }) => addRow(currentYear, month, day));
    currentYear++;

    patternYear4.forEach(({ month, day }) => addRow(currentYear, month, day));
    currentYear++;
}

const csv = new objectsToCsv(data);

csv.toDisk('./tests/helpers/testData.csv');
