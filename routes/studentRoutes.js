const express = require("express");
const router = express.Router();
const {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent
} = require("../controllers/studentController");

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students", createStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);

module.exports = router;