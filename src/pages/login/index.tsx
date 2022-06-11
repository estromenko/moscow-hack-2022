import React, { FC, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ILoginBody } from '../../shared/api';

import { loginThunk } from '../../redux/thunks/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import AuthContainer from '../../shared/ui/authContainer';
import Form from '../../shared/ui/form';

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

  useEffect(() => {
    if (isAuth && accessToken) {
      navigate('/');
    }
  }, [isLoading]);

  return (
    <AuthContainer>
      <Form>
        <TextField type="email" label="Email" variant="outlined" {...register('email')} />
        <TextField type="password" label="Пароль" variant="outlined" {...register('password')} />
        <Button onClick={handleLogin}>Зарегестрироваться</Button>
      </Form>
    </AuthContainer>
  );
};

Login.displayName = 'Login';

export default Login;
