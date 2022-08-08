import { useState } from 'react';
import { Task, AppInterface } from './interfaces/Task'
import logo from './logo.svg'
import './App.css';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

export function App({ appTitle }: AppInterface) {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "Lear react",
    description: "learning react with ts",
    completed: false
  }])
  
  const addTask = (task: Task) => setTasks([...tasks, task])

  return (
    <div style={{ height: "100vh" }}>
      <nav className=' navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="react" style={{ width: "6rem" }} />
            {appTitle ? appTitle : "Application"}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-5">
            <TaskForm addTask={addTask} />
          </div>
          <div className="col-md-7">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
