const express = require('express');
const router = express.Router();
const { getAllStudent, createStudent, deleteStudent, updateStudent } = require('../controllers/StudenteController');

 
router.get('/', getAllStudent );

router.post('/', createStudent);

router.delete('/:id', deleteStudent);

router.put('/:id', updateStudent);

router.patch('/:id', updateStudent);

module.exports = router;