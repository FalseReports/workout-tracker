import '../index.css';

export default function Dashboard(){
    const workouts = [
        {id: 1, name: "Leg Day" },
        {id: 2, name: "Pull Day"},
        {id: 3, name: "Push Day"},
    ]

    

    return (
        <>
            <header className="dashHeader">
                <h1 id="appName"> Badooie App </h1>
                    <nav>
                        <a id="navDashboard">Dashboard</a>
                        
                        <a id="navWorkoutLogs">Workout Logs</a>
                    </nav>
            </header>

            <section className="sectionWorkouts">
                <h1 id="myWorkouts">My Workouts</h1>

                    <ul id="workoutList">
                        {workouts.map((workout) => (
                        <ul 
                            className= "workoutList" key={workout.id}
                            onClick={() => console.log(workout.name)}> 
                            {workout.name}
                        </ul>
                        ))}
                    </ul>
                    
                    <div className="workoutButton">
                        <button id="createWorkout">Create New</button>
                        <button id="deleteWorkout">Delete</button>
                    </div>
            </section>

        </>
    )
}