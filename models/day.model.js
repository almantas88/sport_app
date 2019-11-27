const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const daySchema = new Schema({
    day: { type: String },
    activities:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity"
    }]
});

const day = mongoose.model('Day', daySchema);

module.exports = day;