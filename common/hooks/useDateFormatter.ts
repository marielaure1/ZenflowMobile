import { useMemo } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

type DateFormat =
  | 'dd MMMM, yyyy'
  | 'dd MMMM yyyy'
  | 'dd/MM/yyyy'
  | 'EEEE dd MMMM yyyy'
  | 'dd MMMM, yyyy à HH:mm'
  | 'HH:mm'
  | 'HH:mm:ss';

const useDateFormatter = (date: Date | string, dateFormat: DateFormat): string => {
  const formattedDate = useMemo(() => {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    return format(parsedDate, dateFormat, { locale: fr });
  }, [date, dateFormat]);

  return formattedDate;
};

export default useDateFormatter;
