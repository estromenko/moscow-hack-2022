import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import { IRegisterBody } from '../../shared/api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { regThunk } from '../../redux/thunks/auth';

import './style.scss';
import { AuthButton, AuthContainer, Form, Input } from '../../shared/ui';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, accessToken } = useAppSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { register, getValues } = useForm<IRegisterBody>();

  const handleRegister = () => {
    const values = getValues();

    dispatch(regThunk(values));
    setIsAuth(true);
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (isAuth && accessToken) {
      navigate('/home');
    }
  }, [isLoading]);

  return (
    <AuthContainer>
      <Typography color="primary" variant="h4">
        Регистрация
      </Typography>
      <Form>
        <Input margin="normal" color="primary" type="text" label="Имя" variant="outlined" {...register('name')} />
        <Input margin="normal" color="primary" type="email" label="Email" variant="outlined" {...register('email')} />
        <Input
          margin="normal"
          color="primary"
          type="password"
          label="Пароль"
          variant="outlined"
          {...register('password')}
        />
        <AuthButton className="button" color="primary" variant="contained" onClick={handleRegister}>
          Зарегистрироваться
        </AuthButton>
        <Button onClick={handleGoToLogin}>Войти</Button>
      </Form>
    </AuthContainer>
  );
};

Register.displayName = 'Register';

export default Register;
