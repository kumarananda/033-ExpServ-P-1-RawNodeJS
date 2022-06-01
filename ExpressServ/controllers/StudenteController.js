const fs = require('fs')
const  path  = require('path')

//student data modal
const student = JSON.parse( fs.readFileSync(path.join(__dirname, '../data/student.json')));


// get all students
const getAllStudent = (req, res ) => {
    
    res.status(200).json(student)
}

// create new student
const createStudent = (req, res ) => {
    res.send('we are on controller-createStudent')
}

// update student
const updateStudent = (req, res ) => {
    res.send('we are on controller-updateStudent')
}
// delete student
const deleteStudent = (req, res ) => {
    res.send('we are on controller-updateStudent')
}
module.exports = {
    getAllStudent,
    createStudent,
    updateStudent,
    deleteStudent
}