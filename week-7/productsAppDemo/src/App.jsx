import Products from './components/Products';
import './App.css'
import FormPage from './components/FormPage';
import { useState } from 'react';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className='parent'>
      {/* <Products />  */}
      {/* <FormPage/> */}
      <TaskManager />
    </div>
  )
}

export default App
