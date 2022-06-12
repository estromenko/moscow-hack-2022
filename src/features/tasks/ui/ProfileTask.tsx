import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

interface IProps {
  id: number;
  image: string;
  data: {
    title: string;
    body: string;
  };
}

const ProfileTask: FC<IProps> = ({ id, image, data }) => {
  return (
    <Box
      key={id}
      bgcolor="primary.main"
      margin="10px 0px"
      borderRadius="10px"
      padding="10px"
      display="flex"
      alignItems="center"
    >
      <img src={image} alt="gift" />
      <Box width="100%" textAlign="center">
        <Typography fontWeight="bold">{data.title}</Typography>
        {data.body}
      </Box>
    </Box>
  );
};

ProfileTask.displayName = 'ProfileTask';

export default ProfileTask;
