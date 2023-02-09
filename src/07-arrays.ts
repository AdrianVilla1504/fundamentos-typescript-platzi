(() => {
  let prices = [1, 2, 2, 1, 1, 212];
  prices.push('asas');
  prices.push(1, 2);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];

  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
})();
