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
    cards: [
        {
            name: String, required: true,
            count: Number, required: true,
            set: String, required: true,
            setid: Number, required: true
        },
        
    ],
  createdAt: {
    type:Date,
    required: true,
  },
  updatedAt: {
    type:Date,
    required: true,
  }
})
//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("Decks", schema);