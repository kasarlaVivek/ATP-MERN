import { useForm } from "react-hook-form"
import { PlusCircle, AlertCircle, Tag } from 'lucide-react'

function AddTask({addNewTask}) {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const onFormSubmit = (taskObj) => {
        addNewTask(taskObj);
        reset();
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                <PlusCircle className="w-5 h-5" />
                <h3>Add New Task</h3>
            </div>
            
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Task Name</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            {...register("taskname", { required: "Task name is required", minLength: { value: 3, message: "Min 3 characters" } })} 
                            className={`w-full bg-secondary/50 border-2 ${errors.taskname ? 'border-destructive/50' : 'border-transparent'} focus:border-blue-500/50 rounded-xl px-4 py-2.5 outline-none transition-all placeholder:text-muted-foreground/50`}
                            placeholder="e.g. Design Dashboard"
                        />
                    </div>
                    {errors.taskname && (
                        <p className="flex items-center gap-1 text-destructive text-xs font-medium mt-1 ml-1">
                            <AlertCircle className="w-3 h-3" /> {errors.taskname.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Priority (1-5)</label>
                    <div className="relative">
                        <input 
                            type="number" 
                            {...register("taskpriority", { 
                                required: "Priority is required", 
                                min: { value: 1, message: "Min 1" }, 
                                max: { value: 5, message: "Max 5" } 
                            })} 
                            className={`w-full bg-secondary/50 border-2 ${errors.taskpriority ? 'border-destructive/50' : 'border-transparent'} focus:border-blue-500/50 rounded-xl px-4 py-2.5 outline-none transition-all placeholder:text-muted-foreground/50`}
                            placeholder="1 (Low) - 5 (High)"
                        />
                        <Tag className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                    </div>
                    {errors.taskpriority && (
                        <p className="flex items-center gap-1 text-destructive text-xs font-medium mt-1 ml-1">
                            <AlertCircle className="w-3 h-3" /> {errors.taskpriority.message}
                        </p>
                    )}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default AddTask