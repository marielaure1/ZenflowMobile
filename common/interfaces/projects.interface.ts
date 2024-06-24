import Priority from '@enums/priority.enum';
import StatusEnum from '@enums/status.enum';

interface Project {
  name: string;
  description: string;
  picture?: string;
  status?: StatusEnum;
  priority?: Priority;
  ownerId: string;
  teamId?: string;
  milestoneIds?: string[];
  noteIds?: string[];
  clientId?: string;
  taskCategoriesIds?: string[];
  categoryIds?: string[];
  customFieldValues?: Array<Object>;
  createdAt?: Date;
  updatedAt?: Date;
}

export default Project;
