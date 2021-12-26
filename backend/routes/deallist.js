const router = require("express").Router();
let DealItem = require("../models/dealItem.model");

let passport = require("passport");
require("../passport-config")(passport);

router.route("/").get((req, res) => {
  DealItem.find({ status: "active" })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error : " + err));
});

router
  .route("/add")
  .post(passport.authenticate("jwt", { session: false }), (req, res) => {
    const name = req.body.name;
    const cost = req.body.cost;
    const status = req.body.status;

    const newDealItem = new DealItem({
      name,
      cost,
      status,
    });

    newDealItem
      .save()
      .then(() => res.json("Deal Item added!"))
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    DealItem.findById(req.params.id)
      .then((item) => {
        item.status = req.body.status;
        item
          .save()
          .then(() => res.json("Deal Item Added!"))
          .catch((err) => res.status(400).json("Err : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateDealItem/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    DealItem.findById(req.params.id)
      .then((item) => {
        item.name = req.body.name;

        item
          .save()
          .then(() => res.json("Deal Item updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateDealCost/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    DealItem.findById(req.params.id)
      .then((item) => {
        item.cost = req.body.cost;
        item
          .save()
          .then(() => res.json("Deal Item Cost updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

module.exports = router;
