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
      <div className="App mx-auto w-4/5">
        <h1 className="text-3xl place-self-center">Todo Accessible App</h1>
        <TaskInput onAddTask={onAddTask} buttonText="Add Task" />
        <div className="overflow-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-md overflow-hidden mt-5">
            <thead className="bg-linear-to-r from-indigo-900 to-purple-500 text-white">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold tracking-wide">
                  ID
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold tracking-wide">
                  Task
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold tracking-wide">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700 text-sm">
              {tasks
                ? tasks.map((task, index) => (
                    <tr
                      key={task.id}
                      className={`border-b last:border-none transition duration-200 hover:bg-indigo-50 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-3 font-medium text-indigo-600">
                        {task.id}
                      </td>
                      <td className="px-6 py-3">{task.title}</td>
                      <td className="px-6 py-3">
                        <button className="p-2 rounded-md mx-1 bg-blue-300 text-gray-700">
                          Edit
                        </button>
                        <button className="p-2 rounded-md mx-1 bg-green-500 text-gray-800">
                          Complete
                        </button>
                        <button className="p-2 rounded-md mx-1 bg-red-400 text-gray-900">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : 'No Task Added'}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
