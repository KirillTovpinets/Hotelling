import jsonApi from '@/app/api/jsonApi';
import { CreateResidenceDTO, Residence, Visitor } from '@/interfaces';
import { nextApi } from './api';

export async function postResident(data: Visitor) {
  return await jsonApi.post('visitors', data);
}

export async function postResidence(data: Residence) {
  return await jsonApi.post('residence', data);
}

export async function createNewResidence(residence: CreateResidenceDTO) {
  return await nextApi.post('residence', residence);
}

export async function getResident(id: number): Promise<Visitor> {
  const data = await nextApi.get('resident/' + id);
  return data;
}

async function updateVisitor({ id, ...data }: Visitor) {
  await nextApi.put('resident/' + id, data);
  return data;
}

const residenceApi = {
  postResidence,
  postResident,
  createNewResidence,
  getResident,
  updateVisitor,
};

export default residenceApi;
