const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const { authenticate } = require("../middlewares/auth");

// Create Service (POST)
router.post("/services", authenticate, async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).send(service);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Services (GET)
router.get("/services", authenticate, async (req, res) => {
    try {
        const services = await Service.find();
        res.send(services);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;