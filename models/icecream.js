const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_name: String,
icecream_color: String,
icecream_price: Number
})
module.exports = mongoose.model("icecream",icecreamSchema)