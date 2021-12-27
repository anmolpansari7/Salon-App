const router = require("express").Router();
let Order = require("../models/order.model");

let passport = require("passport");
require("../passport-config")(passport);

router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: ", err));
});

router
  .route("/add")
  .post(passport.authenticate("jwt", { session: false }), (req, res) => {
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

const paginateRequest = (Order) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    const totalDocuments = await Order.count({ customerId: id }).exec();
    if (endIndex < totalDocuments)
      results.next = {
        page: page + 1,
        limit: limit,
      };

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    Order.aggregate([
      {
        $match: { customerId: id },
      },
      {
        $unwind: "$itemIds",
      },
      { $set: { itemIds: { $toObjectId: "$itemIds" } } },
      {
        $lookup: {
          from: "dealitems",
          let: {
            dealId: "$itemIds",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$dealId"],
                },
              },
            },
            {
              $project: {
                name: 1,
                _id: 0,
              },
            },
          ],
          as: "dealItemList",
        },
      },
      {
        $lookup: {
          from: "priceitems",
          let: {
            lItemId: "$itemIds",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$lItemId"],
                },
              },
            },
            {
              $project: {
                name: 1,
                _id: 0,
              },
            },
          ],
          as: "priceItemList",
        },
      },
      { $addFields: { itemName: { $first: "$priceItemList" } } },
      { $addFields: { itemName: "$itemName.name" } },
      { $unset: "priceItemList" },
      { $addFields: { dealItemName: { $first: "$dealItemList" } } },
      { $addFields: { dealItemName: "$dealItemName.name" } },
      { $unset: "dealItemList" },
      {
        $group: {
          _id: "$_id",
          doc: { $first: "$$ROOT" },
          items: {
            $push: {
              $ifNull: ["$itemName", "$dealItemName"],
            },
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: ["$doc", { itemNames: "$items" }] },
        },
      },
      { $unset: "dealItemName" },
      { $unset: "itemName" },
      {
        $sort: { createdAt: -1, _id: 1 },
      },
      {
        $skip: startIndex,
      },
      {
        $limit: limit,
      },
    ])
      .then((orders) => {
        results.result = orders;
        res.paginatedResults = results;
        next();
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  };
};

// accepts query of limit and page
router
  .route("/selected-customer/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    paginateRequest(Order),
    (req, res) => {
      res.json(res.paginatedResults);
    }
  );
module.exports = router;
