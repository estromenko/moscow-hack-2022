import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ListViewBox } from '../../shared/ui/listViewBox';

import camera from '../../assets/camera.png';
import { getGifts, IGiftsResponse } from '../../shared/api/gifts';

const Gifts: FC = () => {
  const [gifts, setGifts] = useState<IGiftsResponse[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await getGifts();

      setGifts(data);
    };

    load();
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap="10px" padding="20px" boxSizing="border-box" alignItems="center">
      <Box display="flex" flexDirection="row" justifyContent="space-around" margin="20px 0px" width="100%">
        <Typography color="primary.main" variant="h4" textAlign="center" fontWeight="bold">
          Призы
        </Typography>
        <Box bgcolor="primary.main" textAlign="center" borderRadius="5px" padding="3px 50px">
          <Typography fontWeight="bold">120 часов</Typography>
          Баланс
        </Box>
        <Box bgcolor="primary.main" textAlign="center" borderRadius="5px" padding="10px">
          <img src={camera} alt="camera" />
        </Box>
      </Box>

      {gifts.map((el) => (
        <ListViewBox image={camera} hours={`${100}ч`} key={el.id}>
          <Box>
            <Typography variant="h5">{el.name}</Typography>
            <Typography>{el.description}</Typography>
          </Box>
        </ListViewBox>
      ))}
    </Box>
  );
};

Gifts.displayName = 'Gifts';

export default Gifts;
