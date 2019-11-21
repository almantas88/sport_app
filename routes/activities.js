
const router = require('express').Router();
let Activity = require('../models/activity.model');

// Activity.create(
//     {
//         day: "monday",
//         activities: [{
//             activityName: "Run",
//             description: "run",
//             weight: 0,
//             repeats: 0
//         }]
//     }, function (err, newActivity) {
//         newActivity.save();
//     });


router.route('/').get((req, res) => {
    Activity.find()
        .then(activities => {
            console.log("here");
            res.json(activities);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add/:day').post((req, res) => {


    Activity.find({ day: req.params.day })
        .then(foundActivities => {

            foundActivities.push()
            .then({
                activityName: "banana",
                description: "run",
                weight: 0,
                repeats: 0
            })
            .catch(err => res.status(400).json('Error: ' + err));
        });
    });



// router.route('/:id').get((req, res) => {
//     Exercise.findById(req.params.id)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//   router.route('/:id').delete((req, res) => {
//     Exercise.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Exercise deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//   router.route('/update/:id').post((req, res) => {
//     Exercise.findById(req.params.id)
//       .then(exercise => {
//         exercise.username = req.body.username;
//         exercise.description = req.body.description;
//         exercise.duration = Number(req.body.duration);
//         exercise.date = Date.parse(req.body.date);

//         exercise.save()
//           .then(() => res.json('Exercise updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

module.exports = router;