import { CreateResidenceDTO, Residence, Visitor } from '@/interfaces';
import { jsonApi, nextApi } from './api';

export async function postResident(data: Visitor) {
  return await jsonApi.post('visitors', data);
}

export async function postResidence(data: Residence) {
  return await jsonApi.post('residence', data);
}

export async function createNewResidence(residence: CreateResidenceDTO) {
  return await nextApi.post('residence', residence);
}
