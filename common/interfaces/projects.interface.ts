import { array } from './../../node_modules/@types/prop-types/index.d';
interface ProjectsProps{
    name: string;
    description: string;
    ownerId: string;
    priority?: string;
    clientId?: string;
    tasks?: string[]
    categoryIds?: string[];
}

export default ProjectsProps;