const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const priceItemSchema = new Schema(
  {
    name: String,
    cost: Number,
    status: String,
  },
  {
    timestamps: true,
  }
);

const PriceItem = mongoose.model("PriceItem", priceItemSchema);

module.exports = PriceItem;