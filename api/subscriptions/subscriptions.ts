import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import SubscriptionAxios from '@api/subscriptions/subscriptions.axios';
import SubscriptionsProps from '@interfaces/subscriptions.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class SubscriptionsReactQuery extends ApiReactQuery<SubscriptionsProps> {
  protected apiAxios: SubscriptionAxios;

  constructor(token?: string) {
    const path = 'subscriptions';
    const invalidateQueryFiltersSubscriptions: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersSubscriptions, path, token);
    this.apiAxios = new SubscriptionAxios(path, token);
  }

  async findMySubscription() {
    const response = await this.apiAxios.findMySubscription();
    queryClient.setQueryData(["subscriptions"], response);
    return response;
  }

  async cancelSubscription(subscriptionId: string) {
    const response = await this.apiAxios.cancelSubscription(subscriptionId);
    queryClient.setQueryData(["subscriptions"], response);
    return response;
  }
}

export default SubscriptionsReactQuery;
