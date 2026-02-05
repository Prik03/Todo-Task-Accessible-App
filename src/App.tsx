import { useState } from 'react';
import type { Task } from './types';
import TaskInput from './TaskInput';
import CustomButton from './CustomButton';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');

  const onAddTask = () => {
    const trimTask = task.trim();
    if (!trimTask) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: trimTask, completionStatus: false },
    ]);
    setTask('');
  };

  const onInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <>
      <div className="App">
        <h1>Todo Accessible App</h1>
        <TaskInput
          taskName={task}
          setTask={setTask}
          onInputKeydown={onInputKeydown}
        />
        <CustomButton buttonText="Add Task" onAddTask={onAddTask} />
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
