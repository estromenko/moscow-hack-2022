import React, { FC, useState, useEffect } from 'react';
import { Box, Button, Modal, TextField, Typography, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useForm, Controller } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { ICityPointCreate } from '../../../shared/api';
import { createEventThunk, getCategoriesThunk } from '../model';

import { Card, IPlacemark, MultiSelect, MultiSelectFormat } from '../../../shared/ui';
import { getTime } from '../utils/getTime';

interface ITaskCreate {
  isOpen: boolean;
  handleClose: () => void;
}

interface IFormCollection {
  name: string;
  description: string;
  time: number;
  difficultId: number;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '500px',
};

const TaskCreate: FC<ITaskCreate> = ({ isOpen, handleClose }) => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.tasks);
  const { register, getValues, control } = useForm<IFormCollection>();
  const [placemarks, setPlacemarks] = useState<IPlacemark[]>([]);
  const [categoryIds, setCategoryIds] = useState<MultiSelectFormat[]>([]);
  const [dates, setDates] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDateChange = (newValue: Date | null, type: 'startDate' | 'endDate') => {
    setDates((prev) => ({
      ...prev,
      [type]: newValue,
    }));
  };

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
      setCategoryIds(filteredCategories);
    }
  };

  const handleSave = () => {
    const values = getValues();
    const coords = placemarks[0];
    const startDate = getTime(dates.startDate || new Date());
    const endDate = getTime(dates.endDate || new Date());
    const task: ICityPointCreate = {
      name: values.name,
      address: coords.name,
      description: values.description,
      dateEnd: `${endDate.year}-${endDate.month}-${endDate.day}`,
      dateStart: `${startDate.year}-${startDate.month}-${startDate.day}`,
      difficultId: values.difficultId,
      time: Number(values.time),
      categoryIds: categoryIds.map((el) => el.id),
      cords: {
        lon: coords.coord[0],
        lat: coords.coord[1],
      },
    };

    dispatch(createEventThunk(task));
    handleClose();
  };

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style} flexDirection="column">
        <Box display="flex" justifyContent="flex-start" flex="1" padding="8px">
          <Typography>Создать мероприятие</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          padding="8px"
          flex="3"
          overflow="scroll"
          maxHeight="350px"
          gap="10px"
        >
          <TextField placeholder="Имя" type="string" {...register('name')} />
          <TextField placeholder="Описание" type="string" {...register('description')} />
          <TextField placeholder="Время" type="number" {...register('time')} />
          <Box>
            <Card placemarks={placemarks} setPlacemarks={setPlacemarks} />
          </Box>
          <Controller
            name="difficultId"
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { onChange, onBlur, value } }) => (
              <Select onChange={onChange} value={value || 1} label="Сложность">
                <MenuItem value={1}>Легкая</MenuItem>
                <MenuItem value={2}>Средняя</MenuItem>
                <MenuItem value={3}>Сложная</MenuItem>
              </Select>
            )}
          />
          <MultiSelect
            header="Категории"
            names={categories}
            currentValue={categoryIds}
            handleChange={handleChangeSelect}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Начало"
              inputFormat="MM/dd/yyyy"
              value={dates.startDate}
              onChange={(event) => handleDateChange(event, 'startDate')}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Конец"
              inputFormat="MM/dd/yyyy"
              value={dates.endDate}
              onChange={(event) => handleDateChange(event, 'endDate')}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box flex="1" display="flex" justifyContent="space-between" padding="8px">
          <Button color="secondary" variant="contained" onClick={handleSave}>
            Сохранить
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Закрыть
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

TaskCreate.displayName = 'TaskCreate';

export default TaskCreate;
