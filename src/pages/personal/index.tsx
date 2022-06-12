import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { UserInfoBox } from '../../shared/ui/userInfoBox';
import { IUserProfileResponse, userProfile } from '../../shared/api';

const Personal: FC = () => {
  const [profile, setProfile] = useState<IUserProfileResponse>({
    id: 0,
    name: 'не загрзился',
  });

  useEffect(() => {
    const load = async () => {
      const { data } = await userProfile();

      setProfile(data);
    };

    load();
  });

  return (
    <Box>
      <Typography color="primary.main" variant="h4" fontWeight="bold" margin="20px">
        Личные данные
      </Typography>
      <UserInfoBox name="Фамилия" value={profile.name.split(' ')[0]} />
      <UserInfoBox name="Имя" value={profile.name.split(' ')[1]} />
      <UserInfoBox name="Номер телефона" value="Пока нет" />
    </Box>
  );
};

Personal.displayName = 'Personal';

export default Personal;
