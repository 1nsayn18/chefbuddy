import {
  Box,
  Button,
} from '@material-ui/core';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from 'react-router-dom';

const ProductListToolbar = (props) => {
  const location = useLocation();
  const href = 'create';
  matchPath(
    {
      path: href,
      end: false
    },
    location.pathname
  );

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button color="primary" variant="contained" component={RouterLink} to={href}>
          Add Dish
        </Button>
      </Box>
    </Box>
  );
};

export default ProductListToolbar;
