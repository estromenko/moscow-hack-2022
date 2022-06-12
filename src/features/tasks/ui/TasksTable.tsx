import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { tasksThunk } from '../model';

import TaskCard from './TaskCard';
import { Card, IPlacemark, MultiSelect, MultiSelectFormat } from '../../../shared/ui';

interface ITasksTable {
  activeTab: number;
}

const TasksTable: FC<ITasksTable> = ({ activeTab }) => {
  const dispatch = useAppDispatch();
  const [personName, setPersonName] = useState<MultiSelectFormat[]>([]);
  const [placemarks, setPlacemarks] = useState<IPlacemark[]>([]);
  const { tasks } = useAppSelector((state) => state.tasks);
  const names = [
    {
      name: '123123',
      id: 1,
    },
    {
      name: '11111',
      id: 2,
    },
    {
      name: '4444',
      id: 3,
    },
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

  const handleChangeSelect = (event: SelectChangeEvent<MultiSelectFormat[]>) => {
    const {
      target: { value },
    } = event;

    const lastValue = value[value.length - 1];
    if (Array.isArray(value) && typeof lastValue !== 'string') {
      let isDouble = 0;
      value.forEach((el) => {
        if (el.name === lastValue.name) {
          isDouble += 1;
        }
      });

      const filteredCategories = value.filter((el) => (el.name === lastValue.name ? isDouble !== 2 : true));
      setPersonName(filteredCategories);
    }
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
