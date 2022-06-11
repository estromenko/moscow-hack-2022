import React from 'react';
import { Container } from '../shared/ui';
import { Box } from '@mui/material';

import homeImage from '../assets/home.png';
import tasksImage from '../assets/tasks.png';
import giftImage from '../assets/gift.png';
import ratingImage from '../assets/rating.png';
import settingsImage from '../assets/settings.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box bgcolor="primary.main" display="flex" flexDirection="row" justifyContent="space-around" padding="10px">
          <Link to="/home">
            <img src={homeImage} alt="home" />
          </Link>
          <Link to="/tasks">
            <img src={tasksImage} alt="tasks" />
          </Link>
          <Link to="/gift">
            <img src={giftImage} alt="gift" />
          </Link>
          <Link to="/rating">
            <img src={ratingImage} alt="rating" />
          </Link>
          <Link to="/settings">
            <img src={settingsImage} alt="settings" />
          </Link>
        </Box>
      </Container>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
