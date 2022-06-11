import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';

import { useAppDispatch } from '../../redux/hooks';
import { regThunk } from '../../redux/thunks/auth';

import Form from '../../shared/ui/form';
import AuthContainer from '../../shared/ui/authContainer';
import { IRegisterBody } from '../../shared/api';

import './style.scss';
import Input from '../../shared/ui/input';
import AuthButton from '../../shared/ui/authButton';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const { register, getValues } = useForm<IRegisterBody>();

  const handleRegister = () => {
    const values = getValues();

    dispatch(regThunk(values));
  };

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
      </Form>
    </AuthContainer>
  );
};

Register.displayName = 'Register';

export default Register;
