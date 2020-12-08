require("dotenv").config();

const express = require("express");
const path = require("path");

const { getRandomRestaurant } = require("./lib/restaurantInfo");
const { connect } = require("./lib/database");

const app = express();
const port = process.env.PORT || 3013;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/api/restaurants/:cuisine", async (req, res) => {
  const { cuisine } = req.params;
  try {
    const value = await getRandomRestaurant(cuisine);
    if (!value) {
      res.status(404).send("There is no such a restaurant");
      return;
    }
    res.send(value);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Handle React routing, return all requests to React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

async function run() {
  console.log("Connecting to database...");
  await connect(process.env.MONGO_DB_URI, process.env.MONGO_DB_NAME);
  console.log("Connected to database 🎉");

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

run();
