import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import NoteAxios from '@api/notes/notes.axios';
import NotesProps from '@interfaces/notes.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class NotesReactQuery extends ApiReactQuery<NotesProps> {
  protected apiAxios: NoteAxios;

  constructor(token?: string) {
    const path = 'notes';
    const invalidateQueryFiltersNotes: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersNotes, path, token);
    this.apiAxios = new NoteAxios(path, token);
  }
}

export default NotesReactQuery;
