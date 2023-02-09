(() => {
  let myNull = null;
  let myUndefined = undefined;
  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'aas';

  function hi(name: string | null) {
    let hello = 'Hola';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | undefined) {
    let hello = 'Hola';
    hello += name?.toLowerCase() || 'nobody';
  }

  console.log(hiV2('pepito'));
})();
