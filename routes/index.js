var express = require('express');
var router = express.Router();
const DeckModel = require("./models/Decks.js")


router.get('GetDeck', async function(req, res, next) {
  try{
    let decks = await DeckModel.find('name format color');
    res.json({decks})
  } catch(error) {
     res.status(400).json(error.message);
  }
})

router.get('/Getdeck/:id ', async function(req, res, next) {
  try {
    let id = req.params.id
    let deck = await DeckModel.find( {_id: id} );
    res.json({deck})
  } catch(error){
    res.status(400).json(error.message);
  }
});

router.post('/CreateDeck ', function(req, res, next) {
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
      DeckModel.create(newDeck)
    } else {
      const newDeck = new DeckModel({
        name: req.body.name,
        format: req.body.format,
        color: null,
        deck: [],
        legality: false,
        updatedAt: Date.now(),
      })
      DeckModel.create(newDeck)
    }

  } catch(error){
    res.status(400).json(error.message);
  }
});

router.post('/SaveDeck ', function(req, res, next) {

});

router.post('/DeleteDeck ', async function(req, res, next) {
  await Files.deleteOne({_id:req.body.id})
});


module.exports = router;
