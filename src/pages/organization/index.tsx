import React, { FC, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { TaskCreate } from '../../features/tasks';

const Organization: FC = () => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  const handleOpen = () => {
    setIsActiveModal(true);
  };

  const handleClose = () => {
    setIsActiveModal(false);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" padding="0 6px 0 30px" boxSizing="border-box">
        <Typography color="primary.main" fontSize="30px" fontWeight="700">
          Организатор
        </Typography>
      </Box>
      <Button onClick={handleOpen}>Создать задачу</Button>
      <TaskCreate isOpen={isActiveModal} handleClose={handleClose} />
    </>
  );
};

Organization.displayName = 'Organization';

export default Organization;
