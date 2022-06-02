const express = require('express');
const router = express.Router();
const { getAllStudent, createStudent, deleteStudent, updateStudent , getSingleStudent} = require('../controllers/StudenteController.JS');

 
router.get('/', getAllStudent );

router.get('/:id', getSingleStudent );

router.post('/', createStudent);

router.delete('/:id', deleteStudent);

router.put('/:id', updateStudent);

router.patch('/:id', updateStudent);

module.exports = router;  