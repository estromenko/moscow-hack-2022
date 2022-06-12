import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Settings: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };
  return (
    <Box padding="20px">
      <Box display="flex" justifyContent="center" boxSizing="border-box">
        <Typography color="primary.main" fontSize="32px" fontWeight="700">
          Настройка профиля
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="10px" marginTop="10px">
        <Box
          bgcolor="primary.main"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          padding="15px"
          onClick={() => handleNavigate('/personal')}
        >
          <Typography fontWeight="400" fontSize="22px">
            Личные данные
          </Typography>
        </Box>
        <Box
          bgcolor="primary.main"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          padding="15px"
          onClick={() => handleNavigate('/events')}
        >
          <Typography fontWeight="400" fontSize="22px">
            История мероприятий
          </Typography>
        </Box>
        <Box
          bgcolor="primary.main"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          padding="15px"
          onClick={() => handleNavigate('/personal')}
        >
          <Typography fontWeight="400" fontSize="22px">
            Полученнные награды
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          width="320px"
          height="50px"
          bgcolor="primary.contrastText"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="30px"
          borderRadius="5px"
          onClick={() => handleNavigate('/organisation-settings')}
        >
          <Typography color="primary.main">Стать организатором</Typography>
        </Box>
      </Box>
    </Box>
  );
};

Settings.displayName = 'Settings';

export default Settings;
