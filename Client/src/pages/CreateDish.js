import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import axios from 'axios';

const CreateDish = () => {
  const dishName = useRef(null);
  const dishDesc = useRef(null);
  const submitDish = async () => {
    const data = {
      name: dishName.current.children[1].children[0].value,
      description: dishDesc.current.children[1].children[0].value
    };
    const res = await axios.post('/dishes/create', data);
    console.log(res);
  };
  return (
    <>
      <Helmet>
        <title>Create a Dish</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              name: '',
              description: ''
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required('Dish name is required')
            })}
            onSubmit={() => submitDish()}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Create a new Dish
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Dish name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                  ref={dishName}
                />
                {/* <Button variant="contained" component="label">
                  Upload File
            </Button> */}
                <TextField
                  error={Boolean(touched.description && errors.description)}
                  fullWidth
                  helperText={touched.description && errors.description}
                  label="Description"
                  margin="normal"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  variant="outlined"
                  ref={dishDesc}
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Create Dish
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default CreateDish;
