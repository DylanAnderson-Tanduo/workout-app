import styles from "./Exercises.module.css";

const Exercises = ({ exerciseList, workout }) => {
  let filteredArray = exerciseList.filter((exercise) => {
    return exercise.workout == workout;
  });

  return (
    <div className={styles["exercises-container"]}>
      {filteredArray.map((exercise, index) => {
        return (
          <div className={styles.exercise} key={index}>
            <h1>{exercise.name}</h1>
            <div className={styles["exercise-info"]}>
              <p>Reps: {exercise.reps}</p>
              <p>Weight: {exercise.weight} lbs</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exercises;
