import ApiAxios from '@api/api.axios';
import CustomFieldsProps from '@interfaces/task-categories.interface';

class CustomsFieldsAxios extends ApiAxios<CustomFieldsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }
}

export default CustomsFieldsAxios;
