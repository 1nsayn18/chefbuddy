import { Helmet } from 'react-helmet';
import { Box, Button, CardMedia } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Helmet>
        <title>Login | SignIn</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CardMedia
          component="svg"
          alt="Food Image"
          image="/static/images/welcome.svg"
          title="Food Image"
          sx={{
            height: '70%',
            width: '40%'
          }}
        />
        <Box sx={{ py: 2 }}>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Sign in now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
