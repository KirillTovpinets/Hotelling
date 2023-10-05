import { Alert } from '@mui/material';
import { redirect } from 'next/navigation';
import Button from '../layout/ui/Button';
import FormInput from '../layout/ui/FormInput';
import { userService } from '../services/userService';

export const LoginForm = () => {
  let error = '';
  const handleLogin = async (data: FormData) => {
    'use server';
    await userService.login(data);

    if (userService.isAuthenticated) {
      redirect('/dashboard');
    } else {
      error = 'Invalid credentials';
    }
  };
  return (
    <form className="space-y-6" action={handleLogin}>
      {error && <Alert severity="error">{error}</Alert>}
      <FormInput label="Логин" name="login" required />
      <FormInput label="Пароль" name="password" type="password" required />
      <Button type="submit">Войти</Button>
    </form>
  );
};
