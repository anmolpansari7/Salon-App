const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerId: { type: String, required: true },
    itemIds: Array,
    totalAmount: Number,
    paidAmount: Number,
    paymentMode: { type: String, required: true },
    remark: String,
    pointsUsed: Number,
    pointsGiven: Number,
    discount: Number,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
