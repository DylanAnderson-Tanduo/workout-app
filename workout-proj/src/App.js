import DisplayWorkout from "./components/DisplayWorkout";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const testData = [
    {
      name: "Pull up",
      reps: 12,
      weight: 155,
      workout: "Pull",
    },
    {
      name: "Bench",
      reps: 12,
      weight: 155,
      workout: "Push",
    },
    {
      name: "Deadlift",
      reps: 12,
      weight: 155,
      workout: "Legs",
    },
    {
      name: "Cable rdl",
      reps: 7,
      weight: 55,
      workout: "Legs",
    },
  ];

  const [exerciseList, setExerciseList] = useState(testData);

  return (
    <div className={styles.app}>
      <DisplayWorkout
        setExerciseList={setExerciseList}
        exercises={exerciseList}
      />
    </div>
  );
}

export default App;
