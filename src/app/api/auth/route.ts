import { hashPassword, isTheSame } from '@/utils/hashing';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import jsonApi from '../jsonApi';
export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<Response> {
  const data = await req.json();

  if (!data) {
    return Response.json(null, { status: 400 });
  }

  const { login, password } = data;
  hashPassword(password).then((value) => console.log(value));
  try {
    const data = await jsonApi.get('users?login=' + login);

    if (data.length === 0) {
      throw new Error('Incorrect credentials');
    }
    const user = data[0];

    const isPasswordValid = await isTheSame(password, user.password as string);

    if (!isPasswordValid) {
      throw new Error('Incorrect credentials');
    }

    delete user.password;
    const token = jwt.sign(user, process.env.MY_SECRET_TOKEN as string);

    const store = cookies();

    store.set('token', token);

    return Response.json({
      token,
    });
  } catch (e) {
    console.log(e);
    return Response.json({ token: null });
  }
}
