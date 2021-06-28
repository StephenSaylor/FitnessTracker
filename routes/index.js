const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')
// const workoutRoutes = require('./workoutRoutes')

router.use('/api', apiRoutes)
router.use('/homeRoutes', homeRoutes)

// router.use('/workouts', workoutRoutes)

module.exports = router