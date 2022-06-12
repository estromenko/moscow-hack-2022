import React, { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';

import rabbit from '../../assets/404rabbit.png';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box marginTop="20px">
        <img src={rabbit} alt="rabbit" />
      </Box>
      <Typography color="primary.main" fontWeight="bold" variant="h5" margin="20px 0px">
        Страница не найдена
      </Typography>
      <Button onClick={onClick} variant="contained" size="large">
        <Typography>Вернуться назад</Typography>
      </Button>
    </Box>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
