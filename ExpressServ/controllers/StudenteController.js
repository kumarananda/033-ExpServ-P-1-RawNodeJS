const fs = require('fs')
const  path  = require('path')
const makeNewId = require('../Utility/function.js')

//student data modal
const student = JSON.parse( fs.readFileSync(path.join(__dirname, '../data/student.json')));




// get all students
const getAllStudent = (req, res ) => {
    
    res.status(200).json(student)
}

// get single student data
const getSingleStudent = (req, res ) => {
    let id = req.params.id ;
    let sigStudent = student.find(data => data.id == id)
    // res.send('we are on controller-getSingleStudent ' + id)
    res.status(200).json(sigStudent)
}

// create new student
const createStudent = (req, res ) => { 
    
    // console.log(makeNewId(student));
    student.push({
        id : makeNewId(student),
        name : req.body.name,
        skill : req.body.skill,
        age : req.body.age,
        location : req.body.location,
    })
    // console.log(student); 

    fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(student));
    res.json({
        mess : 'post done'
    }) 
}

// update student
const updateStudent = (req, res ) => {
    res.send('we are on controller-updateStudent')
}
// delete student
const deleteStudent = (req, res ) => {
    res.send('we are on controller-deleteStudent')
}
module.exports = {
    getAllStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getSingleStudent
}