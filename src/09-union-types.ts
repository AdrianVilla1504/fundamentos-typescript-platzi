(() => {
  let userId: string | number | number;
  userId = 1212;
  userId = 'asasa';
  userId = 0b101010;

  function greeting(myText: string | number) {
    if (typeof myText === 'number') {
      console.log(`string ${myText.toFixed(1)}`);
    } else {
      console.log(`number ${myText.toLowerCase()}`);
    }
  }

  greeting('asa');
  greeting(123);
})();
