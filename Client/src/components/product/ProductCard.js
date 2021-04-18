import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  CardMedia
} from '@material-ui/core';

const ProductCard = ({ product, ...rest }) => {
  const arr = ['foodImage', 'foodImage-2', 'foodImage-3'];
  const foodImg = arr[Math.floor(Math.random() * arr.length)];
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.name}
        </Typography>
        <CardMedia
          component="img"
          alt="Food Image"
          height="140"
          image={`/static/images/${foodImg}.jpg`}
          title="Food Image"
          sx={{
            padding: 1
          }}
        />
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
          sx={{
            pt: 3,
            overflowX: 'scroll'
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
