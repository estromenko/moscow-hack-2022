import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

import { useAppDispatch } from '../../redux/hooks';
import { regThunk } from '../../redux/thunks/auth';

import Form from '../../shared/ui/form';
import AuthContainer from '../../shared/ui/authContainer';
import { IRegisterBody } from '../../shared/api';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const { register, getValues } = useForm<IRegisterBody>();

  const handleRegister = () => {
    const values = getValues();

    dispatch(regThunk(values));
  };

  return (
    <AuthContainer>
      <Form>
        <TextField type="text" label="Имя" variant="outlined" {...register('name')} />
        <TextField type="email" label="Email" variant="outlined" {...register('email')} />
        <TextField type="password" label="Пароль" variant="outlined" {...register('password')} />
        <Button onClick={handleRegister}>Зарегестрироваться</Button>
      </Form>
    </AuthContainer>
  );
};

Register.displayName = 'Register';

export default Register;
