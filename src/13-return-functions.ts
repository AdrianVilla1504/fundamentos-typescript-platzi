(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es `);
    return rta;
  };

  const rta = printTotal([1, 2, 1, 1, 1]);

  const printTotal2 = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal2([1, 2, 1, 1, 1, 1]);

  const printTotal3 = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
    return rta;
  };

  printTotal([1, 2, 3, 4, 5]);
})();
