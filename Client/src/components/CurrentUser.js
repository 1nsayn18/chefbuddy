import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const globals = {
  User: {
    name: '',
    given_name: '',
    family_name: '',
  }
};
const CurrentUser = () => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      globals.User = user;
      Object.freeze(globals);
    }
  }, []);

  return <> </>;
};

export default CurrentUser;
export { globals };
