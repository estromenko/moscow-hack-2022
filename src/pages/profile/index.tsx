import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';

import rabbit from '../../assets/profileRabbit.png';
import star from '../../assets/star.png';
import profileTasks from '../../assets/profileTasks.png';
import gift from '../../assets/gift.png';

const mock = [
  {
    id: 1,
    title: 'test title1',
    body: 'test body1',
  },
  {
    id: 2,
    title: 'test title2',
    body: 'test body2',
  },
  {
    id: 3,
    title: 'test title3',
    body: 'test body3',
  },
];

const Profile: FC = () => {
  const { email } = useAppSelector((state) => state.auth);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography color="primary.main" fontWeight="bold" variant="h4" textAlign="center">
        Привет, {email}!
      </Typography>
      <Box display="flex" flexDirection="row" marginTop="50px" width="90%">
        <img src={rabbit} alt="rabbit" />
        <Box textAlign="center" color="primary.main" marginLeft="20px">
          <Typography color="primary.main" fontWeight="bold" variant="h4">
            Твой рейтинг
          </Typography>
          <Typography>340/1000 часов</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap="10px" marginTop="20px">
        <Box>
          <Box bgcolor="primary.main" padding="7px 40px" borderRadius="10px 10px 0px 10px" textAlign="center">
            <Typography fontWeight="bold">Стажер</Typography>
            <Typography color="secondary.main">Уровень</Typography>
          </Box>
        </Box>
        <Box>
          <Box bgcolor="primary.main" padding="7px 20px" borderRadius="10px 10px 10px 0px" textAlign="center">
            <Typography fontWeight="bold">Опытный</Typography>
            <Typography color="secondary.main">Следующий уровень</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-around" width="80%" marginTop="20px">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </Box>

      <Box display="flex" flexDirection="row" marginTop="50px" width="90%">
        <img src={profileTasks} alt="tasks" />
        <Typography color="primary.main" fontWeight="bold" variant="h4" marginLeft="20px">
          Твои задачи
        </Typography>
      </Box>
      <Box width="90%">
        {mock.map((el) => (
          <Box
            key={el.id}
            bgcolor="primary.main"
            margin="10px 0px"
            borderRadius="10px"
            padding="10px"
            display="flex"
            alignItems="center"
          >
            <img src={gift} alt="gift" />
            <Box width="100%" textAlign="center">
              <Typography fontWeight="bold">{el.title}</Typography>
              {el.body}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Profile.displayName = 'Profile';

export default Profile;
