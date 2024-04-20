const express = require('express');
const router = express.Router();
const jordans = require('../models/jordans.js');



router.get("/", (req, res) => {
    res.send(jordans);
});

router.get("/:id", (req, res) => {
    res.render("Show", {
        jordan: jordans[req.params.id]
    });
});

router.post("/", (req, res) => {
    const newJordan = req.body; 
    jordans.push(newJordan);
    res.status(201).json(newJordan); 
});

router.put("/:id", (req, res) => {
    const jordanId = req.params.id;
    const updatedJordan = req.body;
    jordans[jordanId] = updatedJordan;
    res.status(200).json(jordans[jordanId]);
});

router.delete("/:id", (req, res) => {
    const jordanId = req.params.id;
    if (jordans[jordanId]) {
        const deletedJordan = jordans.splice(jordanId, 1);
        res.status(200).json(deletedJordan[0]);
    } else {
        res.status(404).json({ error: 'Jordan not found. MJ never made those!' });
    }
});


module.exports = router;
