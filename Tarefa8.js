// //1 //2 //3 //4 //5 //6 //7 //8
const menu  = {
  _meal : '',
  _price : 0,
   get meal () {
    return this._meal
   },
   get price () {
     return this._price
   },
   get todaysSpecial () {
      if (this._meal && this._price) {
         return `O especial de hoje é ${this._meal} por R$ ${this._price} `

      } else {
          return 'Refeição ou preço não foi definido corretamente!';
      }
   },

   set meal (mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
   },
   set price (priceToCheck) {
    if (typeof priceToCheck === 'number') {
       return this._price = priceToCheck;
    }
   }
}


menu.price = 23;
menu.meal = 'pizza';

//menu._meal = 19;
//console.log (menu.meal)

//menu._price = 'Macarrão';
//console.log (menu.price)

console.log (menu.meal);
console.log (menu.price);
console.log (menu.todaysSpecial);
console.log (menu);




