import { useState } from "react";
import Exersises from "./Exersises";
import AddExersise from "./AddExersise"

const WorkoutSelector = ({ setExersiseList, exercises }) => {
  //Derive the workouts from the exercises that exist
  //May need to rework to use State, Not sure atm
  let workoutSet = new Set();
  exercises.forEach((exercise) => {
    workoutSet.add(exercise.workout);
  });
  let workouts = Array.from(workoutSet);

  //State for Controlling the display of the Exercises && The Selected Workout
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const [selctedWorkout, setSelctedWorkout] = useState(workouts[0]);
  

  //Handle The Buttons
  const workoutSelectorHandler = (e) => {
    setIsWorkoutSelected(true);
    setSelctedWorkout(e.target.value);
  };

  return (
    <div>
      {workouts.map((workout) => {
        return (
          <button
            onClick={workoutSelectorHandler}
            value={workout}
            key={workout}
          >
            {workout}
          </button>
        );
      })}
      <div>
        {isWorkoutSelected ? (
          <div>
            <h1>{selctedWorkout} Exersises</h1>
            <Exersises
              exersiseList={exercises}
              workout={selctedWorkout}
            ></Exersises>
            <AddExersise
              setExersiseList={setExersiseList}
              exersiseList={exercises}
              workout={selctedWorkout}
            />
          </div>
        ) : (
          <h1>No Workout Selected</h1>
        )}
      </div>
    </div>
  );
};

export default WorkoutSelector;
