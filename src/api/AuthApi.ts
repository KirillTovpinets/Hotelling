import { User } from '@/interfaces';
import { isTheSame } from '@/utils/hashing';
import { jsonApi } from './api';
export const login = async (credentials: FormData): Promise<User | null> => {
  try {
    const data = await jsonApi.get('users?login=' + credentials.get('login'));

    if (data.length === 0) {
      throw new Error('Incorrect credentials');
    }
    const user = data[0];

    const isPasswordValid = await isTheSame(
      credentials.get('password') as string,
      user.password as string
    );

    if (!isPasswordValid) {
      throw new Error('Incorrect credentials');
    }
    return data[0];
  } catch (e) {
    return null;
  }
};
