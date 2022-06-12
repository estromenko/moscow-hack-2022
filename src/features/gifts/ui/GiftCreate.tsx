import React, { FC } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { createGift } from '../../../shared/api/gifts';

interface IGiftCreate {
  isOpen: boolean;
  handleClose: () => void;
}

interface IFormCollection {
  name: string;
  description: string;
  manaCost: number;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '500px',
};

const GiftCreate: FC<IGiftCreate> = ({ isOpen, handleClose }) => {
  const { register, getValues } = useForm<IFormCollection>();

  const handleSave = () => {
    const values = getValues();
    createGift(values);

    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style} flexDirection="column">
        <Box display="flex" justifyContent="flex-start" flex="1" padding="8px">
          <Typography>Создать награду</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          padding="8px"
          flex="3"
          overflow="scroll"
          maxHeight="350px"
          gap="10px"
        >
          <TextField placeholder="Имя" type="string" {...register('name')} />
          <TextField placeholder="Опиcание" type="string" {...register('description')} />
          <TextField placeholder="Стоимость" type="number" {...register('manaCost')} />
        </Box>
        <Box flex="1" display="flex" justifyContent="space-between" padding="8px">
          <Button color="secondary" variant="contained" onClick={handleSave}>
            Сохранить
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Закрыть
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

GiftCreate.displayName = 'GiftCreate';

export default GiftCreate;
