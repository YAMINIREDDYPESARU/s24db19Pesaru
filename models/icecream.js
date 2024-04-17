const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50
  },
icecream_color: String,
icecream_price: {
    type: Number,
    required: true,
    min: 1,
    max: 1000
  }
})
module.exports = mongoose.model("icecream",icecreamSchema)