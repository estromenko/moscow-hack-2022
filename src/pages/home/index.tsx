import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import rabbit1 from '../../assets/rabbit1.png';
import rabbit2 from '../../assets/rabbit2.png';
import rabbit3 from '../../assets/rabbit3.png';
import helpImage from '../../assets/help.png';
import cup from '../../assets/cup.png';
import percent from '../../assets/percent.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userProfileThunk } from '../../redux/thunks/auth';

const Home = () => {
  const dispatch = useAppDispatch();
  const { id, name } = useAppSelector((state) => state.auth);

  const needToGetUserProfile = id === undefined || name === undefined;

  useEffect(() => {
    if (needToGetUserProfile) {
      dispatch(userProfileThunk());
    }
  }, [needToGetUserProfile]);

  return (
    <Box display="flex" flexDirection="column" gap="10px" justifyContent="center" boxSizing="border-box">
      <Typography variant="h4" color="primary" textAlign="center" marginTop="50px">
        Вы из Москвы?
        <br />
        Помогите своим!
      </Typography>

      <Box marginTop="100px" textAlign="center">
        <Button variant="contained" size="large">
          Стать волонтером!
        </Button>
      </Box>
      <Box marginTop="20px" marginBottom="20px" display="flex" flexDirection="row" justifyContent="space-around">
        <img src={rabbit1} alt="rabbit" />
        <Box>
          <Box bgcolor="primary.main" borderRadius="10px 10px 10px 0px" padding="15px" margin="5px">
            Я буду благодарен
          </Box>
          <Box>
            <Box bgcolor="primary.main" borderRadius="10px 10px 10px 0px" padding="15px" margin="5px">
              Смотри что у меня есть!
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-around" width="100%">
        <Box bgcolor="primary.main" borderRadius="10px" padding="15px">
          <img src={cup} alt="cup" />
        </Box>
        <Box bgcolor="primary.main" borderRadius="10px" padding="15px">
          <img src={percent} alt="percent" />
        </Box>
      </Box>

      <Box marginTop="20px" marginBottom="20px" display="flex" flexDirection="row" justifyContent="space-around">
        <img src={rabbit2} alt="rabbit" />
        <Box>
          <Box>
            <Box bgcolor="primary.main" borderRadius="10px 10px 10px 0px" padding="15px" margin="5px">
              Я тебе расскажу о наших ребятах
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid container columns={2}>
        <Grid item xs={1}>
          <Box bgcolor="primary.main" borderRadius="10px" padding="15px" margin="5px">
            <Typography textAlign="center" color="secondary.main" fontWeight="bold">
              23 345 348
            </Typography>
            <Typography textAlign="center">Часов</Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box bgcolor="primary.main" borderRadius="10px" padding="15px" margin="5px">
            <Typography textAlign="center" color="secondary.main" fontWeight="bold">
              3 450 034
            </Typography>
            <Typography textAlign="center">Волонтеров</Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box bgcolor="primary.main" borderRadius="10px" padding="15px" margin="5px">
            <Typography textAlign="center" color="secondary.main" fontWeight="bold">
              252 034
            </Typography>
            <Typography textAlign="center">Добрых дел</Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box bgcolor="primary.main" borderRadius="10px" padding="15px" margin="5px">
            <Typography textAlign="center" color="secondary.main" fontWeight="bold">
              45 034
            </Typography>
            <Typography textAlign="center">Организаций</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box marginTop="20px" marginBottom="20px" display="flex" flexDirection="row">
        <img src={rabbit3} alt="rabbit" />
        <Box>
          <Box>
            <Box bgcolor="primary.main" borderRadius="10px 10px 10px 0px" padding="15px" margin="5px">
              Смотри, что сделали наши ребята!
            </Box>
          </Box>
        </Box>
      </Box>

      <Box bgcolor="primary.main" borderRadius="10px" padding="15px" margin="5px" display="flex" flexDirection="row">
        <img src={helpImage} alt="help" className="help-image" />
        <Box marginLeft="10px">
          <Typography fontWeight="bold">Помощь детскому дому 341</Typography>
          Мы передали детскому дому номер 341 вещи, одежду, погуляли и посмотрели кино с детьми.
          <Box display="flex" flexDirection="row" justifyContent="space-around" width="100%">
            <Typography>г. Москва</Typography>
            <Typography>28 - 30 июн 2022 г.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Home.displayName = 'Home';

export default Home;
