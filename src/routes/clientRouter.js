const express = require("express");
const router = express.Router();
const Client = require("../models/Client");
const { authenticate } = require("../middlewares/auth");

// Create Client (POST)
router.post("/clients", async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).send(client);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Clients (GET)
router.get("/clients", async (req, res) => {
    try {
        const clients = await Client.find();
        res.send(clients);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;