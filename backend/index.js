import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 8000;

mongoose.connect(uri).catch((error) => handleError(error));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});
