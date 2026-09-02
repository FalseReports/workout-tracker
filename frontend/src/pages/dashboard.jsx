import '../index.css';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  const workouts = [
    {
      id: 1,
      name: 'Leg Day',
      exercises: [
        {
          id: 1,
          name: 'Leg Press',
          sets: [
            { reps: 5, weight: 120 },
            { reps: 6, weight: 130 },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Pull Day',
    },
    {
      id: 3,
      name: 'Push Day',
    },
  ];

  const selectedWorkout = workouts.find(
    (workout) => workout.id === selectedWorkoutId
  );

  return (
    <>
      <header className="dashHeader">
        <h1 id="appName">Badooie App</h1>

        <nav>
          <a id="navDashboard">Dashboard</a>
          <a id="navWorkoutLogs">Workout Logs</a>
        </nav>
      </header>

      <section className="sectionWorkouts">
        <h1 id="myWorkouts">My Workouts</h1>

        <div className="workoutContent">
          <ul id="workoutList">
            {workouts.map((workout) => (
              <li
                className="workoutList"
                key={workout.id}
                onClick={() =>
                  setSelectedWorkoutId(
                    selectedWorkoutId === workout.id ? null : workout.id
                  )
                }
              >
                {workout.name}
              </li>
            ))}
          </ul>

          {selectedWorkout && (
            <div className="selectedWorkoutDiv">
              <h2>{selectedWorkout.name}</h2>

              {selectedWorkout.exercises?.map((exercise) => (
                <div key={exercise.id}>
                  <h3>{exercise.name}</h3>

                  {exercise.sets.map((set, index) => (
                    <div className="selectedDiv" key={index}>
                      <span>Set {index + 1}</span>
                      <span className="selectedWeight">
                        {set.weight} lbs
                      </span>
                      <span className="selectedReps">
                        {set.reps} reps
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="workoutButton">
          <button id="createWorkout">Create New</button>
          <button id="deleteWorkout">Delete</button>
        </div>
      </section>
    </>
  );
} 