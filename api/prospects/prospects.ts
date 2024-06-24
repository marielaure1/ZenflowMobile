import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ProspectAxios from '@api/prospects/prospects.axios';
import ProspectsProps from '@interfaces/prospects.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ProspectsReactQuery extends ApiReactQuery<ProspectsProps> {
  protected apiAxios: ProspectAxios;

  constructor(token?: string) {
    const path = 'prospects';
    const invalidateQueryFiltersProspects: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersProspects, path, token);
    this.apiAxios = new ProspectAxios(path, token);
  }

}

export default ProspectsReactQuery;
