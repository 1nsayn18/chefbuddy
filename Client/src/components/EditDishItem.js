/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Badge } from '@material-ui/core';
import ProductCard from './product/ProductCard';

class EditDishItem extends Component {
  constructor(props) {
    super(props);
    this.delItem = this.delItem.bind(this);
    this.state = {
      product: this.props
    };
  }

  delItem() {
    const { product } = this.state;
    const data = {
      _id: product.product._id
    };
    console.log(data);
  }

  render() {
    const { product } = this.props;
    return (
      <Grid item lg={4} md={6} xs={12}>
        <Badge
          badgeContent="X"
          color="error"
          sx={{
            cursor: 'pointer',
            left: '100%',
            transform: 'scale(1.5)',
            marginTop: 2,
            zIndex: 10
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          onClick={this.delItem}
        />
        <ProductCard product={product} />
      </Grid>
    );
  }
}

export default EditDishItem;
