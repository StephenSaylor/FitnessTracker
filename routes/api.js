const db = require("../models")
const router = require("express").Router()

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
})