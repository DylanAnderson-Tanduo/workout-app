
const Exercises = ({ exersiseList, workout }) => {

  let filteredArray = exersiseList.filter((exercise) => {
    return exercise.workout == workout;
  })

  return (
    <div>
      {filteredArray.map((exercise, index) => {
        return <h1 key={index}>{exercise.name}</h1>;
      })}
    </div>
  );


};

export default Exercises;