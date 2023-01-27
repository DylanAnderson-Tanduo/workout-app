const WorkoutButtons = ({ workouts, workoutSelectorHandler }) => {
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
    </div>
  );
};

export default WorkoutButtons;
