const employeeModel = require('./EmployeeModel.js');
const express = require('express');
const router = express.Router();

let highestId = 0;

// Fetch all employees
router.get('/employees', async (req, res) => {
	try {
		res.status(200).send(await employeeModel.find({}));
	}
	catch(err) {
		res.status(500).send(err);
	}
});

// Create a new employee
router.post('/employees', async (req, res) => {
	let employee = new employeeModel(req.body);
	try {
		employee.id = ++highestId;
		await employee.save();
		res.status(201).send(employee);
	}
	catch(err) {
		res.status(500).send(err);
	}
});

// Fetch a single employee
router.get('/employees/:employeeId', async (req, res) => {
	try {
		let employee = await employeeModel.find({ id: req.params.employeeId });
		res.status(200).send(employee);
	}
	catch(err) {
		res.status(500).send(err);		
	}
});

// Update employee information.
router.put('/employees/:employeeId', async (req, res) => {
	try {
		let employee = await employeeModel.findOneAndUpdate({ id: req.params.employeeId }, req.body);
		await employee.save();
		res.send(employee);
	}
	catch(err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Delete an employee.
router.delete('/employees/:employeeId', async (req, res) => {
	try {
		let employee = await employeeModel.findOneAndDelete({ id: req.params.employeeId });
		res.status(204).send();
	}
	catch(err) {
		res.status(500).send(err);
	}
});

module.exports = router;
