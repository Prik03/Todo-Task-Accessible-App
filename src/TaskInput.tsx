type TaskInputProps = {
  taskName?: string;
  setTask: (taskName: string) => void;
  onInputKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function TaskInput({
  taskName,
  setTask,
  onInputKeydown,
}: TaskInputProps) {
  return (
    <>
      <label htmlFor="new-task-input">New Task</label>
      <input
        value={taskName}
        id="new-task-input"
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={onInputKeydown}
      />
    </>
  );
}
