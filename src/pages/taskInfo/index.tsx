import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { addUserToTask, getOneByIdTask, ICityPointResponse } from '../../shared/api';
import { useAppSelector } from '../../redux/hooks';

import taskInfoImage from '../../assets/taskInfo1.png';
import taskInfoImage2 from '../../assets/taskInfo2.png';

const TaskInfo: FC = () => {
  const navigate = useNavigate();
  const { tasks } = useAppSelector((state) => state.tasks);
  const userId = useAppSelector((state) => state.auth.id);
  const { id } = useParams();
  const [taskInfo, setTaskInfo] = useState<ICityPointResponse | null>(null);
  const startDate = new Date(taskInfo?.dateStart || '').toDateString();
  const endDate = new Date(taskInfo?.dateEnd || '').toDateString();
  const task = tasks.find((el) => el.id === Number(id));
  // @ts-ignore
  const users = task?.users.find((el) => el.id === userId);

  const handleClickButton = async () => {
    if (id && taskInfo?.id) {
      await addUserToTask(Number(userId), taskInfo?.id);
      navigate('/home');
    }
  };

  const initData = async () => {
    const { data } = await getOneByIdTask(Number(id));

    setTaskInfo(data);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Box padding="10px">
      <Box display="flex" justifyContent="center" boxSizing="border-box">
        <Typography color="primary.main" fontSize="30px" fontWeight="700">
          Задание #{id}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="10px">
        <Box padding="4px" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
          <Typography fontSize="12px" fontWeight="700">
            {taskInfo?.name}
          </Typography>
          <Typography fontSize="10px" fontWeight="400">
            название
          </Typography>
        </Box>
        <Box gap="5px" display="flex">
          <Box padding="4px" flex="1" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
            <Typography fontSize="12px" fontWeight="700">
              {taskInfo?.time} ч
            </Typography>
            <Typography fontSize="10px" fontWeight="400">
              время
            </Typography>
          </Box>
          <Box padding="4px" flex="1" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
            <Typography fontSize="12px" fontWeight="700">
              {taskInfo?.difficultId?.name || 'Легко'}
            </Typography>
            <Typography fontSize="10px" fontWeight="400">
              сложность
            </Typography>
          </Box>
        </Box>
        <Box gap="5px" display="flex">
          <Box padding="4px" flex="1" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
            <Typography fontSize="12px" fontWeight="700">
              {startDate}
            </Typography>
            <Typography fontSize="10px" fontWeight="400">
              начало
            </Typography>
          </Box>
          <Box padding="4px" flex="1" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
            <Typography fontSize="12px" fontWeight="700">
              {endDate}
            </Typography>
            <Typography fontSize="10px" fontWeight="400">
              конец
            </Typography>
          </Box>
        </Box>
        <Box padding="4px" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
          <Typography fontSize="12px" fontWeight="700">
            {taskInfo?.description}
          </Typography>
          <Typography fontSize="10px" fontWeight="400">
            описание
          </Typography>
        </Box>
        <Box padding="4px" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px">
          <Typography fontSize="12px" fontWeight="700">
            {taskInfo?.address}
          </Typography>
          <Typography fontSize="10px" fontWeight="400">
            адрес
          </Typography>
        </Box>
        <Box padding="4px" display="flex" flexDirection="column" bgcolor="primary.main" borderRadius="5px" gap="5px">
          {taskInfo?.categories.map((el) => (
            <Box border="1px solid black" borderRadius="15px" display="flex" justifyContent="center" padding="4px">
              <Typography>{el.name}</Typography>
            </Box>
          ))}
          <Typography fontSize="10px" fontWeight="400">
            категории
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          {users?.id ? (
            <img src={taskInfoImage2} alt="красивый кролик" />
          ) : (
            <img src={taskInfoImage} alt="красивый кролик" />
          )}
        </Box>
        {!users?.id ? (
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
              onClick={handleClickButton}
            >
              <Typography color="primary.main">Взять задание</Typography>
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

TaskInfo.displayName = 'TaskInfo';

export default TaskInfo;
