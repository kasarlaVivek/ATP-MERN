


  return (
    <div>
      <h3>List of Tasks</h3>
      {tasks.length === 0 ? (
        <p className='text-red-400 text-xl'>No tasks found</p>
      ) : (
        tasks.map((taskObj, i) => (
          <div key={i}> 
            <input
              type="checkbox"
              checked={taskObj.complete}
            />
            <p>
              {taskObj.taskpriotity}
            </p>
            <p className={taskObj.complete ? "overline" : ""}>
              {taskObj.taskname}
            </p>
          </div>
        ))
      )}

    </div>
  )
}

export default TasksList