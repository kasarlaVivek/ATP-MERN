import { useForm } from "react-hook-form"

function AddTask({addNewTask}) {
    const {register,handleSubmit,formState:{errors},reset} = useForm();


    const onFormSubmit = (taskObj) => {
        addNewTask({...taskObj,completed:false});
        reset();
    }

  return (
    <div>
        <h3>ADD TASK</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" {...register("taskname",{required:true})} placeholder="new task name"/>
            {
                errors.taskname?.type === 'required' && <p>Task name is required</p>
            }
            <input type="number" {...register("taskpriority",{required:true})} placeholder="task priority"/>
            {
                errors.taskpriority?.type === 'required' && <p>priority is required</p>
            }
            <button type="submit" className="bg-blue-700 text-lime-100 px-3 py-2">Add</button>
        </form>
    </div>
  )
}

export default AddTask