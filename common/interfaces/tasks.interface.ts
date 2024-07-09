
interface CustomField {
  key: string;
  value: any; // Adaptez selon la définition de votre CustomFieldSchema
}

interface TimeEntry {
  start: Date;
  end: Date;
  notes: string;
}

interface TaskFlag {
  title: string;
  color: string;
}

interface TasksProps {
  _id?: string;
  title: string;
  description: string;
  projectId?: string; 
  assigneeId?: string;
  dueDate?: Date | string;
  priority?: string;
  completed?: boolean; 
  flags?: TaskFlag[];
  timeEntries?: TimeEntry[]; 
  customFields?: Map<string, CustomField>; 
  parentTaskId?: string; 
  subTasks?: string[];
  taskCategoryId?: string; 
  order: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default TasksProps;
