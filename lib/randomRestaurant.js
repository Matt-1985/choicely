const { collection } = require("./database");

async function getRandomRestaurants() {
  const newRestaurants = await collection("Restaurants")
    .aggregate(
      { $sample: { size: 3 } },
      {
        projection: {
          name: 1,
          img: 1,
          cuisine: 1,
          "<diet>.$": 1,
          address: 1,
          contact: 1,
        },
      }
    )
    .toArray();
  if (newRestaurants.length === 0) {
    console.log("Error - Nichts gefunden");
    return null;
  }
  return newRestaurants;
}

exports.getRandomRestaurants = getRandomRestaurants;
