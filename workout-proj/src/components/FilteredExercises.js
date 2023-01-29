import Exercises from "./Exercises";
import AddExercise from "./AddExercise";

const FilteredExercises = ({ exercises, selectedWorkout, setExerciseList }) => {
  return (
    <div>
      <h1>{selectedWorkout} Exercises</h1>
      <Exercises exerciseList={exercises} workout={selectedWorkout}></Exercises>
      <hr />
      <AddExercise
        setExerciseList={setExerciseList}
        exerciseList={exercises}
        workout={selectedWorkout}
      />
    </div>
  );
};

export default FilteredExercises;
