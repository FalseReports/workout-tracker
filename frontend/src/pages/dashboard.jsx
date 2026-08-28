import '../index.css';

export default function Dashboard(){
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
                    <ul/>
            </section>

        </>
    )
}