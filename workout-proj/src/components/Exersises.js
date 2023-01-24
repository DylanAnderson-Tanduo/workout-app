
const Exercises = ({ exersiseList }) => {

    
      console.log(exersiseList);

  return (
    <div>
      {exersiseList.map((exercise, index) => {
     return (<h1 key={index}>{exercise.name}</h1>);
      })}
    </div>
  );


};

export default Exercises;