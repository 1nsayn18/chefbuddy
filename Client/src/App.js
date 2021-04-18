import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';
import LoginButton from './components/LoginButton';
import CurrentUser from './components/CurrentUser';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <CurrentUser />
      <Dashboard />
      <LoginButton />
    </>
  );
};

export default App;
