const AddWorkout = ({setWorkout, workouts }) => {
  const submitButtonHandler = (e) => {
    e.preventDefault();
    let workoutName = e.target.elements.workoutName.value.toLowerCase();
 

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
