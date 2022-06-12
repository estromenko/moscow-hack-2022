import React, { FC, useState, SyntheticEvent } from 'react';
import { TasksTable } from '../../features/tasks';
import { Typography, Box, Tab, Tabs } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { MultiSelect } from '../../shared/ui';

const Tasks: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" padding="0 6px 0 30px" boxSizing="border-box">
        <Typography color="primary.main" fontSize="30px" fontWeight="700">
          Задания
        </Typography>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab label="Список" />
          <Tab label="Карта" />
        </Tabs>
      </Box>
      <TasksTable />
    </>
  );
};

export default Tasks;
