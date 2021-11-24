const express = require("express");
const router = express.Router();
const Patients = require("../../models/Patients");

// @routes GET api/patients
// @desc get all patients
router.get("/", async (req, res) => {
	try {
		const patients = await Patients.find();
		if (!patients) throw Error("Something broke while fetching all patients");
		res.status(200).json(patients);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes GET api/patients/:id
// @desc get patient by id
router.get("/:id", async (req, res) => {
	try {
		const patient = await Patients.findById(req.params.id);
		if (!patient) throw Error("Something broke while fetching a patient");
		res.status(200).json(patient);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes POST api/patients
// @desc create a new patient
router.post("/", async (req, res) => {
	const newPatient = new Patients(req.body);

	try {
		const patient = await newPatient.save();
		if (!patient) throw Error("Something broke while creating a new post");

		res.status(200).json(patient);
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
});

// @routes DELETE api/patients/id
// @desc deletes a patient by it's ID
router.delete("/:id", async (req, res) => {
	try {
		const patient = await Patients.findByIdAndDelete(req.params.id);
		if (!patient) throw Error("No Post found to delete");
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes UPDATE api/patients/id
// @desc updates a patient by it's ID
router.patch("/:id", async (req, res) => {
	try {
		const patient = await Patients.findByIdAndUpdate(req.params.id, req.body);
		if (!patient) throw Error("Error while trying to update a post");
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

module.exports = router;
