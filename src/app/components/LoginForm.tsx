'use client';
import { LoginCredentials } from '@/interfaces';
import { Alert } from '@mui/material';
import { Formik } from 'formik';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../layout/ui/Button';
import FormInput from '../layout/ui/FormInput';
import { userService } from '../services/userService';

export const LoginForm = () => {
  const [error, setError] = useState('');
  const redirectUser = () => {
    if (userService.isAuthenticated) {
      redirect('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };
  useEffect(() => {
    userService.loginWithCookie();
    redirectUser();
  }, []);
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      onSubmit={async (values: LoginCredentials, { setSubmitting }) => {
        await userService.login(values);

        setSubmitting(false);
        redirectUser();
      }}
    >
      {(formik) => (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {error && <Alert severity="error">{error}</Alert>}
          <FormInput label="Логин" {...formik.getFieldProps('login')} />
          <FormInput
            label="Пароль"
            type="password"
            {...formik.getFieldProps('password')}
          />
          <Button type="submit">Войти</Button>
        </form>
      )}
    </Formik>
  );
};
