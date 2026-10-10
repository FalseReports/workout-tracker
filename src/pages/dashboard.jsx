import '../index.css';
import { useState } from 'react';
export default function Dashboard() {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [showForm, updateShowForm] = useState(false);
  const [workoutName, updateWorkoutName] = useState('');
  const [rows, setRows] = useState([
    {
      exerciseName: '',
      sets: [
        {
          reps: '',
          weight: '',
        }
      ],
    }
  ])
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
        {
          id: 2,
          name: 'Leg Extension',
          sets: [
            { reps: 5, weight: 120 },
            { reps: 6, weight: 130 },
          ],
        }
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
    function addSet(exerciseIndex) {
      setRows((currentRows) =>
        currentRows.map((currentRow, currentIndex) => {
          if (currentIndex !== exerciseIndex) {
            return currentRow;
          }
          return {
            ...currentRow,
            sets: [
              ...currentRow.sets,
              {
                reps: '',
                weight: '',
              },
            ],
          };
        })
      );
    }
  return (
    <>
      <header className="dashHeader">
        <h1 id="appName">Badooie App</h1>
        <nav>
          <a id="navDashboard">Dashboard</a>
          <a id="navWorkoutLogs">Workout Logs</a>
        </nav>
      </header>
      <div className="dashboardContent">
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
        </div>
        <div className="workoutButton">
          <button id="createWorkout" onClick={() => updateShowForm(true)}>Create New</button> 
          <button id="deleteWorkout">Delete</button>
        </div>
      </section>
        {showForm && (
          <div className="createFormDiv"> 
              <header>
                <h2 id="createWorkoutHeader">Create New Workout</h2>
              </header>
              <input type='text' className='setWorkoutName' placeholder='Workout Name' 
                onChange={(event) => {
                    updateWorkoutName(event.target.value);
                }}></input>
              <button className = "createWorkoutButton"  onClick={() => {console.log(rows)}}>Create Workout</button>
              {rows.map((row, index) => (
                <div key={index}>
                  {row.sets.map((set, setIndex) => (
                    <div className="nextSet" key={setIndex}>
                      {setIndex === 0 && (
                        <input
                          type="text"
                          className="setExerciseName"
                          placeholder="Exercise Name"
                          onChange={(event) => {
                            exerciseName: event.target.value;
                            console.log("State:", row.exerciseName);
                            console.log("Input:", event.target.value);
                          }}
                        />
                      )}
                      <input
                        type="number"
                        className="setExerciseWeight"
                        placeholder="Weight Amount"
                      />
                      <input
                        type="number"
                        className="setExerciseReps"
                        placeholder="Rep Amount"
                      />
                      <button
                        className="addSet"
                        onClick={() => addSet(index)}
                      >
                        Add Set
                      </button>
                      {setIndex === 0 && (
                        <button
                          className="addNextExercise"
                          onClick={() => {
                            setRows([
                              ...rows,
                              {
                                exerciseName: '',
                                sets: [
                                  {
                                    reps: '',
                                    weight: '',
                                  },
                                ],
                              },
                            ]);
                          }}
                        >
                          Add Exercise
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        )}
        {selectedWorkout && (
            <div className="selectedWorkoutDiv">
                <header className="dashHeader2">
                    <h2 className="selectedWorkoutName">{selectedWorkout.name}</h2>
                </header>
              {selectedWorkout.exercises?.map((exercise) => (
                <div className='specificWorkoutDiv' key={exercise.id}>
                  <h3 className="selectedWorkoutExercise">{exercise.name}</h3>
                  {exercise.sets.map((set, index) => (
                    <div className="selectedDiv" key={index}>
                      <span className='selectedSetNum'>Set {index + 1}</span>
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
    </>
  );
}