import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';

import useAuth from '@hooks/useAuth';
import errorMessage from '@utils/errorMessages';

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(255)
        .required('Password is required'),
    }),
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        await signIn({ email: values.email, password: values.password });
        navigate('/');
      } catch (error: unknown) {
        setStatus({ success: false });
        setErrors({ submit: errorMessage(error) });
        setSubmitting(false);
      }
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      {formik.errors.submit && (
        <Alert sx={{ mt: 2, mb: 3 }} severity="warning">
          {formik.errors.submit}
        </Alert>
      )}
      <TextField
        type="email"
        name="email"
        label="Email Address"
        value={formik.values.email}
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        sx={{ my: 1 }}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        sx={{ my: 1 }}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Sign in
      </Button>
      <Button component={Link} to="/auth/sign-up" fullWidth color="primary">
        Sign up
      </Button>
    </form>
  );
};

export default SignIn;
