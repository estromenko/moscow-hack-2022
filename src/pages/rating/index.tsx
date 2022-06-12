import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import crown from '../../assets/crown.png';
import { ListViewBox } from '../../shared/ui/listViewBox';

const mock = [
  {
    id: 1,
    image: crown,
    username: 'testuser1',
    hours: 150,
  },
  {
    id: 2,
    image: crown,
    username: 'testuser2',
    hours: 130,
  },
  {
    id: 3,
    image: crown,
    username: 'testuser3',
    hours: 120,
  },
  {
    id: 4,
    image: crown,
    username: 'testuser4',
    hours: 110,
  },
  {
    id: 5,
    image: crown,
    username: 'testuser5',
    hours: 100,
  },
  {
    id: 6,
    image: crown,
    username: 'testuser6',
    hours: 90,
  },
];

const Rating: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap="10px" padding="20px" boxSizing="border-box" textAlign="center">
      <Typography color="primary.main" fontWeight="bold" variant="h5">
        Рейтинг пользователей
      </Typography>

      {mock.map((el) => (
        <ListViewBox image={el.image} hours={`${el.hours}ч`} key={el.id}>
          {el.username}
        </ListViewBox>
      ))}
    </Box>
  );
};

Rating.displayName = 'Rating';

export default Rating;
