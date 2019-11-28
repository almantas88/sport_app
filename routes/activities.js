const router = require('express').Router();
const Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
    Activity.find()
        .then(day => {
            res.json(day);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Route to POST an activity to a specific day
router.route('/add/:day').post((req, res) => {
    const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    if (weekDays.indexOf(req.params.day) < 0) {
        return res.status(400).json('Error: the name of week day is incorrect');
    }
    console.log("here");

    Activity.create({
        weekDay: req.params.day,
        activityName: req.body.activityName,
        description: req.body.description,
        weight: Number(req.body.weight),
        repeats: Number(req.body.repeats)
    })
        .then(createdActivity => {
            res.json({ createdActivity: createdActivity })
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Route to get exercises for a specific day
router.route('/:day').get((req, res) => {
    Activity.find({ weekDay: req.params.day })
        .then(foundActivities => {
            res.json({foundActivities: foundActivities})
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;