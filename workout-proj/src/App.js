import WorkoutSelector from "./components/WorkoutSelector";
import { useState } from "react";


function App() {
  
const testData = [
  {
    name: "pull up",
    reps: 12,
    weight: 155,
    workout: "pull",
  },
  {
    name: "bench",
    reps: 12,
    weight: 155,
    workout: "push",
  },
  {
    name: "deadlift",
    reps: 12,
    weight: 155,
    workout: "legs",
  },
  {
    name: "cable rdl",
    reps: 7,
    weight: 55,
    workout: "legs",
  },
];

const [exersiseList, setExersiseList] = useState(testData);

  return (
    <div className="App">
      <WorkoutSelector
        setExersiseList={setExersiseList}
        exercises={exersiseList}
      />
    </div>
  );
}

export default App;
