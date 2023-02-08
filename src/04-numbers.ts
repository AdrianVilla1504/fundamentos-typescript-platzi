(() => {
  let productPrice = 100;
  console.log('ProductPrice', productPrice);

  let customerAge: number = 28;

  customerAge = customerAge + 1;
  customerAge = customerAge + '1';

  let productInStock: number;

  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is Greater');
  }
  let discount = parseInt('100');
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010; //10
  console.log('bin', bin);

  const myNumber: number = 10;
})();
