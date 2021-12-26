const router = require("express").Router();
let PriceItem = require("../models/priceItem.model");

let passport = require("passport");
require("../passport-config")(passport);

router.route("/").get((req, res) => {
  PriceItem.find({ status: "active" })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error : " + err));
});

router
  .route("/add")
  .post(passport.authenticate("jwt", { session: false }), (req, res) => {
    const name = req.body.name;
    const cost = req.body.cost;
    const status = req.body.status;

    const newPriceItem = new PriceItem({
      name,
      cost,
      status,
    });

    newPriceItem
      .save()
      .then(() => res.json("Price Item added!"))
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PriceItem.findById(req.params.id)
      .then((item) => {
        item.status = req.body.status;
        item
          .save()
          .then(() => res.json("Item Deleted!"))
          .catch((err) => res.status(400).json("Err: " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateItem/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PriceItem.findById(req.params.id)
      .then((item) => {
        item.name = req.body.name;

        item
          .save()
          .then(() => res.json("Item updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/updateCost/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    PriceItem.findById(req.params.id)
      .then((item) => {
        item.cost = req.body.cost;
        item
          .save()
          .then(() => res.json("Item Cost updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

module.exports = router;
