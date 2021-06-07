const db = require('../models')
const router = require('express').Router()

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
  .then((dbWorkout) => {
    console.log(dbWorkout)
    res.json(dbWorkout)
  })
  .catch((err) => {
    res.json(err)
  })
})

router.post('/api/workouts', (req, res) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

module.exports = router