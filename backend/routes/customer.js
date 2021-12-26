const router = require("express").Router();
let Customer = require("../models/customer.model");

let passport = require("passport");
require("../passport-config")(passport);

router.route("/").get((req, res) => {
  Customer.count()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

router
  .route("/:name")
  .get(passport.authenticate("jwt", { session: false }), (req, res) => {
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

router
  .route("/details/:id")
  .get(passport.authenticate("jwt", { session: false }), (req, res) => {
    const { id } = req.params;

    Customer.findById(id)
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json("Error : " + err));
  });

router
  .route("/add")
  .post(passport.authenticate("jwt", { session: false }), (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const points = 0;
    const dues = 0;
    const dob = Date.parse(req.body.dob);
    const address = req.body.address;

    const newCustomer = new Customer({
      name,
      phone,
      points,
      dues,
      dob,
      address,
    });

    newCustomer
      .save()
      .then(() => res.json(newCustomer._id))
      .catch((err) => res.status(400).json("Error: " + err));
  });

// Update Dues and Points

router
  .route("/updateDuesAndPoints/:id")
  .patch(passport.authenticate("jwt", { session: false }), (req, res) => {
    const { id } = req.params;
    const dues = Number(req.body.dues);
    const points = Number(req.body.points);

    Customer.findByIdAndUpdate(id)
      .then((customer) => {
        customer.dues = customer.dues + dues;
        customer.points = customer.points + points;

        customer
          .save()
          .then(() => res.json("Current Customer's data Updated !"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

module.exports = router;
