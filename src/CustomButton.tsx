type buttonProps = {
  onAddTask: () => void;
  buttonText: string;
};

export default function CustomButton({ onAddTask, buttonText }: buttonProps) {
  return (
    <>
      <button onClick={onAddTask}>{buttonText}</button>
    </>
  );
}
