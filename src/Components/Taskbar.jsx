import '../Components/Taskbar.css';

const Taskbar = ({ task_completed, total_tasks }) => {
  const progress =
    total_tasks > 0 ? Math.round((task_completed / total_tasks) * 100) : 0;

  return (
    <main className="bar_container">
      <section className="bar_text">
        <h2>Progress</h2>
      </section>

      <section className="task_progress">
        <section className="progress_bar">
          <section
            className="progress_fill"
            style={{ width: `${progress}%` }}
          ></section>
        </section>
        <p className="progress_text">Done: {task_completed} / Total: {total_tasks} ({progress}%)</p>
      </section>
    </main>
  );
};

export default Taskbar;
