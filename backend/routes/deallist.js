const router = require("express").Router();
let DealItem = require("../models/dealItem.model");

router.route("/").get((req, res) => {
  DealItem.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const cost = req.body.cost;

  const newDealItem = new DealItem({
    name,
    cost,
  });

  newDealItem
    .save()
    .then(() => res.json("Deal Item added!"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  DealItem.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deal Item deleted!"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/updateDealItem/:id").patch((req, res) => {
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

router.route("/updateDealCost/:id").patch((req, res) => {
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
