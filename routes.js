const express = require("express");
const {
	createStudent,
	getAllStudents,
	updateStudent,
	deleteStudent,
} = require("./controller");
const router = express.Router();

router.route("/students").get(getAllStudents).post(createStudent);

router.route("/students/:id").put(updateStudent).delete(deleteStudent);

module.exports = router;
