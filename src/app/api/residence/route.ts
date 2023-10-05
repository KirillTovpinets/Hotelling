import { BEDS_CACHE_TAG } from '@/api/HotellingApi';
import { postResidence, postResident } from '@/api/ResidenceApi';
import { CreateResidenceDTO } from '@/interfaces';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const data = (await req.json()) as CreateResidenceDTO;

  const resident = await postResident(data.visitor);

  const newResidence = await postResidence({
    ...data.residence,
    visitorId: resident.id,
  });

  revalidateTag(BEDS_CACHE_TAG);

  return Response.json({ residence: newResidence });
}
