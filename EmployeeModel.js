const mongoose = require('mongoose');

/*
 * Employee Schema is as follows...
 * id
 * first name
 * last name
 * email
 */
const EmployeeSchema = new mongoose.Schema({
	id: {
		type: Number,
		default: 0
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		match: /.+\@.+\..+/,
		required: true
	}
});

const Employee = mongoose.model('employees', EmployeeSchema);
module.exports = Employee;
