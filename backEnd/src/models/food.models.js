const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodsSchema = new Schema(
  {
    picture:  { type: String, required: true },
    picture1:  { type: String, required: false },
    picture2:  { type: String, required: false },
    name: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true }
);

const Food = mongoose.model("foods", FoodsSchema);

module.exports = Food;