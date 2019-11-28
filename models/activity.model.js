const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    weekDay: {type: String, require: true},
    activityName: { type: String, require: true },
    description: { type: String },
    weight: { type: Number },
    repeats: { type: Number }
});

const activity = mongoose.model('Activity', activitySchema);

module.exports = activity;