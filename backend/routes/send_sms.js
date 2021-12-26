require("dotenv").config();
const router = require("express").Router();
const Twilio = require("twilio");
let Customer = require("../models/customer.model");

let passport = require("passport");
require("../passport-config")(passport);

function sendNotifications(customers, message) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.MY_PHONE_NUMBER;

  const client = new Twilio(accountSid, authToken);
  customers.forEach((customer) => {
    // Create options to send the message
    const options = {
      to: `+91${customer.phone}`,
      from: twilioPhoneNumber,
      /* eslint-disable max-len */
      body: `Hi ${customer.name}. ${message}`,
      /* eslint-enable max-len */
    };

    // Send the message!
    client.messages.create(options, function (err, response) {
      if (err) {
        // Just log it for now
        console.error(err);
      } else {
        // Log the last few digits of a phone number
        let masked = customer.phone
          .toString()
          .substr(0, customer.phone.length - 5);
        masked += "*****";
        console.log(`Message sent to ${masked}`);
      }
    });
  });

  // Don't wait on success/failure, just indicate all messages have been
  // queued for delivery
  //   if (callback) {
  //     callback.call();
  //   }
}

router
  .route("/")
  .post(passport.authenticate("jwt", { session: false }), async (req, res) => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 1);

    const message = req.body.message;
    const customers = [
      {
        _id: 1,
        name: "Anmol Pansari",
        phone: 6264265517,
      },
    ];
    //   Customer.aggregate([
    //     {
    //       $match: { updatedAt: { $gte: date } },
    //     },
    //     {
    //       $project: {
    //         _id: 1,
    //         name: 1,
    //         phone: 1,
    //       },
    //     },
    //   ])
    //     .then((customers) => {
    //       // if (customers.length > 0) {
    //       //   sendNotifications(customers, message);
    //       // }
    //       res.json(customers);
    //     })
    //     .catch((err) => res.status(400).json("Err : " + err));
    sendNotifications(customers, message);
    res.json("Message Sent to all...");
  });

module.exports = router;
