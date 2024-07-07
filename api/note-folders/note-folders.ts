import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import NoteFolderAxios from '@api/note-folders/note-folders.axios';
import NoteFoldersProps from '@interfaces/note-folders.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class NoteFoldersReactQuery extends ApiReactQuery<NoteFoldersProps> {
  protected apiAxios: NoteFolderAxios;

  constructor(token?: string) {
    const path = 'note-folders';
    const invalidateQueryFiltersNoteFolders: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersNoteFolders, path, token);
    this.apiAxios = new NoteFolderAxios(path, token);
  }
}

export default NoteFoldersReactQuery;
