import React from 'react';
import { Box, Typography } from '@mui/material';

const RatingBox = (props: { image: string; username: string; hours: string }) => {
  const { image, username, hours } = props;

  return (
    <Box
      borderRadius="5px"
      bgcolor="primary.main"
      padding="10px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="90%"
      marginBottom="5px"
    >
      <img src={image} alt="crown" />
      <Typography fontWeight="bold">{username}</Typography>
      <Box bgcolor="black" borderRadius="5px">
        <Typography color="primary.main" padding="3px 20px">
          {hours}
        </Typography>
      </Box>
    </Box>
  );
};

RatingBox.displayName = 'RatingBox';

export default RatingBox;
