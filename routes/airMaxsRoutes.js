const express = require('express');
const router = express.Router();
const airMaxs = require('../models/airMaxs.js');

router.get("/", (req, res) => {
    res.send(airMaxs);
});

router.get("/:id", (req, res) => {
    res.render("ShowAirMaxs", {
        airMax: airMaxs[req.params.id]
    });
});

router.post("/", (req, res) => {
    const newAirMax = req.body; 
    airMaxs.push(newAirMax);
    res.status(201).json(newAirMax); 
});

router.put("/:id",  (req, res) => {
    const airMaxId = req.params.id;
    const updatedAirMax = req.body;
    airMaxs[airMaxId] = updatedAirMax;
    res.status(200).json(airMaxs[airMaxId]);
});

router.delete("/:id", (req, res) => {
    const airMaxId = req.params.id;
    if (airMaxs[airMaxId]) {
        const deletedAirMax = airMaxs.splice(airMaxId, 1);
        res.status(200).json(deletedAirMax[0]);
    } else {
        res.status(404).json({ error: 'Air Maxs not found' });
    }
});




module.exports = router;
