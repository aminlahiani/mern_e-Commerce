// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const connectDB = async () => {
  const uri =
    "mongodb+srv://alabada:lGkpyvi30D44wiyX@cluster0.kzqaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
