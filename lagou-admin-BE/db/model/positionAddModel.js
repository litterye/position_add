const mongoose = require('mongoose');

const { positonAddSchema } = require('../schema/index');

const positionAddModel = mongoose.model('lagous', positonAddSchema);

module.exports = positionAddModel;