var express = require('express');
var router = express.Router();
const DeckModel = require("../models/decks.js");
const { format } = require('morgan');


router.get('/Decks', async function(req, res, next) {
  try{
    // filter = {} must be provided beacus we have projections in the form of name, format and color
    let decks = await DeckModel.find({},'name format color');
    res.json(decks)
    res.end()
  } catch(error) {
     res.status(400).json(error.message);
  }
})

router.get('/Deck/:id', async function(req, res, next) {
  try {
    let id = req.params.id
    let deck = await DeckModel.findOne({_id: id} );
    res.json(deck)
  } catch(error){
    res.status(400).json(error.message);
  }
});

router.post('/Create', async function(req, res, next) {
  try {
      const newDeck = new DeckModel({
        name: req.body.name,
        format: req.body.format
      })
      const savedDeck = await newDeck.save();
      console.log(savedDeck)
      res.json(savedDeck);
  } catch(error){
    res.status(400).json(error.message);
  }
});

router.post('/Save', async function(req, res, next) {
  console.log(req.body._id)
  let id = req.body._id
  await DeckModel.findOneAndUpdate({_id:id},
    {
      name: req.body.name,
      format: req.body.format,
      color: req.body.color,
      deck: req.body.deck,
      legality: req.body.legality,
      updatedAt: Date.now(),
    }
  )
  res.end()
});

router.post('/Delete/:id', async function(req, res, next) {
  let id = req.params.id
  await DeckModel.deleteOne({_id:id})
  res.end()
});


module.exports = router;
