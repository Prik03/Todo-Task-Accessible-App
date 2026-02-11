import { useState } from 'react';
import type { Task } from './types';
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';
import { ToastContainer, toast } from 'react-toastify';
import EditModal from './EditModal';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<number | null>(null);
  const [updatedTask, setUpdatedTask] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const onAddTask = (trimTask: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: trimTask, completionStatus: false },
    ]);
    toast('Task Added');
  };

  const onEditTask = (tasks: Task) => {
    setEditTask(tasks.id);
  };

  const onSaveTask = () => {
    if (!updatedTask.trim()) return;

    setTasks(
      tasks.map((task) =>
        task.id === editTask ? { ...task, title: updatedTask } : task,
      ),
    );
    toast('Task Updated');
    setEditTask(null);
    setUpdatedTask('');
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="App mx-auto w-4/5">
        <h1 className="text-3xl place-self-center">Todo Accessible App</h1>
        <TaskInput onAddTask={onAddTask} buttonText="Add Task" />
        <TaskTable
          tasks={tasks}
          onEditTask={onEditTask}
          editTask={editTask}
          onSaveTask={onSaveTask}
          setUpdatedTask={setUpdatedTask}
        />
        <ToastContainer />
        <EditModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
        <button onClick={openModal}>open modal</button>
      </div>
    </>
  );
}

export default App;
