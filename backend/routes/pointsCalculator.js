const router = require("express").Router();
let PointsCalculator = require("../models/points-calculator.model");

let passport = require("passport");
require("../passport-config")(passport);

// May Generate Error - IF DB is Empty.

router.route("/").get((req, res) => {
  PointsCalculator.findOne()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error : " + err));
});

router
  .route("/updateForRupee")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PointsCalculator.findOne()
      .then((item) => {
        item.forRupee = req.body.forRupee;
        item
          .save()
          .then(() => res.json("forRupee updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateGivenPoints")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PointsCalculator.findOne()
      .then((item) => {
        item.givenPoints = req.body.givenPoints;
        item
          .save()
          .then(() => res.json("givenPoints updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateForPoints")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PointsCalculator.findOne()
      .then((item) => {
        item.forPoints = req.body.forPoints;
        item
          .save()
          .then(() => res.json("forPoints updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateGivenDiscount")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PointsCalculator.findOne()
      .then((item) => {
        item.givenDiscount = req.body.givenDiscount;
        item
          .save()
          .then(() => res.json("givenDiscount updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

module.exports = router;
