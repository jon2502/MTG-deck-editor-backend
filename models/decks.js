const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  count: { type: Number, required: true },
  set: { type: String, required: true },
  collector_number: { type: String, required: true },
  iscommander: {type: Boolean}
},{ _id: false })

const categorySchema = new mongoose.Schema({
  categoryName: {
    type:String,
    required: true
  },
  cards: [cardSchema],
   permissions: {
    canRename: {
      type: Boolean,
      required: true
    },
    canDelete: {
      type: Boolean,
      required: true
    }
  }
},{ _id: false })

const colorSchema = new mongoose.Schema({
  W: {type: Number, default: 0, min: 0},
  U: {type: Number, default: 0, min: 0},
  B: {type: Number, default: 0, min: 0},
  G: {type: Number, default: 0, min: 0},
  R: {type: Number, default: 0, min: 0},
  C: {type: Number, default: 0, min: 0},
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
  colors:{
    type: colorSchema,
    default: {},
    required: true,
  },
  deck: {
    type: [categorySchema],
    default: [
          {
            categoryName: 'Main Deck',
            cards: [],
            permissions: {
              canRename: false,
              canDelete: false
            }
          },
          {
            categoryName: 'Sideboard',
            cards: [],
            permissions: {
              canRename: false,
              canDelete: false
            }
          },
          {
            categoryName: 'Maybeboard',
            cards: [],
            permissions: {
              canRename: false,
              canDelete: false
            }
          }
    ],
    required: true
  },
  Token: {
    type : [
      {
        set: { type: String, required: true },
        collector_number: { type: String, required: true },
        related_cards: {type: Number, required: true, min: 0}
      }
    ],
    required: true
  },
  legality: {
    type: Boolean,
    default: false,
    required: true,
  },
  updatedAt: {
    type:Date,
    default: Date.now(),
    required: true,
  }
})

//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("decks", schema);