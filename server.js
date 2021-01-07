require("dotenv").config();

const express = require("express");
const path = require("path");

const { getRestaurants } = require("./lib/restaurantInfo");
const { connect } = require("./lib/database");
const { getRandomRestaurants } = require("./lib/randomRestaurant");

const app = express();
const port = process.env.PORT || 3013;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/api/restaurants/:values", async (req, res) => {
  try {
    const value = await getRestaurants(req.params.values);
    if (!value) {
      res.status(404).send("There is no such a restaurant");
      return;
    }
    res.json(value);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server error", dsc: error.message });
  }
});

app.get("/api/random-restaurants", async (req, res) => {
  try {
    const randomRestaurant = await getRandomRestaurants();
    if (!randomRestaurant) {
      res.status(404).send("Please try again");
      return;
    }
    console.log(randomRestaurant);
    res.json(randomRestaurant);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server error", dsc: error.message });
  }
});

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  console.log(req, res);
  // res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connecting to database...");
  await connect(process.env.MONGO_DB_URI, process.env.MONGO_DB_NAME);
  console.log("Connected to database 🎉");

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

run();
