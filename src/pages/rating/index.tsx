import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { RatingBox } from '../../features/rating/ui';

import crown from '../../assets/crown.png';

const mock = [
  {
    image: crown,
    username: 'testuser1',
    hours: 150,
  },
  {
    image: crown,
    username: 'testuser2',
    hours: 130,
  },
  {
    image: crown,
    username: 'testuser3',
    hours: 120,
  },
  {
    image: crown,
    username: 'testuser4',
    hours: 110,
  },
  {
    image: crown,
    username: 'testuser5',
    hours: 100,
  },
  {
    image: crown,
    username: 'testuser6',
    hours: 90,
  },
];

const Rating: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap="10px" padding="0 6px 0 30px" boxSizing="border-box">
      <Typography color="primary.main" variant="h4">
        Рейтинг пользователей
      </Typography>

      {mock.map((el) => (
        <RatingBox image={el.image} username={el.username} hours={`${el.hours}ч`} />
      ))}
    </Box>
  );
};

Rating.displayName = 'Rating';

export default Rating;
