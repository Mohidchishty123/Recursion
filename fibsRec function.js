function fibsRec(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let fibSeq = fibsRec(num - 1);
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    return fibSeq;
}

// Testing fibsRec function
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
