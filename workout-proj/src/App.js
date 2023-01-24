import Exercises from "./components/Exersises";
import { useState } from "react";
import AddExercise from "./components/AddExersise";

function App() {
  
const testData = [
  {
    name: "Pull Up",
    reps: 12,
    weight: 155,
  },
  {
    name: "Bench",
    reps: 12,
    weight: 155,
  },
  {
    name: "Deadlift",
    reps: 12,
    weight: 155,
  },
];

const [exersiseList, setExersiseList] = useState(testData);

  return (
    <div className="App">
      <Exercises exersiseList={exersiseList} />
      <AddExercise
        setExersiseList={setExersiseList}
        exersiseList={exersiseList}
      />
    </div>
  );
}

export default App;
