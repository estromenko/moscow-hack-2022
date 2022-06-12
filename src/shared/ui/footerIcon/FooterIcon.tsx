import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

interface IProps {
  image: string;
  label: string;
  path: string;
}

const FooterIcon: FC<IProps> = ({ image, label, path }) => {
  return (
    <Link to={path}>
      <Box textAlign="center">
        <img src={image} alt="home" />
        <Typography fontSize="8px" marginTop="-5px" color="#BFBFBF">
          {label}
        </Typography>
      </Box>
    </Link>
  );
};

FooterIcon.displayName = 'FooterIcon';

export default FooterIcon;
