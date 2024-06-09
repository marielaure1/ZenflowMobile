import ApiAxios from '@api/api.axios';
import ProjectsProps from '@interfaces/projects.interface';

class ProjectsAxios extends ApiAxios<ProjectsProps> {
  constructor(dataInterface: ProjectsProps, path: string, token?: string) {
    super(dataInterface, path, token);
  }
}

export default ProjectsAxios;
