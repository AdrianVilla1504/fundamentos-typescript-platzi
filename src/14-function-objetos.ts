() => {
  type Sizes = 'M' | 'S';

  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };
  login({
    email: `adrian@l.co`,
    password: '123987456',
  });

  const products = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createdAt: Date,
    stock: numbers,
    size: Sizes,
  });
};
