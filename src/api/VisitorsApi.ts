import jsonApi from '@/app/api/jsonApi';
import { Visitor } from '@/interfaces';

export async function fetchAllResidents(
  q: string,
  page: number,
  limit: number = 25,
  sort: string = 'name'
): Promise<Visitor[]> {
  return await jsonApi.get(
    `visitors?q=${q}&_page=${page}&_limit=${limit}&_sort=${sort}`
  );
}
