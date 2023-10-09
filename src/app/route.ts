import { redirect } from 'next/navigation';
import { userService } from './services/userService';

export async function GET() {
  console.log('GET');
  if (userService.isAuthenticated) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
