const express = require("express");
const router = express.Router();
const { isAuth } = require("../../middleware/auth.middleware");
const {
  getAllAlumnos,
  createAlumno,
} = require("../controllers/alumno.controllers");

router.get("/", [isAuth], getAllAlumnos);
router.post("/", [isAuth], createAlumno);

module.exports = router;
