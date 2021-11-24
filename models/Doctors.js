const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
	name: {
		type: String,
		required: true,
		maxlength: 60,
	},
	address: { type: String, required: false, maxlength: 300 },
	active: { type: Boolean, default: true, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Doctors", DoctorSchema);
