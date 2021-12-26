const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OwnerSchema = new Schema(
  {
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
