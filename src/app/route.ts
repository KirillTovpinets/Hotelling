import { redirect } from 'next/navigation';
import { userService } from './services/userService';

export async function GET() {
  if (userService.isAuthenticated) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
