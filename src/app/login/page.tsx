import { LoginForm } from '../components/LoginForm';

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col sm:max-w-sm sm:w-full">
        <h1 className="text-center mb-3">Вход</h1>
        <LoginForm />
      </div>
    </main>
  );
}
