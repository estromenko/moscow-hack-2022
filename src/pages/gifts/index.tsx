import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ListViewBox } from '../../shared/ui/listViewBox';

import cup from '../../assets/tinyCup.png';
import camera from '../../assets/camera.png';

const mock = [
  {
    id: 1,
    image: cup,
    data: {
      title: 'title1',
      body: 'data1',
    },
    hours: 150,
  },
  {
    id: 2,
    image: cup,
    data: {
      title: 'title2',
      body: 'data2',
    },
    hours: 150,
  },
  {
    id: 3,
    image: cup,
    data: {
      title: 'title3',
      body: 'data3',
    },
    hours: 150,
  },
  {
    id: 4,
    image: cup,
    data: {
      title: 'title4',
      body: 'data4',
    },
    hours: 150,
  },
  {
    id: 5,
    image: cup,
    data: {
      title: 'title5',
      body: 'data5',
    },
    hours: 150,
  },
];

const Gifts: FC = () => {
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

      {mock.map((el) => (
        <ListViewBox image={el.image} hours={`${el.hours}ч`} key={el.id}>
          <Box>
            <Typography variant="h5">{el.data.title}</Typography>
            <Typography>{el.data.body}</Typography>
          </Box>
        </ListViewBox>
      ))}
    </Box>
  );
};

Gifts.displayName = 'Gifts';

export default Gifts;
