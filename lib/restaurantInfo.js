const { collection } = require("./database");

async function getRandomRestaurant(restaurant_idNumber) {
  const randomRestaurant = await collection("Restaurants").findOne({
    restaurant_id: restaurant_idNumber,
  });
  if (!randomRestaurant) {
    console.log("Error - Nichts gefunden");
    return null;
  }

  return randomRestaurant;
}

exports.getRandomRestaurant = getRandomRestaurant;
