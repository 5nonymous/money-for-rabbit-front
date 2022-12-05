const getHours = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours;
};

// const getBackgroundImage = () => {
//   const hours = getHours();

//   // 07 ~ 16 : afternoon
//   // 17 ~ 18 : dusk
//   // 19 ~ 06 : night

//   if (7 <= hours && hours <= 16) {
//     return '/images/Background:Afternoon.jpeg';
//   } else if (17 <= hours && hours <= 18) {
//     return '/images/Background:Dusk.jpeg';
//   } else {
//     return '/images/Background:Night.jpeg';
//   }

//   if (7 <= hours && hours <= 16) {
//     return '/images/Background:Afternoon.jpeg';
//   } else if (17 <= hours && hours <= 18) {
//     return '/images/Background:Dusk.jpeg';
//   } else {
//     return '/images/Background:Night.jpeg';
//   }
// };

const getBackgroundImage = () => {
  const hours = Number(
    localStorage.getItem('time')
      ? localStorage.getItem('time').split(':')[0]
      : '09'
  );

  if (7 <= hours && hours <= 16) {
    return '/images/Background:Afternoon.jpeg';
  } else if (17 <= hours && hours <= 18) {
    return '/images/Background:Dusk.jpeg';
  } else {
    return '/images/Background:Night.jpeg';
  }
};

const rabbits = {
  0: 'Default1',
  1: 'under1000',
  2: 'under1000',
  3: 'under1000',
  4: 'Default2',
  5: 'Default2',
  6: 'over100000',
  7: 'over1000000',
  9: 'LotsOfMoney',
};

const getRabbitImage = (money) => {
  // 0 : Rabbit_NoBackground_Default1.png
  // 1000 < : Rabbit_NoBackground_under1000.png
  // 1000 ~ 100000 : Rabbit_NoBackground_Default2.png
  // 100000 ~ 1000000 : Rabbit_NoBackground_over100000.png
  // 1000000 ~ 10000000 : Rabbit_NoBackground_over1000000.png
  // 10000000 ~ : Rabbit_NoBackground_LotsOfMoney.png

  let moneyLength;

  if (money === 0) {
    moneyLength = 0;
  } else if (money >= 10000000) {
    moneyLength = 9;
  } else {
    moneyLength = money.toString().length;
  }

  const rabbit = rabbits[moneyLength];
  const imagePath = `/images/Rabbit_NoBackground_${rabbit}.png`;

  return imagePath;
};

const getMoneyImage = (ImageName) => {
  let money = ImageName.split('_');
  money = money[1].split('.')[0];

  const size = {
    100: [48, 47],
    500: [45, 54],
    1000: [86, 59],
    5000: [90, 81],
    10000: [90, 70],
    50000: [100, 71],
    99999: [110, 87],
  };

  const result = `
    position: absolute;
    top: calc(${size[money][1]}px / -2);
    width: ${size[money][0]}px;
    height: ${size[money][1]}px;
    background: url('/images/${ImageName}') center/cover no-repeat;
  `;

  return result;
};

export { getBackgroundImage, getRabbitImage, getMoneyImage };
