(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes | undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJson('pansito', new Date(), 12, 'M'); //Error
  const producto3 = createProductToJson('pansito', new Date(), 12, undefined); // Correcto

  const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto4 = createProductToJson2('pansito', new Date(), 12); //Correcto
  const producto5 = createProductToJson2('pansito', new Date(), 12, undefined); // Correcto

  console.log(producto2);
})();
