require("dotenv").config({
  path: "C:UsersIbrahim MneimnehDesktopMy FolderGitHubMERN Stack\backend.env",
});
const mongoose = require("mongoose");
const express = require("express");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const app = express();
// To set the
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
mongoose
  .connect(
    "mongodb+srv://Ib99s1:test@tutorial.lceackk.mongodb.net/MERN_Stack_Workout_App"
  )
  .then(() => {
    console.log("Successfully Connected to Database!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port 4000");
});
