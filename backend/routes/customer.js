const router = require("express").Router();
let Customer = require("../models/customer.model");

// https://localhost:5000/customer/
router.route("/:name").get((req, res) => {
  const { name } = req.params;
  const namePattern = new RegExp(name, "gi");

  Customer.find({
    $or: [
      { name: { $regex: namePattern } },
      { phone: { $regex: namePattern } },
    ],
  })
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Customer.find()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const points = 0;
  const dues = 0;
  const dob = Date.parse(req.body.dob);
  const address = req.body.address;

  const newCustomer = new Customer({ name, phone, points, dues, dob, address });

  newCustomer
    .save()
    .then(() => res.json("Customer added !"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
