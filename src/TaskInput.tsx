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
    <form onSubmit={handleSubmit} className="flex items-center flex-wrap">
      <div className="flex flex-wrap flex-col w-1/4">
        <label htmlFor="new-task-input">New Task</label>
        <input
          value={task}
          id="new-task-input"
          type="text"
          placeholder="Add a new task"
          onChange={(e) => setTask(e.target.value)}
          className="border-2 rounded-md p-1"
        />
      </div>
      <div className="ml-3 mt-6">
        <button className="bg-blue-300 text-gray-800 p-2 font-bold rounded-md">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
