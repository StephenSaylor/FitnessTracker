const db = require('../../models')
const router = require('express').Router()

router.get('/', (req, res) => {
  db.Workout.aggregate([
    { 
      $set: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then((workoutData) => {
      res.json(workoutData)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.get('/range', (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    },
    { 
      $sort: { day: -1 }
    },
    { $limit: 7 } 
  ])
    .then((workoutData) => {
      res.json(workoutData.reverse())
    })
    .catch((err) => {
      res.json(err)
    })
})

router.post('/', (req, res) => {
  db.Workout.create({ day: Date.now() }) 
    .then((workoutData) => {
      console.log(workoutData)
      res.json(workoutData)
    })
    .catch((err) => res.json(err))
})

router.put('/:id', (req, res) => {
  db.Workout.updateOne( 
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then((workoutData) => {
      console.log(workoutData)
      res.json(workoutData)
    })
    .catch((err) => res.json(err))
})

module.exports = router