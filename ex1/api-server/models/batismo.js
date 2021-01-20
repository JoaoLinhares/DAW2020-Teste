const mongoose = require('mongoose')

var batismoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    ref: String,
    href: String,
    pai: String,
    mae: String,
    filho: String,
    _id:String,
    ano: String
  });

module.exports = mongoose.model('batismo', batismoSchema)