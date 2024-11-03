const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Painting = require('./Painting');

// Get all paintings
router.get("/paintings", async (req, res) => {
    try {
        const paintings = await Painting.find({});
        res.json(paintings);
    } catch (error) {
        res.status(500).send('Error fetching paintings: ' + error.message);
    }
});

// Get a painting by ID
router.get('/paintings/:id', async (req, res) => {
    try {
        const painting = await Painting.findOne({ PaintingID: Number(req.params.id) });
        if (!painting) {
            return res.status(404).send('Painting not found');
        }
        res.json(painting);
    } catch (error) {
        res.status(500).send('Error occurred: ' + error.message);
    }
});

// Update a painting
router.post("/painting", async (req, res) => {
  try {
    console.log(req); // should now directly log form data fields

    const updatedPainting = await Painting.findOneAndUpdate(
      { PaintingID: req.body.PaintingID }, // access PaintingID directly from req.body
      req.body, // pass req.body directly as update data
      { new: true }
    );
    
    res.json(updatedPainting);
  } catch (error) {
    res.status(500).send('Error updating painting: ' + error.message);
  }
});


module.exports = router;
