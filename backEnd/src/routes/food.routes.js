const express = require("express");

const router = express.Router();
const upload =require('../middlewares/uploadFileCloudinary');
const {isAuth} = require('../middlewares/auth.middleware.js')

const {
  getAllFood,
  getFoodByID,
  createFood,
  deleteFood,
  patchFood,
} = require("../controllers/food.controller");

router.get("/", getAllFood);
router.get("/:id",  getFoodByID);
router.post("/", upload.fields([
  { name: "picture", maxCount: 1 },
  { name: "picture1", maxCount: 1 },
  { name: "picture2", maxCount: 1 }
]), createFood);
router.delete("/:id",[isAuth],upload.fields([
  { name: "picture", maxCount: 1 },
  { name: "picture1", macCount: 1 },
  { name: "picture2", maxCount: 1}
]), deleteFood);

router.patch("/:id",[isAuth], upload.fields([
  { name: "picture", maxCount: 1 },
  { name: "picture1", macCount: 1 },
  { name: "picture2", maxCount: 1}
]), patchFood);

module.exports = router;