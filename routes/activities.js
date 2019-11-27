const router = require('express').Router();
const Activity = require('../models/activity.model');
const Day = require('../models/day.model');

// Day.create(
//     {
//         day: "sunday",
//         activities: []
//     }, function (err, newActivity) {
//         newActivity.save();
//     });


router.route('/').get((req, res) => {
    Day.find()
        .then(day => {
            console.log("here");
            res.json(day);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add/:day').post((req, res) => {
    Day.findOne({day: req.params.day}, function(err, foundDay){
        if(err){
            res.json(err);
        }
        else{
            Activity.create({ 
                activityName: req.body.activityName,
                description: req.body.description,
                weight: Number(req.body.weight),
                repeats: Number(req.body.repeats)
            }, function(err, createdActivity){
                if(err){
                    res.json(err);
                }
                else{
                    foundDay.activities.push(createdActivity);
                    foundDay.save();
                    res.json(foundDay);
                }
            })
        }
    });

});



module.exports = router;