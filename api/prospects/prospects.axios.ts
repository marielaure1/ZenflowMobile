import ApiAxios from '@api/api.axios';
import ProspectsProps from '@interfaces/prospects.interface';

class ProspectAxios extends ApiAxios<ProspectsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }
}

export default ProspectAxios;
