import Exercises from "./Exercises";
import AddExercise from "./AddExercise";
import styles from "./FilteredExercises.module.css";

const FilteredExercises = ({ exercises, selectedWorkout, setExerciseList }) => {
  return (
    <div>
      <h1 className={styles["workout-header"]}>{selectedWorkout} Workout</h1>
      <Exercises exerciseList={exercises} workout={selectedWorkout}></Exercises>

      <AddExercise
        setExerciseList={setExerciseList}
        exerciseList={exercises}
        workout={selectedWorkout}
      />
    </div>
  );
};

export default FilteredExercises;
