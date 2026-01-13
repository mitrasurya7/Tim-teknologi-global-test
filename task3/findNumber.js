function findLostNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Data Bukan Array");
  }

  const cleanArr = arr.filter(Number.isFinite);
  cleanArr.sort((a, b) => a - b);

  const lostNumbers = [];

  for (let i = 0; i < cleanArr.length - 1; i++) {
    let current = cleanArr[i];
    let next = cleanArr[i + 1];

    for (let n = current + 1; n < next; n++) {
      lostNumbers.push(n);
    }
  }

  return lostNumbers;
}


const dataArr = [0, 2, 4, 3, 6];

console.log(findLostNumber(dataArr));
