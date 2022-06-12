import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { UserInfoBox } from '../../shared/ui/userInfoBox';

const Personal: FC = () => {
  return (
    <Box>
      <Typography color="primary.main" variant="h4" fontWeight="bold" margin="20px">
        Личные данные
      </Typography>
      <UserInfoBox name="Фамилия" value="test" />
      <UserInfoBox name="Имя" value="test" />
      <UserInfoBox name="Отчество" value="test" />
      <UserInfoBox name="Номер телефона" value="88888888888" />
    </Box>
  );
};

Personal.displayName = 'Personal';

export default Personal;
