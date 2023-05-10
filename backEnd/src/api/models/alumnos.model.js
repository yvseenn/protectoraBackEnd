const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlumnoSchema = new Schema({
  name: { type: String, required: true },
  range: { type: String, required: false },
});

const Alumno = mongoose.model("alumnos", AlumnoSchema);
module.exports = Alumno;
