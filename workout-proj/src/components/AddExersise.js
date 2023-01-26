const AddExercise = ({ setExersiseList, exersiseList, workout }) => {
  const submitButtonHandler = (e) => {
    e.preventDefault();
    let name = e.target.elements.exerciseName.value;
    let reps = parseInt(e.target.elements.exerciseReps.value);
    let weight = parseInt(e.target.elements.exerciseWeight.value);

    //Prevents Duplicate Exercises From Being Added
    if(exersiseList.filter(e => e.name == name).length > 0) {
      return;
    }


    //Update and Add to the SetExerciseList
    setExersiseList([
      ...exersiseList,
      {
        name: name,
        reps: reps,
        weight: weight,
        workout: workout,
      },
    ]);

    console.log(exersiseList);
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
