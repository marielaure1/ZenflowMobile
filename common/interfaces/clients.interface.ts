interface ClientsProps{
    _id?: string;
    society?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    status: string;
    ownerId: string;
    customFields?: Array<Object>;
}

export default ClientsProps;