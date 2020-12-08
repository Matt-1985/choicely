const { collection } = require("./database");

async function getRandomRestaurant(cuisine_value) {
  const randomRestaurant = await collection("Restaurants")
    .find({
      cuisine: cuisine_value,
    })
    .toArray();
  if (!randomRestaurant) {
    console.log("Error - Nichts gefunden");
    return null;
  }

  return randomRestaurant;
}

exports.getRandomRestaurant = getRandomRestaurant;
