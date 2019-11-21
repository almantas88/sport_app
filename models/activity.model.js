const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    day: { type: String },
    activities: [{
        activityName: { type: String, require: true },
        description: { type: String },
        weight: { type: Number },
        repeats: { type: Number }
    }]
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;