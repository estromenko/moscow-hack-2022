import React, { FC, useEffect, useState } from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCategoriesThunk, getTasksByCategoryIdThunk, getTasksByIdThunk, tasksThunk } from '../model';

import TaskCard from './TaskCard';
import { Card, IPlacemark } from '../../../shared/ui';
import { ICityPointResponse } from '../../../shared/api';

interface ITasksTable {
  activeTab: number;
  isCard: boolean;
}

const TasksTable: FC<ITasksTable> = ({ activeTab, isCard }) => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.auth);
  const [placemarks, setPlacemarks] = useState<IPlacemark[]>([]);
  const [tasksByDate, setTasksByDate] = useState<ICityPointResponse[]>([]);
  const { tasks, categories } = useAppSelector((state) => state.tasks);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    dispatch(getCategoriesThunk());

    if (isCard) {
      dispatch(tasksThunk());
    } else {
      dispatch(getTasksByIdThunk(id || 0));
    }
  }, [id]);

  useEffect(() => {
    if (!isCard) {
      setTasksByDate(tasks);
    }
  }, [activeTab, tasks]);

  useEffect(() => {
    if (isCard) {
      const filteredPlacemarks: IPlacemark[] = tasks.map((el) => ({
        name: el.address,
        coord: [Number(el.cords?.lon), Number(el.cords?.lat)],
      }));
      setPlacemarks(() => [...filteredPlacemarks]);
    }
  }, [tasks]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    dispatch(getTasksByCategoryIdThunk(event.target.value));
  };

  console.log('==========>tasks', tasks);
  return (
    <Box display="flex" flexDirection="column" gap="10px" marginTop="30px">
      <Box display="flex" justifyContent="space-between" padding="0 6px 0 30px" boxSizing="border-box">
        <Select value={category} label="Age" onChange={handleChangeSelect} fullWidth>
          {categories.map((categor) => (
            <MenuItem value={categor.id}>{categor.name}</MenuItem>
          ))}
        </Select>
      </Box>
      {isCard ? (
        <>
          {activeTab === 0 && (
            <Box display="flex" flexDirection="column" gap="10px" padding="0 6px 0 30px" boxSizing="border-box">
              {tasks.map((el) => (
                <TaskCard id={el.id} description={el.description} header={el.name} street={el.address} />
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
        </>
      ) : (
        <Box display="flex" flexDirection="column" gap="10px" padding="0 6px 0 30px" boxSizing="border-box">
          {tasksByDate.map((el) => (
            <TaskCard id={el.id} description={el.description} header={el.name} street={el.address} />
          ))}
        </Box>
      )}
    </Box>
  );
};

TasksTable.displayName = 'TasksTable';

export default TasksTable;
