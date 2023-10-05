import { redirect } from 'next/navigation';

export async function GET() {
  redirect('plan/1');
}
