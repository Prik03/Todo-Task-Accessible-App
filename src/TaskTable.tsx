import type { TableData } from './types';
import { useRef, useEffect } from 'react';

function TaskTable({
  tasks,
  onEditTask,
  editTask,
  onSaveTask,
  setUpdatedTask,
}: TableData) {
  const editInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (editTask !== null) {
      editInputRef.current?.focus();
    }
  }, [editTask]);
  return (
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
                  <td className="px-6 py-3">
                    {editTask === task.id ? (
                      <input
                        className="border-2 rounded-md p-1"
                        placeholder={task.title}
                        onChange={(e) => setUpdatedTask(e.target.value)}
                        ref={editInputRef}
                      />
                    ) : (
                      task.title
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {editTask === task.id ? (
                      <button
                        className="p-2 rounded-md mx-1 bg-blue-300 text-gray-700"
                        onClick={onSaveTask}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="p-2 rounded-md mx-1 bg-blue-300 text-gray-700"
                        onClick={() => onEditTask(task)}
                      >
                        Edit
                      </button>
                    )}

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
  );
}

export default TaskTable;
