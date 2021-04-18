import { Helmet } from 'react-helmet';
import {
  Box, Container, Grid, Typography
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import ProductCard from '../components/product/ProductCard';

const Dashboard = () => {
  const [dishes, setdishes] = useState([
    {
      _id: null,
      name: '',
      description: ''
    }
  ]);
  const { isAuthenticated } = useAuth0();
  useEffect(async () => {
    const data = await axios.get('/dishes').then((res) => res.data);
    console.log(data, dishes, setdishes);
    setdishes(data);
  }, [null]);
  return (
    <>
      <Helmet>
        <title>Dashboard | Chef Buddy</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        {isAuthenticated ? (
          <>
            <Typography align="center" color="textPrimary" variant="h3">
              List of all the Dishes
            </Typography>
          </>
        ) : (
          <>
            <Typography align="center" color="textPrimary" variant="h3">
              Sign in to Edit Dishes
            </Typography>
          </>
        )}

        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {dishes.map((product) => (
                // eslint-disable-next-line no-underscore-dangle
                <Grid item key={product._id} lg={4} md={6} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
