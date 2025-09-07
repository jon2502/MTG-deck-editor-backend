const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  count: { type: Number, required: true },
  set: { type: String, required: true },
  collector_number: { type: Number, required: true },
  iscommander: {type: Boolean}
},{ _id: false })

const categorySchema = new mongoose.Schema({
  categoryName: {type:String},
  cards: [cardSchema]
},{ _id: false })

const schema = mongoose.Schema({
  name: {
    type:String,
    required: true,
  },
  format: {
    type:String,
    required: true,
  },
  color:{
    type:String,
  },
  deck: {
    type: [categorySchema],
    required: true
  }, 
  legality: {
    type: Boolean,
    required: true,
  },
  updatedAt: {
    type:Date,
    required: true,
  }
})

//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("decks", schema);