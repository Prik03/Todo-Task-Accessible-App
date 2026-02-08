import { useState } from 'react';
import type { Task } from './types';
import TaskInput from './TaskInput';

function App() {
  console.log('app load');
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (trimTask: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: trimTask, completionStatus: false },
    ]);
  };

  return (
    <>
      <div className="App">
        <h1>Todo Accessible App</h1>
        <TaskInput onAddTask={onAddTask} buttonText="Add Task" />
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
