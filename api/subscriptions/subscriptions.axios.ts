import ApiAxios from '@api/api.axios';
import SubscriptionsProps from '@interfaces/subscriptions.interface';

class SubscriptionsAxios extends ApiAxios<SubscriptionsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findMySubscription() {
    try {
      const response = await this.apiClient.get(`/${this.path}/me`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async cancelSubscription(subscriptionId: string) {
    try {
      const response = await this.apiClient.get(`/${this.path}/cancel-subscription/${subscriptionId}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default SubscriptionsAxios;
