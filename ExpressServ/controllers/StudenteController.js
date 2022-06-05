const fs = require('fs')
const  path  = require('path')
const makeNewId = require('../Utility/function.js')

//student data modal
const student = JSON.parse( fs.readFileSync(path.join(__dirname, '../data/student.json')));




// get all students
const getAllStudent = (req, res ) => {
    
    if( student.length > 0){
        res.status(200).json(student)
    }else{
        res.status(404).json({
            message : "Students data not found"
        })
    }
    
}

// get single student data
const getSingleStudent = (req, res ) => {
    
    let id = req.params.id ;

    if(student.some(data => data.id == id)){
        let sigStudent = student.find(data => data.id == id)
        // res.send('we are on controller-getSingleStudent ' + id)
        res.status(200).json(sigStudent)
    }else{
        res.status(404).json({
            message : "Student not found"
        })
    }
    
}

// create new student
const createStudent = (req, res ) => { 

    let { name, age, skill} = req.body;
    if(name == '' || age == '' || skill == ''){
        res.status(400).json({
            message : 'Data is not valid'
        })
    }else{

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
        res.status(201).json({
            message : 'Data post successfully'
        })
    }
    
 
}

// update student
const updateStudent = (req, res ) => {
    let id = req.params.id ;
    // console.log(id);
    if(student.some(data => data.id == id)){
        let { name, skill, age, location } = req.body;
        console.log(name);
        if(name == '' || skill == '', age == '' || location == ''){
            res.status(400).json({
                message : 'Data not Stable'
            })
        }else{
            student[student.findIndex(stu => stu.id == id )] = {
                id : id,
                name : name,
                skill: skill,
                age : age,
                location : location
            }
            // console.log(student);
            fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(student))
        
            res.status(202).json({
                message : 'Data UPDATE Successfully'
            })
        }
        
    }else{
        res.status(400).json({
            message : 'Data not found'
        })
    }
    
        
}
// delete student
const deleteStudent = (req, res ) => {
    let id = req.params.id ;
    if(student.some(data => data.id == id)){
        let updateData = student.filter(data => data.id != id);
        
        fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(updateData))
        res.status(202).json({
            message : 'Data Delete Successfully'
        })
    }else{
        res.status(400).json({
            message : 'Data not found'
        })
    }
    
}
module.exports = {
    getAllStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getSingleStudent
}