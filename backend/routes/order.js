const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: ", err));
});

router.route("/add").post((req, res) => {
  const customerId = req.body.customerId;
  const itemIds = req.body.itemIds;
  const totalAmount = req.body.totalAmount;
  const paidAmount = req.body.paidAmount;
  const paymentMode = req.body.paymentMode;
  const remark = req.body.remark;
  const pointsUsed = req.body.pointsUsed;
  const pointsGiven = req.body.pointsGiven;
  const discount = req.body.discount;

  const newOrder = new Order({
    customerId,
    itemIds,
    totalAmount,
    paidAmount,
    paymentMode,
    remark,
    pointsUsed,
    pointsGiven,
    discount,
  });

  newOrder
    .save()
    .then(() => res.json("Order Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
