(() => {
  type UserID = string | number;

  function greeting(userId: UserID) {
    if (typeof userId === 'number') {
      console.log(`string ${userId.toFixed()}`);
    }
  }

  //Literal types

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function greeting2(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(userId);
    }
  }

  greeting(false, park); //ERROR
  greeting(11, 'M'); //CORRECT
})();
