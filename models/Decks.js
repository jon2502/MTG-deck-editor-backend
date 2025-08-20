const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type:String,
    required: true,
  },
  format: {
    type:String,
    required: true,
  },
  deck: {
    type: [categorySchema],
    required: true
  }, 
  legality: {
    type: String,
    required: true,
  },
  createdAt: {
    type:Date,
    required: true,
  },
  updatedAt: {
    type:Date,
    required: true,
  }
})

const categorySchema = new mongoose.Schema({
  categoryName: {type:String, default: 'Main',},
  cards: [cardSchema]
},{ _id: false })

const cardSchema = new mongoose.Schema({
  cardname: { type: String, required: true },
  count: { type: Number, required: true },
  set: { type: String, required: true },
  setid: { type: Number, required: true }
},{ _id: false })


//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("Decks", schema);