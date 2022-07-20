// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
{burger: 'beef', cheese: true, toppings:['tomato', 'onions', 'ketchup', 'mayo', 'lettuce']},
{burger: 'beef', cheese: false, toppings:['tomato', 'onions', 'ketchup', 'mayo', 'lettuce']},
{burger: 'beef', cheese: true, toppings:['bacon', 'onion straws', 'bbq sauce']},
{burger: 'chicken', cheese: true, toppings:['buffalo sauce', 'ranch']},
{burger: 'chicken', cheese: true, toppings:['lettuce', 'tomato', 'bacon']},
])

// find all the burgers
db.burgers.find({})

// show just the meat of each burger
db.burgers.find({},{burger:1})

// show just the toppings of each burger
db.burgers.find({},{toppings:1})
// show everything but the cheese
db.burgers.find({},{cheese: 0})
// find all the burgers with beef
db.burgers.find({burger: 'beef'})
// find all the burgers that are not beef
db.burgers.find({burger: {$ne: 'beef'}})
// find the first burger with cheese
db.burgers.findOne({cheese: true})
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({cheese: true}, {$set: {doubleCheese: true}, $currentDate: {lastModified: true}})
// find the burger you updated to have double cheese
db.burgers.find({doubleCheese: true})
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({burger: 'beef'},{$set: {burger: 'veggie'}, $currentDate:{lastModified: true}})
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteOne({ burger: 'veggie'})
// drop the collection
//Expected Output
//true
db.burgers.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
