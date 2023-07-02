import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
//date formatting
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick} className="delete">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
          alt="delete icon"
          style={{ height: 20 }}
        ></img>
      </span>
    </div>
  );
};
export default WorkoutDetails;
