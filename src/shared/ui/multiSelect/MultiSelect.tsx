import React, { FC } from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import { MultiSelectFormat } from './types';

interface IMultiSelect {
  header: string;
  names: MultiSelectFormat[];
  currentValue: MultiSelectFormat[];
  handleChange: (event: SelectChangeEvent<MultiSelectFormat[]>) => void;
}

const MultiSelect: FC<IMultiSelect> = ({ header, names, currentValue, handleChange }) => {
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // eslint-disable-next-line no-shadow
  const getStyles = (name: string, personName: readonly MultiSelectFormat[], theme: Theme) => {
    const namesList = personName.map((el) => el.name);
    return {
      fontWeight:
        namesList.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel>{header}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={currentValue}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value: MultiSelectFormat) => (
              <Chip key={value.id} label={value.name} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          // @ts-ignore
          <MenuItem key={name.id} value={name} style={getStyles(name.name, currentValue, theme)}>
            {name.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;
