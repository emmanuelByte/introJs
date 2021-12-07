var amount = 100;

var foodItems = {
  BreadandAkara: 250,

  Ewagoinwithbread: 450,
  Item7WithBeef: 600,
  Item7MixWithExtraRice: 1000,
  Item7WithChicken: 800,
};
var drinksItem = {
  monster: 500,
  SoftDrinks: 150,
  Fearless: 250,
};
// var itemsBought={

// }
var itemsBought = 0;

if (amount >= foodItems.Ewagoinwithbread) {
  amount - foodItems.Ewagoinwithbread;
  itemsBought = itemsBought + foodItems.Ewagoinwithbread;
  console.log('I just purchase Ewa goin with bread');
} else {
  console.log("You don't have enough fundz to eat Ewa Goin; Go Hustle!");
}
// var studentObject={
//     name:"Lagbaja",
//     gender:"male",
//     age:19,
//     key:'value',
// }
// studentObject.name
// if (amount>=)
