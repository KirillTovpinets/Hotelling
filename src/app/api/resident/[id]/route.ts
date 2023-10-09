import { NextRequest } from 'next/server';
import jsonApi from '../../jsonApi';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;

  const visitor = await jsonApi.get(`visitors/${id}`);

  return Response.json(visitor);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const data = await req.json();

  const res = await jsonApi.put(`visitors/${params.id}`, data);

  return Response.json(res);
}
