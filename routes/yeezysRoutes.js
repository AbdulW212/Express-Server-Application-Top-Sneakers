const express = require('express');
const router = express.Router();
const yeezys = require('../models/yeezys.js');

router.get("/", (req, res) => {
    res.send(yeezys);
});

router.get("/:id", (req, res) => {
    res.render("ShowYeezys", {
        yeezy: yeezys[req.params.id]
    });
});

router.post("/", (req, res) => {
    const newYeezy = req.body; 
    yeezys.push(newYeezy);
    res.status(201).json(newYeezy); 
});

router.put("/:id", (req, res) => {
    const yeezyId = req.params.id;
    const updatedYeezy = req.body;
    yeezys[yeezyId] = updatedYeezy;
    res.status(200).json(yeezys[yeezyId]);
});

router.delete("/:id", (req, res) => {
    const yeezyId = req.params.id;
    if (yeezys[yeezyId]) {
        const deletedYeezy = yeezys.splice(yeezyId, 1);
        res.status(200).json(deletedYeezy[0]);
    } else {
        res.status(404).json({ error: ' Not found! Yeezys never made those.' });
    }
});


module.exports = router;
