interface NotesProps{
    _id?: string;
    title: string;
    content: string;
    backgroundColor: string;
    color: string;
    ownerId: string;
    background: string;
    foreground: string;
    folderId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default NotesProps;