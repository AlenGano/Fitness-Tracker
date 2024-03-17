import express from "express";
import PageController from "../controllers/controller.js";
import Buttons from "../controllers/controller.js"
import path from "path";
import Workout from "../models/article.js";
//const Workout = require('/models/article.js');
const router = express.Router();


router.route("/").get(PageController.getHomePage);

router.route("/ppl").get(PageController.getPPL);

router.route("/page_two").get(PageController.getSimplePage);

router.route("/ul").get(PageController.getUL);

router.route("/public/css/style.css").get((req, res) => {
  res.sendFile(path.resolve() + `/public/css/style.css`);
});

router.route("/submit-data").post((req,res) => {
  const newWorkout = new Workout({
    exercise: req.body.exercise,
    weight: req.body.weight
  });
  newWorkout.save()
    .then(() => res.send("Workout added successfully!"))
    .catch(err => res.status(400).send("Error adding workout: " + err));
  console.log('posted')
});


router.use(router);



export default router;


