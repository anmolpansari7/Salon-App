const router = require("express").Router();
let PriceItem = require("../models/priceItem.model");

router.route("/").get((req, res) => {
  PriceItem.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const cost = req.body.cost;

  const newPriceItem = new PriceItem({
    name,
    cost,
  });

  newPriceItem
    .save()
    .then(() => res.json("Price Item added!"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  PriceItem.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted!"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/updateItem/:id").patch((req, res) => {
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

router.route("/updateCost/:id").patch((req, res) => {
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
