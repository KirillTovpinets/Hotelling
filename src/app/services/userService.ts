import { login } from '@/api/AuthApi';
import { User } from '@/interfaces';
import { cookies } from 'next/headers';

class UserService {
  private user: User | null;

  private localStorageKey = 'User';

  get isAuthenticated() {
    return !!this.user;
  }

  constructor() {
    this.user = null;
  }

  public async login(data: FormData) {
    const storage = cookies();
    const localUser = storage.get(this.localStorageKey);

    if (localUser) {
      this.user = JSON.parse(localUser.value) as User;
      return;
    }

    const result = await login(data);

    console.log(result);
    if (!result) {
      console.log('invalid credentials');
      return;
    }

    this.user = result;
    storage.set(this.localStorageKey, JSON.stringify(result));
  }

  public async logout() {
    this.user = null;
  }
}

export const userService = new UserService();
