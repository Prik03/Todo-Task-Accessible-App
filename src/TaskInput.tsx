import { useState } from 'react';

type TaskInputProps = {
  buttonText: string;
  onAddTask: (taskName: string) => void;
};

export default function TaskInput({ onAddTask, buttonText }: TaskInputProps) {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimTask = task.trim();
    if (!trimTask) return;
    onAddTask(trimTask);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task-input">New Task</label>
      <input
        value={task}
        id="new-task-input"
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button>{buttonText}</button>
    </form>
  );
}
