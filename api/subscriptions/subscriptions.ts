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
}

export default SubscriptionsReactQuery;
