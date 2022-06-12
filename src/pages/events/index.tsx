import React, { FC, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { TasksTable } from '../../features/tasks';

import './style.scss';

const Events: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" boxSizing="border-box">
        <Typography color="primary.main" fontSize="32px" fontWeight="700">
          История мероприятий
        </Typography>
      </Box>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="Предстоящие" />
        <Tab label="Актуальные" />
        <Tab label="Прошедшие" />
      </Tabs>
      <TasksTable activeTab={activeTab} isCard={false} />
    </>
  );
};

Events.displayName = 'Events';

export default Events;
