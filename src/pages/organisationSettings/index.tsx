import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TaskCreate } from '../../features/tasks';
import { GiftCreate } from '../../features/gifts';

const OrganisationSettings: FC = () => {
  const [isActiveCreateTask, setIsActiveCreateTask] = useState<boolean>(false);
  const [isActiveCreateGift, setIsActiveCreateGift] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };
  return (
    <>
      <Box padding="20px">
        <Box display="flex" justifyContent="center" boxSizing="border-box">
          <Typography color="primary.main" fontSize="32px" fontWeight="700">
            Настройка организации
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
            onClick={() => setIsActiveCreateTask(true)}
          >
            <Typography fontWeight="400" fontSize="22px">
              Создать мероприятие
            </Typography>
          </Box>
          <Box
            bgcolor="primary.main"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            padding="15px"
            onClick={() => handleNavigate('/organization')}
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
            onClick={() => setIsActiveCreateGift(true)}
          >
            <Typography fontWeight="400" fontSize="22px">
              Создать награду
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
              Полученные награды
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
            onClick={() => handleNavigate('/settings')}
          >
            <Typography color="primary.main">Назад</Typography>
          </Box>
        </Box>
      </Box>
      <TaskCreate isOpen={isActiveCreateTask} handleClose={() => setIsActiveCreateTask(false)} />
      <GiftCreate isOpen={isActiveCreateGift} handleClose={() => setIsActiveCreateGift(false)} />
    </>
  );
};

OrganisationSettings.displayName = 'OrganisationSettings';

export default OrganisationSettings;
