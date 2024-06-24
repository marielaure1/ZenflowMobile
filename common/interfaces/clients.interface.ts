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
    lastContactDate?: Date;
    marketSegment?: string;
    needs?: string;
    leadSource?: string;
    companySize?: string;
    estimatedBudget?: number;
    customFieldValues?: Array<Object>;
}

export default ClientsProps;