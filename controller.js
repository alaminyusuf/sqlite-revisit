const Student = require("./model");

exports.getAllStudents = async (req, res) => {
	try {
		const students = await Student.findAll();
		return res.json(students);
	} catch (e) {
		console.log(e);
		return res.status(500).send("Internal Server Error");
	}
};

exports.createStudent = async (req, res) => {
	try {
		const { name, dept, level, grade } = req.body;
		const student = await Student.create({ name, dept, level, grade });
		return res.json({ student });
	} catch (e) {
		console.log(e);
		return res.status(500).send("Internal Server Error");
	}
};

exports.updateStudent = async (req, res) => {
	try {
		const userId = req.params.id;
		const userFound = await Student.update(req.body, {
			where: { id: userId },
		});
		if (userFound === 0) {
			return res.status(404).send("Student not Found");
		}
		const updatedUser = await Student.findByPk(userId);
		return res.json({ updatedUser });
	} catch (e) {
		console.log(e);
		return res.status(500).send("Internal Server Error");
	}
};

exports.deleteStudent = async (req, res) => {
	try {
		const userId = req.params.id;
		await Student.destroy({ where: { id: userId } });
		return res.status(200).json({ msg: "Student deleted" });
	} catch (e) {
		console.log(e);
		return res.status(404).send("Could not delete, Student not found");
	}
};
