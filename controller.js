const Student = require('./model')


exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll()
        return res.json(students)
    } catch (e) {
        console.log(e);
       return  res.status(500).send('Internal Server Error')
    }
}

exports.createStudent = async (req, res) => {
    try {
        const{
            name,
            dept,
            level,
            grade,
        } = req.body;
        const student = await Student.create({name, dept, level, grade})
        return res.json({student})
    } catch (e) {
        console.log(e);
        return res.status(500).send('Internal Server Error')
    }
}