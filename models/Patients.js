const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
	name: {
		type: String,
		required: true,
		maxlength: 60,
	},
	age: { type: Number, required: true, max: 100 },
	weight: { type: Number, required: true },
	sex: { type: String, required: true },
	mobile: { type: String, required: false, maxlength: 10 },
	address: { type: String, required: false, maxlength: 300 },
	active: { type: Boolean, required: true, default: "true" },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patients", PatientSchema);
