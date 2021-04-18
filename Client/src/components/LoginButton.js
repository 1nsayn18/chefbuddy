import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <span>
        Logging In ...
      </span>
    )
  );
};

export default LoginButton;
