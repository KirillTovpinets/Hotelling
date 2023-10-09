import jsonApi from '../jsonApi';

export async function GET(floor: number) {
  const response = await jsonApi.get('beds?floor=' + floor);

  const data = response.data;

  return Response.json({ data });
}
