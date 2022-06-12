import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface IProps {
  image: string;
  hours: string;
}

const ListViewBox: FC<IProps> = ({ children, image, hours }) => {
  return (
    <Box
      borderRadius="5px"
      bgcolor="primary.main"
      padding="10px 0px 10px 10px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="95%"
      marginBottom="5px"
    >
      <img src={image} alt="listviewbox" />
      {children}
      <Box bgcolor="black" borderRadius="5px 0px 0px 5px">
        <Typography color="primary.main" padding="3px 20px">
          {hours}
        </Typography>
      </Box>
    </Box>
  );
};

ListViewBox.displayName = 'ListViewBox';

export default ListViewBox;
