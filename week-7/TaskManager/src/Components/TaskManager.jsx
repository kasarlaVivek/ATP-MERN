import React, { useState, useEffect } from 'react'
import AddTask from './AddTask'
import TasksCount from './TasksCount'
import TasksList from './TasksList'
import { motion, AnimatePresence } from 'framer-motion'
import { Layout, ListChecks, Filter } from 'lucide-react'

function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [filter, setFilter] = useState('all'); // all, active, completed

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // add new task
    const addNewTask = (taskObj) => {
        const newTask = {
            ...taskObj,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTasks([newTask, ...tasks]);
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4">
                        <Layout className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Nexus Task Manager
                    </h1>
                    <p className="text-muted-foreground text-lg">Streamline your workflow with precision.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar / Stats */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass p-6 rounded-3xl"
                        >
                            <AddTask addNewTask={addNewTask} />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass p-6 rounded-3xl space-y-4"
                        >
                            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                                <ListChecks className="w-5 h-5" />
                                <h3>Statistics</h3>
                            </div>
                            <TasksCount tasks={tasks} />
                            
                            {tasks.some(t => t.completed) && (
                                <button 
                                    onClick={clearCompleted}
                                    className="w-full py-2 px-4 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors text-sm font-medium"
                                >
                                    Clear Completed
                                </button>
                            )}
                        </motion.div>
                    </div>

                    {/* Main Content / Tasks */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between glass p-2 rounded-2xl">
                            <div className="flex gap-1">
                                {['all', 'active', 'completed'].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
                                            filter === f 
                                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                                            : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {f.charAt(0).toUpperCase() + f.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <div className="hidden sm:flex items-center gap-2 px-3 text-muted-foreground">
                                <Filter className="w-4 h-4" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Filter</span>
                            </div>
                        </div>

                        <TasksList 
                            tasks={filteredTasks} 
                            toggleTask={toggleTask} 
                            deleteTask={deleteTask} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager