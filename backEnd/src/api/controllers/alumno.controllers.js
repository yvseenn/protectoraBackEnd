const Alumno = require("../models/alumnos.model");
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");

const getAllAlumnos = async (req, res, next) => {
  try {
    const alumnos = await Alumno.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { alumnos: alumnos },
    });
  } catch (error) {
    return next(error);
  }
};

const createAlumno = async (req, res, next) => {
  try {
    const newAlumno = new Alumno(req.body);
    const newAlumnoDB = await newAlumno.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { newAlumno: newAlumno },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllAlumnos,
  createAlumno,
};
