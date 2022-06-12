import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { tasksThunk } from '../model';

import TaskCard from './TaskCard';
import { MultiSelect } from '../../../shared/ui';

const mock = [
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
  {
    id: 0,
    name: 'string',
    description: 'string',
    cords: {
      id: 0,
      lon: 0,
      lat: 0,
    },
    categories: [
      {
        id: 0,
        name: 'string',
        points: ['string'],
      },
    ],
    difficult: {
      id: 0,
      name: 'string',
      points: ['string'],
    },
    time: 0,
    address: 'string',
    dateStart: '2022-06-11T17:36:02.330Z',
    dateEnd: '2022-06-11T17:36:02.330Z',
  },
];

const TasksTable: FC = () => {
  const dispatch = useAppDispatch();
  const [personName, setPersonName] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <Box display="flex" flexDirection="column" gap="10px" padding="0 6px 0 30px" boxSizing="border-box">
        {mock.map((el) => (
          <TaskCard description={el.description} header={el.name} street={el.address} />
        ))}
      </Box>
    </Box>
  );
};

TasksTable.displayName = 'TasksTable';

export default TasksTable;
