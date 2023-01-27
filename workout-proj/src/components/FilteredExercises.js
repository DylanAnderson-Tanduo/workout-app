import Exersises from "./Exersises";
import AddExersise from "./AddExersise";

const FilteredExercises = ({ exercises, selctedWorkout, setExersiseList }) => {
  return (
    <div>
      <h1>{selctedWorkout} Exersises</h1>
      <Exersises exersiseList={exercises} workout={selctedWorkout}></Exersises>
      <hr />
      <AddExersise
        setExersiseList={setExersiseList}
        exersiseList={exercises}
        workout={selctedWorkout}
      />
    </div>
  );
};

export default FilteredExercises;
