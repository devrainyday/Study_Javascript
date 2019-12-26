const myFeelingBecause = (reason, feeling = 'happy') => {
  return `I'm ${feeling}. becuase... ${reason}`;
}

console.log(myFeelingBecause('I met my friends yesterday!'));
console.log(myFeelingBecause('Happy New Year!', 'very moved'));