import styles from "./SelectWorkout.module.css";

const WorkoutButtons = ({ workouts, workoutSelectorHandler }) => {
  return (
    <div className={styles["workout-choices"]}>
      <form className={styles["custom-select"]}>
        <select
          className={styles["select-dropdown"]}
          defaultValue={"DEFAULT"}
          onChange={workoutSelectorHandler}
        >
          <option value="DEFAULT" disabled>
            Choose a Workout ...
          </option>
          {workouts.map((workout) => {
            return (
              <option value={workout} key={workout}>
                {workout}
              </option>
            );
          })}
        </select>
        <span className={styles["custom-arrow"]}></span>
      </form>
    </div>
  );
};

export default WorkoutButtons;
