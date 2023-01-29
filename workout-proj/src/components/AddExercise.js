import styles from "./AddExercise.module.css";

const AddExercise = ({ setExerciseList, exerciseList, workout }) => {
  const submitButtonHandler = (e) => {
    e.preventDefault();
    let name = e.target.elements.exerciseName.value.toLowerCase();
    let reps = parseInt(e.target.elements.exerciseReps.value);
    let weight = parseInt(e.target.elements.exerciseWeight.value);

    //Formatting the name to look nice
    name = name.charAt(0).toUpperCase() + name.slice(1);

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
    <div className={styles["add-exercise-container"]}>
      <h2 className={styles["form-header"]}>Add Exercise</h2>
      <form
        className={styles["add-exercise-form"]}
        onSubmit={submitButtonHandler}
      >
        <label className={styles["form-label"]} htmlFor="exerciseName">
          Name:{""}
        </label>
        <input
          className={styles["form-input"]}
          required
          type="text"
          name="exerciseName"
          id="exerciseName"
          placeholder="pull up"
        />

        <label className={styles["form-label"]} htmlFor="exerciseReps">
          Reps:{" "}
        </label>
        <input
          className={styles["form-input"]}
          required
          type="number"
          name="exerciseReps"
          id="exerciseReps"
          placeholder="12"
        />

        <label className={styles["form-label"]} htmlFor="exerciseWeight">
          Weight:{" "}
        </label>
        <input
          className={styles["form-input"]}
          required
          type="number"
          name="exerciseWeight"
          id="exerciseWeight"
          placeholder="25"
        />

        <div className={styles["form-button-container"]}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddExercise;
