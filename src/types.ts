type priorityLevel = 'low' | 'medium' | 'high';

export type Task = {
  id: number;
  title: string;
  completionStatus: boolean;
  priorityLevel?: priorityLevel;
};

export type ModalProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
};

export type TableData = {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  editTask: number | null;
  onSaveTask: () => void;
  setUpdatedTask: React.Dispatch<React.SetStateAction<string>>;
};
