import DisplayWorkout from "./components/DisplayWorkout";
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

  const [exersiseList, setExersiseList] = useState(testData);

  return (
    <div className="App">
      <DisplayWorkout
        setExersiseList={setExersiseList}
        exercises={exersiseList}
      />
    </div>
  );
}

export default App;
