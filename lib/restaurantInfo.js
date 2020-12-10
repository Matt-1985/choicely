const { collection } = require("./database");

async function getRestaurants(cuisines) {
  const query = cuisines.split(",").map((cuisine) => ({ cuisine }));

  const randomRestaurant = await collection("Restaurants")
    .find(
      {
        $or: query,
      },
      { projection: { name: 1, img: 1, cuisine: 1, diet: 1 } }
    )
    .toArray();
  if (randomRestaurant.lenght) {
    console.log("Error - Nichts gefunden");
    return null;
  }

  return randomRestaurant;
}

exports.getRestaurants = getRestaurants;
