const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.13uxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri);

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    console.log("connected to database");
    const database = client.db("citilordTest");
    const PropertiesCollection = database.collection("properties");

    // POST API
    app.post("/properties", async (req, res) => {
      const property = req.body;
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("from first node!");
});

// app.get("/users", (req, res) => {
//   res.send("here is my users");
// });

app.listen(port, () => {
  console.log("Example app listening on port", port);
});
