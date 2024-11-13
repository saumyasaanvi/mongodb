const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const { authenticate } = require("../middlewares/auth");

// Create Appointment
router.post("/appointments", authenticate, async (req, res) => {
	try {
		const appointment = new Appointment(req.body);
		await appointment.save();
		res.status(201).send(appointment);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Read Appointments with aggregation
router.get("/appointments", authenticate, async (req, res) => {
	try {
		const appointments = await Appointment.aggregate([
			{
				$lookup: {
					from: "clients", // collection name in MongoDB
					localField: "clientId",
					foreignField: "_id",
					as: "clientInfo"
				}
			},
			{
				$lookup: {
					from: "services", // collection name in MongoDB
					localField: "serviceId",
					foreignField: "_id",
					as: "serviceInfo"
				}
			}
		]);
		res.send(appointments);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Update Appointment
router.put("/appointments/:id", authenticate, async (req, res) => {
	try {
		const appointment = await Appointment.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.send(appointment);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Delete Appointment
router.delete("/appointments/:id", authenticate, async (req, res) => {
	try {
		await Appointment.findByIdAndDelete(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
