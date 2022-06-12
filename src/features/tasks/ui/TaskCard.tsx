import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import milk from '../../../assets/milk.png';

interface ITasksCard {
  header: string;
  description: string;
  street: string;
  id: number;
}

const TaskCard: FC<ITasksCard> = ({ description, header, street, id }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <Box
      bgcolor="primary.main"
      borderRadius="5px"
      display="flex"
      flexDirection="column"
      width="100%"
      padding="10px"
      boxSizing="border-box"
      onClick={handleRedirect}
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
