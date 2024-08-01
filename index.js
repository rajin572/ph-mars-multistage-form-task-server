const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", ""],
    credentials: true,
  })
);
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("Mars_Visitor");
    const marsVisitorCollection = db.collection("marsVisitor");

    //* Create
    app.post("/api/v1/visitor", async (req, res) => {
      console.log(req.body);
      const result = await marsVisitorCollection.insertOne(req.body);
      res.json({
        success: true,
        message: "Your Application Successfully Submited",
        result,
      });
    });

    //* Get ALL
    app.get("/api/v1/visitors", async (req, res) => {
      const data = await marsVisitorCollection.find({}).toArray();
      res.json({
        success: true,
        message: "Successfully Retrieve Visitors!",
        data,
      });
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } finally {
  }
}

run().catch(console.dir);

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Mars Visitor server is running smoothly",
  };
  res.json(serverStatus);
});
