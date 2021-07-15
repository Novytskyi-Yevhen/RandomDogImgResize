import { Router, Request, Response } from "express";
import DogImage, { IDogImage } from "../../../models/DogImage";

const lodash = require("lodash");

const router = Router();

function renderImages(data: IDogImage[], option: string) {
  return lodash
    .sortBy(data, [option])
    .map((element: IDogImage) => {
      return `<div><img src = "data:image/png;base64,${element.buffer.toString(
        "base64"
      )}">
    <p>Width: ${element.width} Height: ${
        element.height
      } File size: ${Buffer.byteLength(element.buffer)} bytes</p>
    <a href="${element.mainImg}">Link to main photo</a></div>`;
    })
    .join("\n");
}

router.get("/list/dog/images", async (req: Request, res: Response) => {
  const dogImages = await DogImage.find({});
  const option = String(req.query.option);
  const render = renderImages(dogImages, option);
  res.send(render);
});

module.exports = router;
