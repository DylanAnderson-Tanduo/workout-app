const Exercises = ({ exersiseList, workout }) => {
  let filteredArray = exersiseList.filter((exercise) => {
    return exercise.workout == workout;
  });

  return (
    <div>
      {filteredArray.map((exercise, index) => {
        return (
          <div key={index}>
            <h1>{exercise.name}</h1>
            <p>Reps: {exercise.reps}</p>
            <p>Weight: {exercise.weight}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Exercises;
