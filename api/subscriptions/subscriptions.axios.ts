import ApiAxios from '@api/api.axios';
import SubscriptionsProps from '@interfaces/subscriptions.interface';

class SubscriptionsAxios extends ApiAxios<SubscriptionsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }
}

export default SubscriptionsAxios;
