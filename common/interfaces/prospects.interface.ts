interface ProspectsProps{
    society?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    status: string;
    ownerId: string;
    lastContactDate: string;
    marketSegment: string;
    needs: string;
    leadSource: string;
    companySize: string;
    estimatedBudget: string;
    customFields?: Array<Object>;
}

export default ProspectsProps;