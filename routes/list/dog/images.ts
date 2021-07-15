import console from "console";
import { Router } from "express";

const router = Router();

router.get("/list/dog/images", (req, res) => {
  console.log(req.query);

  res.json(req.query);
});

module.exports = router;
