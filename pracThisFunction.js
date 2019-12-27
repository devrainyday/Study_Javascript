// call() - this, this를 제외한 인자를 각각 전달함
// apply() - this,this를 제외한 인자를 배열 형태로 전달함
// bind() - this를 전달해서 바꾸기만 하고 호출은 하지 않는다

// 각기 다른 문맥의 this를 필요에 따라 변경할 수 있는 함수

const macBook = {
  color: 'RoseGold',
  price: 'most than other',
  introduce: function() {
    function getPrice() {
      return this.price;
    }
    function getColor(feeling) {
      return `My MacBook's color is ${this.color} and it's ${feeling}!`;
    }
    console.log(`My price is ${getPrice.call(this)}`);
    console.log(getPrice.apply(this));
    
    console.log();

    console.log(getColor.call(this, 'beautiful'));
    console.log(getColor.apply(this, ['beautiful']));
  }
};

macBook.introduce();