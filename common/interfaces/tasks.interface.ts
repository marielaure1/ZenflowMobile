interface TasksProps{
   title: string;
   description: string;
   assigneeId?: string;
   status?: string;
   dueDate?: Date;
   priority?: string;
   comments?: [];
   flags?: [];
   timeEntries?: [];
   parentTaskId?: string;
   subTasks?: string;
   taskCategoriesId?: string;
   order?: number;
}

export default TasksProps;