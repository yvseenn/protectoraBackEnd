const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodsSchema = new Schema({
    picture:  { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false }
  },
);

const Food = mongoose.model("foods", FoodsSchema);

module.exports = Food;