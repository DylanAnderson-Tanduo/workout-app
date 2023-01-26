import WorkoutSelector from "./components/WorkoutSelector";
import { useState } from "react";


function App() {
  
const testData = [
  {
    name: "Pull Up",
    reps: 12,
    weight: 155,
    workout: "pull",
  },
  {
    name: "Bench",
    reps: 12,
    weight: 155,
    workout: "push",
  },
  {
    name: "Deadlift",
    reps: 12,
    weight: 155,
    workout: "legs",
  },
  {
    name: "Cable RDL",
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
