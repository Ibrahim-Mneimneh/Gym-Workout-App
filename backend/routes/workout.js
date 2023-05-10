const express = require("express");
const Workout = require("../models/workoutModel");
//returns the user with his id only
const requireAuth = require("../middleware/requireAuth");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const router = express.Router();
router.use(requireAuth);
//Get all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//Add a workout
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);
module.exports = router;
