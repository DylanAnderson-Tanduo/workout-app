const AddExercise = ({ setExerciseList, exerciseList, workout }) => {
  const submitButtonHandler = (e) => {
    e.preventDefault();
    let name = e.target.elements.exerciseName.value.toLowerCase();
    let reps = parseInt(e.target.elements.exerciseReps.value);
    let weight = parseInt(e.target.elements.exerciseWeight.value);

    //Formatting the name to look nice
    name = name.charAt(0).toUpperCase() + name.slice(1);

    //Prevents Duplicate Exercises From Being Added
    if (exerciseList.filter((e) => e.name == name).length > 0) {
      return;
    }

    //Update and Add to the SetExerciseList
    setExerciseList([
      ...exerciseList,
      {
        name: name,
        reps: reps,
        weight: weight,
        workout: workout,
      },
    ]);
  };

  return (
    <form onSubmit={submitButtonHandler}>
      <label htmlFor="exerciseName">Exercise Name: </label>
      <input type="text" name="exerciseName" id="exerciseName" />

      <label htmlFor="exerciseReps">Reps: </label>
      <input type="number" name="exerciseReps" id="exerciseReps" />

      <label htmlFor="exerciseWeight">Weight: </label>
      <input type="number" name="exerciseWeight" id="exerciseWeight" />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddExercise;
