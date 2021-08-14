const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
   name: {
     type: String,
     required: [true, "Please check your data entry, No name specified!!"]
   },
   rating: {
     type: Number,
     min: 1,
     max: 10
   },
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 9,
//   review: "Pretty solid as a fruit."
// });

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy!"
// });

// fruit.save();

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great!"
});

// pineapple.save();

const watermelon = new Fruit({
  name: "Watermelon",
  rating: 8,
  review: "Not Too Bad."
});
watermelon.save();

Person.updateOne({name: "Praneel"}, {favoriteFruit: watermelon}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated Praneel's favoutrite fruit.");
  }
});

const Amy = new Person({
  name: "Amy",
  age: 18,
  favoriteFruit: pineapple
});

// Amy.save();

// const person = new Person({
//   name: "John",
//   age: 34
// });
//
// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The Best Fruit"
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too Sour for Me"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 10,
//   review: "Weird Texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to the database.");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if(err) {
//     console.log(err);
//   } else {
//     // console.log(fruits);
//     mongoose.connection.close();
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne({_id: "6110c1a0b82f0238587590d7"}, {name: "Peach"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({_id: "6110c1a0b82f0238587590d7"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted Peach from the database.");
//   }
// });

// Person.deleteMany({name:"John"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted all John's from the Document.");
//   }
// });
