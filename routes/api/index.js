const router = require('express').Router()
const workoutRoutes = require('./api')

router.use('/workouts', workoutRoutes)

module.exports = router