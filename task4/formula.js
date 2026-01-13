function FormulaCount(arr, targetCount) {
  if (!Array.isArray(arr)) {
    throw new Error("Data Bukan Array");
  }

  const operators = ["+", "-", "*"];
  const output = new Set();
  const usedResults = new Set(); // untuk pastikan HASIL BERBEDA

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function randOp() {
    return operators[Math.floor(Math.random() * operators.length)];
  }

  function buildExpr(nums) {
    let expr = `${nums[0]} ${randOp()} ${nums[1]} ${randOp()} ${nums[2]} ${randOp()} ${nums[3]}`;

    if (Math.random() > 0.5) {
      expr = `${nums[0]} ${randOp()} (${nums[1]} ${randOp()} ${nums[2]}) ${randOp()} ${nums[3]}`;
    }

    return expr;
  }

  while (output.size < targetCount) {
    const nums = shuffle(arr);
    const expr = buildExpr(nums);

    let result;
    try {
      result = Function(`return ${expr}`)();
    } catch {
      continue;
    }

    if (!usedResults.has(result)) {
      usedResults.add(result);
      output.add(expr);
    }
  }

  return Array.from(output);
}

const dataArr = [1, 4, 5, 6];

console.log(FormulaCount(dataArr, 12).length);