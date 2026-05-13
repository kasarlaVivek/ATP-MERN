
function TasksCount({tasks}) {
    console.log(tasks);
    
  return (
    <div>
        <h3>TasksCount</h3>
        <p>{tasks.length}</p>
    </div>
  )
}

export default TasksCount