import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import PlanAxios from '@api/plans/plans.axios';
import PlansProps from '@interfaces/plans.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class PlansReactQuery extends ApiReactQuery<PlansProps> {
  protected apiAxios: PlanAxios;

  constructor(token?: string) {
    const path = 'plans';
    const invalidateQueryFiltersPlans: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersPlans, path, token);
    this.apiAxios = new PlanAxios(path, token);
  }
}

export default PlansReactQuery;
