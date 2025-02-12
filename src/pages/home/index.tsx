import React, { FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import rabbit from '../../assets/profileRabbit.png';
import star from '../../assets/star.png';
import profileTasks from '../../assets/profileTasks.png';
import gift from '../../assets/gift.png';
import { ProfileTask } from '../../features/tasks/ui';
import { getTasksByIdThunk } from '../../features/tasks';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { name, id } = useAppSelector((state) => state.auth);
  const { tasks } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getTasksByIdThunk(id || 0));
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography color="primary.main" fontWeight="bold" variant="h4" textAlign="center">
        Привет, {name}!
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
        {tasks.map((el) => (
          <ProfileTask
            image={gift}
            id={el.id}
            data={{
              title: el.name,
              body: el.address,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

Home.displayName = 'Home';

export default Home;
