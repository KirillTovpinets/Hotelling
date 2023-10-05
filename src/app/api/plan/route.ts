import api from '@/api/api';

export async function GET(floor: number) {
  const response = await api.get('beds', { params: { floor } });

  const data = response.data;

  return Response.json({ data });
}
