import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, CheckCircle2, Circle, Clock, Info } from 'lucide-react'

function TasksList({tasks, toggleTask, deleteTask}) {
    const getPriorityColor = (priority) => {
        const p = parseInt(priority);
        if (p >= 4) return 'text-red-400 bg-red-400/10 border-red-400/20';
        if (p >= 3) return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    };

    return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {tasks.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-12 glass rounded-3xl text-muted-foreground gap-3"
          >
            <div className="p-4 bg-muted/50 rounded-full">
                <Info className="w-8 h-8" />
            </div>
            <p className="text-xl font-medium">No tasks found</p>
            <p className="text-sm">Enjoy your free time or add a new task!</p>
          </motion.div>
        ) : (
          tasks.map((taskObj) => (
            <motion.div 
              key={taskObj.id}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`group glass flex items-center justify-between p-4 rounded-2xl glass-hover transition-all ${taskObj.completed ? 'opacity-60' : ''}`}
            > 
              <div className="flex items-center gap-4 flex-1">
                <button 
                    onClick={() => toggleTask(taskObj.id)}
                    className="transition-transform active:scale-90"
                >
                    {taskObj.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500/10" />
                    ) : (
                        <Circle className="w-6 h-6 text-muted-foreground group-hover:text-blue-400" />
                    )}
                </button>
                
                <div className="flex flex-col">
                    <p className={`text-lg font-semibold transition-all ${taskObj.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {taskObj.taskname}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                        <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${getPriorityColor(taskObj.taskpriority)}`}>
                            P{taskObj.taskpriority}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {new Date(taskObj.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </div>
                </div>
              </div>

              <button 
                onClick={() => deleteTask(taskObj.id)}
                className="p-2 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  )
}

export default TasksList