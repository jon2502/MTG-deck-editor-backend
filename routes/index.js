var express = require('express');
var router = express.Router();
const DeckModel = require("../models/decks.js")


router.get('/GetDecks', async function(req, res, next) {
  try{
    // filter = {} must be provided beacus we have projections in the form of name, format and color
    let decks = await DeckModel.find({},'name format color');
    res.json(decks)
    res.end()
  } catch(error) {
     res.status(400).json(error.message);
  }
})

router.get('/Getdeck/:id', async function(req, res, next) {
  try {
    let id = req.params.id
    let deck = await DeckModel.findOne({_id: id} );
    res.json(deck)
  } catch(error){
    res.status(400).json(error.message);
  }
});

router.post('/CreateDeck', async function(req, res, next) {
  try {
    if(req.body.format === 'commander'){
      const newDeck = new DeckModel({
        name: req.body.name,
        format: req.body.format,
        deck: [{
          categoryName: 'Commander',
          cards: [],
        }],
        legality: false,
        updatedAt: Date.now(),
      })
      const savedDeck = await newDeck.save();
      res.json(savedDeck);
    } else {
      const newDeck = new DeckModel({
        name: req.body.name,
        format: req.body.format,
        color: [],
        deck: [{
          categoryName: 'main',
          cards: [],
        }],
        legality: false,
        updatedAt: Date.now(),
      })
      const savedDeck = await newDeck.save();
      res.json(savedDeck);
    }
  } catch(error){
    res.status(400).json(error.message);
  }
});

router.post('/SaveDeck', async function(req, res, next) {
  console.log("ran save")
  console.log(req.body._id)
  let id = req.body._id
  await DeckModel.findOneAndUpdate({_id:id},
    {deck:req.body.deck}
  )
  res.end()
});

router.post('/DeleteDeck/:id', async function(req, res, next) {
  let id = req.params.id
  await DeckModel.deleteOne({_id:id})
  res.end()
});


module.exports = router;
