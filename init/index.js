const mongoose = require("mongoose");
const data = require("./data.js");  // this contains your data
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => {
    console.log("Connected DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);   // FIXED: use data.data
  console.log("data was initialized");
};

initDB();
