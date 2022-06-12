import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { tasksThunk } from '../model';

import TaskCard from './TaskCard';
import { Card, IPlacemark, MultiSelect } from '../../../shared/ui';

interface ITasksTable {
  activeTab: number;
}

const TasksTable: FC<ITasksTable> = ({ activeTab }) => {
  const dispatch = useAppDispatch();
  const [personName, setPersonName] = useState<string[]>([]);
  const [placemarks, setPlacemarks] = useState<IPlacemark[]>([]);
  const { tasks } = useAppSelector((state) => state.tasks);
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  useEffect(() => {
    dispatch(tasksThunk());
  }, []);

  useEffect(() => {
    const filteredPlacemarks: IPlacemark[] = tasks.map((el) => ({
      name: el.address,
      coord: [Number(el.cords.lon), Number(el.cords.lat)],
    }));
    setPlacemarks((prev) => [...prev, ...filteredPlacemarks]);
  }, [tasks]);

  const handleChangeSelect = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box display="flex" flexDirection="column" gap="10px" marginTop="30px">
      <Box display="flex" justifyContent="space-between" padding="0 6px 0 30px" boxSizing="border-box">
        <MultiSelect header="Тэг" names={names} currentValue={personName} handleChange={handleChangeSelect} />
      </Box>
      {activeTab === 0 && (
        <Box display="flex" flexDirection="column" gap="10px" padding="0 6px 0 30px" boxSizing="border-box">
          {tasks.map((el) => (
            <TaskCard description={el.description} header={el.name} street={el.address} />
          ))}
        </Box>
      )}
      {activeTab === 1 && (
        <>
          <Card placemarks={placemarks} setPlacemarks={setPlacemarks} />
          <Box>
            {placemarks.map((el) => (
              <p>{el.name}</p>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

TasksTable.displayName = 'TasksTable';

export default TasksTable;
