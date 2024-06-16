import ApiAxios from '@api/api.axios';
import PlansProps from '@interfaces/plans.interface';

class PlansAxios extends ApiAxios<PlansProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }
}

export default PlansAxios;
