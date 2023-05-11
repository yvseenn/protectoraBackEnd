const { deleteFile } = require('../middlewares/deleteImgCloudinary');
const Food = require('../models/food.models');
const HTTPSTATUSCODE = require('../utilities/httpcodes');

const getAllFood = async (req, res, next) => {
  try {
    const allFood = await Food.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      food: allFood,
    });
  } catch (error) {
    return next(error);
  }
};

const getFoodByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const foodByID = await Food.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      food: foodByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createFood = async (req, res, next) => {
  try {
    const newFood = new Food(req.body);
    console.log(req.files.picture);
    if (req.files.picture) {
      newFood.picture = req.files.picture[0].path;
    }
    if (req.files.picture1) {
      newFood.picture1 = req.files.picture1[0].path;
    }
    if (req.files.picture2) {
      newFood.picture2 = req.files.picture2[0].path;
    }
    const createdFood = await newFood.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      console: createdFood,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteFood = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedFood = await Food.findByIdAndDelete(id);

    return res.status(200).json(deletedFood);
  } catch (error) {
    return next(error);
  }
};

const patchFood = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patchFood = new Food(req.body);

    patchFood._id = id;

    const foodData = await Food.findById(id);
    console.log(patchFood);

    if (req.files.picture) {
      patchFood.picture = req.files.picture[0].path;
    }
    if (req.files.picture1) {
      patchFood.picture1 = req.files.picture1[0].path;
    }
    if (req.files.picture2) {
      patchFood.picture2 = req.files.picture2[0].path;
    }
    const FoodDB = await Food.findByIdAndUpdate(id, patchFood);

    return res.status(200).json({ new: patchFood, old: FoodDB });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllFood,
    getFoodByID,
    createFood,
    deleteFood,
    patchFood, };