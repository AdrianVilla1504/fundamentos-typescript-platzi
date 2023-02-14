(() => {
  const login = (email: string, password: number) => {
    console.log(email, password);
  };

  login('nico@nico.co', 1234569877);

  const login2 = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login2({ email: 'pedro@k.lo', password: 123987456 });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Product1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  console.log(products);
})();
