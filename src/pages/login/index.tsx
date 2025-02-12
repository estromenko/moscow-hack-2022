import React, { FC, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ILoginBody } from '../../shared/api';
import { loginThunk } from '../../redux/thunks/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AuthContainer, Form, Input } from '../../shared/ui';

const Login: FC = () => {
  const { accessToken, isLoading } = useAppSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, getValues } = useForm<ILoginBody>();

  const handleLogin = () => {
    const values = getValues();
    dispatch(loginThunk(values));
    setIsAuth(true);
  };

  const handleGoToRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (isAuth && accessToken) {
      navigate('/home');
    }
  }, [isLoading]);

  return (
    <AuthContainer>
      <Typography color="primary" variant="h4">
        Вход
      </Typography>
      <Form>
        <Input type="email" label="Email" variant="outlined" {...register('email')} />
        <Input type="password" label="Пароль" variant="outlined" {...register('password')} />
        <Button variant="contained" onClick={handleLogin}>
          Войти
        </Button>
      </Form>
      <Button onClick={handleGoToRegister}>Зарегистрироваться</Button>
    </AuthContainer>
  );
};

Login.displayName = 'Login';

export default Login;
