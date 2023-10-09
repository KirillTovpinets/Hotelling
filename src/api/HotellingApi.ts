import jsonApi from '@/app/api/jsonApi';
import { BedResidence } from '@/interfaces';
import { cache } from 'react';

export const revalidate = 10;
export const BEDS_CACHE_TAG = 'beds';
export const getBedCollection = cache(
  async (floor: string): Promise<BedResidence[]> => {
    const response = await jsonApi.get(
      `beds?floor=${parseInt(floor)}&_embed=residence`,
      [BEDS_CACHE_TAG]
    );
    return response;
  }
);
