import { useState } from "react";
import AddWorkout from "./AddWorkout";
import WorkoutButtons from "./WorkoutButtons";
import FilteredExercises from "./FilteredExercises";

const DisplayWorkout = ({ setExerciseList, exercises }) => {
  //Derive the workouts from the exercises that currently exist
  let workoutSet = new Set();
  exercises.forEach((exercise) => {
    workoutSet.add(exercise.workout);
  });
  let workoutsArray = Array.from(workoutSet);

  //State for Controlling the display of Workouts, Exercises && The Selected Workout
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const [workouts, setWorkouts] = useState(workoutsArray);
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);

  //Handler for the Workout Buttons
  const workoutSelectorHandler = (e) => {
    setIsWorkoutSelected(true);
    setSelectedWorkout(e.target.value);
  };

  return (
    <div>
      <WorkoutButtons
        workouts={workouts}
        workoutSelectorHandler={workoutSelectorHandler}
      />
      <AddWorkout setWorkout={setWorkouts} workouts={workouts} />
      <hr />

      {isWorkoutSelected ? (
        <FilteredExercises
          exercises={exercises}
          selectedWorkout={selectedWorkout}
          setExerciseList={setExerciseList}
        />
      ) : (
        <h1>No Workout Selected</h1>
      )}
    </div>
  );
};

export default DisplayWorkout;