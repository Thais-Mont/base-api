const mongoose = require('mongoose');

const MainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Main = mongoose.model('mains', MainSchema);

module.exports = Main;