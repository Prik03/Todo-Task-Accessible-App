type priorityLevel = 'low' | 'medium' | 'high';

export type Task = {
  id: number;
  title: string;
  completionStatus: boolean;
  priorityLevel?: priorityLevel;
};
