import { Router } from "express";
import axios from "axios";
import resizeImg = require("resize-img");
import DogImage from "../../../models/DogImage";

const router = Router();

const url = "https://random.dog/woof.json?include=jpeg,jpg,JPG,PNG,png,jfif";
const maxSizeFile16mb = 16 * 1048576;
interface IRequestBody {
  width: string;
  height: string;
}

router.post("/upload/dog/image", async (req, res) => {
  const requestData: IRequestBody = req.body;
  const jsonResponse = await axios.get(url, { responseType: "json" });
  const urlImg: string = jsonResponse.data.url;
  const arrayBufferResponse = await axios.get(jsonResponse.data.url, {
    responseType: "arraybuffer",
  });
  const bufferImg = Buffer.from(arrayBufferResponse.data, "utf-8");
  const resizeBufferImg = await resizeImg(bufferImg, {
    width: Number(requestData.width),
    height: Number(requestData.height),
  });

  const size = Buffer.byteLength(resizeBufferImg);
  if (size < maxSizeFile16mb) {
    const dogImage = new DogImage({
      buffer: resizeBufferImg,
      mainImg: urlImg,
      width: Number(requestData.width),
      height: Number(requestData.height),
    });
    await dogImage.save();
    res.send(
      `<img src = "data:image/png;base64,${resizeBufferImg.toString("base64")}">
    <p>Width: ${requestData.width} Height: ${
        requestData.height
      } File size: ${size} bytes</p>
    <a href="${urlImg}">Link</a>`
    );
  } else {
    res.send(
      `The file is too big. Max size is 16MB. Your file has size ${size} bytes. Please change your width or height.`
    );
  }
});

module.exports = router;
