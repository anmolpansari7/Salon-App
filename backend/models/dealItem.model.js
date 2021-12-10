const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dealItemSchema = new Schema(
  {
    name: String,
    cost: Number,
  },
  {
    timestamps: true,
  }
);

const DealItem = mongoose.model("DealItem", dealItemSchema);

module.exports = DealItem;
