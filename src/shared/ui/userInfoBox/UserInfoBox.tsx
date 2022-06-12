import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface IProps {
  name: string;
  value: string;
}

const UserInfoBox: FC<IProps> = ({ name, value }) => {
  return (
    <Box bgcolor="primary.main" margin="10px 10px" borderRadius="5px" padding="7px 10px">
      <Typography fontWeight="bold" variant="h6">
        {name}
      </Typography>
      <Typography>{value}</Typography>
    </Box>
  );
};

UserInfoBox.displayName = 'UserInfoBox';

export default UserInfoBox;
