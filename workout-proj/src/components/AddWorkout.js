import styles from "./AddWorkout.module.css";

const AddWorkout = ({ setWorkout, workouts }) => {
  const submitButtonHandler = (e) => {
    e.preventDefault();
    let workoutName = e.target.elements.workoutName.value;

    //Formatting the Name so it looks nice
    workoutName = workoutName.charAt(0).toUpperCase() + workoutName.slice(1);

    //Prevents Duplicate Workouts From Being Added
    if (workouts.filter((e) => e == workoutName).length > 0) {
      return;
    }

    //Update and Add to Workouts
    setWorkout([...workouts, [workoutName]]);
  };

  return (
    <form className={styles["workout-form"]} onSubmit={submitButtonHandler}>
      <div>
        <label htmlFor="workoutName">Workout Name: </label>
        <input required type="text" name="workoutName" id="workoutName" />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddWorkout;
