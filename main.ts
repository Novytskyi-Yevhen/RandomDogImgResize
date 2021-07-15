import express = require("express");
import mongoose = require("mongoose");

const imageUploadRouter: express.Router = require("./routes/upload/dog/image");
const imagesGetRouter: express.Router = require("./routes/list/dog/images");
require("dotenv").config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use(imageUploadRouter);
app.use(imagesGetRouter);

async function start() {
  try {
    await mongoose.connect(process.env.LINK_TO_DB!, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT, () => console.log("Server is started"));
  } catch (error) {
    console.log(error);
  }
}

start();
