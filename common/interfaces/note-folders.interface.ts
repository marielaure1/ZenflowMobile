interface NoteFoldersProps{
    _id?: string;
    title: string;
    description?: string;
    parentId?: string;
    ownerId: string;
    background: string;
    foreground: string;
    order: number;
}

export default NoteFoldersProps;