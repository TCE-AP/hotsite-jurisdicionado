import useSWR from 'swr';
import api from '../services/api';

export function useApi<Data = any>(url: string) {
  const { data, error } = useSWR(url, async (url) => {
    const { data } = await api.get(url);
    return data;
  });

  return { data, error };
}
