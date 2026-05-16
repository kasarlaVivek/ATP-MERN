import React from 'react'

function TasksCount({tasks}) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500/10 p-3 rounded-2xl border border-blue-500/20">
          <p className="text-2xl font-bold text-blue-400">{active}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Active</p>
        </div>
        <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
          <p className="text-2xl font-bold text-emerald-400">{completed}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Done</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Progress</span>
          <span className="text-blue-400">{percentage}%</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)]" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default TasksCount