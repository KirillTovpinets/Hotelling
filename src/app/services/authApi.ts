import { nextApi } from '@/api/api';
import { LoginCredentials, LoginResponse } from '@/interfaces';

const login = async ({
  login,
  password,
}: LoginCredentials): Promise<LoginResponse | null> => {
  const response = await nextApi.post('/auth', { login, password });

  if (!response) {
    return null;
  }
  return response;
};

const authApi = {
  login,
};

export default authApi;
