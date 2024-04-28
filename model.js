const {DataTypes} = require('sequelize')
const sequelize = require('./db')

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dept: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    grade: {
        type: DataTypes.CHAR,
        allowNull: false
    }
})

module.exports = Student;