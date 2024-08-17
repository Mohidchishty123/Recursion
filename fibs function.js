function fibs(num) {
    let result = [];
    if (num >= 1) result.push(0);
    if (num >= 2) result.push(1);

    for (let i = 2; i < num; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }

    return result;
}

// Testing fibs function
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
