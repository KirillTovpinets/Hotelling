import { LoginCredentials, User } from '@/interfaces';
import authApi from './authApi';

class UserService {
  private token = '';
  private cookieRegEx = new RegExp('token=([^;]+)');
  get isAuthenticated() {
    return !!this.token;
  }

  get user(): User {
    return JSON.parse(
      Buffer.from(this.token.split('.')[1], 'base64').toString('utf-8')
    );
  }

  public async loginWithCookie() {
    debugger;
    if (!document.cookie) {
      return null;
    }

    const regExpMatch = document.cookie.match(this.cookieRegEx);

    if (!regExpMatch) {
      return null;
    }

    this.token = regExpMatch[1];
  }

  public async login(data: LoginCredentials) {
    const result = await authApi.login(data);

    if (!result || result.token === null) {
      return;
    }
    this.token = result.token;
  }

  public async logout() {
    this.token = '';
  }
}

export const userService = new UserService();
