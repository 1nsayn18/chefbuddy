import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import {
  Box, Container, Grid
} from '@material-ui/core';
import ProductListToolbar from '../components/product/ProductListToolbar';
import EachDishItem from '../components/EditDishItem';

const Dishes = () => {
  const [dishes, setdishes] = useState([
    {
      _id: null,
      name: '',
      description: ''
    }
  ]);
  useEffect(async () => {
    const data = await axios.get('/dishes').then((res) => res.data);
    setdishes(data);
  }, [null]);
  return (
    <>
      <Helmet>
        <title>Dishes | Chef Buddy</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {dishes.map((product) => (
                // eslint-disable-next-line no-underscore-dangle
                <EachDishItem key={product._id} product={product} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Dishes;
