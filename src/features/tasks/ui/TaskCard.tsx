import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import milk from '../../../assets/milk.png';

interface ITasksCard {
  header: string;
  description: string;
  street: string;
}

const TaskCard: FC<ITasksCard> = ({ description, header, street }) => {
  return (
    <Box
      bgcolor="primary.main"
      borderRadius="5px"
      display="flex"
      flexDirection="column"
      width="100%"
      padding="10px"
      boxSizing="border-box"
    >
      <Box display="flex" alignItems="center">
        <img src={milk} alt="milk" />
        <Box width="100%" flexDirection="column">
          <Typography fontSize="16px" fontWeight="700">
            {header}
          </Typography>
          <Typography fontSize="10px" fontWeight="400">
            {description}
          </Typography>
        </Box>
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="spaceBetween">
        <Typography fontSize="12px" fontWeight="400">
          {street}
        </Typography>
      </Box>
    </Box>
  );
};

TaskCard.displayName = 'TaskCard';

export default TaskCard;
