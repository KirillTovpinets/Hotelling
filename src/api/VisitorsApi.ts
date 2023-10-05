import { Visitor } from '@/interfaces';
import { jsonApi } from './api';

export async function fetchAllResidents(
  page: number,
  limit: number = 25,
  sort: string = 'name'
): Promise<Visitor[]> {
  return await jsonApi.get(
    `visitors?_page=${page}&_limit=${limit}&_sort=${sort}`
  );
}
