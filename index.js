const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://arthas2103:Mdq2103(@cluster0.r7yvwlm.mongodb.net/?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
