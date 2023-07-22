const mongoose = require("mongoose");
const express = require("express");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
// To set the
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});
const allowedOrigins = [
  "https://gym-workout-app-api.onrender.com",
  "https://gym-workout-app-api.onrender.com/login",
  "https://gym-workout-app-api.onrender.com/signup",
];
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the request's origin is in the allowed origins list
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
mongoose
  .connect(process.env.dbURI)
  .then(() => {
    console.log("Successfully Connected to Database!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on port" + process.env.PORT);
});
