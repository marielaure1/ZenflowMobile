interface CustomFieldProps{
    name: string;
    type: string;
    options?: Array<Object>;
    position?: number;
    schema: string;
    schemaIds?: Array<string>;
}

export default CustomFieldProps;