import { useState } from 'react';

type priorityLevel = 'low' | 'medium' | 'high';

type Task = {
  id: number;
  title: string;
  completionStatus: boolean;
  priorityLevel?: priorityLevel;
};

function App() {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Buy groceries',
      completionStatus: false,
    },
  ];

  const [task, setTask] = useState('');
  return (
    <>
      <div className="App">
        <h1>Todo Accessible App</h1>
        <label htmlFor="new-task-input">New Task</label>
        <input
          value={task}
          id="new-task-input"
          type="text"
          placeholder="Add a new task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => console.log(task)}>Add Task</button>
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
