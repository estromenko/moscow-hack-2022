import React from 'react';
import { Container } from '../shared/ui';
import { Box } from '@mui/material';

import homeImage from '../assets/home.png';
import tasksImage from '../assets/tasks.png';
import giftImage from '../assets/gift.png';
import ratingImage from '../assets/rating.png';
import profileImage from '../assets/profile.png';
import { FooterIcon } from '../shared/ui/footerIcon';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box bgcolor="primary.main" display="flex" flexDirection="row" justifyContent="space-around" padding="10px">
          <FooterIcon image={homeImage} label="главная" path="/" />
          <FooterIcon image={tasksImage} label="задания" path="/tasks" />
          <FooterIcon image={giftImage} label="мероприятия" path="/gifts" />
          <FooterIcon image={ratingImage} label="рейтинг" path="/rating" />
          <FooterIcon image={profileImage} label="профиль" path="/profile" />
        </Box>
      </Container>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
