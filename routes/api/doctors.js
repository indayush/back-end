const express = require("express");
const router = express.Router();
const Doctors = require("../../models/Doctors");

// @routes GET api/doctors
// @desc get all doctors
router.get("/", async (req, res) => {
	try {
		const doctors = await Doctors.find();
		if (!doctors) throw Error("Something broke while fetching all posts");
		res.status(200).json(doctors);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes GET api/doctors/:id
// @desc get doctor by id
router.get("/:id", async (req, res) => {
	try {
		const doctor = await Doctors.findById(req.params.id);
		if (!doctor) throw Error("Something broke while fetching a post");
		res.status(200).json(doctor);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes POST api/doctors
// @desc create a new doctor
router.post("/", async (req, res) => {
	const newDoctor = new Doctors(req.body);

	try {
		const post = await newDoctor.save();
		if (!post) throw Error("Something broke while creating a new post");

		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes DELETE api/doctors/id
// @desc deletes a post by it's ID
router.delete("/:id", async (req, res) => {
	try {
		const doctor = await Doctors.findByIdAndDelete(req.params.id);
		if (!doctor) throw Error("No Post found to delete");
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes UPDATE api/doctors/id
// @desc updates a doctor by it's ID
router.patch("/:id", async (req, res) => {
	try {
		const doctor = await Doctors.findByIdAndUpdate(req.params.id, req.body);
		if (!doctor) throw Error("Error while trying to update a post");
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});
module.exports = router;
