const express = require('express')
const {createStudent, getAllStudents} = require('./controller')
const router = express.Router()

router.route("/students").get(getAllStudents).post(createStudent)

module.exports = router;