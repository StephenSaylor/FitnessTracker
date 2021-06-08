
const router = require('express').Router()
const workoutRoutes = require('./api')

// workout routes
router.use('/workouts', workoutRoutes)

module.exports = router