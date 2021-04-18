// import { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
// import { globals } from '../CurrentUser';

// 1 bug here
const defaultUser = {
  avatar: '',
  city: 'no city',
  country: 'no country',
  jobTitle: 'no job',
  name: 'No NAME',
  timezone: 'no time zone'
};

const AccountProfile = (props) => {
  const user = defaultUser;
  // const [user, setUser] = useState(defaultUser);
  // useEffect(() => {
  //   setUser({ avatar: globals.User.picture });
  // }, []);
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountProfile;
