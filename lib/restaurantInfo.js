const { collection } = require("./database");

async function getRestaurants(values) {
  let query = values.split(",");
  query = query.map((item) => {
    if (item.includes("diet:")) return { diet: item.split(":")[1] };
    if (item.includes("cuisine:")) return { cuisine: item.split(":")[1] };
  });

  const randomRestaurant = await collection("Restaurants")
    .aggregate(
      {
        $match: { $and: query },
      },
      {
        $sample: { size: 4 },
      },
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
  if (randomRestaurant.length === 0) {
    console.log("Error - Nichts gefunden");
    // return null;
    // Fehlermeldung einbauen!
  }

  return randomRestaurant;
}

exports.getRestaurants = getRestaurants;
