const AddWorkout = ({setWorkout, workouts }) => {
  const submitButtonHandler = (e) => {
    e.preventDefault();
    let workoutName = e.target.elements.workoutName.value;

    //Formating the Name so it looks nice
    workoutName = workoutName.charAt(0).toUpperCase() + workoutName.slice(1);
 

    //Prevents Duplicate Workouts From Being Added
    if (workouts.filter((e) => e == workoutName).length > 0) {
      return;
    }

    //Update and Add to Workouts
    setWorkout([
      ...workouts,
      [
        workoutName
      ]
    ]);

  };

  return (
    <form onSubmit={submitButtonHandler}>
      <label htmlFor="workoutName">Workout Name: </label>
      <input type="text" name="workoutName" id="workoutName" />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddWorkout;
