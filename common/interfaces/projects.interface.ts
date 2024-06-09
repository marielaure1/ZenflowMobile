import { array } from './../../node_modules/@types/prop-types/index.d';
interface ProjectsProps{
    name: string;
    description: string;
    ownerId: string;
    clientId?: string;
    tasks?: string[]
    categoryIds?: string[];
    customFields?: Array<T>;
}

export default ProjectsProps;